import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import MyComponent from "./MyComponent";
import MyComponent from './components/MyComponent'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MyComponent />
    </DndProvider>
  );
}

export default App;
