import { orginizeData, sortDataByEvent } from './Sort'
	
export async function getEvents() {
	const raw = await fetchData()
	const orginized = orginizeData(raw)
	const [intensive, leader, calm, weekend, other] = sortDataByEvent(orginized)
	return Promise.resolve({intensive, leader, calm, weekend, other})
}
export async function fetchData() {
	try {
		const [events] = await Promise.all([
			(await fetch("https://wordpress.jakthalland.se/wp-json/wp/v2/events")).json(),
		])
		return Promise.resolve(events)
	} catch (err) {
		console.log(err)
	}
}