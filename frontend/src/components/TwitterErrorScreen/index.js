import React from "react";
import "./error.css";
import { Button } from "./HandleElements";

const TwitterHandleError = () => {

    return (
        <>
            <img className="errorImage" src={"https://www.svgrepo.com/show/230781/browser-error.svg"} alt="Error occurred"/>
            <h2 className="errorText">Twitter error, user not found...</h2>
            <Button className="errorButton" onClick={() => {window.location.reload(false)}}>Try again</Button>
        </>
    )

}

export default TwitterHandleError;