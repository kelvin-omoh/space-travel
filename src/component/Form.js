import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form'>
       <form action="">
        <label htmlFor="">
          Your Name
        </label>
        <input type="text" />


        <label htmlFor="">
          Your Email
        </label>
        <input type="email" />


        <label htmlFor="">
          Your Subject
        </label>
        <input type="text" />


        <label htmlFor="">
          Details
        </label>
        <input type="text" />
        
        <textarea name=""
         id="" cols="" 
         placeholder='Type a short mesage here'
         rows="6"></textarea>

         <button className='btn' type='submit'>Submit</button>



       </form>
      
    </div>
  )
}

export default Form
