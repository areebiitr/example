import React from 'react';
import { VIEWS } from '../constants';
import MonthView from './MonthView';

export default class CalendarContainer extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();
        this.state = {
            date: now,
            events: [],
            view: VIEWS.MONTH
        };
    }

    render() {
        const { date} = this.state;
        const currentDate = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return (
            <MonthView
                currentDate={currentDate}
                month={month}
                year={year}
            />
        );
    }
}
