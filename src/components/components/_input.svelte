<script>
import { fade } from "svelte/transition"

import { isInputValid } from "../../js/Validate"

export let data
export let valid
let focus = false
$: error = valid === -1 ? true : false
$: success = valid === 1 ? true : false
const { 
	label, 
	name,
	type,
	textarea
} = data

let feedback = {
	name: `Namn är obligatoriskt`,
	email: `Måste innehålla "@" och "."`, 
	message: `Meddelande är obligatoriskt`,
	phonenumber: `Ogiltigt telefonmnummer`
}
function validate(e) {
	valid = isInputValid(name, e.target.value)
}
function toggleFocus(e) {
	e.type === 'focus' ? focus = true
		: e.type === 'blur' && e.target.value === '' ? focus = false
		: ''
}

</script>

<div class:focus class:error class:success>
	<label for="{name}">{label}</label>
	{#if textarea}
		<textarea on:input={validate} on:focus={toggleFocus} on:blur={toggleFocus} type={type} name="{name}"></textarea>
	{:else}
		<input on:input={validate} on:focus={toggleFocus} on:blur={toggleFocus} type={type} name="{name}">
	{/if}
	{#if valid === -1 && feedback[name]}
		<p transition:fade>{feedback[name]}</p>
	{/if}
</div>

<style lang="sass">
	input
		height: 40px
		width: 100%
	
	textarea
		width: 100%
		overflow-x: hidden
		resize: none
		min-height: 30px
		height: auto
	
	input, textarea
		background-color: darken( #f8f9fa, 3%)
		border-radius: 2px 2px 0 0
		font-size: 20px
		padding: 10px
		border-bottom: 2px solid #223D6E
		transition: border .25s ease-in-out
	
	label
		position: absolute
		top: 11px
		left: 9px
		pointer-events: none
		color: rgba(0, 0, 0, 0.6)
		span
			font-size: 12px
			color: rgba(0, 0, 0, 0.6)
	
	input, label
		transition: .25s
	
	p
		position: absolute
		font-size: 12px
		margin: 2px 0 0 0 
		color: #dc3545
</style>