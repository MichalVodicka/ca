<script lang="ts">
    import { params } from '@roxi/routify'
    import Cell from "../components/Cell.svelte";
    import Canvas from "../components/Canvas.svelte";
    // import ruleFac from "../data/rules";
    //
    // let ic = 64
    // let row: number[] = Array(ic).fill(false)
    // row[ic / 2] = 1
    //
    // type rule = (a: boolean, b: boolean, c: boolean) => number
    $: ruleNumber = 0
    // let rule: rule = ruleFac(ruleNumber??0)
    // let output = []
    // output.push(row)
    // for (let i = 0; i < ic; i++) {
    //     row = row.map((val, i, arr) => rule(!!arr[i - 1], !!val, !!arr[i + 1]))
    //     output.push(row)
    // }

    // const handler= (ev: )

</script>
<div class="flex flex-col">
    Rule: {ruleNumber} <input type="number" bind:value={ruleNumber} />
    <Canvas ruleNumber={ruleNumber}/>
</div>
