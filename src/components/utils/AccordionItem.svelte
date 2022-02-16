<script>
  	import { getContext } from 'svelte';
	  import { key } from '../../context/accordion.context';

    // props
    let added = ''
    export { added as class }
    export let icon = ''
    export let id = Math.random().toString(36).substring(7)
    export let title = 'Accordion item title'
    export let shown = false

    // context api
    const { parentId } = getContext(key);
    const parent = parentId()
</script>

<div class="accordion-item">
    <h2 class="accordion-header" id="{parent}-{id}">
      <button class="accordion-button {!shown ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{parent}-{id}" aria-expanded="{shown}" aria-controls="collapse-{parent}-{id}">
        {#if icon}
          <i class="bi bi-{icon}"></i>&nbsp;
        {/if}
        {title}
      </button>
    </h2>
    <div id="collapse-{parent}-{id}" class="accordion-collapse collapse {shown ? 'show' : ''}" aria-labelledby="{parent}-{id}" data-bs-parent="#{parent}">
      <div class="accordion-body {added}">
        <slot />
      </div>
    </div>
</div>
