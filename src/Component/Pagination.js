import React from "react";

//custom pagination implentation to reduce packages
export const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  //
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    //each of index contains number of pages
    pageNumbers.push(i);
    console.log("page number");
  }

  const loopnumbers = () => {
    return (
      <ul className="pagination" id="pageNumberSizeFix">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return <nav>{loopnumbers()}</nav>;
};
