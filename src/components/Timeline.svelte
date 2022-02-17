<script>
    import Canvas from "./canvas/Canvas.svelte";
    import Accordion from "./utils/Accordion.svelte";
    import AccordionItem from "./utils/AccordionItem.svelte";
</script>

<Accordion class="accordion-flush" id="wiggle-timeline">
    <AccordionItem id="content" title="🎥 Timeline">
    <div class="row flex-row justify-content-center align-items-center">
        {#each [0, 1, 2] as item}
        <div class="col-2">
            <Canvas
                class="m-0 border border rounded p-4 bg-light"
                canvas-class="bg-secondary w-100 h-auto rounded-1"
                slot-class="d-flex flex-column justify-content-end align-items-stretch"
            >
                <nav class="d-flex flex-row justify-content-around">
                    <div class="btn-group m-2" role="group" aria-label="Basic example">
                        <button class="btn btn-light">
                            <i class="bi bi-arrow-left-short"></i>
                        </button>
                        <button class="btn btn-light">
                            <i class="bi bi-bookmark"></i>
                        </button>
                        <button class="btn btn-light">
                            <i class="bi bi-arrow-right-short"></i>
                        </button>
                    </div>
                    <button class="btn btn-danger m-2">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </nav>
            </Canvas>
        </div>
        {/each}
        <div class="col-1 d-flex align-items-center justify-content-center">
            <button class="btn btn-outline-success">
                <i class="bi bi-plus-lg"></i>
            </button>
        </div>
    </div>
    </AccordionItem>
</Accordion>