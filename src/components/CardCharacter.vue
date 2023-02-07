<template>
    <div class="character">
        <img :src="character.image" :alt="character.name">
        <div class="character__info">
            <h3>{{ character.name }}</h3>
            <div class="status">
                <span
                    :class="character.status === 'Alive' ? 'alive' : character.status === 'Dead' ? 'dead' : 'default'">

                </span>
                <span>
                    {{ character.status }} - {{ character.species }}
                </span>
            </div>
            <div class="origin">
                <span>Origin: {{ character.origin.name }}</span>
            </div>
            <div class="location">
                <span>Location: {{ character.location.name }}</span>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    props: ['character']
}
</script> 

<style lang="scss" scoped>
.character {
    background-color: var(--background-card);
    border-radius: 2rem;
    box-shadow: 0 0 1rem .1rem var(--background-card);
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;

    &:hover {
        transform: scale(1.05);

        h3 {
            color: var(--text-orange);
        }
    }

    h3 {
        margin-bottom: .5rem;
        color: var(--text-white);

    }

    span {
        color: var(--text-white);
    }

    &__info {
        padding: 1.5rem;

        .status {
            display: flex;
            align-items: center;
            margin-bottom: .5rem;

            span {
                color: var(--text-gray);

                &:first-child {
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    margin-right: .5rem;
                }
            }

            .alive {
                background-color: green;
            }

            .dead {
                background-color: red;
            }

            .default {
                background-color: white;
            }
        }

        .origin {
            margin-bottom: .5rem;

            span {
                color: var(--text-gray);
            }
        }
    }
}
</style>