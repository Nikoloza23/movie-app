/* import Button from '../../ui/button'*/
import "./counter.css"
import { useState, useEffect } from 'react'
import Greeting from '../greeting/greeting'

//make Counting on Class counter page
function Counter(){
     const [count, setCount] = useState(0);
     const [message, setMessage] = useState("");
    
     useEffect(() => {
         console.log("ყოველთვის კომპონენტის გადახატვისას...") 
    })

    useEffect(() => {
        console.log("ერთხელ კომპონენტის დახატვის შემდეგ...")
    }, [])

    useEffect(() => {
        console.log("counte-ზე დამოკიდებული...");
        setMessage(count * 10);
    }, [count])

    useEffect (() => {
        console.log("message შემეცვალა ");
    }, [message])

     const onButtonClick = (value) =>{
         setCount(count + value);
        
    }
     
    const showGreeting = count < 15 && count > -15;

    return(
        <div className="row counter-container">
             <span>Message - {message}</span>
             {showGreeting ? <Greeting text={`Counter ${count}`} /> : null }
             <div className="col-12 d-flex">
             
             <button 
             type="button" 
             className="btn btn-success" 
             onClick={() => onButtonClick(1)} 
             > 
             Add + 1 
             </button>

             <button 
             type="button"  
             className="btn btn-warning" 
              onClick={() => {
                onButtonClick(-1);
                }}>
                    Subtract -1
                </button>

             <button 
             type="button" 
             className="btn btn-secondary" 
             onClick={() => setCount(0)} 
             >
                Reset Counter 
            </button>
             
             </div>

        </div>
    )
}

export default Counter