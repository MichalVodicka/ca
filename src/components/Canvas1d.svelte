<script lang="ts">
    import Cell from "./Cell.svelte";
    import ruleFac from "../data/rules1d";
    const defaultData = [1,50,60,101,105,125]
    export let ruleNumber: number
    let i: number[];

    // # of elements
    let ic = 126
    $: data = [] as number[][];
    $: firstRow = [] as number[];
    $: i = defaultData.filter(val => val <= ic);

    $: {
        const rule = ruleFac(ruleNumber ?? 0)
        let output: boolean[][] = []
        let row: boolean[] = Array(ic).fill(false)
        i.map((el:number) =>row[el]=1)
        firstRow = row
        output.push(row)
        for (let i = 0; i < 300; i++) {
            row = row.map((val, i, arr) => rule(!!arr[i - 1], !!val, !!arr[i + 1]))
            output.push(row)
        }

        data = output
    }
</script>

{#if data && firstRow}
    <div class="flex">
        {#each firstRow as el, idx}
            <Cell state={!!el} click={()=> {
                i=[i.includes(idx)?null:idx, ...i.filter(el=> el!==idx)].filter(Boolean)
                }
            }/>
        {/each}
    </div>
    <br />
    {#each data as row}
        <div class="flex">
            {#each row as el}
                <Cell state={!!el}/>
            {/each}
        </div>
    {/each}
{/if}
