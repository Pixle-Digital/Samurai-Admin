<template>
  <div>
    <label>
      Location
      <gmap-autocomplete
        placeholder="This is a placeholder text"
        @place_changed="setPlace"
      >
      </gmap-autocomplete>
      <button @click="usePlace">Add</button>
      <button @click="reset">r</button>
    </label>
    <br />

    <Gmap-Map
      style="width: 600px; height: 300px"
      :zoom="zoom"
      :center="mapcenter"
    >
      <Gmap-Marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
      ></Gmap-Marker>
      <Gmap-Marker
        v-if="this.place"
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
      ></Gmap-Marker>
      <GmapCircle
        v-for="(pin, index) in markers"
        :key="index"
        :center="pin.position"
        :radius="10000"
        :visible="true"
        :options="{ fillColor: 'red', fillOpacity: 0.0 }"
      ></GmapCircle>
    </Gmap-Map>
  </div>
</template>

<script>
import vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
const googleOptions = {
  load: {
    key: "AIzaSyBiDIHWqvBHqo6ghr6nWMDstq5u8o1dkeU",
    libraries: "places",
    v: "3.exp",
  },
};

vue.use(VueGoogleMaps, googleOptions);
export default {
  data() {
    return {
      markers: [],
      place: null,
      zoom: 1,
      mapcenter: { lat: 0, lng: 0 }
    };
  },
  description: "Autocomplete Example (#164)",
  methods: {
     reset(){
        this.markers = [],
        this.place = null
    },
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      console.log(place)
      this.place = place;
    },
    usePlace(place) {
      if (this.place) {
        console.log(this.place)
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          },
        });
        this.place = null;
        this.zoom = 10
        this.mapcenter = { lat: this.place.geometry.location.lat(), lng: this.place.geometry.location.lng() }
      }
    },
  },
};
</script>