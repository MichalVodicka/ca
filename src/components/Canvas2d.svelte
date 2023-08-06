<script lang="ts">
    import Cell from "./Cell.svelte";

    let x: number = 40
    let y: number = 40

    let genId = 0;
    let initState: number[][];
    let state: Map<number, number[]> = new Map(Array(x).map((el, idx) => [idx,[]]));

    state.set(5,[1,9,18,25,35])

    let data: number[][] = [];

    for(let i = 0 ; i < x ; i++){
        data[i] = [];
        for(let j = 0 ; j < y ; j++){
            data[i][j] = 0;
        }
    }
</script>

{#each data as row, iRow}
    <div class="flex">
        {#each row as cell, iCell}
            <Cell state={state.get(iRow).includes(iCell)}/>
        {/each}
    </div>
{/each}
