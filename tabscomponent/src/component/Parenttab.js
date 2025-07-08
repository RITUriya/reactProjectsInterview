import React, { useState } from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";

const Parenttab = () => {
  const [tabs, setTabs] = useState([]);
  return (
    <div>
      <TabOne />
      <TabTwo />
      <TabThree />
    </div>
  );
};

export default Parenttab;
