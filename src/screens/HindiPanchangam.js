import React, { useState } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';


const HindiPanchangam = () => {

  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Read the Excel file and convert it to JSON with the specified dateNF
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event.target.result;
      const wb = XLSX.read(fileData, { type: 'binary', cellText: false, cellDates: true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const parsedData = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, dateNF: 'yyyy-mm-dd' });

      // Update the state with parsed data
      setParsedData(parsedData);
      
    };
    
    reader.readAsBinaryString(selectedFile); // Read the file as binary data
  };

  const handleUpload = () => {
     // Make an API call to the backend with the formatted data
     const URL = "https://backend.shubadinam.com/api/upload/hindi";
     axios.post(URL, { data: parsedData })
       .then((response) => {
         console.log('Data uploaded successfully!');
       })
       .catch((error) => {
         console.error('Error uploading data: ', error);
       });
   };

   const formatDate = (dateString) => {
    // dateString should be in the format "yyyy-mm-dd"
    const [year, month, day] = dateString.split('-');
    return `${year}-${month}-${day}`;
  };

return (
  <div>
  <div>
    <input type="file" onChange={handleFileChange} />
  </div>
  <div>
    <button className="upload-btn" onClick={handleUpload}>Upload Data</button>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          {/*
         Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {parsedData.map((rowData, index) => (
          <tr key={index}>
            <td>{rowData[0]}</td>
            <td>{rowData[1]}</td>
            <td>{rowData[2]}</td>
            <td>{rowData[3]}</td>
            {/* Render more data columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>

  </div>
</div>

)
}
export default HindiPanchangam;