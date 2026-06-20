import { orginizeData, sortDataByEvent } from './Sort'
	
export async function getEvents() {
	const raw = await fetchData()
	const orginized = orginizeData(raw)
	const [intensive, summer, leader, calm, weekend, survival, other] = sortDataByEvent(orginized)
	return Promise.resolve({intensive, summer, leader, calm, weekend, survival, other})
}
export async function fetchData() {
	try {
		const [events] = await Promise.all([
			(await fetch("./events.json")).json(),
		])
		return Promise.resolve(events)
	} catch (error) {
		console.log(error);
	}
}