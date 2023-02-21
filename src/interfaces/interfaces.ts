export interface Column {
  table: string;
  column: string;
}

export interface ParsedQuery {
  table: string;
  columns: Column[];
}
