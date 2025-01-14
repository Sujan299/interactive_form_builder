import React, {useState} from "react";
import { useDrag } from "react-dnd";

const TextField = ({onStateChange, onStateChangeType}) => {
  const [inputText, setInputText] = useState(null);
  const [inputType, setInputType] = useState("");
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
        <label>Label-Name:</label>
        <input type="text" name="name" onChange={(e)=>{setInputText(e.target.value)
          onStateChange(e.target.value);
        }} />
      </div>
      <div>
        <label>Type: </label>
        <input type="text" name="type" onChange={(e)=>{setInputType(e.target.value);
          onStateChangeType(e.target.value);
        }}/>
      </div>
    </form>
  );
};

export default TextField;
