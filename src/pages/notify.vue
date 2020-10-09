
<template>

<div >
  

 <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Notify</h5>
     </div>
     <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
   <div style="padding: 10px; font-size: 29px; color: darkgrey;">|
   </div>
     <q-breadcrumbs class="text-brown hiddensection" >
       <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
 <q-breadcrumbs-el  icon="home" />
      <q-breadcrumbs-el label="Quasar Plugin"  />
      <q-breadcrumbs-el label="Notify" />
    </q-breadcrumbs>

   </div>


   <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
         Notify is a Quasar plugin that can display animated messages (floating above everything in your pages) to users 
         in the form of a notification.
      </q-item-label>
      </q-item-section>
   </div>
 
    <!------------------- Basic code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Basic</div>
        <div class="text-subtitle2">

    <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif" label="Show Notification" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Basic code End----------- -->

    <!------------------- Caption code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Caption</div>
        <div class="text-subtitle2">

   <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif1" label="Show with caption" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Caption code End----------- -->

      <!------------------- With icon code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >With icon</div>
        <div class="text-subtitle2">

    <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif2" label="Show Notification" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- With icon code End----------- -->

  <!------------------- With avatar code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >With avatar</div>
        <div class="text-subtitle2">

   <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif3" label="Show Notification" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Caption code End----------- -->


   <!------------------- With spinner code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >With spinner</div>
        <div class="text-subtitle2">
<div class="q-pa-md">
    <div class="row q-gutter-sm">
      <q-btn color="purple" @click="showDefault" label="Default spinner" />
      <q-btn color="purple" @click="showCustom" label="Custom spinner" />
    </div>
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- with spinner code End----------- -->

   <!------------------- Multiline code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Multiline</div>
        <div class="text-subtitle2">

    <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif4" label="Show Notification" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Multiline code End----------- -->


   <grouping/>
   <timeoutProgress/>
   <updatable/>
   <outOfBox/>
   
<positioning/>


  
  </div>
  
</template>

<script>
import { Notify } from 'quasar'
import { QSpinnerGears } from 'quasar'

import positioning from 'components/notify/positioning.vue';
 import grouping from 'components/notify/grouping.vue';
 import timeoutProgress from 'components/notify/timeoutProgress.vue';
 import updatable from 'components/notify/updatable.vue';
  import outOfBox from 'components/notify/outOfBox.vue';
 

 
export default {
components:{
positioning,
grouping,
timeoutProgress,
updatable,
outOfBox


},
 methods: {
    showNotif () {
      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },
    //caption
    showNotif1 () {
      this.$q.notify({
        message: 'Jim pinged you.',
        caption: '5 minutes ago',
        color: 'secondary'
      })
    },
    showNotif2 () {
      this.$q.notify({
        message: 'Jim pinged you.',
        icon: 'announcement'
      })
    },
    showNotif3 () {
      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
      })
    },
    showDefault () {
      this.$q.notify({
        spinner: true,
        message: 'Please wait...',
        timeout: 2000
      })
    },

    showCustom () {
      this.$q.notify({
        spinner: QSpinnerGears,
        message: 'Working...',
        timeout: 2000
      })
    },
    showNotif4 () {
      this.$q.notify({
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.',
        color: 'primary',
        multiLine: true,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } }
        ]
      })
    }
  
  
  }
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;     */
}

#rcorners3{
  padding-left: 30px;
  padding-right: 30px;
    font-size: 20px;
    color: rgb(148, 146, 146);
}
code{
  background: #eee;
    padding: .1rem .3rem;
    border-radius: 3px;
}

.text-h6{
  /* color: rgb(94 92 92); */
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>