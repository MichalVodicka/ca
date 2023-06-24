<script lang="ts">
    import Cell from "./Cell.svelte";
    import ruleFac from "../data/rules";

    let ruleNumber = 126
    $: data = [];
    $: firstRow = [];
    $: i = [1,50,60,101,105,127,128,129,130,131,135];

    let ic = 126
    type rule = (a: boolean, b: boolean, c: boolean) => number

    $: {
        let def = [1,50,60,101,105,127,128,129,130,131,135]
        i = def
    }


    $: {
        const rule = ruleFac(ruleNumber ?? 0)
        let output = []
        let row: number[] = Array(ic).fill(false)
        i.map(el=>row[el]=1)
        firstRow = row
        output.push(row)
        for (let i = 0; i < 250; i++) {
            row = row.map((val, i, arr) => rule(!!arr[i - 1], !!val, !!arr[i + 1]))
            output.push(row)
        }

        data = output
    }

</script>

{#if data && firstRow}
    <div class="flex">
        {#each firstRow as el, idx}
            <Cell state={el} click={()=> i.push(idx) }/>
        {/each}
    </div>
    {#each data as row}
        <div class="flex">
            {#each row as el}
<!--                <Cell state={el}/>-->
            {/each}
        </div>
    {/each}
{/if}
