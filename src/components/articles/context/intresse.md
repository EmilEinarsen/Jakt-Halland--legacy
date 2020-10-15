<script>
	
import Button from '../../components/_button.svelte'
import { Scroll } from '../../../js/tools'
const scroll = new Scroll()

const handleClick = scroll.toBottom

</script>

-------------------------------------------

<Button {handleClick}>
	**Anmäl intresse**
</Button>

-------------------------------------------