import React from 'react'
import styles from "./Calculator.module.css"

function CalculatorInput() {
    const [num1, setNum1]=React.useState("")
    const [num2, setNum2]=React.useState("")
    const [ans, setAns]= React.useState("")
    const operation=["+","-","X","/"]
    const [operations, setOperations]= React.useState("")
   const handleSum =()=>{
       if(operations=== "+"){
        setAns(Number(num1)+Number(num2))
       }
       else if(operations==="-"){
        setAns(Number(num1)-Number(num2))
       }
       else if(operations==="X"){
        setAns(Number(num1)*Number(num2))
       }
       else if(operations==="/"){
        setAns(Number(num1)/Number(num2))
       }
      
   }
    return (
        <div className={styles.maindiv}>
            <div>
            <h1>Simple Calculator</h1>
            </div>
            
           <div style={{marginLeft:"60%"}}>
           <div className={styles.ansdiv}>
                <h5> Answer: {ans}</h5>
            </div>
            
            <div className={styles.input}>
            <input onChange={(e)=>setNum1(e.target.value)} value={num1} name="number1" type="number" placeholder="Enter Number Here"/>
            </div>
            <div>
                <h2>{operations}</h2>
            </div>
            <div>
            <input onChange={(e)=>setNum2(e.target.value)} value={num2} name="number2" type="number" placeholder="Enter Number Here"/>
            </div>
            
          
            <div>
                {operation.map(item=>
                <button onClick={(e)=>setOperations(e.target.value)} value={item}>{item}</button>
                )}

            </div>
            <button onClick={handleSum} value="=">=</button>
           </div>
        </div>
    )
}

export default CalculatorInput
