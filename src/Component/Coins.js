import React from "react";

export const Coins = ({ data, loading }) => {
  if (loading) {
    return <h2>loading</h2>;
  }

  const DisplayCoins = data.map((eachObj, idx) => {
    return (
      <tr>
        <td key={idx}>{idx + 1}</td>
        <td key={idx}>{eachObj.symbol}</td>
        <td key={idx}>{eachObj.askPrice}</td>
        {/* <td key={idx}>{eachObj.askQty}</td> */}
        {/* <td key={idx}>{eachObj.bidPrice}</td> */}
        {/* <td key={idx}>{eachObj.bidQty}</td> */}
        <td key={idx} >{eachObj.closeTime}</td>
        {/* <td key={idx} >{eachObj.count}</td> */}
        {/* <td key={idx} >{eachObj.firstId}</td> */}
        <td key={idx} >{eachObj.highPrice}</td>
        <td key={idx} >{eachObj.lastId}</td>
        <td key={idx} >{eachObj.lastPrice}</td>
        <td key={idx} >{eachObj.lastQty}</td>
        <td key={idx} >{eachObj.lowPrice}</td>
        <td key={idx} >{eachObj.openPrice}</td>
        <td key={idx} >{eachObj.openTime}</td>
        <td key={idx} >{eachObj.prevCloseTime}</td>
        <td key={idx} >{eachObj.priceChange}</td>
        <td key={idx} >{eachObj.priceChangePercent}</td>
        {/* <td key={idx} >{eachObj.quoteVolume}</td> */}
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
          <th>symbol</th>
          <th>askPrice</th>
          {/* <th>askQty</th>
          <th>bidPrice</th>
          <th>bidQty</th> */}
          <th>closeTime</th>
          {/* <th>count</th>
          <th>firstId</th> */}
          <th>highPrice</th>
          <th>lastId</th>
          <th>lastPrice</th>
          <th>lastQty</th>
          <th>lowPrice</th>
          <th>openPrice</th>
          <th>openTime</th>
          <th>prevCloseTime</th>
          <th>priceChange</th>
          <th>priceChangePercent</th>
           {/* <th>quoteVolume</th> */}
          {/* <th>volume</th> */}
          {/* <th>weightedAvgPrice</th> */}
        </tr>
      </thead>
      <tbody>{DisplayCoins}</tbody>
    </table>
  );
};
