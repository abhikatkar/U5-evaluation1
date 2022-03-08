
import {useState} from "react";


function Books(){

    const [countbook , setCountbook] = useState(13)

    const outputChange = (value) => {
        setCountbook(countbook + value);
    }

    return(
     <div className="items">
         <span>Books:</span>
         <button className="aadBook" onClick={() => {outputChange(1)}}>+</button>
         <button className="remBook" onClick={() => {outputChange(-1)}}>-</button>
         <span className="totalBooks">{countbook}</span>
     </div>

    );
}







function Pens(){

    const [countpen , setCountpen] = useState(10)

    const outputChange = (value) => {
        setCountpen(countpen + value);
    }

    return(
     <div className="items">
         <span>Pens:</span>
         <button className="aadPen" onClick={() => {outputChange(1)}}>+</button>
         <button className="remPen" onClick={() => {outputChange(-1)}}>-</button>
         <span className="totalPens">{countpen}</span>
     </div>

    );
}







function Notebooks(){

    const [countnotebooks , setCountnotebooks] = useState(44)

    const outputChange = (value) => {
        setCountnotebooks(countnotebooks + value);
    }

    return(
     <div className="items">
         <span>Notebooks:</span>
         <button className="aadNotebook" onClick={() => {outputChange(1)}}>+</button>
         <button className="remNotebook" onClick={() => {outputChange(-1)}}>-</button>
         <span className="totalNotebooks">{countnotebooks}</span>
     </div>

    );
}







function InkPens(){

    const [countinkpen , setCountinkpen] = useState(78)

    const outputChange = (value) => {
        setCountinkpen(countinkpen + value);
    }

    return(
     <div className="items">
         <span>Inkpens:</span>
         <button className="aadInkpen" onClick={() => {outputChange(1)}}>+</button>
         <button className="remInkpen" onClick={() => {outputChange(-1)}}>-</button>
         <span className="totalInkpens">{countinkpen}</span>
     </div>

    );
}

function Total(){
    const [total , setTotal] = useState(145)

    const outputChange = (countbook,countpen,countnotebooks,countinkpen) => {
        setTotal(total + countbook + countpen,countnotebooks,countinkpen);
    }

    return (
        <>
         <div className="total">{total}</div>
        </>
        
    )
}

export {Books , Pens, Notebooks,InkPens,Total}