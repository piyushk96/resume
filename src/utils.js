import moment from 'moment';

function getDateString(date) {
	const dateFormat = 'MMM. YYYY';
	if (!Array.isArray(date)) date = [date];
	let dateStr = moment(new Date(date[0])).format(dateFormat);

	if (date.length === 2) {
		if (date[1] === 'present') {
			dateStr += ' - Present';
		}
		else {
			dateStr += ` - ${moment(new Date(date[1])).format(dateFormat)}`;
		}
	}
	return dateStr;
}

export {
	getDateString,
};