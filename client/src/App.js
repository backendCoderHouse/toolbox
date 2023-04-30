import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/files/data');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table  bordered responsive>
        <thead>
          <tr>
            <th scope='col'>File Name</th>
            <th scope='col'>Text</th>
            <th scope='col'>Number</th>
            <th scope='col'>Hex</th>
          </tr>
        </thead>


        {data.map((file) => (
          
            <tbody>
              {file.lines.map((line, index) => (
                <tr key={index}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))}
            </tbody>
          
     
        ))}
      </Table>
    </div>
  );
}


    


export default App;
