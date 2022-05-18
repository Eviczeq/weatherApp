import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Forecast.module.css';
import PropTypes from 'prop-types';
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';
import Reset from '../Reset';

const Forecast = ({forecast, submitReset}) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetail} />
                <UpcomingDaysForecast days={forecast.upcomingDay} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={8}>
              <Reset submitReset={submitReset}/> 
            </Col>
        </Row>
    </Container>
);
Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetail: PropTypes.array, 
        upcomingDay: PropTypes.array
    })
}
export default Forecast;
