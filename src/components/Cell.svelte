<script lang="ts">
    export let state:boolean = false
     let state2:boolean = false
</script>

<div class={`cell ${state && 'active'}`}></div>

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
