import React from "react";
import useGeceModu from "./hooks/geceModuAc"

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useGetData from "./hooks/useGetData";

const App = () => {
  const [ data ] = useGetData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true");
  const [ mode, setMode ] = useGeceModu(false);

  return (
    <div className={mode ? "dark-mode App" : "App"}>
      <Navbar geceModu={mode} setGeceModu={setMode} />
      <Charts coinData={data} />
    </div>
  );
};

export default App;
