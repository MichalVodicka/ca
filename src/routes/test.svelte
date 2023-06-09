<script lang="ts">
    import Canvas from "../components/Canvas.svelte";
    $: ruleNumber = 0

</script>
<div class="flex flex-col">
    Rule: {ruleNumber} <input type="number" bind:value={ruleNumber} />
    <Canvas ruleNumber={ruleNumber}/>
</div>
