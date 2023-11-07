
import './App.css';
import {useState} from 'react'



function App() {

 // var counter=0;
  let [count,setCount]=useState(0);

  const addValue=()=>{
    console.log("Clicked : " + count);
    if(count<=19){
      count=count+1;
    }    
    setCount(count);
  }
  const removeValue=()=>{
    console.log("Clicked : " + count);
    if(count>0){
      count=count-1;
    }    
    setCount(count);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>

        <h2>Counter Value {count}</h2>

        <button onClick={addValue}>Add Value</button>     
        <br/>   
        <button onClick={removeValue}>Remove Value</button>
       
      </header>
    </div>
  );
}

export default App;
