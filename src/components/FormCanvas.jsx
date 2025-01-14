import React from "react";
import { useDrop } from "react-dnd";

const FormCanvas = ({ onDrop }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "FORM",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));


  return (
    <div
      ref={dropRef}
      style={{
        height: "300px",
        width: "100%",
        border: "2px dashed gray",
        backgroundColor: isOver ? "#e0ffe0" : "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isOver ? "Release to Drop" : "Drag Form Here"}
    </div>
  );
};

export default FormCanvas;
