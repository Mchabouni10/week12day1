import React from "react";

function New() {
  return (
    <>
      <h1>Create A New Pokemon</h1>
      <form action="/pokemon" method="POST">
        <br />
        Name: <input style={{ margin: "1em" }} type="text" name="name" />
        <br />
        Image URL: <input style={{ margin: "1em" }} type="text" name="img" />
        <br />
        <input style={{ margin: "1em" }} type="submit" value="Create Pokemon" />
      </form>

      <form action="/pokemon/:id" method="POST">
        <input type="hidden" name="_method" value="DELETE" />
        <input type="submit" value="Delete Pokemon" />
      </form>
    </>
  );
}

export default New;
