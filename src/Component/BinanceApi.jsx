import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Coins } from "./Coins";
import { Pagination } from "./Pagination";
import { SiBinance } from "react-icons/si";
import "./style.css";

function BinanceApi() {
  //state to fetch the Array of objects from API
  const [data, setData] = useState([]);

  //set loading
  const [loading, setLodaing] = useState(false);

  //state to set a page and update the page
  const [currentPage, setCurrentPage] = useState(1);

  //number of table records to be show in each page
  const [coinsPerPage, setCoinsPerPage] = useState(15);

  //pagination limits
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const API = "https://api2.binance.com/api/v3/ticker/24hr";

  const getDataFromApi = async () => {
    setLodaing(true);
    await axios.get(API).then((promData) => {
      setData(promData.data);
      console.log(promData.data);
      setLodaing(false);
    });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  //get current coins data
  const indexOflastCoin = currentPage * coinsPerPage;
  console.log("indexOflastCoin " + indexOflastCoin);
  const indexOfFirstCoin = indexOflastCoin - coinsPerPage;
  console.log("indexOfFirstCoin " + indexOfFirstCoin);
  const currentPageCoins = data.slice(indexOfFirstCoin, indexOflastCoin);
  console.log("currentPageCoins " + currentPageCoins);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    if((currentPage - 1) % pageNumberLimit==0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    if(currentPage + 1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  return (
    <div>
      <h2 className="text-center">
        Crypto Coins <SiBinance />
      </h2>
      <div>
        <Coins data={currentPageCoins} loading={loading} />

        <Pagination
          coinsPerPage={coinsPerPage}
          totalCoins={data.length}
          paginate={paginate}
          paginatePrev={paginatePrev}
          paginateNext={paginateNext}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default BinanceApi;
