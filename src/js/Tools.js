import Restrain from 'bjork_restrain'
import { queryTargetAll } from "./Helpers"

export const getScreenWidth = () => window.innerWidth
export const scrollToInstantly = options => window.scrollTo(options)
export const getPosY = () => window.scrollY

export const isInWindow = target => target.offsetTop < (window.innerHeight + window.pageYOffset)
export function LazyImgLoading() {
	let loadImage = image => image.classList.remove("lazy")
	let { throttle } = new Restrain()

	this.load = () => {
		let images = [...queryTargetAll('.lazy')]
		if(!images.length) return
		throttle(() => {
			images.filter(img => (
				isInWindow(img)
			)).forEach(img => (
				loadImage(img)
			))
		}, 50)
	}
}

export function compareDates(A, B) {
	const scoreOfDate = (A.year*365 + A.month * 31 + A.date) - (B.year*365 + B.month * 31 + B.date)
	return scoreOfDate > 0 ? 1 : scoreOfDate < 0 ? -1 : 0 // 0 = now, -1 = future, 1 = past
}
export const timestampObject = () => {
	const date = new Date()
	return {
		date: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	}
}
export function convertdateStringIntoIntObject(string) { // converts, 20/12/2020 => {date: 20, month: 12, year: 2020}
	const arr = string.split("/")
	return {
		date:  parseInt(arr[0]),
		month:  parseInt(arr[1]),
		year:  parseInt(arr[2]),
	}
}
export function ScrollDirection() {
	let oldY = getPosY()
	this.get = () => {
		const y =  getPosY()
		const isUp = oldY > y
		oldY = y
		return isUp
	}
}