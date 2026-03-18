import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Oladapo");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Oladapo", "Anna", "Sally", "Mark"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target);
  };

  //   50 : 38
  return (
    <main>
      <p onDoubleClick={handleClick}> Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
    </main>
  );
};

export default Content;
