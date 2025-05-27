import React, { useState } from "react";

const PASSWORD = "secret123"; // Change this to your desired password

function ProtectedText() {
  const [text, setText] = useState("This is protected text");
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    if (password === PASSWORD) {
      setIsUnlocked(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpdate = () => {
    setText(input);
    setInput("");
  };

  return (
    <div>
      <h2>{text}</h2>
      {!isUnlocked ? (
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleUnlock}>Unlock</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter new text"
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Change Text</button>
        </div>
      )}
    </div>
  );
}

export default ProtectedText;
