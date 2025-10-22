import React, { useState } from 'react'
import '../styles/Form.css'

const Form = () => {

     const[name, SetName] = useState('')
     const[feedback, SetFeedback] = useState('')
     const[entries, SetEntries] = useState([])

    function handleName(e){
        //is to get the value and store it in a varihable
        //console.log step to check the value
        SetName(e.target.value)
        
    }

    function handleFeedback(e){
        //is to get the feedback value and store it in a varihable
        //console.log step to check the value
        SetFeedback(e.target.value)
        
    }

    function handleSubmit(e){
        
        e.preventDefault();
        SetEntries([...entries,{personName:name,personFeedback:feedback}])
        SetName('')
        SetFeedback('')
        console.log(entries)
    }

  return (
    
    <div className='container'>
        <h1>Feedback collector</h1>
        <form className='feedback-container' onSubmit={handleSubmit}> 
            <label>Name:</label>
            <input type ="text" placeholder='Your Name' onChange={handleName} value={name} />
            <label>Feedback:</label>
            <textarea placeholder='Your Feedback' onChange={handleFeedback} value={feedback}></textarea>
            <button>Submit</button>
        </form>
        <div className='Feedback-entries'>
        <h3>Feedback entries</h3>
        <ul>
            {
                entries.map((entry,index) => (
                    <li key={index}>
                    <strong>{entry.personName}</strong>: {entry.personFeedback}
               </li>

                ))
            }
        </ul>
        </div>
    </div>
  )
}

export default Form
