<script lang="ts">
    import Cell from "./Cell.svelte";

    let x: number = 40
    let y: number = 40

    let data: number[][] = [];

    for(let i = 0 ; i < x ; i++){
        data[i] = [];
        for(let j = 0 ; j < y ; j++){
            data[i][j] = 0;
        }
    }

</script>

{#each data as row}
    <div class="flex">
        {#each row as el}
            <Cell state={el}/>
        {/each}
    </div>
{/each}
