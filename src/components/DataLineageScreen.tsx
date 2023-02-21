import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

interface DataLineageProps {
  table: string;
  columns: ColumnInfo[];
}

interface ColumnInfo {
  table: string;
  column: string;
}

const DataLineageScreen: React.FC<DataLineageProps> = ({ table, columns }) => {
  // TODO: Implement data lineage graph data and rendering logic here
  const data = {
    nodes: [{ id: table }, ...columns.map((col) => ({ id: col.table + '.' + col.column }))],
    links: columns.map((col) => ({ source: col.table + '.' + col.column, target: table }))
  };

  const [graphData, setGraphData] = useState(data);
  const [graphConfig, setGraphConfig] = useState({
    node: {
      color: 'lightblue',
      size: 200,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'blue',
    },
    height: 500,
    width: 800,
    automaticRearrangeAfterDropNode: true, // Automatically re-arrange nodes after a node has been dropped
    collapsible: true // Allow nodes to be collapsed
  });
  return (
    <div>
      <h1>Data Lineage Graph</h1>
      <Graph
        id="data-lineage-graph"
        data={graphData}
        config={graphConfig}
      />
    </div>
  );
};

export default DataLineageScreen;

