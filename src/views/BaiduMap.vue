<template>
  <baidu-map
    class="map"
    :center="{ lng: 106.4723, lat: 29.6323 }"
    :zoom="15"
    :scroll-wheel-zoom="true"
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
  <!-- 该百度地图容器不展示，仅用于获取当前位置 -->
  <!-- <baidu-map
    class="map"
    :scroll-wheel-zoom="true"
    :pinch-to-zoom="true"
    ak="Y2oj9NAs229CH4AgEgBvTY4MnFxGgYHX"
    @ready="handler"
  >
  </baidu-map> -->
  <!-- <template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
</template> -->
</template>
<script>
export default {
  data() {
    return {
      lng1: 106.631187,
      lat1: 29.718143,
    };
  },
  methods: {
    // 获取当前位置位置
    handler({ BMap, map }) {
      let that = this;
      var geolocation = new BMap.Geolocation();
      // var mapStyle = { style: "dark" };
      // map.setMapStyle(mapStyle);
      geolocation.getCurrentPosition(function (res) {
        that.currentLocation = [res.longitude, res.latitude];
        console.log("当前位置经纬度", that.currentLocation);
        this.lng1 = that.currentLocation[0];
        this.lat1 = that.currentLocation[1];
      });

      function changeMapStyle() {
        var mapStyle = {
          features: ["road", "building", "water", "land"], //隐藏地图上的"poi",
          style: "midnight",
        };
        map.setMapStyle(mapStyle);
      }
      changeMapStyle();
    },
    mounted() {
      console.log(that.currentLocation);
    },
  },
};
</script>
<style>
.map {
  position: absolute;
  left: 650px;
  top: 120px;
  width: 700px;
  height: 500px;
}
</style>