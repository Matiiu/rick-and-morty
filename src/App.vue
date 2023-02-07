<template>
  <div>
    <h1>Rick And Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>

</template>

<script>
import ListCharacters from '@/components/ListCharacters';
import FilterByStatus from '@/components/FilterByStatus';
import FilterByName from '@/components/FilterByName';

export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #F5F5F5;
  --text-gray: #C0C0C0;
  --text-orange: #FF9800;
  --primary-font: font-family: 'Roboto', sans-serif;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background-body);
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: var(--primary-font);
  margin: 0;
  padding: 0;  
}

h1 {
  margin: 2rem 0;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 4rem;
  color: var(--text-white);
  font-family: var(--primary-font);
}

.container {
  width: min(90%, 130rem);
  margin: 0 auto;
}

img {
  width: 100%;
}
</style>
