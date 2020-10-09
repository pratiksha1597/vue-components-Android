
<template>

<div >
  

 
   

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" > Show And Change</div>
        <div class="text-subtitle2">
            <div class="q-pa-md">
    <q-btn color="primary" @click="showLoading" label="Show Loading" />
  </div>
    
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   
 

   

  
  </div>
  
</template>

<script>
import { QSpinnerGears } from 'quasar'

export default {
  methods: {
    showLoading () {
      this.$q.loading.show({
        message: 'First message. Gonna change it in 3 seconds...'
      })

      this.timer = setTimeout(() => {
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          messageColor: 'black',
          backgroundColor: 'yellow',
          message: 'Updated message'
        })

        this.timer = setTimeout(() => {
          this.$q.loading.hide()
          this.timer = void 0
        }, 2000)
      }, 2000)
    }
  },

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  }
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;     */
}

#rcorners3{
  padding-left: 30px;
  padding-right: 30px;
    font-size: 20px;
    color: rgb(148, 146, 146);
}
code{
  background: #eee;
    padding: .1rem .3rem;
    border-radius: 3px;
}

.text-h6{
  /* color: rgb(94 92 92); */
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>