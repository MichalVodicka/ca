<script lang="ts">
  import Canvas from "../components/Canvas.svelte";
  import H1 from "typography/H1.svelte";
  $: ruleNumber = 0

</script>

<H1>1D ca</H1>

<div class="flex flex-col">
    <div>
        Rule: <input type="number" class="bg-amber-200 rounded p-1" bind:value={ruleNumber} />
    </div>
    <br />
    <Canvas ruleNumber={ruleNumber}/>
</div>
