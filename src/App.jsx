import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MyComponent from './components/MyComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path='/' element={<MyComponent />} />
        </Routes>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
