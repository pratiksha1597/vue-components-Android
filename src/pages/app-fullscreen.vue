
<template>

<div >
     <!------------------- Tital and Path(breadcrumbs) code Start ----------->

 <div class="router-header flex flex-wrap items-center">
     <div>
       <h5> App Fullscreen</h5>
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
      <q-breadcrumbs-el label="App Fullscreen" />
    </q-breadcrumbs>

   </div>
   <!------------------- Tital and Path(breadcrumbs) code End ----------->

   <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
           There are times when you want your website or App to run in fullscreen
      </q-item-label>
      </q-item-section>
   </div>
 
    <!------------------- GO Fullscreen code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Basic</div>
        <div class="text-subtitle2">

    <div class="q-pa-md">
    <q-btn
      color="secondary"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    />
  </div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- GO Fullscreen code End----------- -->

   <!------------------- GO Fullscreen On-custom-element code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >On custom element</div>
        <div class="text-subtitle2">

    <div class="q-pa-md">
    <q-btn
      color="secondary"
      @click="toggle"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    />
  </div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- GO Fullscreen On-custom-element code End----------- -->
  </div>
  
</template>

<script>
import { AppFullscreen } from 'quasar'

export default {

     methods: {
    toggle (e) {
      const target = e.target.parentNode.parentNode.parentNode

      this.$q.fullscreen.toggle(target)
        .then(() => {
          // success!
        })
        .catch((err) => {
          alert(err)
          // uh, oh, error!!
          // console.error(err)
        })
    }
  }
  
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    color:dimgray;    
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
  color: rgb(94 92 92);
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>