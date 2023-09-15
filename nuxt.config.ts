// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         title: 'Honda Electric Swap Station',
         // titleTemplate: 'Honda Electric Swap Station',
         htmlAttrs: {
               lang: 'en',
         },
         meta: [
               { charset: 'utf-8' },
               {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
               },
               { hid: 'description', name: 'description', content: '' },
               { name: 'format-detection', content: 'telephone=no' },
         ],
         link: [
               { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
               {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
               },
         ],
      //    script: [ 
      //       { 
      //           src: 'http://api.nostramap.com/nostraapi/v2.0?key=G1w18MziLOEEYaHGNpkoH3kP2kMEp8aIZzhTynA2jbT)ZNZSPgUmp9G8sKokARShX0P7Z(7V)ZmaU1dZPT9)uGm=====2',
      //           type:"text/javascript"
      //       }
      //   ]
      },
   },
   devtools: { enabled: true },
   modules: ['@pinia/nuxt'],
})
