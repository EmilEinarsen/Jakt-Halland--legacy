import {compareDates, convertdateStringIntoIntObject, getScreenWidth, timestampObject} from './Tools'

export const isWidthMobile = () => getScreenWidth() < 1150

export function isEventInFuture(eventStart) {
	const int = compareDates(
		timestampObject(), 
		convertdateStringIntoIntObject(eventStart)
	)
	return int !== 1
}

export const isInputValid = (id, input) => {
	if(id === 'name' && input && !input.trim().length ) return -1
	if(id === 'email' && input) {
		if(input.split('@').length !== 2) return -1
		if(input.split('.').length !== 2 || !input.split('.')[1]) return -1
		if(input.split(/(\W)/).length !== 5) return -1
	}
	if(id === 'phonenumber' && input) {
		if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(input)) return -1
	}
	return input ? 1 : 0
}