import { useState } from "react";
import Footer from "./Footer";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="announcement">we're launching soon</header>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
