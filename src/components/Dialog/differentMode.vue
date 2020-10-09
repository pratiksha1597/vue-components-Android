
<template>
  <div>
     <!---------------------------- Persistent code start-------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Persistent</div>
              <q-item-section id="rcorners3">
        <q-item-label>
          User cannot dismiss the Dialog by pressing ESCAPE key or by clicking/tapping on its backdrop.
        </q-item-label>
      </q-item-section>
              <div class="text-subtitle2">
             <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="persistent = true" />

    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Persistent</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!---------------------------- Persistent code End-------------------- -->


<!---------------------------- seamless  code start-------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">seamless</div>
              <q-item-section id="rcorners3">
        <q-item-label>
          Dialogs can also be a part of the page, without requiring immediate focus. It’s where “seamless” mode comes into play:
        </q-item-label>
      </q-item-section>
              <div class="text-subtitle2">
              
                  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click Me" color="primary" @click="seamless = true" />

    <q-dialog v-model="seamless" seamless position="bottom">
      <q-card style="width: 350px">
        <q-linear-progress :value="0.6" color="pink" />

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="play_arrow" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="close" v-close-popup />
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
    <!---------------------------- seamless  code End-------------------- -->

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      persistent: false,
      seamless: false
    }
  },
  computed: {
      //   for seamless
    contentSize () {
      return this.moreContent ? 150 : 5
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