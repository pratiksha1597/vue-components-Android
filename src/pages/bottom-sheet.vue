
<template>

<div >
  
 <!------------------- Tital and Path(breadcrumbs) code Start ----------->
 <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Bottom Sheet</h5>
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
      <q-breadcrumbs-el label="Bottom Sheet" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->

   <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
          Bottom Sheets slide up from the bottom edge of the device screen, 
          and display a set of options with the ability to confirm or cancel an action.
      </q-item-label>
      </q-item-section>
   </div>
 
    <!------------------- List And Grid code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >List And Grid</div>
        <div class="text-subtitle2">

     <div class="q-pa-md q-gutter-sm">
    <q-btn no-caps push color="primary" label="List BottomSheet" @click="show()" />
    <q-btn no-caps push color="white" text-color="primary" label="Grid BottomSheet" @click="show(true)" />
  </div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- List And Grid code End----------- -->

  
  </div>
  
</template>

<script>
import { BottomSheet } from 'quasar'
export default {
methods: {
    show (grid) {
      this.$q.bottomSheet({
          //dark: true,
        message: 'Bottom Sheet message',
        grid,
        actions: [
          {
            label: 'Drive',
            img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
            id: 'drive'
          },
          {
            label: 'Keep',
            img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
            id: 'keep'
          },
          {
            label: 'Google Hangouts',
            img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
            id: 'calendar'
          },
          {
            label: 'Calendar',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
            id: 'calendar'
          },
          {},
          {
            label: 'Share',
            icon: 'share',
            id: 'share'
          },
          {
            label: 'Upload',
            icon: 'cloud_upload',
            color: 'primary',
            id: 'upload'
          },
          {},
          {
            label: 'John',
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            id: 'john'
          }
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
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