import React from 'react';
import PropTypes from 'prop-types'
import styles from './CurrentDayDescriptionItem.module.css';

const CurrentDayDescriptionItem = ({name, value, unit}) => (
    <div className="d-flex justify-content-between">
        <p className={`mb-0  text-uppercase ${styles.fontWeight4}` }>{name}</p>
        <p className={`mb-0 ${styles.fontWeight5}`}>
            {value}{unit}
        </p>
    </div>
);
CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
}
export default CurrentDayDescriptionItem;
