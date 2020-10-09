
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Linear Progress </h5>
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
      <q-breadcrumbs-el label="Linear Progress" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
       The QLinearProgress component displays a colored loading bar. The bar can either have a determinate progress or an indeterminate animation. It should be used to inform the user that an action is occurring in the background.
        </q-item-label>
      </q-item-section>
    </div>

        <!------------------------- Determined-state  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Determined state</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <q-btn size="sm" color="primary" @click="randomize" label="Change Model" />

    <q-linear-progress :value="progress" class="q-mt-md" />

    <q-linear-progress :value="progress" color="warning" class="q-mt-sm" />

    <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />

    <q-linear-progress :value="progress" rounded color="accent" class="q-mt-sm" />

    <q-linear-progress :value="progress" rounded color="purple" track-color="orange" class="q-mt-sm" />

    <q-linear-progress :value="progress" rounded color="negative" class="q-mt-sm" />
  </div>

                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Determined-state  Code End--------- -->
 
    <!------------------------- Indeterminate-state  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Indeterminate state</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <q-linear-progress indeterminate />

    <q-linear-progress indeterminate color="warning" class="q-mt-sm" />

    <q-linear-progress indeterminate color="secondary" class="q-mt-sm" />

    <q-linear-progress indeterminate rounded color="accent" class="q-mt-sm" />

    <q-linear-progress indeterminate rounded track-color="orange" color="purple" class="q-mt-sm" />

    <q-linear-progress indeterminate rounded color="negative" class="q-mt-sm" />
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Indeterminate-state  Code End--------- -->
 
  <!------------------------- Query-state  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Query-state</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-linear-progress query />

    <q-linear-progress query color="warning" class="q-mt-sm" />

    <q-linear-progress query color="secondary" class="q-mt-sm" />

    <q-linear-progress query color="accent" class="q-mt-sm" />

    <q-linear-progress query track-color="orange" color="purple" class="q-mt-sm" />

    <q-linear-progress query color="negative" class="q-mt-sm" />
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Query-state  Code End--------- -->
 
 <!------------------------- Reverse-progress-direction Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Reverse Progress Direction</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <q-btn size="sm" color="primary" @click="randomize" label="Change Model" />

    <q-linear-progress reverse :value="progress" class="q-mt-md" />

    <q-linear-progress reverse :value="progress" color="warning" class="q-mt-sm" />

    <q-linear-progress reverse :value="progress" color="secondary" class="q-mt-sm" />
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Reverse-progress-direction  Code End--------- -->
 
 <!------------------------- Custom-height  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom Height</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <q-linear-progress size="10px" :value="progress" />

    <q-linear-progress rounded size="20px" :value="progress" color="warning" class="q-mt-sm" />

    <q-linear-progress rounded size="15px" :value="progress" color="secondary" class="q-mt-sm" />

    <q-linear-progress size="25px" :value="progress" color="accent" class="q-mt-sm" />
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Custom-height  Code End--------- -->
 
 
  <!------------------------- Stripe  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Stripe</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <q-linear-progress stripe size="10px" :value="progress1" />

    <q-linear-progress stripe rounded size="20px" :value="progress2" color="warning" class="q-mt-sm" />
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Stripe  Code End--------- -->
 
 <!------------------------- Buffer  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Buffer</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <q-linear-progress :value="progress3" :buffer="buffer" />

    <q-linear-progress :value="progress3" :buffer="buffer" color="warning" class="q-mt-sm" />

    <q-linear-progress :value="progress3" :buffer="buffer" color="secondary" class="q-mt-sm" />

    <q-linear-progress :value="progress3" :buffer="buffer" color="accent" class="q-mt-sm" />

    <q-linear-progress :value="progress3" :buffer="buffer" color="purple" track-color="orange" class="q-mt-sm" />

    <q-linear-progress :value="progress3" :buffer="buffer" color="negative" class="q-mt-sm" />
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Buffer  Code End--------- -->
 
    <!------------------------- With-a-label  Code start--------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With A label</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <q-linear-progress size="25px" :value="progress1" color="accent">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="progressLabel1" />
      </div>
    </q-linear-progress>

    <q-linear-progress size="50px" :value="progress2" color="accent" class="q-mt-sm">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="progressLabel2" />
      </div>
    </q-linear-progress>
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- With-a-label  Code End--------- -->
 


  </div>
</template>

<script>


export default {
   data () {
    return {
      progress: 0.4,
      //Stripe
       progress1: 0.4,
      progress2: 0.725,
      //buffer
      progress3: 0.01,
      buffer: 0.01
    }
  },

  methods: {
    randomize () {
      this.progress = Math.random()
    }
  },

  //buffer
  mounted () {
    this.interval = setInterval(() => {
      if (this.progress3 >= 1) {
        this.progress3 = 0.01
        this.buffer = 0.01
        return
      }

      this.progress3 = Math.min(1, this.buffer, this.progress3 + 0.1)
    }, 700 + Math.random() * 1000)

    this.bufferInterval = setInterval(() => {
      if (this.buffer < 1) {
        this.buffer = Math.min(1, this.buffer + Math.random() * 0.2)
      }
    }, 700)
  },

  beforeDestroy () {
    clearInterval(this.interval)
    clearInterval(this.bufferInterval)
  },

  //with label
  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(2) + '%'
    },

    progressLabel2 () {
      return (this.progress2 * 100).toFixed(2) + '%'
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