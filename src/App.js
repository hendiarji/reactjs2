import React from "react";
import Header from "./Header";
import Navbar from "./navbar";

// const Navbar = () => {
//   return (
//     <div>
//       <h3>Navbar</h3>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Hello</h2>
    </div>
  );
}

export default App;
