
<template>

<div >
     

 <div>
       <h5>External Label</h5>
     </div>
    
      <!---------------------------- Basic External Label Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">External Label</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md" style="padding-top: 48px; padding-bottom: 220px">
    <div>
      <q-fab
        v-model="fab1"
        label="Actions"
        label-position="top"
        external-label
        color="purple"
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-fab-action external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>

    <div class="q-mt-md">
      <q-fab
        v-model="fab2"
        label="Actions"
        external-label
        vertical-actions-align="left"
        color="purple"
        icon="keyboard_arrow_down"
        direction="down"
      >
        <q-fab-action external-label color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action external-label color="accent" @click="onClick" icon="room" label="Map" />
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
     
   <!---------------------------- Basic External Label Code End--------------- -->
  
      <!---------------------------- Custom Styled External Label Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom Styled External Label</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md" style="padding-top: 48px; padding-bottom: 220px">
    <div>
      <q-fab
        v-model="fab1"
        label="Actions"
        label-position="top"
        label-class="bg-grey-3 text-purple"
        external-label
        color="purple"
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>

    <div class="q-mt-md">
      <q-fab
        v-model="fab2"
        label="Actions"
        external-label
        label-class="bg-grey-3 text-purple"
        vertical-actions-align="left"
        color="purple"
        icon="keyboard_arrow_down"
        direction="down"
      >
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-class="bg-grey-3 text-grey-8" external-label color="accent" @click="onClick" icon="room" label="Map" />
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
     
   <!---------------------------- Custom Styled External Label Code End--------------- -->
  

    <!---------------------------- Toggling External Label Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Toggling External Label</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md" style="padding-bottom: 220px">
    <q-toggle v-model="hideLabels" label="Hide labels" />

    <div style="padding-top: 48px;">
      <q-fab
        v-model="fab1"
        label="Actions"
        label-position="top"
        external-label
        color="purple"
        icon="keyboard_arrow_right"
        direction="right"
        :hide-label="hideLabels"
      >
        <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action :hide-label="hideLabels" external-label label-position="top" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </div>

    <div class="q-mt-md">
      <q-fab
        v-model="fab2"
        label="Actions"
        external-label
        vertical-actions-align="left"
        color="purple"
        icon="keyboard_arrow_down"
        direction="down"
        :hide-label="hideLabels"
      >
        <q-fab-action :hide-label="hideLabels" external-label color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action :hide-label="hideLabels" external-label color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action :hide-label="hideLabels" external-label color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action :hide-label="hideLabels" external-label color="accent" @click="onClick" icon="room" label="Map" />
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
     
   <!---------------------------- Toggling External Label Code End--------------- -->
  


  </div>
</template>

<script>


export default {
    data () {
    return {
      fab1: true,
      fab2: true,
       hideLabels: false
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