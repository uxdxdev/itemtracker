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
      <div className="font-xsmall">
        Made by{" "}
        <a href="https://www.twitch.tv/individualcontributor" target="_blank">
          IndividualContributor
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
                  <li>Open the Google Sheet database using the link above</li>
                  <li>
                    Add a new sheet, or duplicate an existing one, and name it. The name you pick will be the page URL,
                    e.g. <strong>itemtracker.surge.sh/#/Sheet1</strong>
                  </li>
                  <li>
                    Add item names and image URLs to have them display on your page. Row order determines where your
                    image will be displayed in the grid
                  </li>
                  <li>Put any value in the "done" column to change the item background from red to green</li>
                  <li>
                    After creating your new sheet in the database refresh the browser on the homepage to see a link to
                    your new page
                  </li>
                </ol>
                <br />
                <div className="font-small">
                  <i>
                    Your page will update every ~10 seconds, so once you've updated the "done" column on your sheet it
                    will take ~10 seconds to see the item image background trun from red to green, or vice versa.
                  </i>
                </div>
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
