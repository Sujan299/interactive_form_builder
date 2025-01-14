import React from "react";
import { useDrag } from "react-dnd";

const TextField = () => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "FORM",
    item: { type: "form" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <form
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "20px",
        margin: "10px",
        border: "2px solid #007bff",
        borderRadius: "10px",
        backgroundColor: "white",
        cursor: "move",
        width: "300px",
      }}
    >
      <h4>Draggable text</h4>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextField;
