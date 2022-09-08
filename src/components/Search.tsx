import moment from "moment";
import React, { useState } from "react";
import './Search.css';


export default function StockData() {
  const [stock, setStock] = useState<any>(null);
  const [data, setdata] = useState<string>("");
  // const [counter, setCounter] = useState<number>(0);

  const handleOnChange = (event: any) => {
    setdata(event.target.value);
  }

  const handleOnClick = () => {
    if (!moment(data, "D-MMMM-YYYY", true).isValid()) {
      alert("Date format should be in d-mmmm-yyyy");
      return;
    }
    // setCounter(counter+1)
    getStock();
  }

  function getStock() {
     fetch("https://jsonmock.hackerrank.com/api/stocks?date=" + data)
      .then((response) => response.json())
      .then((jsonData) => {
        setStock(jsonData)
        setStock(jsonData.data)
      })
  };
  return (<>
    <div className="navstyle">
      <nav className="navbar navbar-dark bg-dark" >
        <div className="navtext">
          <b>Stock Data</b>
        </div>
      </nav>
    </div>
    <div className="inputstyle">
      <section className="sectionstyle">
        <input
          type="text"
          className="large"
          id="app-input"
          data-testid="app-input"
          value={data}
          onChange={handleOnChange}
        />
        <button
          className="buttonstyle"
          id="submit-button"
          data-testid="submit-button"
          onClick={handleOnClick}
        >
          Search
        </button>
      </section>
      {!stock ? (
        <div></div>
      ) : stock.length > 0 ? (
        stock.map((stock: any, index: any) => {
          return (
            <div className='ulstyle'>
              <ul
                id="stockData"
                data-testid="stock-data"
                key={index}
              >
                <li>Open: {stock.open}</li>
                <li>Close: {stock.close}</li>
                <li>High: {stock.high}</li>
                <li>Low: {stock.low}</li>
              </ul>
            </div>
          );
        })
      ) : (
        <div
          id="no-result"
          data-testid="no-result"
        >
          No Results Found
        </div>
      )}
    </div>
  </>
  );
}