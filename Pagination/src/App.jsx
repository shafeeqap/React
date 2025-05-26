import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; // Import your CSS file

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const recordsPerPage = 5;
  const pagesToShow = 3; // Number of pages to show in pagination

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const paginatedData = response.data.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
        setData(paginatedData);
        setNumberOfPages(Math.ceil(response.data.length / recordsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(numberOfPages, startPage + pagesToShow - 1);
  const displayedPages = [...Array(endPage - startPage + 1).keys()].map(num => startPage + num);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              Prev
            </button>
          </li>
          {displayedPages.map((number) => (
            <li className={`page-item ${currentPage === number ? "active" : ""}`} key={number}>
              <button className="page-link" onClick={() => changeCurrentPage(number)}>
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
