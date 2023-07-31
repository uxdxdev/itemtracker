import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AllItems from "./AllItems";
import { SHEET_DATA } from "./constants";
import "./styles.css";
import Bosses from "./Bosses";

function App() {
  const [data, setData] = useState<{ sheets: [{ properties: { title: string } }] }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(SHEET_DATA)
      .then((res) => res.json())
      .then((formattedData) => setData(formattedData))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) return;

  return (
    <>
      <div>
        Item Tracker{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1_WhFuaqwixhp0ya8oOV_ECFGj1QhdQtukZq3P_VjYO8/edit#gid=446439425"
          target="_blank"
        >
          database (Google Sheet)
        </a>
      </div>
      <br />
      <Routes>
        <Route path={`/test`} element={<Bosses />} />
        <Route
          path="/"
          element={
            <>
              <div>
                How to use this thing:
                <ol>
                  <li>Request access to edit the Google Sheet</li>
                  <li>
                    Add a new sheet page. The name you pick will be the page URL, e.g.{" "}
                    <strong>itemtracker.surge.sh/#/sheetname</strong>
                  </li>
                  <li>Add item names and image URLs to have them display on your page</li>
                  <li>Put any value in the "done" column to change the item background from red to green</li>
                </ol>
                <i>See other sheets in the database for the correct formatting</i>
              </div>
              <br />
              {data?.sheets.map((entry, index) => {
                if (entry.properties.title === "test") return <div key={index}></div>;
                return (
                  <div key={index}>
                    <Link to={`/${entry.properties.title}`}>{entry.properties.title}</Link>
                  </div>
                );
              })}
            </>
          }
        />
        {data?.sheets?.map((entry, index) => {
          return (
            <Route
              key={index}
              path={`/${entry.properties.title}`}
              element={<AllItems sheetName={entry.properties.title} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
