import React, { useState } from "react";
import TextField from "./TextField";
import FormCanvas from "./FormCanvas";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import ButtonInput from "./ButtonInput";

const App = () => {
    const [droppedForms, setDroppedForms] = useState([]);
    const [textField, setTextField] = useState(null);
    const [textFieldType, setTextFieldType] = useState(null);
    console.log(droppedForms);
    const [showPreview, setShowPreview] = useState(false);

    const handleDrop = (item) => {
        setDroppedForms((prev) => [...prev, item.type]);
    };
    const handleStateChange = (state)=>{
        setTextField(state);
    }
    const handleStateChangeType = (state)=>{
        setTextFieldType(state)
    }
    return (
        <div style={{ padding: "20px" }}>
            <h1 className='text-5xl text-center'>Interactive form builder</h1>
            <div className='flex justify-between'>
                <TextField onStateChange={handleStateChange} onStateChangeType={handleStateChangeType}/>
                <CheckboxInput />
                <RadioInput />
                <SelectInput />
                <ButtonInput/>
            </div>
            <FormCanvas onDrop={handleDrop} />
            <div style={{ marginTop: "20px" }} className='flex flex-wrap items-center h-20 justify-center'>
                <h3 className='font-semibold text-green-900'>Dropped Items : </h3>
                {droppedForms.map((form, index) => (
                    <div className=''>
                        <div key={index}> - Form {index + 1} Dropped |</div>
                        {/* <div>{form[index]}</div> */}
                    </div>
                ))}
            </div>
            <button className='flex justify-center py-4 px-12 bg-green-700 text-white border-none rounded-lg text-3xl'>Preview is here: </button>
            <div className='mx-12 mt-15'>
                <label htmlFor="">{textField}</label>
                <input type={textFieldType} />
            </div>
        </div>
    );
};

export default App;
