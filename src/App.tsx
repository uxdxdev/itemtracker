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
    <Routes>
      <Route path={`/test`} element={<Bosses />} />
      {data?.sheets?.map((entry, index) => {
        return (
          <Route
            key={index}
            path={`/${entry.properties.title}`}
            element={<AllItems sheetName={entry.properties.title} />}
          />
        );
      })}
      <Route
        path="/"
        element={
          <>
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
    </Routes>
  );
}

export default App;
