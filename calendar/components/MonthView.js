import React from 'react';
import { PropTypes } from 'prop-types';
import { getFormattedMonthDates } from '../utils';
import { WEEKS } from '../constants';

const blockStyles = {
    flex: 1,    
    border: '1px solid #888',
    marginTop: -1,
    marginLeft: -1,
    padding: 24,
    textAlign: 'center'
};

const styles = {
    weekContainer: {
        display: 'flex',
        width: '100%'
    },
    weekHeader: {
        ...blockStyles,
        color: '#888',
        padding: 8
    },
    disabledDate: {
        ...blockStyles,
        opacity: 0.5,
        cursor: 'not-allowed'
    },
    date: {
        ...blockStyles
    }
};

export default class MonthView extends React.Component {
    renderHeader() {
        return (
            <div style={styles.weekContainer}>
                { Array(7).fill(null).map((_e, index) => (
                    <div style={styles.weekHeader}>
                        { WEEKS[index] }
                    </div>
                ))}
            </div>
        )
    }

    renderWeek(dates) {
        return dates.map(dateObj => {
            if (!dateObj.liesInMonth) {
                return (
                    <div style={styles.disabledDate}>
                        { dateObj.date }
                    </div>
                );
            }
            return (
                <div style={styles.date}>
                    { dateObj.date }
                </div>
            );
        });
    }

    render() {
        const { month, year, currentDate } = this.props;
        const dates = getFormattedMonthDates(month, year);

        return (
            <div>
                { this.renderHeader() }
                { dates.map(week => {
                    return (
                        <div style={styles.weekContainer}>
                            { this.renderWeek(week) }
                        </div>
                    )
                })}
            </div>
        )
    }
}

MonthView.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
    currentDate: PropTypes.number
};
