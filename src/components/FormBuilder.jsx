// src/components/FormBuilder.js
import React, { useState } from "react";
import FormControls from "./FormControls";
import FormCanvas from "./FormCanvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const FormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="form-builder">
        <div className="controls">
          <FormControls />
        </div>
        <div className="canvas">
          <FormCanvas fields={fields} setFields={setFields} removeField={removeField} />
          <button className="preview-button" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
        </div>
        {showPreview && (
          <div className="preview">
            <h2>Form Preview</h2>
            {fields.map((field) => (
              <div key={field.id} className="preview-field">
                <label>{field.label}</label>
                {field.type === "Text" && <input type="text" placeholder={field.label} />}
                {field.type === "Select" && (
                  <select>
                    <option>{field.label} Option 1</option>
                    <option>{field.label} Option 2</option>
                  </select>
                )}
                {field.type === "Checkbox" && <input type="checkbox" />}
                {field.type === "Radio" && <input type="radio" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default FormBuilder;