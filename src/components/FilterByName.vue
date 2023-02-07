<template>
    <div class="search">
        <input 
        type="text" 
        placeholder="Search by Name" 
        @keyup="filter()" 
        v-model="name"
        />
    </div>
</template> 


<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        const name = ref('')

        const filter = () => store.dispatch('filterByName', name.value)

        return {
            name,
            filter
        }
    }
}
</script> 


<style lang="scss" scoped>
.search {
     width: 40rem;
     margin: 3rem auto;

     input {
         height: 5.3rem;
         width: 40rem;
         border: none;
         border-radius: 10px;
         padding: 0 .5rem;
         text-align: center;
         outline-color: rgba(33, 33, 248, 0.87);
     }
 }
</style>