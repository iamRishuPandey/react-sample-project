import React, {useRef, useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helper/Wrapper';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef  = useRef();
    const collegeInputRef = useRef();

    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollege = collegeInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollege.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'plese enter a valid age (non-empty values).'
            })
            return; 
        } 
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'plese enter a valid age (> 0).'
            })
            return
        }
        props.onAddUser(enteredName, enteredUserAge, enteredCollege)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';

    }
    
    const errorHandler = (event) => {
        setError(null);
    }
    return (
        <Wrapper>
        {error && 
        <ErrorModel
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler} 
        />
        }
        <Card cssClass={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        type="text" 
         
        ref={nameInputRef}
        />
        <label htmlFor="age">Age (years)</label>
        <input 
        id="age" 
        type="number" 
        
        ref={ageInputRef}
        />
        <label htmlFor="collegeName">College Name</label>
        <input 
        id="collegeName" 
        type="text" 
        
        ref={collegeInputRef}
        />
        <Button type="submit"> Add User </Button>
    </form>
    </Card>
    </Wrapper>
    );
};

export default AddUser;