import React from 'react';
import { VIEWS } from '../constants';

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
        return <span>Lets start coding</span>;
    }
}
