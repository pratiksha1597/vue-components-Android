<template>
<div>
    <!-- ------------------ Image Slide code start ---------- -->
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Image Slides
            </div>
            
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
               <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
                
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
    <!-- ------------------ Image Slide code End ---------- -->
    <!-- ------------------ multi-Image Slide code start ---------- -->
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Multi-image slides
            </div>
            
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
               <q-carousel
      v-model="slide1"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
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
     <!-- ------------------ multi-Image Slide code End---------- -->
 <!-- ------------------ Caption Slide code start---------- --------->
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Caption
            </div>
            
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
               <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
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
   <!-- ------------------ Caption Slide code End---------- --------->
    <!-- ------------------ vedio Slide code Start---------- --------->

  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Vedio Slide
            </div>
            
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
             <q-carousel
      animated
      v-model="slide2"
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kOkQ4T5WO9E"
        />
      </q-carousel-slide>

      <q-carousel-slide name="ibiza">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/p87miJIYEEk"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Soft Jazz', value: 'soft-jazz' },
          { label: 'Rihanna', value: 'Rihanna' },
          { label: 'Ibiza Mix', value: 'ibiza' }
        ]"
      />
    </div>
                
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
    <!-- ------------------ vedio Slide code End---------- --------->

    <!-- ------------------ Thumbnails Slide code Start---------- --------->

  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6 ">
              Thumbnails
            </div>
             <q-item-section id="rcorners3">
              <q-item-label>
                In the example below there are thumbnails being generated automatically. Thumbnails only applies to image slides.
              </q-item-label>
            </q-item-section>
            <div class="text-subtitle2">
              <div class="q-gutter-sm q-pa-md">
           <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
                
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
    <!-- ------------------ Thumbnails Slide code End---------- --------->



  </div>
</template>
<script>
export default {
 data () {
    return {
      slide: 1,
      slide1: 'first',
      slide2: 'Rihanna'
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

/* for media caption */

.custom-caption{
  text-align : center;
  padding : 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3)
  }
</style>