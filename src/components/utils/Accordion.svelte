<script lang="ts">
    import { setContext } from 'svelte';
    import { key } from '../../context/accordion.context'

    // props
    let added = ''
    export { added as class }
    export let id = Math.random().toString(36).substring(7)

    // context api
    setContext(key, {
		parentId: () => id,
	});
</script>

<div class="accordion {added}" {id}>
    <slot identifier={id}>

    </slot>
</div>
