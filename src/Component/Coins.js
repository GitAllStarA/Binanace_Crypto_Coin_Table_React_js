import React from "react";
import Moment from "moment";
import {
  MdOutlineProductionQuantityLimits,
  MdPriceCheck,
} from "react-icons/md";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GiCoins } from "react-icons/gi";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { TbExchangeOff, TbPercentage } from "react-icons/tb";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
export const Coins = ({ data, loading }) => {
  if (loading) {
    return <h2>loading</h2>;
  }

  const DisplayCoins = data.map((eachObj, idx) => {
    let priceStatusValue = "";
    if (eachObj.highPrice > eachObj.lastPrice) {
      priceStatusValue = "wentUp";
    } else if (eachObj.highPrice == eachObj.lastPrice) {
      priceStatusValue = "noChange";
    } else if (eachObj.highPrice < eachObj.lastPrice) {
      priceStatusValue = "wentDown";
    }

    function priceStatusValueFunction(priceStatusValue) {
      if (priceStatusValue == "wentUp") {
        return <FaArrowUp />;
      } else if (priceStatusValue == "wentDown") {
        return <FaArrowDown />;
      } else if (priceStatusValue == "noChange") {
        return <TbExchangeOff />;
      }
    }

    function formatTwoDecimal(price) {
      if (price >= 1) {
        return "$" + Number(price).toFixed(2);
      } else {
        return "$" + price;
      }
    }

    return (
      <tr>
        <td key={idx}>{idx + 1}</td>
        <td key={idx}>{eachObj.symbol}</td>
        <td key={idx}>{formatTwoDecimal(eachObj.askPrice)}</td>
        <td key={idx}>{eachObj.askQty}</td>
        {/* <td key={idx}>{eachObj.bidPrice}</td> */}
        {/* <td key={idx}>{eachObj.bidQty}</td> */}
        {/* <td key={idx} >{eachObj.count}</td> */}
        {/* <td key={idx} >{eachObj.firstId}</td> */}
        <td key={idx}>
          {formatTwoDecimal(eachObj.highPrice)} /{" "}
          {formatTwoDecimal(eachObj.lowPrice)}
        </td>
        <td key={idx}>{priceStatusValueFunction(priceStatusValue)}</td>
        <td key={idx}>{eachObj.lastId}</td>
        <td key={idx}>{Moment(eachObj.openTime).format("LTS")}</td>
        <td key={idx}>
          <BsSunriseFill /> {formatTwoDecimal(eachObj.openPrice)} /{" "}
          <BsSunsetFill /> {formatTwoDecimal(eachObj.lastPrice)}
        </td>
        <td key={idx}>{Moment(eachObj.closeTime).format("LTS")}</td>
        <td key={idx}>{eachObj.lastQty}</td>
        <td key={idx}>{formatTwoDecimal(eachObj.prevClosePrice)}</td>
        <td key={idx}>{formatTwoDecimal(eachObj.priceChange)}</td>
        <td key={idx}>{eachObj.priceChangePercent}</td>
        {/* <td key={idx} >{eachObj.quoteVolume}</td> 
        {/* <td key={idx} >{eachObj.volume}</td> */}
        {/* <td key={idx} >{eachObj.weightedAvgPrice}</td>  */}
      </tr>
    );
  });

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>sno</th>
          <th>
            {" "}
            <GiCoins /> Crypto Coins
          </th>
          <th>
            {" "}
            <MdPriceCheck /> Ask Price
          </th>
          <th>
            {" "}
            <MdOutlineProductionQuantityLimits /> Ask Quantity
          </th>
          {/* <th>bidPrice</th> 
          <th>bidQty</th> */}
          {/* <th>count</th>
          <th>firstId</th> */}
          <th>
            {" "}
            <AiOutlineRise /> 24h High Price / <AiOutlineFall /> 24h Low Price
          </th>
          <th>Price Status</th>
          <th>Last Id</th>
          <th>
            {" "}
            <WiSunrise /> Open Time
          </th>
          <th>
            {" "}
            <BsSunriseFill /> Open Price / <BsSunsetFill /> Last Price
          </th>
          <th>
            {" "}
            <WiSunset /> Close Time
          </th>
          <th>Last Quantity</th>
          <th>Previous Close Price</th>
          <th>Price Change</th>
          <th>Price Change Percent <TbPercentage/> </th>
          {/* <th>quoteVolume</th> */}
          {/* <th>volume</th> */}
          {/* <th>weightedAvgPrice</th> */}
        </tr>
      </thead>
      <tbody>{DisplayCoins}</tbody>
    </table>
  );
};
