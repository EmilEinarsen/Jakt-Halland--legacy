<script>
	
import Button from '../../components/_button.svelte'
import { scrollTo } from 'svelte-scrollto'

const handleClick = () => scrollTo({element: '.form'})

</script>

-------------------------------------------

<Button {handleClick}>
	**Anmäl intresse**
</Button>

-------------------------------------------