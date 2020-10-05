import { state } from '../js/stores'
import Restrain from 'bjork_restrain'


import { queryTarget, queryTargetAll } from "./Helpers"

export const getScreenWidth = () => window.innerWidth

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
export function Scroll() {
	let oldPosY
	let isMenuOpen
	state.subscribe(value => {
		isMenuOpen = value.menu
	})

	this.getPosY = () => window.scrollY

	this.getDirection = () => {
		oldPosY = oldPosY === undefined ? this.getPosY() : oldPosY
		
		const newPosY =  this.getPosY()
		
		const changeOfY = oldPosY - newPosY

		oldPosY = newPosY

		// -1 = down, 1 = up, 0 = unchanged
		return changeOfY < 0 ? -1 : changeOfY > 0 ? 1 : 0
	}

	this.to = options => window.scrollTo(options)

	this.toggle = () => isMenuOpen ? this.disable() : this.enable()
	this.enable = () => {
		overflow('auto')
		this.to(oldPosY)
	}
	this.disable = () => {
		overflow('hidden')
	}
	function overflow(string) {
		[queryTarget('html'), document.body].forEach(target => {
			target.style.overflow = string
		})
	}

	/* $state.menu ? 'stop-scrolling' : '' */
}