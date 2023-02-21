# React Lineage
###### React Lineage is a data lineage tool that analyzes SQL queries to determine which tables and columns are being used in a query. It generates a graph that shows how tables and columns are related to one another, giving users a clear understanding of their data dependencies.

### Installation
1. To run this project, you must have Node.js installed. 
2. Clone the repository and navigate to the project folder. 
3. Run ``` npm install ``` to install the dependencies.

### Usage
1. To start the app, run ``` npm start ```.
2. Navigate to http://localhost:3000 in your web browser.
3. Enter a SQL query (ex: ``` SELECT username, name, address FROM userTable WHERE condition; ```) in the text area provided.
4. Click the "Parse" button. 
5. If the query is valid, a data lineage graph will be generated.

### Technologies
* React
* TypeScript
* Node.js
* D3.js