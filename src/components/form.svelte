<script>
import { fade } from 'svelte/transition'
import { debounce } from 'bjork_restrain'

import Input from "./components/_input.svelte"
import { queryTarget, queryTargetAll } from '../js/Helpers'
import Ripple from './components/Ripple/Ripple.svelte'

let formState = 0
let formInputState = 0
$: success = formState === 1
$: error = formState === -1
$: valid = {
	name: formInputState, 
	subject: formInputState, 
	email: formInputState, 
	phonenumber: formInputState, 
	message: formInputState,
}

function attemptDispatch() {
	if(!isFormValid()) return formError()
	const xhr = new XMLHttpRequest()
	let form = queryTarget('form')
	xhr.open(form.method, form.action)
	xhr.setRequestHeader("Accept", "application/json")
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return
		if(xhr.status === 200) formSuccess()
	}
	xhr.send(new FormData(form))
}

function isFormValid() { return (
	Object.values(valid).every(
		(status, index) => (
			[1, 3].includes(index) ? status !== -1
				: status === 1
		)
	)
)}
function formError() {
	formState = -1
	for(let key in valid)
		if(valid[key] !== 1)
			if(['name', 'email', 'message'].includes(key)) valid[key] = -1
			else valid[key] = 1
	valid = valid
	debounce(() => formState = 0, 5000)
}
function formSuccess() {
	formState = formInputState = 1
	queryTarget('form').reset()
	queryTargetAll('.focus').forEach(target => target.classList.remove('focus'))
	debounce(() => formState = formInputState = 0, 5000)
}

</script>

<div class="form lazy">

	<div>
		<div class="lazy">
			<div>
				<h1>KONTAKTA OSS</h1>
				<p>Tveka inte, ställ frågor och anmäl intresse</p>
				<p><i class="fas fa-envelope"></i> info@jakthalland.se</p>
			</div>
		</div>
	</div>

	<div>
		<div>
			<p>Tveka inte, ställ frågor och anmäl intresse</p>
			<p><i class="fas fa-envelope"></i> info@jakthalland.se</p>
		</div>
		
		<form class:success class:error id="form" action="https://formspree.io/f/mqkyjrro" method="POST"> 
			
			<Input
				data={{ name: 'name', type: 'text', label: 'Namn *' }} 
				bind:valid={valid.name}
			/>
			<Input
				data={{ name: 'subject', type: 'text', label: 'Ämne' }} 
				bind:valid={valid.subject}
			/>
			<Input
				data={{ name: 'email', type: 'email', label: 'E-post *' }} 
				bind:valid={valid.email}
			/>
			<Input
				data={{ name: 'phonenumber', type: 'tel', label: 'Telefonnummer' }} 
				bind:valid={valid.phonenumber}
			/>
			<Input
				data={{ name: 'message', type: 'text', label: 'Meddelande *', textarea: true }}
				bind:valid={valid.message}
			/>
			
			
			<div transition:fade on:click|preventDefault={attemptDispatch}>
				<Ripple>
					SKICKA
					{#if success}
						<i class="fas fa-check"></i>
					{:else if error}
						<i class="fas fa-times"></i>
					{/if}
				</Ripple>
			</div>
			
		</form>

	</div>
</div>