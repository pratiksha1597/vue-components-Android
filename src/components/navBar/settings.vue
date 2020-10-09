<template>
  <div>
    <q-page-sticky position="right" :offset="[18, 0]">
      <q-btn round color="primary" icon="settings" @click="open('right')" />
    </q-page-sticky>

    <q-dialog v-model="icon" :position="position"  >
      <q-card style="width: 480px; padding-left: 10px;">

          <!------------------ Titel code of dialog Start ------------------>

        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">THEME CUSTOMIZER</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div style="padding-left: 20px ; padding-bottom:20px;">Customize & Preview in Real Time</div>
            <!------------------ Titel code of dialog End ------------------>
        <q-separator color="gray" inset />



     <q-scroll-area style="height: 650px;">

       <!-- ---------------------Layout Type Code start --------------->
        <q-card-section>
       <div class="title">Layout Type</div>
          <q-radio v-model="layout" val="Vertical" label="Vertical" class="label1" />
         <q-radio v-model="layout" val="Horizontal" label="Horizontal" class="label1" />
        </q-card-section>

       <!-- ---------------------Layout Type Code End --------------->
        <q-separator color="gray" inset />

        <!---------------- Theme color Code Start--------------- -->
         <q-card-section>
             <div class="title">Theme Color</div>
             <div class="q-pa-md q-gutter-sm">
          <q-btn padding="25px 25px" color="primary" class="space" />
          <q-btn padding="25px 25px" color="green" class="space" />
          <q-btn padding="25px 25px" color="accent" class="space" />
          <q-btn padding="25px 25px" color="dark" class="space" />
          <q-btn padding="25px 25px" color="orange" class="space" />
            </div>
        </q-card-section>
         <!---------------- Theme color Code End--------------- -->
        <q-separator color="gray" inset />

       <!---------------- Theme Mode Code Start--------------- -->
        <q-card-section>
             <div class="title">Theme Mode</div>
             <div class="q-pa-md q-gutter-sm">
       
           <q-btn round color="dark" class="space"  @click="DarkMode" :size="size"/>
              <label for="" class="label1">Dark</label>
          <q-btn round color="info"  class="space"  @click="lightMode" :size="size"/>
              <label for="" class="label1">light</label>
            </div>
        </q-card-section>
         <!---------------- Theme color Code End--------------- -->
         <q-separator color="gray" inset />
          <!---------------- Nevbar color Code Start--------------- -->
          <q-card-section>
             <div class="title">Nevbar Color</div>
             <div class="q-pa-md q-gutter-sm">
          <q-btn padding="25px 25px" color="primary" class="space" />
          <q-btn padding="25px 25px" color="green" class="space" />
          <q-btn padding="25px 25px" color="accent" class="space" />
          <q-btn padding="25px 25px" color="dark" class="space" />
          <q-btn padding="25px 25px" color="orange" class="space" />
          
            </div>
        </q-card-section>
          <!---------------- Nevbar color Code End--------------- -->
         
  <!---------------- Nevbar Type Code Start--------------- -->
         
        <q-card-section>
             <div class="title">Nevbar Type</div>
             <div class="q-pa-md q-gutter-sm">
          <q-radio v-model="nevbarType" val="Hidden" label="Hidden" class="label1" />
         <q-radio v-model="nevbarType" val="Static" label="Static" class="label1" />
          <q-radio v-model="nevbarType" val="Sticky" label="Sticky" class="label1" />
            <q-radio v-model="nevbarType" val="Floating" label="Floating" class="label1" />
        
            </div>
        </q-card-section>
    <!---------------- Nevbar Type Code End--------------- -->
         
         <q-separator color="gray" inset />
        <!---------------- Footer Type Code Start--------------- -->
         
         <q-card-section>
             <div class="title">Footer Type</div>
             <div class="q-pa-md q-gutter-sm">
          <q-radio v-model="FooterType" val="Hidden" label="Hidden" class="label1" />
         <q-radio v-model="FooterType" val="Static" label="Static" class="label1" />
          <q-radio v-model="FooterType" val="Sticky" label="Sticky" class="label1" />
        
            </div>
        </q-card-section>
          <!---------------- Footer Type Code End--------------- -->
        
         <q-separator color="gray" inset />
        
        </q-scroll-area>

      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { Dark } from 'quasar'
export default {
  data() {
    return {
      size:'xs',
      layout: 'Vertical',
      FooterType:'Hidden',
      nevbarType:'Hidden',
      icon: false,
      position: "top",
    
    }
  },
  methods: {
    open(position) {
      this.position = position;
      this.icon = true;

    },
    DarkMode (){
       this.$q.dark.set(true)
    },
    lightMode (){
      this.$q.dark.set(false)
    }
    
  },

  
};
</script>
<style scoped>
.title{
font-size: 20px; 
font-style: revert;
 margin: 10px;
}

.space{
    margin:10px;
}
.label1{
    font-size: larger;
}
.q-card {
overflow: hidden;}
</style>