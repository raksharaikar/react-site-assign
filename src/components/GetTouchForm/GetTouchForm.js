import React from 'react';
import './form.css';
import Button from '../Header/Button/Button'

function gettouchform() {
    return (
        <div>
        
<section className="masthead2 section-form">
            <div className="form  h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center">
        <h1 className="font-weight-light">Convinced to work with us?</h1>
        <p>Company helped their agencies to keep their promises to clients since 2005</p>

        <form >
       
       
        <div className="flex-container-form">
  <div>
  <input placeholder="Fullname" type="text" id="fname" name="fname" />
  </div>
  <div>
  <input placeholder="Email Address" type="email" id="fname" name="fname"/>
  </div>
  <div>
  <input placeholder="Phone Number" type="phone" id="fname" name="fname" />
  </div>
</div>

<div className="flex-container-form">
 
  <textarea placeholder="Message in brief" style={{padding:'10px',borderRadius:'5px'}}id="w3review" name="w3review" >
  </textarea>
  
  
</div>
<button className="form-btn">Submit</button>
</form>
      </div>
    </div>
  </div>
  </section>
        </div>
      
    )
}

export default gettouchform
