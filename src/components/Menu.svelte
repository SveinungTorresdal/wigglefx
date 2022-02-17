<script>
	import Accordion from './utils/Accordion.svelte'
	import AccordionItem from './utils/AccordionItem.svelte'
	import CanvasConfig from './canvas/CanvasConfig.svelte';
    import SceneConfig from './scene/SceneConfig.svelte'

    let added = ''
    export { added as class }
</script>

<aside class="p-4 overflow-auto {added}">
    <h2>
        Wiggle✨Fx
    </h2>
    <p>
        Got an OBS setup that needs way too many things on it? And you, for some reason, want to animate 'em? Look no further. 
        This is a product used to create animations, which can be dropped into <a href="https://github.com/SveinungTorresdal/utiliwiggle">Wiggleback</a>.
    </p>
    <Accordion class="accordion-flush" id="wiggle-menu">
        <AccordionItem id="canvas" title="🎨 Canvas">
            <CanvasConfig />
        </AccordionItem>
        <AccordionItem id="scene" title="🖼 Scene" shown>
            <SceneConfig />
        </AccordionItem>
        <AccordionItem id="load" title="📋 Import">
            <label for="importFile" class="form-label">Load existing <strong>Wiggle✨Fx</strong> from JSON file.</label>
            <input class="form-control" type="file" id="importFile">
        </AccordionItem>
        <AccordionItem id="save" title="💾 Download">
            <p class="mb-2">Save <strong>Wiggle✨Fx</strong> to JSON file.</p>
            <button class="btn btn-success" id="exportFile">Download</button>
        </AccordionItem>
    </Accordion>
</aside>