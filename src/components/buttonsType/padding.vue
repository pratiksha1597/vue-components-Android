
<template>

<div >



   <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Padding</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <p class="size">Button Size</p>
      <div class="q-pa-md q-gutter-sm">
    <q-btn
      v-for="size in sizes" :key="`btn_size_sq_${size}`"
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br>
    <q-btn
      v-for="size in sizes" :key="`btn_size_rd_${size}`"
      rounded
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br>
    <q-btn
      v-for="(size, i) in sizes" :key="`btn_size_round_${size}`"
      round
      color="primary"
      :size="size"
      :icon="icons[i]"
    />

    <br>

    <q-btn
      v-for="size in sizes" :key="`btn_size_dense_sq_${size}`"
      dense
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br>
    <q-btn
      v-for="size in sizes" :key="`btn_size_dense_rd_${size}`"
      rounded
      dense
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br>
    <q-btn
      v-for="(size, i) in sizes" :key="`btn_size_dense_round_${size}`"
      round
      dense
      color="primary"
      :size="size"
      :icon="icons[i]"
    />

    <br>

    <q-btn
      size="10px"
      color="black"
      label="Text height: 10px"
    />
    <q-btn
      size="22px"
      class="q-px-xl q-py-xs"
      color="purple"
      label="Custom"
    />
    <q-btn
      size="35px"
      round
      color="teal"
      icon="map"
    />
  </div>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

  
  <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Button padding</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn
      padding="none"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="xs"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="lg"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="10px 5px"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="xs lg"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="xl"
      color="primary"
      round
      icon="eco"
    />

    <q-btn
      padding="xs lg"
      color="primary"
      round
      icon="eco"
    />

    <q-btn
      padding="lg xs"
      color="primary"
      round
      icon="eco"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>



 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Indeterminate progress</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" label="Button" />
    <q-btn :loading="loading2" color="red" @click="simulateProgress(2)">
      Button
      <template v-slot:loading>
        Loading...
      </template>
    </q-btn>
    <q-btn :loading="loading3" color="purple" @click="simulateProgress(3)">
      Button
      <template v-slot:loading>
        <q-spinner-radio />
      </template>
    </q-btn>
    <q-btn :loading="loading4" color="primary" @click="simulateProgress(4)" style="width: 150px">
      Button
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn>
    <br>
    <q-btn round :loading="loading5" color="brown" @click="simulateProgress(5)" icon="camera_front">
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
    <q-btn round :loading="loading6" color="black" @click="simulateProgress(6)" icon="camera_rear">
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
    <br>
    <q-btn :loading="progress" color="primary" @click="progress = true">
      Controlled from outside
      <template v-slot:loading>
        <q-spinner-radio class="on-left" />
        Click "Stop" Button
      </template>
    </q-btn>
    <q-btn :disable="!progress" color="negative" @click="progress = false" label="Stop" />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>



  <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Deterministic progress</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn
      :loading="loading1"
      :percentage="percentage1"
      color="primary"
      @click="startComputing(1)"
      style="width: 150px"
    >
      Compute PI
      <template v-slot:loading>
        <q-spinner-gears class="on-left" />
        Computing...
      </template>
    </q-btn>

    <q-btn
      :loading="loading2"
      :percentage="percentage2"
      round
      color="secondary"
      @click="startComputing(2)"
      icon="cloud_upload"
    />

    <q-btn
      :loading="loading3"
      :percentage="percentage3"
      dark-percentage
      unelevated
      color="orange"
      text-color="grey-9"
      @click="startComputing(3)"
      icon="cloud_upload"
      style="width: 100px"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>



 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Other Options</div>
              <div class="text-subtitle2">
               <div class="q-gutter-sm">
    <q-btn color="black" class="full-width" label="Full-width" />

    <q-btn color="primary" label="With Tooltip" class="q-mt-md">
      <q-tooltip content-class="bg-accent">I'm a tooltip</q-tooltip>
    </q-btn>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>


   <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Disable</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn color="primary" disable label="Disabled" />
    <q-btn round color="primary" disable icon="card_giftcard" />
    <q-btn flat color="primary" disable label="Disabled" />
    <q-btn flat round color="primary" disable icon="card_giftcard" />
    <q-btn outline color="primary" disable label="Disabled" />
    <q-btn outline round color="primary" disable icon="card_giftcard" />
    <q-btn push color="primary" disable label="Disabled" />
    <q-btn push round color="primary" disable icon="card_giftcard" />
    <q-btn class="glossy" color="primary" disable label="Disabled" />
    <q-btn class="glossy" round color="primary" disable icon="card_giftcard" />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
export default {
 data () {
    return {
        
      sizes: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ],
       loading1: false,
        percentage1: 0,
      loading2: false,
       percentage2: 0,
      loading3: false,
      percentage3: 0,
      loading4: false,
      loading5: false,
      loading6: false,
      progress: false,
      
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    },
       startComputing (id) {
      this[`loading${id}`] = true
      this[`percentage${id}`] = 0
      this[`interval${id}`] = setInterval(() => {
        this[`percentage${id}`] += Math.floor(Math.random() * 8 + 10)
        if (this[`percentage${id}`] >= 100) {
          clearInterval(this[`interval${id}`])
          this[`loading${id}`] = false
        }
      }, 700)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval1)
    clearInterval(this.interval2)
  }
    
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    color:dimgray; 
    
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