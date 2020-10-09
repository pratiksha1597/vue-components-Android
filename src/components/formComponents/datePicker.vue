
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center"> 
     <div>
       <h5>QDate </h5>
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
      <q-breadcrumbs-el label="Date Picker" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QDate component provides a method to input date. Currently it supports Gregorian (default) and Persian calendars.
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
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" />

      <q-date
        v-model="date"
        minimal
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
    <q-date
      v-model="date"
      landscape
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-----------------------Landscape  code End------------ -->
 
<!----------------------- Event code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Events</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-date
        v-model="date"
        :events="events"
      />

      <q-date
        v-model="date"
        :events="eventsFn"
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
      <!----------------------- Event code End------------ -->
 

 <!----------------------- mask with escaped characters code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Mask with escaped characters</div>
                
                <div class="text-subtitle2">
                   
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <div>
        <div class="q-pb-sm">
          <q-badge color="teal">
            Model: {{ model1 }}
          </q-badge>
        </div>
        <div class="q-pb-sm">
          <q-badge color="purple" text-color="white">
            Mask: dddd, MMM D, YYYY
          </q-badge>
        </div>

        <q-date v-model="model1" mask="dddd, MMM D, YYYY" />
      </div>

      <div>
        <div class="q-pb-sm">
          <q-badge color="teal">
            Model: {{ model2 }}
          </q-badge>
        </div>
        <div class="q-pb-sm">
          <q-badge color="purple" text-color="white">
            Mask: [Month ( ]MMMM ) Do[, Year ( ]YYYY )
          </q-badge>
        </div>

        <q-date v-model="model2" mask="[Month ( ]MMMM ) Do[, Year ( ]YYYY )" />
      </div>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Now Button code End------------ -->
 
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
    <div class="q-pb-sm">
      Model: {{ days }}
    </div>

    <q-date v-model="days" range multiple />
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- coloring code End------------ -->
 
    
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
      <q-date
        v-model="date"
        disable
      />

      <q-date
        v-model="date"
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
      <q-date
        v-model="date"
        color="orange"
      />

      <q-date
        v-model="date"
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
      <q-date
        v-model="date"
        :options="options"
      />

      <q-date
        v-model="date"
        :options="optionsFn"
      />

      <q-date
        v-model="date"
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
 
   <!-----------------------With-QSplitter-and-QTabPanels  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With QSplitter and QTabPanels</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 450px"
    >

      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
            v-model="date"
            :events="events"
            event-color="orange"
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="2019/02/01">
            <div class="text-h4 q-mb-md">2019/02/01</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="2019/02/05">
            <div class="text-h4 q-mb-md">2019/02/05</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="2019/02/06">
            <div class="text-h4 q-mb-md">2019/02/06</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- With With-QSplitter-and-QTabPanels Input code End------------ -->
 
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
        Model: {{ date }}
      </q-badge>
    </div>

    <q-btn icon="event" round color="primary">
      <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
        <q-date v-model="proxyDate">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="primary" flat v-close-popup />
            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
          </div>
        </q-date>
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
         date: '2019/02/01 12:30',
        model: '2019-02-22 21:02',
      
      options: [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],

      //additional button
        proxyDate: '2019/03/01',
        // with qsplitter and QtabPanal
         splitterModel: 50,
      //date: '2019/02/01',
      events: [ '2019/02/01', '2019/02/05', '2019/02/06' ],
      //mask escape
      model1: 'Sunday, Apr 28, 2019',
      model2: 'Month ( March ) 14th, Year ( 2019 )',
      days: [
        { from: '2020/07/01', to: '2020/07/10' },
        { from: '2020/07/21', to: '2020/07/25' }
      ]
    }
    
  },
   methods: {
   optionsFn (date) {
      return date >= '2019/02/03' && date <= '2019/02/15'
    },

    optionsFn2 (date) {
      const parts = date.split('/')
      return parts[2] % 2 === 0
    },
    updateProxy () {
      this.proxyDate = this.date
    },

    save () {
      this.date = this.proxyDate
    },
     eventsFn (date) {
         //Events
      const parts = date.split('/')
      return parts[2] % 2 === 0
    }
  
  }
}
   
 


</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray; 
     */
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