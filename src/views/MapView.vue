<template>
  <div class="mapView">
    <baidu-map
      class="mapBig"
      :center="{ lng: 106.4723, lat: 29.6323 }"
      :zoom="15"
      :scroll-wheel-zoom="true"
      :mapStyle="mapStyle"
      :showAddressBar="true"
      :autoLocation="true"
    >
      <bm-marker
        :position="{ lng: 106.4723, lat: 29.6323 }"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-label
          content=""
          :labelStyle="{ color: 'red', fontSize: '24px' }"
          :offset="{ width: -35, height: 30 }"
        />
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "MapView",
  data() {
    return {
      mapStyle: {
        styleJson: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: {
              hue: "#007fff",
              // hue: "#1a1f29",
              saturation: 89,
            },
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#ffffff",
              // color: "#1a1f29",
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
.mapView {
  position: absolute;
  top: 0;
  left: 120px;
  width: 1400px;
  height: 700px;
}

.mapBig {
  width: 1400px;
  height: 700px;
}
</style>