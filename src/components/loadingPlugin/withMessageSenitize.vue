
<template>

<div >
  
  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" > With unsafe message but Sanitize</div>
        <div class="text-subtitle2">
            <div class="q-pa-md">
    <q-btn color="teal" @click="showLoading" label="Show Loading (Sanitized)" />
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
//import { Dialog } from 'quasar'
export default {
     methods: {
    showLoading () {
      this.$q.loading.show({
        message: 'Some important <b>process</b> is in progress.<br/><span class="text-primary">Hang on...</span>',
        sanitize: true
      })

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 3000)
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