<template>
    <div>
        INDEX <br>
        <div style="padding: 12px 0;">
            <NuxtLink to="/about">ABOUT</NuxtLink> | 
            <NuxtLink to="/nostra">Nostra Map (nuxt link router)</NuxtLink> | 
            <a href="/nostra">Nostra Map (href link)</a>
        </div>

        
        <div ref="mapItem" class="map" id="mapTest" style=" width: 100%; height: 500px;"></div>
        <button @click="zoom = zoom+1,loadMap()">zoom</button>
        
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useAppStore } from '@/stores/index'
    import { useRoute , useRouter } from 'vue-router';
    import { loadScript, loadModules } from 'esri-loader';
    const route = useRoute()
    const router = useRouter()
    const store = useAppStore();


    const options = { version: '4.25', css: true };
    const mapItem = ref(null)
    console.log(mapItem.value);
    const zoom = ref(10);
    const loadMap = ()=>{
        // loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic'])
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/WebMap'],options)
            .then(([Map, MapView, WebMap]) => {
                // then we load a web map from an id
                const webmap = new WebMap({
                    portalItem: { // autocasts as new PortalItem()
                        id: 'f2e9b762544945f390ca4ac3671cfa72'
                    }
                });
                const view = new MapView({
                    map: webmap,
                    container: 'mapTest',
                    center: [100.573, 13.773],
                    zoom: zoom.value,
                    basemap: "streetmap",
                });
            })
            .catch(err => {
                // handle any errors
                console.error(err);
            });
    }


    onMounted(()=>{
        console.log("AAAAA");
        loadMap()
    })



</script>

<style>
@import url('https://js.arcgis.com/4.4/esri/themes/light/main.css');
</style>