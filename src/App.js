// import React from "react";
// import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// const heading = React.createElement("div",
// {
//     id: "title",
//     key: "h1"
// },
// [
//     React.createElement("h1",
//     {
//         id: "title",
//         // key: "h1"
//     }, "Home"),
//     React.createElement("h1",
//     {
//         id: "title",
//         // key: "h1"
//     }, "About us"),
//     React.createElement("h1",
//     {
//         id: "title",
//         // key: "h1"
//     }, "Contact us")
// ]);
// const heading2 = React.createElement("h2" ,
// {
//     id: "title",
//     key:"h2"
// }
//  , "Heading two from parcel")

// const container = React.createElement("div" ,
// {
//     id:"container"
// }
//  , [heading , heading2])

// const Heading  = (
//   <h1 id="title" key="head1">
//     Namaste React Functional Component from heading
//   </h1>
// );

// const Title = () => (
//   <h1 id="title" key="head1">
//     Namaste React Functional Component from Title
//   </h1>
// );

// * React-Components
// - *Functional Component --New I'will use the this most of the time
// Funcional component start with always with Capital letter it is not mandantory u can use small letters but just good practice
// - *Class Based Component  -- Old -- We will learn thi also

// const Headercomp = () => {
//   return (
//     // u can write return or not
//     <div>
//       {Heading}
//       {/* {console.log("We can write any js inside the {}")}  */}
//       <Title/>
//       <h1>Namaste React Functional Component</h1>
//       <h1>Namaste React Functional Component 2</h1>
//     </div>
//   );
// };


//  *What is JSX (Javascript XML)
// JSX = React.createContext => Object => Html(Dom)

// const JsX = (
//   <h1 id="title" className="title" key="h1">
//     Hello World
//   </h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element into a root

// root.render(<Headercomp />); // use for the reder the function in the <>
// root.render(heading);

// Array.map() //poyfill is just covert modern code into older code
// function mymap ()// this

// * babel is just package and library
// Which just covert the another code into other another code

// npx == npm run

// to remove the console.log
// npm install babel-plugin-transform-remove-console --save-dev

// React.createElemnet gives/produces an object
