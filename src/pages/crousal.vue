
<template>
  <div>
   


<div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Carousel</h5>
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
      <q-breadcrumbs-el label="Carousel" />
    </q-breadcrumbs>

   </div>


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The <code> QAvatar</code> component creates a scalable, color-able
          element that can have <code>text</code>,<code> icon</code> or
          <code> image</code> within its shape. By default it is circular, but
          it can also be square or have a border-radius applied to give rounded
          corners to the square shape.
        </q-item-label>
      </q-item-section>
    </div>

    

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }
        ]"
      />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
<Transitions/>
<verticalMode/>
<controlType/>
<navigationPosition/>
<customNavigation/>
<autoPadding/>
<mediaContent/>
<infiniteAndAutoplay/>
<QScrollArea/>
<Fullscreen/>
    
  </div>
</template>

<script>
import Transitions from 'components/carousel/Transitions.vue';
import verticalMode from 'components/carousel/verticalMode.vue';
import controlType from 'components/carousel/controlType.vue';
import navigationPosition from 'components/carousel/navigationPosition.vue';
 import customNavigation from 'components/carousel/customNavigation.vue';
 import autoPadding from 'components/carousel/autoPadding.vue';
 import mediaContent from 'components/carousel/mediaContent.vue';
 import infiniteAndAutoplay from 'components/carousel/infiniteAndAutoplay.vue';
  import QScrollArea from 'components/carousel/QScrollArea.vue';
   import Fullscreen from 'components/carousel/Fullscreen.vue';
export default {
  components:{
    Transitions,
    verticalMode,
    controlType,
    navigationPosition,
    customNavigation,
    autoPadding,
    mediaContent,
    infiniteAndAutoplay,
    QScrollArea,
    Fullscreen
  },

  data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
};
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