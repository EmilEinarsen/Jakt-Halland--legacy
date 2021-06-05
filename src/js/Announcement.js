const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", 
	"Juli", "Augusti", "September", "Oktober", "November", "December"]
const monthAbbriviations = ['jan', 'feb', 'mars', 'april', 'maj', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec']

export const structureApprouchingEvents = ({intensive, summer, leader, calm, weekend, other}, abbriviation) => ({
	intensive: 
		intensive.length === 0 ? ''
		: intensive.length === 1 ? produceDateString(intensive[0], abbriviation) 
		: `${produceDateString(intensive[0], abbriviation)} och ${produceDateString(intensive[1], abbriviation)}`,
	summer: summer[0] ? produceDateString(summer[0], abbriviation) : '',
	leader: leader[0] ? produceDateString(leader[0], abbriviation) : '',
	calm: calm[0] ? produceDateString(calm[0], abbriviation) : '',
	weekend: weekend.length ? structureWeekend(weekend, true) : {},
	other: other[0] ? produceDateString(other[0], abbriviation) : ''
})

function structureWeekend(weekend, abbriviation) {
	let obj = {}
	weekend.forEach(event => {
		obj = {...obj, [
			event.info.type === 'Bockjakt' ? 'deer'
				: event.info.type === 'Grisjakt' ? 'pig'
				: event.info.type === 'Rådjur&Grisjakt' ? 'deerPig'
				: 'wtfthis'
		]: produceDateString(event, abbriviation)}
	})
	return obj
}

export const produceDateString = ({info}, abbriviation) => combineDatesBasedOnMonthAndDate(info.startDate, info.endDate, abbriviation)

export const combineDatesBasedOnMonthAndDate = (startDate, endDate, abbriviation) => {
	const startMonth = numberToMonth(startDate.month, abbriviation)
	if(startDate.year === endDate.year)
		if(startDate.month === endDate.month)
			return startDate.date === endDate.date ? `${startDate.date} ${startMonth}` 
			: `${startDate.date}-${endDate.date} ${startMonth}`
		else return `${startDate.date} ${startMonth}-${endDate.date} ${numberToMonth(endDate.month, abbriviation)}`
	else return `${startDate.date} ${startMonth} ${startDate.year} -${endDate.date} ${numberToMonth(endDate.month, abbriviation)} ${endDate.year}`
}

export const numberToMonth = (number, abbriviation) => abbriviation ? monthAbbriviations[number-1] : months[number-1]