/**
 * Returns the first date in the week in which any date lies
 * @param {Date} date
 * @return {Date} first day in the week
 */
export function getWeekStartDate(date) {
    const startDate = new Date(date.getTime());
    while (startDate.getDay() !== DAYS.SUNDAY) {
        startDate.setDate(startDate.getDate() - 1);
    }
    return startDate;
}

/**
 * Returns the dates in a given month
 * @param {number} month
 * @param {number} year
 * @return {array[array]} dates in epoch
 */
export function getMonthDates(month, year) {
    if (typeof month !== 'number' || month < 0 || month > 11) {
        throw new Error('Invalid month');
    }
    if (typeof year !== 'number' || year < 1970) {
        throw new Error('Invalid year');
    }
    const weeks = [];
    let week = [];
    let date = getWeekStartDate(new Date(year, month, 1));
    do {
        for (let i = 0; i < 7; i += 1) {
            week.push(date);
            date = new Date(date.getTime());
            date.setDate(date.getDate() + 1);
        }
        weeks.push(week);
        week = [];
    } while ((date.getMonth() <= month) && (date.getFullYear() === year));

    return weeks;
}


/**
 * Returns formatted date in a month split by weeks.
 * The dates are in the following format
 * { date: 12, liesInMonth: true }
 * @param {number} month
 * @param {number} year
 * @return {object} formatted dates
 */
export function getFormattedMonthDates(month, year) {
    return getMonthDates(month, year).map((week) => {
        return week.map((date) => {
            return {
                date: date.getDate(),
                liesInMonth: date.getMonth() === month
            };
        });
    });
}