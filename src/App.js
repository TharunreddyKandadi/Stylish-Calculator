import "./styles.css";
import {useState} from "react";

export default function App() {
  const [calc,setCalc]=useState("");
  const [result,setResult]=useState("");

  const ops=['/','*','-','+','.'];

  const UpdateCalc = value =>{
    if(
      ops.includes(value) && calc==='' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value.toString()))
    }
  }
  const equals = ()=>{
    setCalc(eval(calc).toString());
  }
  const deleteLast=()=>{
      if(calc===''){
        return;
      }
      const value=calc.slice(0,-1);
      setCalc(value);
  }
  const degithandler=()=>{
    const data=[];
    for(let i=1;i<10;i++){
      data.push(
        <button 
        onClick={()=>UpdateCalc(i.toString())} 
        key={i}>{i}
        </button>
      )
    }
    return data;
  }
  return (
    <div className="App">
     <div className="Calculator">
       <div className="display">
         {result ? <span>({result})</span>:''}{calc || "0"}
       </div>
       <div className="operaters">
         <button onClick={()=>UpdateCalc('+')}>+</button>
         <button onClick={()=>UpdateCalc('-')}>-</button>
         <button onClick={()=>UpdateCalc('*')}>*</button>
         <button onClick={()=>UpdateCalc('/')}>/</button>
         <button onClick={deleteLast}>del</button>
       </div>
       <div className="digits">
          {degithandler()}
         <button onClick={()=>UpdateCalc('0')}>0</button>
         <button onClick={()=>UpdateCalc('.')}>.</button>
         <button onClick={equals}>=</button>
       </div>
     </div>
    </div>
  );
}
