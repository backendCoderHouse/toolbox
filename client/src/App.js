import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const handleDownload = async (fileName) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/files/data?filename=${fileName}`
      );
      const data = await response.json();
      const formattedData = data.map((file) => {
        const { file: name, lines } = file;
        const formattedLines = lines.map((line) => {
          const { name, text, number, hex } = line;
          return { name, text, number, hex };
        });
        return { file: name, lines: formattedLines };
      });
      const csvContent = "data:text/csv;charset=utf-8," + "File,Text,Number,Hex\n" + formattedData.map((file) => {
        const rows = file.lines.map((line) => {
          const { name, text, number, hex } = line;
          return `${file.file},${text},${number},${hex}`;
        });
        return `${rows.join("\n")}`;
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

  const searcher = (e) => {
    setSearch(e.target.value)
  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/files/data');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);


  const results = !search ? data : data.filter((data) => data.file.toLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <div>
      <Navbar bg="danger" variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand color="primary">
            <>
            <img
              src={require('./logo.png')}
              height="30"
              className="d-inline-block align-top"
              alt="Toolbox"
            />
            {' '}
            <span className='m-5'> Technical Choice - FULL STACK </span>
            </>
            
            
          </Navbar.Brand>
        </Container>
      </Navbar>





      <div className='col-md-9 mx-auto text-center'>
        <div className='row mb-4 mt-4'>
          <div className='col-md-3'>
            <input value={search} onChange={searcher} type="text" placeholder='Search for filename' className='form-control' />
          </div>
        </div>

        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
              <th>Download</th>
            </tr>
          </thead>


          {results.map((file) => (

            <tbody>
              {file.lines.map((line, index) => (
                <tr key={index}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                  <td><button className='border-0' onClick={() => handleDownload(file.file)}  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                  </button></td>
                </tr>
              ))}
            </tbody>


          ))}
        </Table>
      </div>
    </div>
  );
}



export default App;
