
<template>

<div >
     

 
      <!---------------------------- Hiding Icon Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Hiding Icon</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-fab
      v-model="fab"
      label="Actions"
      label-position="left"
      color="purple"
      hide-icon
      direction="right"
    >
      <q-fab-action color="primary" @click="onClick" hide-icon label="Email" />
      <q-fab-action color="secondary" @click="onClick" hide-icon label="Alarm" />
    </q-fab>
  </div>
               
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
   <!---------------------------- Hiding Icon Code End--------------- -->
  
      <!---------------------------- Playing With Padding Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Playing With Padding</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-lg" style="padding-top: 48px; padding-bottom: 220px">
    <div>
      <q-fab
        v-model="fab1"
        label="Actions"
        label-position="top"
        external-label
        color="purple"
        icon="keyboard_arrow_right"
        direction="right"
        padding="xs"
      >
        <q-fab-action padding="5px" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action padding="5px" external-label label-position="top" color="orange" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>

    <div class="q-mt-lg">
      <q-fab
        v-model="fab2"
        label="Actions"
        vertical-actions-align="left"
        color="purple"
        padding="none xl"
        icon="keyboard_arrow_down"
        direction="down"
      >
        <q-fab-action padding="3px" external-label color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action padding="3px" external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action padding="3px" external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action padding="3px" external-label color="accent" @click="onClick" icon="room" label="Map" />
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
     
   <!---------------------------- Playing With Padding Code End--------------- -->
  

    <!---------------------------- Square Style Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Square Style</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md" style="padding-top: 48px; padding-bottom: 220px">
    <div>
      <q-fab
        v-model="fab4"
        color="primary"
        glossy
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-fab-action square external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action square external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action square external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action square external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>

    <div class="q-mt-md row justify-center">
      <q-fab
        v-model="fab5"
        square
        vertical-actions-align="right"
        color="secondary"
        glossy
        icon="keyboard_arrow_down"
        direction="down"
      >
        <q-fab-action square color="primary" @click="onClick" icon="mail" label="Email" label-position="left" />
        <q-fab-action square color="secondary" @click="onClick" icon="alarm" label="Alarm" label-position="left" />
        <q-fab-action glossy square color="orange" @click="onClick" icon="airplay" label="Airplay" label-position="left" />
        <q-fab-action square color="accent" @click="onClick" icon="room" label="Map" label-position="left" />
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
     
   <!---------------------------- Square Style Code End--------------- -->
  


  </div>
</template>

<script>


export default {
   data () {
    return {
      fab: true,
      fab1: true,
      fab2: true,
       fab4: true,
      fab5: true
      
      
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