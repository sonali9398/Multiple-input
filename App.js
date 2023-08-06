import React, { useState } from 'react';

const App = () => {

  const[fullName, setFullName] = useState(
    {
      fname:"",
      lname:'',
      email:'',
      number:'',
    }
  );
  
  const InputEvent = (e)=>{
    console.log(e.target.value);
    console.log(e.target.name);

    // const value = e.target.value;
    // const name = e.target.name;

    const {value, name} = e.target;

    setFullName((preValue) => 
    
      // if (name === 'fname'){
      //   return{
      //     fname:value,
      //     lname:preValue.lname,
      //     email:preValue.email,
      //     number:preValue.number
      //   } 
      // }
      // else if (name === 'lname'){
      //   return{
      //     fname:preValue.fname,
      //     lname:value,
      //     email:preValue.email,
      //     number:preValue.number
      //   } 
      // }
      // else if (name === 'email'){
      //   return{
      //     fname:preValue.email,
      //     lname:preValue.lname,
      //     email:value,
      //     number:preValue.number
      //   } 
      // }
      // else if (name === 'number'){
      //   return{
      //     fname:value,
      //     lname:preValue.lname,
      //     email:preValue.email,
      //     number:preValue.number
      //   } 
      // }
    }
    )
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    alert("form submitted");
  }
  return(<>
    <div>
      <form onSubmit={onSubmit}>
        <h1 >Hi {fullName.fname} {fullName.lname}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.number}</p>

        <input
          type='text'
          placeholder='enter text'
          name='fname'
          onChange={InputEvent}
          value={fullName.fname}
        />
        <br/>
        <input
          type='text'
          placeholder='enter text'
          name='lname'
          onChange={InputEvent}
          value={fullName.lname}
        />
        <br/>
        <input
          type='email'
          placeholder='enter email'
          name='email'
          onChange={InputEvent}
          value={fullName.email}
          autoComplete='off'
        />
        <br/>
        <input
          type='number'
          placeholder='enter number'
          name='number'
          onChange={InputEvent}
          value={fullName.number}
        />
        <br/>
        <button type='submit' >Click me</button>
      </form>
      
    </div>
  </>)
  
}

export default App;
