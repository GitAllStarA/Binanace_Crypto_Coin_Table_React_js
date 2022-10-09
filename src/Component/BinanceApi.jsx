import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Coins } from "./Coins";
import { Pagination } from "./Pagination";

function BinanceApi() {
  const [data, setData] = useState([]);
  const [loading, setLodaing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(100);

  const API = "https://api2.binance.com/api/v3/ticker/24hr";

  const getDataFromApi = async () => {
    setLodaing(true);
    await axios.get(API).then((promData) => {
      setData(promData.data);
      //console.log(promData.data);
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

  return (
    <div className="container">
      <h2 className="text-center">Crypto Coins</h2>
      <div className="row">
        <Coins data={currentPageCoins} loading={loading} />
        <Pagination coinsPerPage={coinsPerPage} totalCoins={data.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default BinanceApi;
