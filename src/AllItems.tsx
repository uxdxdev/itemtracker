import { useEffect, useState } from "react";

import { doneStyle, SHEET_ID, API_KEY } from "./constants";
import { responseValues } from "./utils";
import "./styles.css";

function fetchData(sheetName: string) {
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`)
    .then((res) => res.json())
    .then((json) => responseValues(json));
}

function AllItems({ sheetName }: { sheetName: string }) {
  const [data, setData] = useState<Record<string, string>[]>();
  const [numberPerRow, setNumberPerRow] = useState(10);

  useEffect(() => {
    // fetch on load
    fetchData(sheetName).then((formattedData) => setData(formattedData));

    // fetch every x seconds thereafter
    const interval = setInterval(() => {
      fetchData(sheetName).then((formattedData) => setData(formattedData));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [sheetName]);

  return (
    <>
      <div className="mb-1">
        <label htmlFor="numberPerRow">Number of items per row</label>
        <input
          className="ml-1"
          type="number"
          min="1"
          id="numberPerRow"
          name="numberPerRow"
          value={numberPerRow}
          onChange={(e) => {
            setNumberPerRow(+e.target.value);
          }}
        />
      </div>
      <div style={{ width: `${numberPerRow * 50}px` }} className="flex flex-wrap">
        {data?.map((entry, index) => {
          const name = entry["name"];
          const imageUrl = entry["imageUrl"];
          const done = entry["done"];
          return (
            <img
              key={index}
              width="50px"
              title={name}
              className=""
              src={imageUrl}
              style={{ backgroundColor: done && doneStyle }}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllItems;
