<script lang="ts">
    export let state:boolean = false
    export let click:Function = null
</script>

<div class={`cell ${state && 'active'} ${click && 'click'}`} on:click={click}></div>

<style lang="scss">
    .cell{
      width: calc(.3rem + 2px);
      height: calc(.3rem + 2px);
      &.active{
        background: #000;
      }
      &.click{
        border: 1px solid red;
        height: .3rem;
        cursor: pointer;
      }
    }
</style>
