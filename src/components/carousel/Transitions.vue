<template>
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Transitions bottom navigation,arrows and auto padding
            </div>
            <q-item-section id="rcorners3">
              <q-item-label>
                You can also swipe with your finger (or swiping with the mouse –
                clicking and quickly dragging to left/right then releasing).
              </q-item-label>
            </q-item-section>
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
               
                  <q-carousel
                    v-model="slide"
                    transition-prev="scale"
                    transition-next="scale"
                    swipeable
                    animated
                    control-color="white"
                    navigation
                    padding
                    arrows
                    height="300px"
                    class="bg-primary text-white shadow-1 rounded-borders"
                  >
                    <q-carousel-slide
                      name="style"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="style" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide
                      name="tv"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="live_tv" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide
                      name="layers"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="layers" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide
                      name="map"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="terrain" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                  </q-carousel>

                  <q-carousel
                    v-model="slide"
                    transition-prev="jump-right"
                    transition-next="jump-left"
                    swipeable
                    animated
                    control-color="white"
                    prev-icon="arrow_left"
                    next-icon="arrow_right"
                    navigation-icon="radio_button_unchecked"
                    navigation
                    padding
                    arrows
                    height="300px"
                    class="bg-purple text-white shadow-1 rounded-borders"
                  >
                    <q-carousel-slide
                      name="style"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="style" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide
                      name="tv"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="live_tv" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide
                      name="layers"
                      class="column no-wrap flex-center"
                    >
                      <q-icon name="layers" size="56px" />
                      <div class="q-mt-md text-center">
                        {{ lorem }}
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide
                      name="map"
                      class="column no-wrap flex-center"
                    >
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
  data() {
    return {
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
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