<script lang="ts">
    import Cell from "./Cell.svelte";
    import ruleFac from "../data/rules";

    export let ruleNumber = 0
    $: data = [];


    type rule = (a: boolean, b: boolean, c: boolean) => number

    $: {
        let ic = 256
        let row: number[] = Array(ic).fill(false)
        row[ic / 2] = 1
        const rule = ruleFac(ruleNumber ?? 0)
        let output = []
        output.push(row)
        console.log(ruleNumber)

        for (let i = 0; i < 250; i++) {
            row = row.map((val, i, arr) => rule(!!arr[i - 1], !!val, !!arr[i + 1]))
            output.push(row)
        }

        console.log(output)
        data = output
    }

</script>

Rule {ruleNumber}
{#if data}
    {#each data as row}
        <div class="flex">
            {#each row as el}
                <Cell state={el}/>
            {/each}
        </div>
    {/each}
{/if}
