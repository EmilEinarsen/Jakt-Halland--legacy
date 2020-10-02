const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", 
	"Juli", "Augusti", "September", "Oktober", "November", "December"]
const monthAbbriviations = ['jan', 'feb', 'mars', 'april', 'maj', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec']

export const structureApprouchingEvents = ({intensive, leader, calm}, abbriviation) => ({
	intensive: 
		intensive.length === 0 ? ''
		: intensive.length === 1 ? produceDateString(intensive[0], abbriviation) 
		: `${produceDateString(intensive[0], abbriviation)} och ${produceDateString(intensive[1], abbriviation)}`,
	leader: produceDateString(leader[0], abbriviation),
	calm: produceDateString(calm[0], abbriviation),
})

export const produceDateString = ({info}, abbriviation) => combineDatesBasedOnMonthAndDate(info.startDate, info.endDate, abbriviation)

export const combineDatesBasedOnMonthAndDate = (startDate, endDate, abbriviation) => {
	const startMonth = numberToMonth(startDate.month, abbriviation)
	if(startDate.month === endDate.month)
		return startDate.date === endDate.date ? `${startDate.date} ${startMonth}` 
		: `${startDate.date}-${endDate.date} ${startMonth}`
	else return `${startDate.date} ${startMonth}-${endDate.date} ${numberToMonth(endDate.month, abbriviation)}`
}

export const numberToMonth = (number, abbriviation) => abbriviation ? monthAbbriviations[number-1] : months[number-1]