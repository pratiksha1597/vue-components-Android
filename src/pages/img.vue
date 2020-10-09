
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Img</h5>
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
      <q-breadcrumbs-el label="Img" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The QImg component makes working with images easy and also adds a nice loading effect to it along with many other features .
        </q-item-label>
      </q-item-section>
    </div>

        <!-- ------------------- basic  Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                       <div class="q-pa-md q-gutter-sm">
    <q-btn push color="teal" label="Change image" @click="refresh" />

    <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- basic  Code End ---------- -->
 
 
  <!-- ------------------- Custom image style Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom image style</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <q-img
      src="https://cdn.quasar.dev/img/parallax2.jpg"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        Caption
      </div>
    </q-img>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- Custom image style Code End ---------- -->
    
      <!-- ------------------- Transitions img Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Transitions</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-btn
      push
      color="teal"
      label="Trigger"
      @click="trigger"
      class="q-mb-md"
    />

    <div class="q-gutter-md row items-start">

      <!-- notice "basic" prop (which disables default animation) -->
      <q-img
        :src="url"
        style="width: 150px"
        :ratio="1"
        basic
        spinner-color="white"
        class="rounded-borders"
      >
        <div class="absolute-bottom text-center text-italic text-body2">
          None
        </div>
      </q-img>

      <q-img
        v-for="transition in transitions"
        :key="transition"
        :transition="transition"
        :src="url"
        style="width: 150px"
        ratio="1"
        spinner-color="white"
        class="rounded-borders"
      >
        <div class="absolute-bottom text-center text-body2">
          {{ transition }}
        </div>
      </q-img>

    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- Transitions Code End ---------- -->

      <!-- ------------------- Placeholder source Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Placeholder source</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md q-gutter-md">
    <q-btn
      push
      color="teal"
      label="Toggle"
      @click="toggle"
    />

    <!-- using v-if so you can see the effect -->
    <q-img
      v-if="url1 !== null"
      :src="url1"
      :ratio="1"
      class="q-mt-md"
      style="width: 150px"
      placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
    />
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- Placeholder source    Code End ---------- -->
    

     

    
    <!-- ------------------- Loading State Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Loading State</div>
                <div class="text-subtitle2">
                  
                  <div class="q-pa-md">
    <q-btn push color="teal" label="Change image" @click="refresh"  />

    <div class="q-gutter-sm row items-start">
      <q-img
        :src="url"
        spinner-color="red"
        style="height: 140px; max-width: 150px"
      />

      <q-img
        :src="url"
        spinner-color="primary"
        spinner-size="82px"
        style="height: 140px; max-width: 150px"
      />

      <q-img
        :src="url"
        style="height: 140px; max-width: 150px"
      >
        <template v-slot:loading>
          <div class="text-subtitle1 text-white">
            Loading...
          </div>
        </template>
      </q-img>

      <q-img
        :src="url"
        style="height: 140px; max-width: 150px"
      >
        <template v-slot:loading>
          <q-spinner-gears color="white" />
        </template>
      </q-img>

      <q-img
        :src="url"
        style="height: 140px; max-width: 150px"
      >
        <template v-slot:loading>
          <div class="text-yellow">
            <q-spinner-ios />
            <div class="q-mt-md">Loading...</div>
          </div>
        </template>
      </q-img>
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- Loading State Code End ---------- -->
    
 

  </div>
</template>

<script>


export default {
    data () {
    return {
      url: 'https://placeimg.com/500/300/nature',
      transitions: [
        'slide-right',
        'slide-left',
        'slide-up',
        'slide-down',
        'fade',
        'scale',
        'rotate',
        'flip-right',
        'flip-left',
        'flip-up',
        'flip-down',
        'jump-right',
        'jump-left',
        'jump-up',
        'jump-down'
      ],
      //placeholder
      url1: null
    }
  },

  methods: {
    refresh () {
      this.url = 'https://placeimg.com/500/300/nature?t=' + Math.random()
    },
     trigger () {
      this.url = 'https://placeimg.com/500/300/nature?t=' + Math.random()
    },
    toggle () {
        //placeholder
      this.url1 = this.url1 === null
        ? 'https://placeimg.com/500/300/nature?t=' + Math.random()
        : null
    }
  }
 
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