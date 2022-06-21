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
export const sortDataByEvent = ({events}) => events.reduce(
	([intensive, summer, leader, calm, weekend, survival, other], event) => (
		event.event === "Jägarexamen (Intensiv)" ? [[...intensive, event], summer, leader, calm, weekend, survival, other] 
		: event.event === "Jägarexamen (Sommar intensiv)" ? [intensive, [...summer, event], leader, calm, weekend, survival, other] 
		: event.event === "Jaktledarutbildning" ? [intensive, summer, [...leader, event], calm, weekend, survival, other]
		: event.event === "Jägarexamen (Lugn)" ? [intensive, summer, leader, [...calm, event], weekend, survival, other]
		: event.event === "Jakt helg" ? [intensive, summer, leader, calm, [...weekend, event], survival, other]
		: event.event === "Överlevnad" ? [intensive, summer, leader, calm, weekend, [...survival, event], other]
		: [intensive, summer, leader, calm, weekend, survival, [...other, event]]
	), [[], [], [], [], [], [], []]
)