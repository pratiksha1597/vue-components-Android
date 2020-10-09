
<template>

<div >
  
 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Design</div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">
    <q-btn flat color="primary" label="Flat" />
    <q-btn flat rounded color="primary" label="Flat Rounded" />
    <q-btn flat round color="primary" icon="card_giftcard" />
    <br>
    <q-btn outline color="primary" label="Outline" />
    <q-btn outline rounded color="primary" label="Outline Rounded" />
    <q-btn outline round color="primary" icon="card_giftcard" />
    <br>
    <q-btn push color="primary" label="Push" />
    <q-btn push color="primary" round icon="card_giftcard" />
    <q-btn push color="white" text-color="primary" label="Push" />
    <q-btn push color="white" text-color="primary" round icon="card_giftcard" />
    <br>
    <q-btn unelevated color="primary" label="Unelevated" />
    <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
    <q-btn unelevated round color="primary" icon="card_giftcard" />
    <br>
    <q-btn no-caps color="primary" label="No caps" />
    <br>
    <q-btn class="glossy" color="teal" label="Glossy" />
    <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
    <q-btn class="glossy" round color="primary" icon="card_giftcard" />
    <q-btn class="glossy" round color="secondary" icon="local_florist" />
    <q-btn class="glossy" round color="deep-orange" icon="local_activity" />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>




   <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Alignment</div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">
    <q-btn align="left" class="btn-fixed-width" color="primary" label="Align to left" />
    <q-btn align="right" class="btn-fixed-width" color="secondary" label="Align to right" />
    <q-btn align="between" class="btn-fixed-width" color="accent" label="Align between" icon="flight_takeoff" />
    <q-btn align="around" class="btn-fixed-width" color="brown-5" label="Align around" icon="lightbulb_outline" />
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
    name: 'buttonDesign'
   
    
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