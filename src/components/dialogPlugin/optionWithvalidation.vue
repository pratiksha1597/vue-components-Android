
<template>

<div >
  

 
    

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" > Option with Validation </div>
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

   
 

   

  
  </div>
  
</template>

<script>
//import { Dialog } from 'quasar'
export default {
  methods: {
    radio () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose your option, but make sure it\'s the second one :)',
        options: {
          type: 'radio',
          model: 'opt1',
          isValid: val => val === 'opt2',
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
      })
    },

    checkbox () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose your options, but make sure you also pick the second one.',
        options: {
          type: 'checkbox',
          model: [],
          isValid: model => model.includes('opt2'),
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
      })
    },

    toggle () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose your options, but make sure you also pick the first two.',
        options: {
          type: 'toggle',
          model: [],
          isValid: model => model.includes('opt1') && model.includes('opt2'),
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