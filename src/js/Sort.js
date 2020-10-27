import { compareDates, convertdateStringIntoIntObject } from "./Tools"
import { isEventInFuture } from "./Validate"

export const orginizeData = datas => ({
	events: [...datas].filter(data => (
		data.acf.event !== 'Jakt helg' ? isEventInFuture(data.acf.startDate) : true
	)).map(data => ({
		event: data.acf.event,
		info: {
			text: data.acf.text,
			startDate: convertdateStringIntoIntObject(data.acf.startDate),
			endDate: convertdateStringIntoIntObject(data.acf.endDate),
			full: data.acf.full,
			type: data.acf.type,
		}
	})).sort((A, B) => compareDates(
		A.info.startDate, 
		B.info.startDate
	))
})
export const sortDataByEvent = ({events}) => (events.reduce(
	([intensive, leader, calm, weekend, other], event) => (
		event.event === "Jägarexamen (Intensiv)" ? [[...intensive, event], leader, calm, weekend, other]
		: event.event === "Jaktledarutbildning" ? [intensive, [...leader, event], calm, weekend, other]
		: event.event === "Jägarexamen (Lugn)" ? [intensive, leader, [...calm, event], weekend, other]
		: event.event === "Jakt helg" ? [intensive, leader, calm, [...weekend, event], other]
		: [intensive, leader, calm, weekend, [...other, event]]
	), [[], [], [], [], []]
))