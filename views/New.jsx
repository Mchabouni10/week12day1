import React, { useState } from "react";

function New() {
  const [includeImage, setIncludeImage] = useState(true);

  const handleCheckboxChange = () => {
    setIncludeImage(!includeImage);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Create A New Pokemon</h1>
      <form action="/pokemon" method="POST" style={{ margin: "20px" }}>
        <label style={{ display: "block", margin: "10px" }}>
          Name:
          <input type="text" name="name" style={{ marginLeft: "10px" }} />
        </label>
        <br />
        {includeImage && (
          <label style={{ display: "block", margin: "10px" }}>
            Image URL:
            <input type="text" name="img" style={{ marginLeft: "10px" }} />
          </label>
        )}
        <br />
        <label style={{ display: "block", margin: "10px" }}>
          Include Image:
          <input
            type="checkbox"
            checked={includeImage}
            onChange={handleCheckboxChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br />
        <input type="submit" value="Create Pokemon" style={{ margin: "10px" }} />
      </form>

      <form action="/pokemon/:id" method="POST" style={{ margin: "20px" }}>
        <input type="hidden" name="_method" value="DELETE" />
        <input type="submit" value="Delete Pokemon" style={{ margin: "10px" }} />
      </form>
    </div>
  );
}

export default New;

