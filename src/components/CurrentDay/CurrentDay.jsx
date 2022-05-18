import React from 'react';
import PropTypes from 'prop-types'
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb1">{weekday}</h2>
                <p className={`mb-0 ${styles.fontWeight4}`}>{date}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img src={locationIcon} alt="location pin icon" className={`mr-1 ${styles.locationPin}`} width={10} height={15} />
                    <span className={styles.fontWeight4}>{location}</span>
                </p>
            </div>
            <div>
                <img width={45} src={weatherIcon} alt="weather Icon" />
                <h2 className="font-weight-bold mb-1">
                    <span >{temperature}&deg;</span>
                </h2>
                <h5 className={styles.fontWeight4}>{weatherDescription}</h5>
            </div>
        </div>
    </div>
);
CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    temperature: PropTypes.number.isRequired, 
    weatherIcon: PropTypes.string.isRequired, 
    weatherDescription: PropTypes.string.isRequired
}
export default CurrentDay;
