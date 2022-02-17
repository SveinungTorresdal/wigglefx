<script lang="ts">
    export let style: string = ''
    export let x: number = 0
    export let y: number = 0
    export let opacity: number = 1
    let props = $$restProps
    
    let addedStyle: string 
    $: addedStyle = `left:${x}px; top:${y}px; opacity:${opacity}`
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img style={style + addedStyle} {...props} />