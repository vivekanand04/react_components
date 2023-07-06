//method 1
// import React from "react";
// import ReactDOM from "react-dom";
// function Heading() {
//   return <h1>My Favourite Foods</h1>;
// } //Heading should be in pascal case
// ReactDOM.render(
//   <div>
//     <Heading></Heading>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
// <Heading></Heading> can be written as <heading /> also

//method 2  for doing same thing that method 1 has done
// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading.jsx";
// import List from "./List.jsx";
// ReactDOM.render(
//   <div>
//     <Heading></Heading>
//     <List />
//   </div>,
//   document.getElementById("root")
// );
//so for printing h1 and list alag alag .jsx file banana pada

//method 3
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<app />, document.getElementById("root"));
