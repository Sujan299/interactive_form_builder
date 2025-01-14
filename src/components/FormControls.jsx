import React from "react";
import { useDrag } from "react-dnd";

const Control = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONTROL",
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="control"
    >
      {label}
    </div>
  );
};

const FormControls = () => {
  const controls = [
    { type: "Text", label: "Text Input" },
    { type: "Select", label: "Dropdown" },
    { type: "Checkbox", label: "Checkbox" },
    { type: "Radio", label: "Radio Button" },
  ];

  return (
    <div className="form-controls">
      {controls.map((control) => (
        <Control key={control.type} {...control} />
      ))}
    </div>
  );
};

export default FormControls;