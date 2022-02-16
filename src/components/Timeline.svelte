<script>
    import Canvas from "./canvas/Canvas.svelte";
    import Accordion from "./utils/Accordion.svelte";
    import AccordionItem from "./utils/AccordionItem.svelte";
</script>

<Accordion class="accordion-flush" id="wiggle-timeline">
    <AccordionItem id="content" title="🎥 Timeline">
    <div class="row flex-row justify-content-center align-items-center">
        <div class="col-2">
            <Canvas class="m-0 border border rounded p-4" canvas-class="bg-light w-100 h-auto" />
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
            <button class="btn btn-outline-success">
                +
            </button>
        </div>
    </div>
    </AccordionItem>
</Accordion>