import React from "react";

export default function Todo({ title, complete, handleDelete, toggle }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          textDecoration: complete ? "line-through" : ""
        }}
        onClick={toggle}
      >
        {title}
      </div>
      <button onClick={handleDelete}>x</button>
    </div>
  );
}
