import React, {useRef, useEffect} from "react";


const TableauViz = (props) => {  

return (
  <main
    class="embed-container"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <script
      type="text/javascript"
      src="https://people-insights-tableau.autodesk.com/javascripts/api/viz_v1.js"
    ></script>
    <div class="tableauPlaceholder" style={{width: "1400px", height: "777px;"}}>
      <object
        class="tableauViz"
        width="1400"
        height="777"
        style={{display:"none"}}
      >
        <param
          name="host_url"
          value="https%3A%2F%2Fpeople-insights-tableau.autodesk.com%2F"
        />
        <param name="embed_code_version" value="3" />{" "}
        <param name="site_root" value="" />
        <param name="name" value={props.val} />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="showAppBanner" value="false" />
      </object>
    </div>
  </main>
);

// return (
//   <main
//     class="embed-container"
//     style={{ display: "flex", justifyContent: "center" }}
//   >
//     <script
//       type="text/javascript"
//       src="https://people-insights-tableau.autodesk.com/javascripts/api/viz_v1.js"
//     ></script>
//     <div
//       class="tableauPlaceholder"
//       style={{ width: "1400px", height: "777px"}}
//     >
//       <object
//         class="tableauViz"
//         width="1400"
//         height="777"
//         style={{ display: "none" }}
//       >
//         <param
//           name="host_url"
//           value="https%3A%2F%2Fpeople-insights-tableau.autodesk.com%2F"
//         />
//         <param name="embed_code_version" value="3" />
//         <param name="site_root" value="" />
//         <param
//           name="name"
//           value={props.val}
//         />
//         <param name="tabs" value="no" />
//         <param name="toolbar" value="yes" />
//         <param name="showAppBanner" value="false" />
//       </object>
//     </div>
//   </main>
// );
};

export default TableauViz;