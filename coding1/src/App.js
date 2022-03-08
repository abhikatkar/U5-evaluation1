import logo from './logo.svg';
import './App.css';
import {Books, Pens, Notebooks,InkPens,Total} from "./Components/Items"

function App() {
  return (
    <div className='App'>
      <Books/>
      <Pens/>
      <Notebooks/>
      <InkPens/>
      <Total/>

    </div>
  );
}

export default App;
