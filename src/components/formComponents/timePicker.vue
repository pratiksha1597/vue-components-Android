
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center"> 
     <div>
       <h5>QTime </h5>
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
      <q-breadcrumbs-el label="Time Picker" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QTime component provides a method to input time.
        </q-item-label>
      </q-item-section>
    </div>
    <!----------------------- Basic code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-time v-model="time" />

      <q-time
        v-model="timeWithSeconds"
        with-seconds
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
      <!----------------------- Basic code End------------ -->
 
 <!----------------------- Landscape code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Landscape</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-time
        v-model="time"
        landscape
      />

      <q-time
        v-model="timeWithSeconds"
        with-seconds
        landscape
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
      <!-----------------------Landscape  code End------------ -->
 
<!----------------------- 24h format code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> 24h format</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <q-time
      v-model="time"
      format24h
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
   
    </div>
      <!----------------------- 24H format code End------------ -->
 

 <!----------------------- Now Button code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Now Button</div>
                
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-time
      v-model="time"
      now-btn
    />
  </div>
                  <div class="q-gutter-sm">
                
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Now Button code End------------ -->
 
 <!----------------------- Disable and readonly code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Disable and readonly </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-time
        v-model="time"
        disable
      />

      <q-time
        v-model="time"
        readonly
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
      <!----------------------- Disable and readonly   code End------------ -->

      <!----------------------- Qdate and QTime on Same model code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Qdate and QTime on Same model </div>
                
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-badge color="teal">
        Model: {{ model }}
      </q-badge>
      <q-badge color="purple" text-color="white" class="q-ma-md">
        Mask: YYYY-MM-DD HH:mm
      </q-badge>
    </div>

    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Qdate and QTime on Same model  code End------------ -->
 

     
 

  <!----------------------- coloring  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Coloring </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-time
        v-model="time"
        color="orange"
      />

      <q-time
        v-model="time"
        color="yellow"
        text-color="black"
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
      <!----------------------- coloring code End------------ -->
 
   
   
  <!----------------------- option  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Options</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                        <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-time
        v-model="time"
        :hour-options="hourOptions"
        :minute-options="minuteOptions"
        :second-options="secondOptions"
      />

      <q-time
        v-model="time"
        :options="optionsFn"
      />

      <q-time
        v-model="time"
        :options="optionsFn2"
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
      <!----------------------- option code End------------ -->
 
   <!----------------------- With Input  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Input</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-sm row">
      <q-input filled v-model="time" mask="time" :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="time">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input filled v-model="timeWithSeconds" mask="fulltime" :rules="['fulltime']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time
                v-model="timeWithSeconds"
                with-seconds
                format24h
              >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- With Input code End------------ -->
 
    <!----------------------- QDate and QTime code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">QDate and QTime with QInput</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md" style="max-width: 300px">
    <q-input filled v-model="date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- QDate and QTime code End------------ -->
 
  <!----------------------- with additional buttons code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">with additional buttons</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <div class="q-mb-sm">
      <q-badge color="teal">
        Model: {{ time }}
      </q-badge>
    </div>

    <q-btn icon="access_time" round color="primary">
      <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
        <q-time v-model="proxyTime">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="primary" flat v-close-popup />
            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- with additional buttons code End------------ -->
 
   
   

  </div>
</template>

<script>


export default {
   data () {
    return {
      time: '10:56',
      timeWithSeconds: '09:24:10',
       model: '2019-02-22 21:02',
       //option
        hourOptions: [ 9, 10, 11, 13, 15 ],
      minuteOptions: [ 0, 15, 30, 45 ],
      secondOptions: [ 0, 10, 20, 30, 40, 50 ],
      //QDate and QTime with QInput
       date: '2019-02-01 12:44',
       //with additional buttons
        proxyTime: '10:56'
    }
  },
   methods: {
    optionsFn (hr, min, sec) {
      if (hr < 6 || hr > 15 || hr % 2 !== 0) {
        return false
      }
      if (min !== null && (min <= 25 || min >= 58)) {
        return false
      }
      if (sec !== null && sec % 10 !== 0) {
        return false
      }
      return true
    },

    optionsFn2 (hr) {
      return hr % 2 === 0
    },
 
 
    updateProxy () {
      this.proxyTime = this.time
    },

    save () {
      this.time = this.proxyTime
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