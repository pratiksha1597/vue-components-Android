
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Parallax</h5>
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
      <q-breadcrumbs-el label="Components"  />
      <q-breadcrumbs-el label="Parallax" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
         QParallax takes care of a lot of quirks, including image/video size which can actually be smaller than the window width/height.


        </q-item-label>
      </q-item-section>
    </div>

   

  <!-------------------------- img background code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Image Background</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax
      src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <h1 class="text-white">Basic</h1>
    </q-parallax>

    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- With-icon-replacement code End------------ -->
 
 <!-------------------------- Custom-height-with-video-background code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom height with video background</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                        <div class="q-pa-md">
    <q-parallax :height="150">
      <template v-slot:media>
        <video width="720" height="440" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
          <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm">
          <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4">
        </video>
      </template>

      <h3 class="text-white">Video</h3>
    </q-parallax>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Custom-height-with-video-background code End------------ -->
 

 <!-------------------------- Custom-speed code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom speed</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h1 class="text-white">Docks</h1>
    </q-parallax>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Custom speed code End------------ -->
 

<!-------------------------- Scoped-Slot code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Scoped Slot</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <q-parallax>
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="width: 150px; height: 150px">
          <div class="text-h3 text-white text-center">Quasar Framework</div>
          <div class="text-h6 text-grey-3 text-center">
            
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Scoped-Slot code End------------ -->
 



  

  </div>
</template>

<script>


export default {
   
    
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;  */
    
}
#rcorners3 {
  
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.text-h6 {
  /* color: rgb(94 92 92); */
  padding-bottom: 10px;
  padding-left:30px;
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

</style>