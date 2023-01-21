import React from "react";

function App() {
  const [newHeading, setNewHeading] = React.useState("");
  const [newHeading2, setNewHeading2] = React.useState("");
  function handleChange(event) {
    setNewHeading(event.target.value);
    //Things we can do with event.target
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  function handleSubmit() {
    setNewHeading2(newHeading);
  }

  return (
    <div className="container">
      <h1>Hello {newHeading2}, How do you do ?</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={newHeading}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
