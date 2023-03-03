import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModel.modul.css';
const ErrorModel = (props) => {
return (
    <div>
    <div className={classes.backdrop} onClick={props.onConfirm}/>   
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.massage}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>okay</Button>
        </footer>
    </Card>
    </div>
)
};

export default ErrorModel;