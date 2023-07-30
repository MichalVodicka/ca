<script lang="ts">
  import Canvas from "../components/Canvas.svelte";
  $: ruleNumber = 0

</script>
<div class="flex flex-col">
    <div>
        Rule: <input type="number" class="bg-amber-200 rounded p-1" bind:value={ruleNumber} />
    </div>
    <br />
    <Canvas ruleNumber={ruleNumber}/>
</div>
