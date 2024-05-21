
import { useState } from 'react';
import './App.css';
import { UC,LC,NC,SC } from './data/PassChar';


function App() {

  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passwordlen,setPasswordlen]=useState(10)
  let [fpass,setFpass]=useState('')

  let createPassword=()=>{
    let finalPass='';
    let charSet='';
    if(uppercase|| lowercase|| number || symbol){
      if(uppercase) charSet+=UC
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(finalPass);
    }
    else{
      alert("Please select atleast one checkbox....")
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass);
  }
  
  return (
    <>
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      
      <div className='passwordBox-in'>
        <input type='text' placeholder='Read Only' value={fpass} /><button onClick={copyPass}>Copy</button>
    </div>
    <div className='passLength'>
      <label>Password Length</label>
      <input type='number' max={20} min ={10}value={passwordlen} onchange={(event)=>setPasswordlen(event.target.value)}/>

    </div>

    <div className='passLength'>
      <label>Include uppercase letters</label>
      <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>

    </div>

    <div className='passLength'>
      <label>Include lowercase letters</label>
      <input type='checkbox'  checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>

    </div>

    <div className='passLength'>
      <label>Include numbers</label>
      <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>

    </div>

    <div className='passLength'>
      <label>Include symbols</label>
      <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>

    </div>

    <button className='btn' onClick={createPassword}>Generate password</button>

    </div>
    
    </>
    
  );
}

export default App;
