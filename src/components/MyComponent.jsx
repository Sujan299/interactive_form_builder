import React, { useState, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TextField = () => {
    const [textLabel, setTextLabel] = useState("");
    const [typeLabel, setTypeLabel] = useState("");
    const textLabelRef = useRef(textLabel);
    const typeLabelRef = useRef(typeLabel)

    React.useEffect(() => {
        textLabelRef.current = textLabel;
        typeLabelRef.current = typeLabel;
    }, [textLabel, typeLabel]);
    const [, drag] = useDrag(() => ({
        type: "component",
        item: () => ({
            type: typeLabelRef.current,
            value: textLabelRef.current,
        }),
    }));

    return (
        <div
            ref={drag}
            className="p-2 bg-blue-200 rounded cursor-pointer flex flex-col h-full w-full gap-1"
            style={{ margin: "10px" }}
        >
            <span className='font-semibold'>Enter input's label name :</span>
            <input type="text" value={textLabel} onChange={(e) => {
                setTextLabel(e.target.value)

                console.log(e.target.value)
            }} className='md:w-2/4 w-full rounded-md py-1 px-1' />
            <span className='font-semibold'>Type of Input Box :</span>
            <input type="text" value={typeLabel} onChange={(e) => { setTypeLabel(e.target.value) }} className='md:w-2/4 w-full rounded-md py-1 px-1' />
        </div>
    );
};

// const ButtonInput = () => {
//     const [, drag] = useDrag(() => ({
//         type: "component",
//         item: { type: "ButtonInput", value: "Button Click Value" },
//     }));

//     return (
//         <div
//             ref={drag}
//             className="p-2 bg-green-200 rounded cursor-pointer"
//             style={{ margin: "10px" }}
//         >
//             ButtonInput
//         </div>
//     );
// };

const SelectInput = () => {
    const [labelName, setLabelName] = useState("");
    // const [array, setArray] = useState("");
    const labelNameRef = useRef(labelName);
    // const arrayRef = useRef(array);




    React.useEffect(() => {
        labelNameRef.current = labelName;
        // arrayRef.current = array;
    }, [labelName])
    const [, drag] = useDrag(() => ({
        type: "component",
        item: () => {
            return {
                type: 5,
                value: labelNameRef.current,
                // selectVal: arrayRef.current,
            };
        },
    }));

    return (
        <div
            ref={drag}
            className="p-2 bg-yellow-200 rounded cursor-pointer flex flex-col h-full w-full gap-1"
            style={{ margin: "10px" }}
        >

            <span className='font-semibold'>Selection label:</span>
            <input className='md:w-2/4 w-full rounded-md py-1 px-1' type='text' value={labelName} onChange={(e) => { setLabelName(e.target.value) }} />
            {/* Enter Items with commas: <input type='text' value={array} onChange={(e)=>{setArray(e.target.value)}}/> */}
        </div>
    );
};

const RadioInput = () => {
    const [labelName, setLabelName] = useState("");
    const labelNameRef = useRef(labelName);

    React.useEffect(() => {
        labelNameRef.current = labelName;

    }, [labelName])

    const [, drag] = useDrag(() => ({
        type: "component",
        item: () => ({
            type: "radio",
            value: labelNameRef.current,
        }),
    }));

    return (
        <div
            ref={drag}
            className="p-2 bg-red-200 rounded cursor-pointer flex flex-col h-full w-full gap-1"
            style={{ margin: "10px" }}
        >

            <span className='font-semibold'>Radio button label:</span>

            <input className='md:w-2/4 w-full rounded-md py-1 px-1' type='text' value={labelName} onChange={(e) => { setLabelName(e.target.value) }} />
        </div>
    );
};

// Drop Area
const DropZone = ({ onDropComponent }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "component",
        drop: (item) => onDropComponent(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className={`w-full h-64 rounded-lg ${isOver ? "bg-green-400" : "bg-slate-400"
                }`}
            style={{ padding: "20px" }}
        >
            <h2 className="text-center text-white">Drag components here</h2>
        </div>
    );
};

// Main App
const App = () => {
    const [droppedComponents, setDroppedComponents] = useState([]);

    const handleDropComponent = (component) => {
        console.log(component);
        setDroppedComponents((prev) => [...prev, component]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ padding: "20px" }}>
                <h1 className="text-5xl text-center font-semibold text-blue-500">Interactive Form Builder</h1>
                <div className="grid md:grid-cols-3 my-8 gap-4 lg:h-52 h-full sm:grid-cols-2 grid-col-1 justify-items-center">
                    <TextField />
                    <RadioInput />
                    {/* <ButtonInput /> */}
                    <SelectInput />
                </div>

                <DropZone onDropComponent={handleDropComponent} />

                <div style={{ marginTop: "20px" }} className="">
                    <h3 className='text-xl'>Dropped Components:</h3>
                    <ul className='grid grid-cols-1 bg-slate-500 w-2/4 mx-auto rounded-md my-3 p-4'>
                        {droppedComponents.map((comp, index) => {
                            // console.log(comp.selectVal);
                            // let options = []
                            // Logic to handle non-string types (like array)
                            // let options = [];
                            // if (typeof comp.type !== "string") {
                            //     const splitStringByComma = (inputString) => {
                            //         if (!inputString) return [];
                            //         return inputString.split(',').map((item) => item.trim());
                            //     };

                            //     options = splitStringByComma(comp.selectVal || "");
                            //     console.log(options)
                            // }

                            return (
                                <li key={index}>
                                    <label className="text-xl">{comp.value} :</label>
                                    {
                                        typeof comp.type !== "string" ? (
                                            <select className='ml-3 rounded-md py-1 w-2/6 mt-2'>
                                                {["option1", "option2", "option3"].map((option, i) => (
                                                    <option key={i} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input className="py-1 rounded-md ml-3 w-2/6 mt-2" type={comp.type} />
                                        )
                                    }
                                </li>
                            );
                        })}
                    </ul>

                </div>
                <div className=' flex justify-center'>
                        <button className='py-3 rounded-lg my-2 px-8 bg-green-500 text-xl text-black font-semibold'>Preview form</button>
                </div>
            </div>
        </DndProvider>
    );
};

export default App;
