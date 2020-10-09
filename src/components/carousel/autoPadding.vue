<template>
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Auto Padding
            </div>
            <q-item-section id="rcorners3">
              <q-item-label>
                Below is an example with which you can play with different <code>QCarousel</code> settings so you can see the padding (or lack of) in action:
              </q-item-label>
            </q-item-section>
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
               
                 <q-toggle
      v-model="padding"
      label="Padding"
      color="purple"
      class="text-weight-bold"
    />

    <q-toggle
      v-model="vertical"
      label="Vertical"
      color="purple"
    />

    <q-toggle
      v-model="arrows"
      label="Arrows"
      color="purple"
    />

    <q-toggle
      v-model="navigation"
      label="Navigation"
      color="purple"
    />

    <div class="row items-center q-mb-md">
      <div>Navigation position:</div>
      <q-option-group
        v-model="navPos"
        :options="navigationPositions"
        color="purple"
        inline
      />
    </div>

    <q-carousel
      v-model="slide"
      swipeable
      animated
      :padding="padding"
      :vertical="vertical"
      :arrows="arrows"
      :navigation="navigation"
      :navigation-position="navPos"
      height="300px"
      class="bg-purple text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
                
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,

      navPos: 'bottom',
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],

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