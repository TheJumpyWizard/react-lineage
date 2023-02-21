import React, { useState } from 'react';
import { parseSqlQuery } from '../services/sqlParser';
import DataLineageScreen from './DataLineageScreen';
import { ParsedQuery } from '../interfaces/interfaces';

const MainScreen: React.FC = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [parsedQuery, setParsedQuery] = useState<ParsedQuery | null>(null);

  const handleParseClick = () => {
    try {
      const parsed = parseSqlQuery(sqlQuery);
      setParsedQuery(parsed);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unknown error occurred.');
      }
    }
  }

  const handleSqlQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSqlQuery(event.target.value);
  }

  return (
    <div>
      <h1 className="header">SQL Parser</h1>
      <div className="flex justify-center items-center flex-wrap">
        <textarea
          value={sqlQuery}
          onChange={handleSqlQueryChange}
          placeholder="Enter SQL query here"
          className="border-blue-500 border-2 p-2 rounded-md w-96 text-center mr-4"
        />
        <button
          onClick={handleParseClick}
          className="bg-gradient-to-r from-blue-400 to-gray py-2 px-4 text-white rounded-md"
        >
          Parse
        </button>
      </div>
      <br />
      <br />
      {parsedQuery && (
        <div>
          <h2>Parsed Query</h2>
          <code>{parsedQuery.table}: {parsedQuery.columns.map((col) => col.table + '.' + col.column).join(', ')}</code>
          <br />
          <br />
          <DataLineageScreen
            table={parsedQuery.table}
            columns={parsedQuery.columns}
          />
        </div>
      )}
    </div>
    
  );
};

export default MainScreen;
