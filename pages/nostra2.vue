<template>
    <div>
        <h4 id="hd">NOSTRA MAP (cdn js file)</h4>
        <div style="padding: 12px 0;">
            <a href="/">Home</a> | 
            <a href="/about">About</a>
        </div>
        <client-only>
        <div id="map" style="width: 100%; height: 500px"></div>
        </client-only>

    </div>
</template>

<script setup>
    import { ref, computed, onMounted, onBeforeUnmount, onBeforeMount, watch } from 'vue'
    useHead({ 
        title: 'Chat',
        script: [ 
            { 
                src: 'http://api.nostramap.com/nostraapi/v2.0?key=G1w18MziLOEEYaHGNpkoH3kP2kMEp8aIZzhTynA2jbT)ZNZSPgUmp9G8sKokARShX0P7Z(7V)ZmaU1dZPT9)uGm=====2',
                type:"text/javascript"
            }
        ]
    })

    onMounted(()=>{
        var nostra = window.nostra;
        nostra.onready = function () {
           console.log("nostra");

           var map = new nostra.maps.Map("map", {
                id: "mapTest",
                logo: true,
                scalebar: true,
                basemap: "streetmap",
                slider: true,
                level: 15,
                lat: 13.722944,
                lon: 100.530449,
                country: "TH"
            });

        };
    })
</script>

<style>
    .tmphd{ color: #ce0a0a; font-weight: 600; font-size: 20px;}
</style>