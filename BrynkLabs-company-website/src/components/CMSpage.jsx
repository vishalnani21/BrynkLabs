import React, { useState, useContext } from "react";
import { HeadingContext } from "../context/HeadingContext";
import './CMSpage.css'
import { Link } from "react-router-dom";
const CMSPage = () => {
 const { setHeading, } = useContext(HeadingContext);
 const [input, setInput] = useState("");
 const [status, setStatus] = useState("");

  const handleSave = async () => {
    if (!input.trim()) {
      setStatus("Heading cannot be empty.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/heading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heading: input }),
      });

      if (!res.ok) throw new Error("Failed to save heading");

      setHeading(input);


      setStatus("Heading updated successfully.");
      setInput("");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <>
    <div>
        <Link to="/">
    <button className="cms-button" >
        Home
    </button>
    </Link>
</div>
    <div className="cms-container">
  <h2 className="cms-title">Update Heading</h2>
  <textarea
    className="cms-textarea"
    placeholder="Enter new heading..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button className="cms-button" onClick={handleSave}>Save</button>
  {status && <p className="cms-status">{status}</p>}
</div>

</>
  );
};

export default CMSPage;









