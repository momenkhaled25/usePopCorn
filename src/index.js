import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";

import "./index.css";
import App from "./App-v1";

// function Test() {
//   const [MoiveRating, setMoiveRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetMoiveRating={setMoiveRating}
//       />
//       <p>This Movies was rated {MoiveRating} star </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okey", "Good", "Very good"]}
      defaultRating={0}
    />
    <StarRating size={24} color="red" className="test" />

    <Test /> */}
  </React.StrictMode>
);
