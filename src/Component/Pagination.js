import React from "react";
import "./style.css";

//custom pagination implentation to reduce packages
export const Pagination = ({
  coinsPerPage,
  totalCoins,
  paginate,
  paginatePrev,
  paginateNext,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
}) => {
  //
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    //each of index contains number of pages
    pageNumbers.push(i);
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

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id="page-item"
          className={currentPage == number ? "active" : null}
        >
          <a href="!#" className="page-link" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li id="page-item" onClick={paginatePrev}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li id="page-item" onClick={paginateNext}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  return (
    <ul className="pageNumber">
      <li onClick={paginatePrev}>
        <button disabled={currentPage == pageNumbers[0] ? true : false}>
          prev
        </button>
      </li>
      {pageDecrementBtn}

      {renderPageNumbers}

      {pageIncrementBtn}

      <li onClick={paginateNext}>
        <button disabled={currentPage == pageNumbers[pageNumbers.length-1] ? true : false}>next</button>
      </li>
    </ul>
  );
};
