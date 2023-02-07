<template>
    <div class="characters container">        
        <div class="characters_item" v-for="character in characters" :key="character.id">
         <CardCharacter :character="character" />
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from '@/components/CardCharacter'

export default {
    components: {
        CardCharacter
    },
    setup() {
        const store = useStore()
        const characters = computed(() => store.state.characterFilter)
        onMounted(() => store.dispatch('getCharacters'))
        return {
            characters
        }
    }

}
</script>

<style lang="scss" scoped>
.characters {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;   
    margin-block: 3rem;    
}
</style>