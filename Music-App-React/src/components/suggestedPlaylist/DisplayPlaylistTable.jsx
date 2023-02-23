import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";


function DisplayPlaylistTable() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //     // Load the Excel file
  //     console.log("Loading Excel file...");
  //     const workbook = XLSX.readFile("menu.xlsx");
  //     console.log("File loaded:", workbook);

  //     // Extract the first sheet from the workbook
  //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  //     // Convert the sheet data to JSON format
  //     const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  //     // Set the data state to the JSON data

  //     // var reader = new FileReader();
  //     // reader.onload = function (e) {
  //     //     var data = e.target.result;
  //     //     let readedData = XLSX.read(data, { type: 'binary' });
  //     //     const wsname = readedData.SheetNames[0];
  //     //     const ws = readedData.Sheets[wsname];

  //     //     /* Convert array to json*/
  //     //     const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });

  //     //     console.log(dataParse);
  //     //     // setFileUploaded(dataParse);
  //     // };
  //     // reader.readAsBinaryString('menu.xlsx')


  //     setData(json);
  // }, []);

  return (
    <>
      <div>
        <h1>Excel File Reader</h1>
        
        {/* <table className="table-auto">    
        <thead>
          <tr>
            {data[0].map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
}

export default DisplayPlaylistTable;
