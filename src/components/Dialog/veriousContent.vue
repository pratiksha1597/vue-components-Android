
<template>
  <div>
     <!---------------------------- verious Content code start-------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Verious Content</div>
              <div class="text-subtitle2">
              <div class="q-pa-md q-gutter-sm">
    <q-btn label="Carousel" color="primary" @click="carousel = true" />
    <q-btn label="Card" color="primary" @click="card = true" />
    <q-btn label="Sliders" color="primary" @click="sliders = true" />

    <q-dialog v-model="carousel">
      <q-carousel
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        height="200px"
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-icon name="style" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="live_tv" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="layers" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
          <q-icon name="terrain" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>

    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Cafe Basilico
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            $・Italian, Cafe
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="sliders">
      <q-card style="width: 300px" class="q-px-sm q-pb-md">
        <q-card-section>
          <div class="text-h6">Volumes</div>
        </q-card-section>

        <q-item-label header>Media volume</q-item-label>
        <q-item dense>
          <q-item-section avatar>
            <q-icon name="volume_up" />
          </q-item-section>
          <q-item-section>
            <q-slider color="teal" v-model="slideVol" :step="0" />
          </q-item-section>
        </q-item>

        <q-item-label header>Alarm volume</q-item-label>
        <q-item dense>
          <q-item-section avatar>
            <q-icon name="alarm" />
          </q-item-section>
          <q-item-section>
            <q-slider color="teal" v-model="slideAlarm" :step="0" />
          </q-item-section>
        </q-item>

        <q-item-label header>Ring volume</q-item-label>
        <q-item dense>
          <q-item-section avatar>
            <q-icon name="vibration" />
          </q-item-section>
          <q-item-section>
            <q-slider color="teal" v-model="slideVibration" :step="0" />
          </q-item-section>
        </q-item>
      </q-card>
    </q-dialog>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!---------------------------- verious Content code End-------------------- -->


<!---------------------------- With-containerized-QLayout Content code start-------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">With containerized QLayout</div>
              <div class="text-subtitle2">
              
                  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="layout = true" />

    <q-dialog v-model="layout">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title>Header</q-toolbar-title>
            <q-btn flat @click="drawerR = !drawerR" round dense icon="menu" />
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-footer class="bg-black text-white">
          <q-toolbar inset>
            <q-toolbar-title>Footer</q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-drawer bordered v-model="drawer" :width="200" :breakpoint="600" content-class="bg-grey-3 q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </q-drawer>

        <q-drawer side="right" bordered v-model="drawerR" :width="200" :breakpoint="300" content-class="bg-grey-3 q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </q-drawer>

        <q-page-container>
          <q-page padding>
            <p v-for="n in contentSize" :key="n">
              {{ lorem }}
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>

              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!---------------------------- With-containerized-QLayout Content code End-------------------- -->

    
  </div>
</template>

<script>
export default {
   data () {
    return {
      carousel: false,
      card: false,
      sliders: false,
      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
      stars: 3,
      slideVol: 39,
      slideAlarm: 56,
      slideVibration: 63,

        // for With-containerized-QLayout
       layout: false,

      moreContent: true,
      drawer: false,
      drawerR: false,

    }
  },
  computed: {
      //for With-containerized-QLayout
    contentSize () {
      return this.moreContent ? 150 : 5
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
  padding-left: 30px;
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