import React from "react";

export default function Todo({ title, complete, handleDelete }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          textDecoration: complete ? "line-through" : ""
        }}
      >
        {title}
      </div>

      <button onClick={handleDelete}>x</button>
    </div>
  );
}
