<template>
  <div class="search mt-4 text-left">
    <div class="w-full flex flex-col">
      <div id="filters">
        <div class="p-3 text-lg bg-gray-pz md:rounded-t text-white shadow">
          <span>Filters</span>
        </div>

        <transition name="transFade" mode="out-in">
          <div class="bg-gray-pz shadow text-white md:rounded-b" v-if="filters_visible" key="1">
            <form @submit.prevent="updateTable()" class="border-t border-gray-800 flex flex-wrap">
              <div id="filters_continents" class="w-full md:w-1/2 p-3">
                <h3 class="mb-1">Continents</h3>
                <div class="border-b border-gray-800 mb-3"></div>

                <div class="flex flex-col">
                  <label for="africa" class="mb-2">
                    <input type="checkbox"
                           id="africa"
                           class=""
                           value="africa"
                           v-model="continents"
                           @change="updateTable"
                    >
                    Africa
                  </label>
                  <label for="asia" class="mb-2">
                    <input type="checkbox"
                           id="asia"
                           class=""
                           value="asia"
                           v-model="continents"
                           @change="updateTable"
                    >
                    Asia
                  </label>
                  <label for="europe" class="mb-2">
                    <input type="checkbox"
                           id="europe"
                           class=""
                           value="europe"
                           v-model="continents"
                           @change="updateTable"
                    >
                    Europe
                  </label>
                  <label for="north_america" class="mb-2">
                    <input type="checkbox"
                           id="north_america"
                           class=""
                           value="north_america"
                           v-model="continents"
                           @change="updateTable"
                    >
                    North America
                  </label>
                  <label for="oceania" class="mb-2">
                    <input type="checkbox"
                           id="oceania"
                           class=""
                           value="oceania"
                           v-model="continents"
                           @change="updateTable"
                    >
                    Oceania
                  </label>
                  <label for="south_america">
                    <input type="checkbox"
                           id="south_america"
                           class=""
                           value="south_america"
                           v-model="continents"
                           @change="updateTable"
                    >
                    South America
                  </label>
                </div>
              </div>
              <div id="filters_biomes" class="w-full md:w-1/2 p-3">
                <h3 class="mb-1">Biomes</h3>
                <div class="border-b border-gray-800 mb-3"></div>

                <div class="flex flex-col">
                  <label for="aquatic" class="mb-2">
                    <input type="checkbox"
                           id="aquatic"
                           class=""
                           value="aquatic"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Aquatic
                  </label>
                  <label for="desert" class="mb-2">
                    <input type="checkbox"
                           id="desert"
                           class=""
                           value="desert"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Desert
                  </label>

                  <label for="grassland" class="mb-2">
                    <input type="checkbox"
                           id="grassland"
                           class=""
                           value="grassland"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Grassland
                  </label>

                  <label for="taiga" class="mb-2">
                    <input type="checkbox"
                           id="taiga"
                           class=""
                           value="taiga"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Taiga
                  </label>

                  <label for="temperate" class="mb-2">
                    <input type="checkbox"
                           id="temperate"
                           class=""
                           value="temperate"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Temperate
                  </label>

                  <label for="tropical" class="mb-2">
                    <input type="checkbox"
                           id="tropical"
                           class=""
                           value="tropical"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Tropical
                  </label>

                  <label for="tundra">
                    <input type="checkbox"
                           id="tundra"
                           class=""
                           value="tundra"
                           v-model="biomes"
                           @change="updateTable"
                    >
                    Tundra
                  </label>
                </div>
              </div>

              <div class="w-full p-2">
                  <label for="habitatType" class="mb-1">Habitat Type</label>
                  <div class="border-b border-gray-800 mb-3"></div>
                  <select name="habitatType" id="habitatType" v-model="habitatType" @change="updateTable"
                  class="w-full p-2 bg-transparent outline-none">
                    <option value="both" class="text-black">Both</option>
                    <option value="habitat" class="text-black">Habitat</option>
                    <option value="exhibit" class="text-black">Exhibit</option>
                  </select>
              </div>

              <button type="submit"
                     class="w-full mt-8 bg-transparent p-3 md:border-b border-t
                     border-gray-800 hover:bg-gray-900 outline-none cursor-pointer"
                      @click="continents = []; biomes = []; habitatType = 'both'; updateTable"
              >
                Clear Filter
              </button>
            </form>

            <div class="cursor-pointer p-3 "
                 @click="filters_visible = !filters_visible"
            >
              Click here to hide
            </div>
          </div>


          <div class="bg-gray-pz cursor-pointer p-3 border-t border-gray-800 rounded-b text-white shadow" v-else key="2"
               @click="filters_visible = !filters_visible"
          >
            Click here to show
          </div>
        </transition>
      </div>


      <div class="bg-white md:rounded shadow mt-4 p-3" v-if="error === ''">

        <div v-if="data === null">Loading...</div>

        <div v-else v-for="(animal, index) in filtered_data" class="flex flex-wrap items-center" v-bind:class="{ 'mb-3': index !== filtered_data.length - 1 }" :key="animal.id">

          <div class="w-full sm:mb-2 lg:mb-0 lg:w-1/3 flex flex-wrap items-center">

            <img
              :src="animal.img"
              alt=""
              width="64"
              height="44"
              class="mr-4"
              v-if="animal.img"
            >

            <img src="https://via.placeholder.com/64x44" alt="No Image" width="64" height="44" class="mr-4" v-else>

            <div>
              {{ animal.name }}
            </div>
          </div>

          <div class="w-full lg:w-2/3 border-b border-gray-300 md:border-0 flex flex-wrap pb-2 lg:pb-0">
            <div class="w-full md:w-1/2 flex flex-col flex-wrap">
              <div>
                <span class="text-gray-pz font-bold">Continents: </span>
                {{ animal.continents.join(', ') }}
              </div>
              <div>
                <span class="text-gray-pz font-bold">Biomes: </span>
                {{ animal.biomes.join(', ') }}
              </div>
            </div>

            <div class="w-full md:w-1/2 flex flex-wrap">
              {{ animal.is_habitat ? 'Habitat' : 'Exhibit' }}
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white md:rounded shadow mt-4 p-3" v-else>{{ error }}</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      error: '',
      data: null,
      filtered_data: null,
      filters_visible: true,
      habitatType: 'both',
      continents: [],
      biomes: [],
    };
  },
  methods: {
    fetchAnimals() {
      this.$http.get('animals').then((response) => {
        if (response.status !== 200) {
          this.error = `Could not fetch animal data. Error Code ${response.status}`;
        } else {
          this.data = response.data;
          this.filtered_data = this.data;
        }
      }).catch((error) => {
        this.error = `Could not fetch animal data. ${error}`;
      });
    },
    updateTable() {
      const continentFilter = a => a.continents.some(
        c => this.continents.includes(c.toLowerCase().replace(' ', '_')));

      const biomeFilter = a => a.biomes.some(
        b => this.biomes.includes(b.toLowerCase().replace(' ', '_')));

      const allFilter = a => a.continents.some(
        c => this.continents.includes(c.toLowerCase().replace(' ', '_'))) && a.biomes.some(
        b => this.biomes.includes(b.toLowerCase().replace(' ', '_')));

      let tempData = null;

      if (this.continents.length > 0 && this.biomes.length > 0) {
        tempData = this.data.filter(allFilter);
      } else if (this.continents.length > 0) {
        tempData = this.data.filter(continentFilter);
      } else if (this.biomes.length > 0) {
        tempData = this.data.filter(biomeFilter);
      } else {
        tempData = this.data;
      }
      if (this.habitatType !== 'both') {
        this.filtered_data = tempData.filter(a => a.is_habitat === (this.habitatType === 'habitat'));
      } else {
        this.filtered_data = tempData;
      }
    },
  },
  mounted() {
    this.fetchAnimals();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.transFade-enter-active, .transFade-leave-active {
  transition: all .5s;
  max-height: 800px;
}
.transFade-enter, .transFade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scale(0.98);
}
.transFade-enter {
  transform: scale(0.98);
}
.transFade-leave-active {
  transform: scale(0.98);
}
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all .5s;
  max-height: 800px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0;
}
</style>
