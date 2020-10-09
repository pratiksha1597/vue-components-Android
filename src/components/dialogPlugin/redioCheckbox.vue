
<template>

<div >
  

 
    <!------------------- Redio Checkbox Toggel code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Redio Checkbox Toggel</div>
        <div class="text-subtitle2">

    <div class="q-pa-md q-gutter-sm">
    <q-btn label="Radio Options" color="primary" @click="radio" />
    <q-btn label="Checkbox Options" color="primary" @click="checkbox" />
    <q-btn label="Toggle Options" color="primary" @click="toggle" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Redio Checkbox Toggel code End----------- -->


 

   

  
  </div>
  
</template>

<script>
//import { Dialog } from 'quasar'
export default {
 methods: {
    radio () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose an option:',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'Option 1', value: 'opt1', color: 'secondary' },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 3', value: 'opt3' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    checkbox () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose your options:',
        options: {
          type: 'checkbox',
          model: [],
          // inline: true
          items: [
            { label: 'Option 1', value: 'opt1', color: 'secondary' },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 3', value: 'opt3' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    toggle () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose your options:',
        options: {
          type: 'toggle',
          model: [],
          // inline: true,
          items: [
            { label: 'Option 1', value: 'opt1', color: 'secondary' },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 3', value: 'opt3' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
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