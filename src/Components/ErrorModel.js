import React from "react"
import classes from "./ErrorModel.module.css"
import Card from "./Card";
import Button from "./Button";
import  ReactDOM  from "react-dom";

const BackDrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};
const ModelOverlay=(errors)=>{
  console.log(errors);
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{errors.errors.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{errors.errors.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={errors.errors.onConfirm}>Close</Button>
            </footer>
        </Card>
    );
};
const ErrorModel = (props)=>{    
   return (
   <React.Fragment>
    {
       ReactDOM.createPortal(<BackDrop/>,document.getElementById("backdrop-root"))
    }
    {
       ReactDOM.createPortal(<ModelOverlay errors={props}/>,document.getElementById("overlay-root"))
    }
   </React.Fragment>
   );
};
export default ErrorModel;