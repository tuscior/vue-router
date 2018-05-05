<template>
  <component :is="routedComponent"></component>
</template>

<script>
/* eslint-disable */
import { listen } from './history'

export default {
  data() {
    return { current: window.location.pathname };
  },
  created() {
    listen((route, previous) => {
      this.current = route
    })
    window.addEventListener(
      "popstate",
      event => (this.current = window.location.pathname)
    );
  },
  computed: {
    routedComponent() {
      return this.$routes[this.current];
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
