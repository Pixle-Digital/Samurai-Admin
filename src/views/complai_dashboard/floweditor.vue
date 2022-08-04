<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.maps')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-form novalidate>
          <b-row>
            <b-colxx xxs="4">
              <b-form-group label="Address">
                <gmap-autocomplete
                  style="
                    height: initial;
                    border-radius: 0.1rem;
                    outline: initial !important;
                    -webkit-box-shadow: initial !important;
                    box-shadow: initial !important;
                    font-size: 0.8rem;
                    padding: 0.5rem 0.75rem;
                    line-height: 1;
                    border: 1px solid #424242;
                    background: #232223;
                    color: #8f8f8f;
                    width: 100%;
                  "
                  @place_changed="setPlace"
                ></gmap-autocomplete>
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="3">
              <b-form-group label="Radius in Miles">
                <b-form-input v-model="radius" />
              </b-form-group>
            </b-colxx>
          </b-row>
        </b-form>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <b-card :title="$t('maps.google')" class="mb-4">
          <GmapMap
            :center="center"
            :zoom="13"
            map-type-id="roadmap"
            class="map-item"
            :options="{
              zoomControl: true,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              disableDefaultUI: false,
            }"
          >
            <GmapCircle
              :center="center"
              :radius="radius"
              :visible="true"
              :options="{ fillColor: 'red', fillOpacity: 0.0 }"
            ></GmapCircle>
            <!-- <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :radius="100000"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            /> -->
          </GmapMap>
        </b-card>
      </b-colxx>

      <!-- <b-colxx xxs="12">
        <b-card :title="$t('maps.yandex')" class="mb-4">
          <yandex-map :coords="coords" @click="onClick" zoom="9" class="map-item" map-type="map">
            <ymap-marker marker-id="123" :coords="coords" :balloon-template="balloonTemplate"></ymap-marker>
          </yandex-map>
        </b-card>
      </b-colxx> -->
    </b-row>
  </div>
</template>
<script>
import vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import ymapPlugin from "vue-yandex-maps";

const yandexOptions = {
  apiKey: "", // '' by default
  lang: "en-US", // 'ru_RU' by default
  version: "2.1", // '2.1' by default
};
const googleOptions = {
  load: {
    key: "AIzaSyBiDIHWqvBHqo6ghr6nWMDstq5u8o1dkeU",
    libraries: "places",
    v: "3.exp",
  },
};

vue.use(ymapPlugin, yandexOptions);
vue.use(VueGoogleMaps, googleOptions);

export default {
  data() {
    return {
      currentPlace: null,
      center: { lat: -34.397, lng: 150.644 },
      radius: "",
      markers: [
        {
          position: { lat: -34.397, lng: 150.644 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
      `;
    },
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    initMap() {
      //center marker from circle
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: this.property,
      });
      const circle = new google.maps.Circle({
        map: map,
        trokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        radius: this.diameter,
        center: this.property,
      });
      const marker = new google.maps.Marker({
        position: this.property,
        map: map,
      });
    },

    onClick(e) {
      this.coords = e.get("coords");
    },
  },
};
</script>
<style>
.ymap-container {
  height: 400px;
}
</style>
