import { Column, ParsedQuery } from '../interfaces/interfaces';

export function parseSqlQuery(query: string): ParsedQuery {
  const tableRegex = /FROM\s+([\w\d_]+)/i;
  const columnRegex = /SELECT\s+([\w\d_,\s]+)/i;

  const tableMatch = tableRegex.exec(query);
  const columnMatch = columnRegex.exec(query);

  if (!tableMatch) {
    throw new Error('Invalid SQL query: no FROM clause');
  }

  const table = tableMatch[1];

  if (!columnMatch) {
    return { table, columns: [] };
  }

  const columns = columnMatch[1]
    .split(',')
    .map((c) => ({ table, column: c.trim() }));

  return { table, columns };
}


