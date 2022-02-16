<script>
    import Canvas from "./canvas/Canvas.svelte";
    import Accordion from "./utils/Accordion.svelte";
    import AccordionItem from "./utils/AccordionItem.svelte";

    import { width, height } from '../store/canvas.store'

    let buttonAttr = {
        style: `aspect-ratio:${$width/$height}`
    }
</script>

<Accordion class="accordion-flush" id="wiggle-timeline">
    <AccordionItem id="content" title="🎥 Timeline">
    <div class="row flex-row justify-content-center align-items-center">
        <div class="col-2">
            <Canvas class="h-auto m-0 border bg-light border rounded">
                <p class="mb-0 text-center">
                    <strong class="text-muted">Key #1</strong><br>
                    Description
                </p>
            </Canvas>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
            <button class="btn btn-outline-success">
                +
            </button>
        </div>
    </div>
    </AccordionItem>
</Accordion>