import { writable } from 'svelte/store'

export const state = writable(async () => ({
	menu: false,
	posY: '',
	events: [],
}))