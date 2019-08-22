import React from "react";

export default function Todo({ title, complete }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          textDecoration: complete ? "line-through" : ""
        }}
      >
        {title}
      </div>
      {/* <button onClick={props.onDelete}>x</button> */}
    </div>
  );
}
