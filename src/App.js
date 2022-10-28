import './App.css';
import { ComponentA } from './Task1/ComponentA';
import { createContext, useState } from 'react';
import { ComponentD } from './Task1/ComponentD';
import ParentComponent from './Task2/ParentComponent';
import { CurrencyConverter } from './Task3/CurrencyConverter';
import { TextUtility } from './Task4/TextUtility';
export const userContext = createContext(); // Export Context
function App() {
const [userName, setUSerName] = useState("Muddassir Ansari");
  return (
    <>
    <div className="App">
    <ComponentA/>
    <userContext.Provider value={userName}>
      <ComponentD/>
    </userContext.Provider>
    <hr></hr>
    <ParentComponent/>
    <hr></hr>
    </div>
    <CurrencyConverter/>
    <hr></hr>
    <TextUtility/>
    </>
  );
}

export default App;
