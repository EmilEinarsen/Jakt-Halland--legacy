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
	if(id === 'name' && input) {
		let arr = input.trim().split(' ')
		if(arr.length < 2) return -1
	}
	if(id === 'email' && input) {
		if(input.split('@').length !== 2) return -1
		if(input.split('.').length !== 2 || !input.split('.')[1]) return -1
		if(input.split(/(\W)/).length !== 5) return -1
	}
	if(id === 'phonenumber' && input) {
		if(!(
			input.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) 
			|| input.match(/^\(?[+]?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
		)) return -1
	}
	return input ? 1 : 0
}