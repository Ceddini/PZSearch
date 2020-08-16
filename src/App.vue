<template>
  <div id="app" class="mb-12">
    <header class="pz-title bg-green-pz">
      <span>PZSearch</span>
    </header>
    <div class="pz-heading bg-stripe text-center">
      Planet Zoo Search
    </div>
    <main class="container mx-auto">
      <router-view></router-view>
    </main>

    <footer class="fixed bottom-0 left-0 right-0 p-2 bg-stripe text-white flex flex-wrap">
      <span class="w-full mb-2 md:w-auto md:mb-0 md:mr-2 text-xs">This site uses information and images from the
      <a href="https://planetzoo.fandom.com/wiki/Planet_Zoo_Wiki" target="_blank"
         class="text-gray-600 hover:text-blue-400">Planet Zoo Fandom Wiki</a>.
      </span>

      <span class="w-full mb-2 md:w-auto md:mb-0 md:mr-2 text-xs">© 2020 Cedric Schmitt.</span>

      <span class="w-full md:w-auto text-xs">I am in no way affiliated to Planet Zoo or Frontier Developments.</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

body {
  margin: 0;
}

.pz-title {
  font-size: 18pt;
  font-weight: bold;
  color: white;
  padding: 20px;
}

.pz-heading {
  padding: 1em;
  font-size: 22pt;
  color: white;
  font-weight: bold;
}

.bg-stripe {
  background-color: #072736;
  background-image: url('/static/img/zebra.svg');
  background-size: 200px 200px;
  background-repeat: repeat;
  line-height: 1;
}
.bg-green-pz {
  background-color: #139b6d;
}
.bg-gray-pz {
  background-color: #072736;
}
.text-gray-pz {
  color: #072736;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}
</style>
