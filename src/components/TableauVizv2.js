import React, {useRef, useEffect} from "react";


const TableauViz = (props) => {  

return (
  <main
    class="embed-container"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <tableau-viz
      id="tableau-viz"
      src="https://people-insights-tableau.autodesk.com/views/HeadcountDashboard_16794462575700/Summary"
      width="1400"
      height="790"
      hide-tabs
      toolbar="bottom"
    ></tableau-viz>
  </main>
);
};

export default TableauViz;