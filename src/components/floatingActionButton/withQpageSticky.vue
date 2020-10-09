
<template>

<div >
     

 
      <!---------------------------- With QPage Sticky Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With QPage Sticky</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  
                  <div class="q-pa-md">
    <q-layout view="lhh LpR lff" container style="height: 300px" class="shadow-2 rounded-borders">
      <q-header reveal class="bg-black">
        <q-toolbar>
          <q-btn flat round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="add"
              direction="up"
              color="accent"
            >
              <q-fab-action @click="onClick" color="primary" icon="person_add" />
              <q-fab-action @click="onClick" color="primary" icon="mail" />
            </q-fab>
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
               
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
   <!---------------------------- With QPage Sticky Code End--------------- -->
  
      <!---------------------------- Draggable Code Start--------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Draggable</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <q-layout view="lhh LpR lff" container style="height: 500px" class="shadow-2 rounded-borders">
      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <q-page-sticky position="bottom-right" :offset="fabPos">
            <q-fab
              icon="add"
              direction="up"
              color="accent"
              :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab"
            >
              <q-fab-action @click="onClick" color="primary" icon="person_add" :disable="draggingFab" />
              <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" />
            </q-fab>
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
               
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
   <!---------------------------- Draggable Code End--------------- -->
  

  


  </div>
</template>

<script>


export default {
    data () {
    return {
      fabPos: [ 18, 18 ],
      draggingFab: false
    }
  },

  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    },

    moveFab (ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

      this.fabPos = [
        this.fabPos[0] - ev.delta.x,
        this.fabPos[1] - ev.delta.y
      ]
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