<template>
  <div class="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from './components/Main';
export default {
  name: 'app',
  components: {
    Main
  },
  methods: {}
};
</script>

<style lang="scss">
@import './assets/design/index.scss';

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
