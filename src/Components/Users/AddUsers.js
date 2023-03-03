import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'plese enter a valid age (non-empty values).'
            })
            return; 
        } 
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'plese enter a valid age (> 0).'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = (event) => {
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card cssClass={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        type="text" 
        value={enteredUsername} 
        onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (years)</label>
        <input 
        id="age" 
        type="number" 
        onChange={ageChangeHandler} 
        value={enteredAge} />
        <Button type="submit"> Add User </Button>
    </form>
    </Card>
    </div>
    );
};

export default AddUser;