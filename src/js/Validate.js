import {compareDates, convertdateStringIntoIntObject, getScreenWidth, timestampObject} from './Tools'

export const isWidthMobile = () => getScreenWidth() < 1100

export function isEventInFuture(eventStart) {
	const int = compareDates(
		timestampObject(), 
		convertdateStringIntoIntObject(eventStart)
	)
	return int !== 1
}