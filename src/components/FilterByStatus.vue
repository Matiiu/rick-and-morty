<template>
    <div class="filter">
        <div class="item" @click="filter('')">
            All
        </div>
        <div class="item" @click="filter('Alive')">
            Alive
        </div>
        <div class="item" @click="filter('Dead')">
            Dead
        </div>
        <div class="item" @click="filter('unknow')">
            Unknown
        </div>
    </div>
</template> 


<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const filter = (status => store.dispatch('filterByStatus', status))

        return {
            filter
        }
    }
}
</script> 


<style lang="scss" scoped>
.filter {
     width: 40rem;
     margin: 0 auto;
     display: flex;
     justify-content: space-evenly;
     border-radius: 1rem;
     background-color: var(--background-card);
     overflow: hidden;

     .item {
         padding: 1rem .5rem;
         text-align: center;
         font-size: 1.85rem;
         cursor: pointer;
         color: var(--text-white);
         &:hover {
             color: var(--text-orange)
         }
     }
 }
</style>