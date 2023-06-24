<script lang="ts">
    export let state:boolean = false
    export let click:Function = ()=>console.log('nothing')
</script>

<div class={`cell ${state && 'active'}`} on:click={click}></div>

<style lang="scss">
    .cell{
      width: .5rem;
      height: .5rem;
      border: 1px dotted #aaa;
      &.active{
        background: #000;
      }
    }
</style>
