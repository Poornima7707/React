import React from 'react';
import logo from './logo.svg';
import Input from './Input';

export default function Form() {
  return (
    <div className="Form">
        <h3>Form Validation</h3>
      <form>
         Name <br/> <Input name="name" placeholder="Your Name"></Input><br/><br/>
         Email <br/> <Input name="email" placeholder="Your Email"></Input><br/><br/>
         Mobile <br/> <Input name="number" placeholder="Your Number"></Input><br/><br/>
      Gender : <input type="radio" id="gender" name="gender" value="male"/>Male
                <input type="radio" id="gender" name="gender" value="female"/>Female<br/><br/>
      City : <select name="city">
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="jaipur">Jaipur</option>
            </select><br/><br/>
    
    Address <br/> 
    <textarea name="address" placeholder="Your Address"></textarea><br/><br/>
    <input type="submit" value="Submit"/>
    
      </form>
    </div>
  );
}
