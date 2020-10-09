
<template>

<div >
  

 
    <!------------------- Other Option code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Other Option</div>
        <div class="text-subtitle2">

    <div class="q-pa-md q-gutter-sm">
    <q-btn label="Custom Buttons" color="primary" @click="customBtn" />
    <q-btn label="Positioned" color="primary" @click="positioned" />
    <q-btn label="Stacked Buttons" color="primary" @click="stacked" />
    <q-btn label="Auto Closing" color="primary" @click="autoClose" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Other Option code End----------- -->


 

   

  
  </div>
  
</template>

<script>
//import { Dialog } from 'quasar'
export default {
 methods: {
    customBtn () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    positioned () {
      this.$q.dialog({
        title: 'Positioned',
        message: 'This dialog appears from bottom.',
        position: 'bottom'
      })
    },

    stacked () {
      this.$q.dialog({
        title: 'Stacked Buttons',
        stackButtons: true,
        cancel: true
      })
    },

    autoClose () {
      let seconds = 3

      const dialog = this.$q.dialog({
        title: 'Alert',
        message: `Autoclosing in ${seconds} seconds.`
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        clearTimeout(timer)
        // console.log('I am triggered on both OK and Cancel')
      })

      const timer = setInterval(() => {
        seconds--

        if (seconds > 0) {
          dialog.update({
            message: `Autoclosing in ${seconds} second${seconds > 1 ? 's' : ''}.`
          })
        }
        else {
          clearInterval(timer)
          dialog.hide()
        }
      }, 1000)
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
  color: rgb(94 92 92);
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>