
<template>

<div >
     

 <div>
       <h5>Internal Label</h5>
     </div>

        <!---------------------------- Basic Inetnal Label Code Start--------------- -->
    
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Internal Label</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md" style="padding-bottom: 220px">
    <div>
      <q-fab
        v-model="fab1"
        label="Actions"
        label-position="left"
        color="purple"
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
      </q-fab>
    </div>

    <div class="q-mt-md">
      <q-fab
        v-model="fab2"
        label="Actions"
        vertical-actions-align="left"
        color="purple"
        icon="keyboard_arrow_down"
        direction="down"
      >
        <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>
  </div>
               
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!---------------------------- Basic Inetnal Label Code End--------------- -->
    
     <!---------------------------- Toggeling Inetnal Label Code Start--------------- -->
    
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Toggeling Internal Label</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md" style="padding-bottom: 240px">
    <q-toggle v-model="hideLabels" label="Hide labels" />

    <div class="q-mt-md">
      <q-fab
        v-model="fab1"
        label="Actions"
        color="purple"
        icon="keyboard_arrow_right"
        direction="right"
        :hide-label="hideLabels"
      >
        <q-fab-action :hide-label="hideLabels" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action :hide-label="hideLabels" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
      </q-fab>
    </div>

    <div class="q-mt-md row justify-center">
      <q-fab
        v-model="fab2"
        label="Actions"
        label-position="bottom"
        glossy
        color="purple"
        icon="keyboard_arrow_down"
        direction="down"
        :hide-label="hideLabels"
      >
        <q-fab-action :hide-label="hideLabels" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action :hide-label="hideLabels" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action :hide-label="hideLabels" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action :hide-label="hideLabels" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>
  </div>
               
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!---------------------------- Toggeling Inetnal Label Code End--------------- -->
    

     <!---------------------------- Vertical Action Alignment Inetnal Label Code Start--------------- -->
    
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Vertical Action Alignment</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md" style="padding-top: 220px">
    <div class="row justify-between">
      <q-fab
        v-model="fabLeft"
        vertical-actions-align="left"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action label-position="right" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action label-position="right" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-position="right" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-position="right" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>

      <q-fab
        v-model="fabCenter"
        vertical-actions-align="center"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>

      <q-fab
        v-model="fabRight"
        vertical-actions-align="right"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action label-position="left" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action label-position="left" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-position="left" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-position="left" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>
  </div>
               
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!---------------------------- Vertical Action Alignment Inetnal Label Code End--------------- -->
    
 
  


  </div>
</template>

<script>


export default {
   data () {
    return {
      fab1: true,
      fab2: true,
      hideLabels: false,
      fabLeft: true,
      fabCenter: true,
      fabRight: true
    }
  },

  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
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