import React from 'react';

import styles from './Reset.module.css';


const Reset = ({submitReset}) => {

    const reset = (e) => {
        e.preventDefault();
        submitReset(false)
    }
    return(
    <div className="mb-2 mt-2 d-flex justify-content-center align-items-center">
        <button className={styles.button} onClick={reset}>Look for new </button>
    </div>
);}

export default Reset;
