import React, { Fragment } from 'react';
import Header from '../Header';
import styles from './Page.module.css';
import './Page.module.css'
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';
import useForcecast from '../../hooks/useForcecast';


const Page = () => {

   const{isError, isLoading, forecast, submitRequest, resetSearch} = useForcecast();

   const onSubmit = (value)=>{
       submitRequest(value)
   }
   const onReset = ()=>{
       resetSearch();
   }
    return (
        <Fragment>
            <Header />
            {!forecast && <div className={`${styles.box} position-relative`} >
                {!isLoading && <Form submitSearch={onSubmit} />}
                {isError && <Error message={isError}/>}
                {isLoading && <Loader/>}
            </div>
            }
                {forecast && <Forecast forecast={forecast} submitReset={onReset} />} 

                       
        </Fragment>
    );
};

export default Page;
