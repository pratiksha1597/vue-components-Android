<template>
<div>
        <!---------------------------------------  With QScrollArea and padding code start ------------->
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6 ">
               With QScrollArea and padding
            </div>
           
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
                <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      height="300px"
      class="bg-purple text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
          <div class="q-mt-md">
            {{ lorem }}
          </div>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
                
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <!---------------------------------------  With QScrollArea and padding code End ------------->

  <!---------------------------------------  With QScrollArea and whole slidecode start ------------->
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6 ">
               With QScrollArea and padding whole slide
            </div>
          
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
               <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      control-type="regular"
      control-color="orange"
      control-text-color="grey-8"
      height="300px"
      class="bg-purple text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
                
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <!--------------------------------------- Auto controls code End ------------->





  </div>
</template>
<script>
export default {
 data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
};
</script>
<style scoped>
h5 {
  margin-left: 30px;
  font-family: "Times New Roman", Times, serif;
  color: dimgray;
}
#rcorners3 {
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 30px;
}

.text-h6 {
  color: rgb(94 92 92);
  padding-bottom: 10px;
  padding-left: 10px;
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