import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    
  };
 

  const formSubmissionHandler = event => {
    event.preventDefault();
    if(enteredName.trim() === '') {
      return;
    }
    console.log(enteredName, 'entered name');
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue, 'entered val');
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
