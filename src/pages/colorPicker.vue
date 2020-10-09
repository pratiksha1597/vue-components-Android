
<template>

<div >
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Color Picker</h5>
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
      <q-breadcrumbs-el label="Components"  />
      <q-breadcrumbs-el label="Color Picker" />
    </q-breadcrumbs>

   </div>

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The <code>QColor</code> component provides a method to input colors.
        </q-item-label>
      </q-item-section>
    </div>
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                
                  <div class="q-gutter-sm">
                    <div class="q-pa-md row items-start q-gutter-md">
    <q-color v-model="hex" class="my-picker" />
    <q-color v-model="hexa" class="my-picker" />
    <q-color v-model="rgb" class="my-picker" />
    <q-color v-model="rgba" class="my-picker" />
  </div>
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
      hex: '#FF00FF',
      hexa: '#FF00FFCC',
      rgb: 'rgb(0,0,0)',
      rgba: 'rgba(255,0,255,0.8)'
    }
  }
    
}
</script>
<style scoped>
.my-picker{
  max-width: 250px
  }

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;  */
    
}
#rcorners3 {
  
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.text-h6 {
  /* color: rgb(94 92 92); */
  padding-bottom: 10px;
  padding-left:10px;
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