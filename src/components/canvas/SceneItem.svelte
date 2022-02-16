<script>
    export let style = ''
    export let x = 0, y = 0, opacity = 1
    let props = $$restProps

    let addedStyle = `left:${x}px; top:${y}px; opacity:${opacity}`
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img style={style + addedStyle} {...props} />