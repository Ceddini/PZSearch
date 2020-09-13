<template>
  <div class="flex flex-wrap items-center">
    <div class="w-full flex flex-wrap items-center">
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

        <div class="flex-1 lg:pr-2">
          <span class="break-words">{{ animal.name }}</span>
          <span
            v-if="dlc"
            :title="dlc.name"
            class="rounded-full whitespace-no-wrap w-auto px-2 py-1 mt-1"
            style="font-size: 8pt;"
            v-bind:style="{ backgroundColor: dlc.color, color: dlc.text}"
          >
                  {{ dlc.name }}
                </span>
        </div>
      </div>

      <div class="w-full lg:w-2/3 border-b border-gray-300 md:border-0 flex flex-wrap pb-2 lg:pb-0">
        <div class="w-full md:w-2/4 flex flex-col flex-wrap">
          <div>
            <span class="text-gray-pz font-bold">Continents: </span>
            {{ animal.continents.join(', ') }}
          </div>
          <div>
            <span class="text-gray-pz font-bold">Biomes: </span>
            {{ animal.biomes.join(', ') }}
          </div>
        </div>

        <div class="w-full md:w-1/4 flex flex-wrap">
          {{ animal.is_habitat ? 'Habitat' : 'Exhibit' }}
        </div>

        <div class="w-full md:w-1/4 flex flex-wrap justify-end">
          <span @click="toggleExpansion" class="py-2 px-4 cursor-pointer rounded-full bg-gray-pz text-white">{{ (expanded) ? 'Hide' : 'Show' }}</span>
        </div>
      </div>
    </div>


    <transition name="fadeHeight" mode="out-in">
      <div v-if="expanded" class="w-full mt-2 rounded bg-gray-200">
        <div class="w-full flex flex-wrap m-2">
          <div v-if="animal.is_habitat" class="w-full md:w-1/2 flex flex-col flex-wrap">
            <div class="mb-1"><span class="text-gray-pz font-bold">Land Area:</span> {{ animal.land_area }} m²</div>
            <div class="mb-1"><span class="text-gray-pz font-bold">Water Area:</span> {{ animal.water_area }} m²</div>
            <div class="mb-1 md:mb-0"><span class="text-gray-pz font-bold">Climbing Area:</span> {{ animal.climbing_area }} m²</div>
          </div>
          <div class="w-full md:w-1/2 flex flex-col flex-wrap">
            <div class="mb-1"><span class="text-gray-pz font-bold">Temp. Min.:</span> {{ animal.temperature_min }} °C</div>
            <div class="mb-1"><span class="text-gray-pz font-bold">Temp. Max.:</span> {{ animal.temperature_max }} °C</div>
          </div>
        </div>
      </div>
    </transition>


  </div>
</template>

<script>
export default {
  name: 'Animal',
  props: ['animal', 'dlc'],
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleExpansion() {
      this.expanded = !this.expanded;
    },
    dlcName(dlc) {
      return dlc.replace(/_/g, ' ').replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    },
    dlcColor(dlc) {
      switch (dlc) {
        default:
          return null;
      }
    },
  },
};
</script>

<style scoped>
.deluxe-bg-color { background-color: gold; }
.arctic_pack-bg-color { background-color: #9bf0ff; }
.south_america_pack-bg-color { background-color: #c27620; color: white; }

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all .5s;
  max-height: 400px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0;
}
</style>
