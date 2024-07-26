<template>
  <h3>Search by map</h3>
  <p>Enter longitude</p>
  <CoordsApp :setCoords='enterlongi' />
  <p>Enter latitude</p>
  <CoordsApp :setCoords='enterlati' />
  <p> {{ error }} </p>
  <div class='butt' @click='searchMap'>Search</div>
  <div class='showMap'> 
    <yandex-map :settings="{ location: { center: [defaultLongi, defaultLati], zoom: 9 } }">
      <yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>
      <yandex-map-default-features-layer />
      <yandex-map-default-marker  :settings=" { coordinates: [defaultLongi, defaultLati] , color: '#f15339' }" />
  </yandex-map>
  </div>
</template>

<script>
import CoordsApp from './components/coordsApp.vue';
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
  YandexMapDefaultMarker,
  YandexMapDefaultFeaturesLayer,
} from "vue-yandex-maps";

export default {
  name: 'App',
  components: { CoordsApp, YandexMap, YandexMapControls, YandexMapDefaultSchemeLayer, YandexMapZoomControl, YandexMapDefaultMarker, YandexMapDefaultFeaturesLayer },
  data() {
    return {
      longi: '0',
      lati: '0',
      error:'',
      defaultLongi: '37.617644',
      defaultLati: '55.755819'
    }
  },
  methods: {
    enterlongi(val) {
      this.longi = val
    },
    enterlati(val) {
      this.lati = val
    },
    searchMap() {
      if(isNaN(this.longi) || isNaN(this.lati)) {
          this.error = 'Enter coordinates'
          return
      }
        this.error = ''
        this.defaultLongi = this.longi
        this.defaultLati = this.lati
        console.log(this.longi, this.lati)
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 30px;
    margin-bottom: 0;
  }
  .butt {
    width: 170px;
    height: 50px;
    border: 2px solid #0ba9c9;
    background: #f15339;
    color: #0ba9c9;
    margin: 0 auto;
    border-radius: 5px;
    line-height: 50px;
    cursor: pointer;
    margin-top: 50px;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  }
  .butt:hover {
    background: #0ba9c9;
    color: #f15339;
  }
  .butt:active { 
            transform: scale(0.98);
  }
  .showMap {
    width: 500px;
    height: 500px;
    border: 2px solid black;
    margin: 0 auto;
    margin-top: 20px;
  }
</style>
