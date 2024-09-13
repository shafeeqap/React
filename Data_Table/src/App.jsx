import { data } from "./assets/data";
import DataTable from "react-data-table-component";
import "./App.css";
import { useState } from "react";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Director",
    selector: (row) => row.director,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "black",
      color: "white",
      fontSize: "17px",
      fontWeight: "bolder",
    },
  },
};




const App = () => {
  const [records, setRecords] = useState(data);
  
  const handleChange = (e) => {
    let query = e.target.value;
    const newRecords = data.filter((item) => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setRecords(newRecords);
  };
  
  return (
    <div className="homeDiv">
      <div className="search">
        <h2>Movies List</h2>
        <input type="text" placeholder="Search By Title" onChange={handleChange}/>
      </div>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
      />
    </div>
  );
};

export default App;
