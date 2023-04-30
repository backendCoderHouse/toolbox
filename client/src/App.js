import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";

function App() {
  const [data, setData] = useState([]);

  const handleDownload = async (fileName) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/files/data?filename=${fileName}`
      );
      const data = await response.json();
      const formattedData = data.map((file) => {
        const { file: name, lines } = file;
        const formattedLines = lines.map((line) => {
          const { text, number, hex } = line;
          return { text, number, hex };
        });
        return { file: name, lines: formattedLines };
      });
      const csvContent = "data:text/csv;charset=utf-8," + "File,Text,Number,Hex\n"+ formattedData.map((file) => {
        const rows = file.lines.map((line) => {
          const {file, text, number, hex } = line;
          return `${file},${text},${number},${hex}`;
        });
        return `${file.file}\n${rows.join("\n")}`;
      }).join("\n\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };

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
      <Table bordered responsive>
        <thead>
          <tr>
            <th scope='col'>File Name</th>
            <th scope='col'>Text</th>
            <th scope='col'>Number</th>
            <th scope='col'>Hex</th>
            <th scope='col'>Save</th>
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
                <td><button onClick={() => handleDownload(file.file)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>Download
                </button></td>
              </tr>
            ))}
          </tbody>


        ))}
      </Table>
    </div>
  );
}





export default App;
