<template>
  <div>
    <header>
      <h1>Cluster</h1>
      <router-link to="/climbs/new">Add</router-link>
    </header>
    <section>
      <filters></filters>
    </section>
  </div>
</template>

<script>
import Filters from './filters/filters.vue';

export default {

  components: {
    filters: Filters
  }
}
</script>
