
<template>

<div >
  

 <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Dialog Plugin</h5>
     </div>
     <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
   <div style="padding: 10px; font-size: 29px; color: darkgrey;">|
   </div>
     <q-breadcrumbs class="text-brown hiddensection" >
       <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
 <q-breadcrumbs-el  icon="home" />
      <q-breadcrumbs-el label="Quasar Plugin"  />
      <q-breadcrumbs-el label="Dialog Plugin" />
    </q-breadcrumbs>

   </div>


   <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
          Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions.
           They also can provide the user with important information, or require them to make a decision
      </q-item-label>
      </q-item-section>
   </div>
 
    <!------------------- Basic code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Basic</div>
        <div class="text-subtitle2">

     <div class="q-pa-md q-gutter-sm">
    <q-btn label="Alert" color="primary" @click="alert" />
    <q-btn label="Confirm" color="primary" @click="confirm" />
    <q-btn label="Prompt" color="primary" @click="prompt" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Basic code End----------- -->


   
<redioCheckbox/>
<otherOption/>
<promptValidation/>
<optionWithvalidation/>
<showProgress/>

  
  </div>
  
</template>

<script>
import { Dialog } from 'quasar'
import redioCheckbox from 'components/dialogPlugin/redioCheckbox.vue';
import otherOption from 'components/dialogPlugin/otherOption.vue';
import promptValidation from 'components/dialogPlugin/promptValidation.vue';
import optionWithvalidation from 'components/dialogPlugin/optionWithvalidation.vue';
import showProgress from 'components/dialogPlugin/showProgress.vue';

 
export default {
components:{
redioCheckbox,
otherOption,
promptValidation,
optionWithvalidation,
showProgress
},
 methods: {
    alert () {
      this.$q.dialog({
        title: 'Alert',
        message: 'Some message'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    confirm () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    prompt () {
      this.$q.dialog({
        title: 'Prompt',
        message: 'What is your name?',
        prompt: {
          model: '',
          type: 'text' // optional
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