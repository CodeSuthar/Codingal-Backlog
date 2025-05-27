import React from "react";

// Child component that receives props
function Greeting({ name, age }) {
  return (
    <div className="card">
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Parent component
function App() {
  return (
    <div>
      <h1>React Props Example</h1>
      <Greeting name="Aditya" age={15} />
      <Greeting name="Sam" age={25} />
      <Greeting name="Alex" age={30} />
    </div>
  );
}

export default App;