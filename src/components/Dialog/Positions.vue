
<template>
  <div>
    
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Positions</div>
              <div class="text-subtitle2">
               <div class="q-pa-md q-gutter-sm">
    <q-btn label="Top" icon="keyboard_arrow_up" color="primary" @click="open('top')" />
    <q-btn label="Right" icon="keyboard_arrow_right" color="primary" @click="open('right')" />
    <q-btn label="Bottom" icon="keyboard_arrow_down" color="primary" @click="open('bottom')" />
    <q-btn label="Left" icon="keyboard_arrow_left" color="primary" @click="open('left')" />

    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-linear-progress :value="0.6" color="pink" />

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" />
        </q-card-section>
      </q-card>
    </q-dialog>
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
      dialog: false,
      position: 'top'
    }
  },

  methods: {
    open (position) {
      this.position = position
      this.dialog = true
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
  padding-left: 30px;
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
</style>