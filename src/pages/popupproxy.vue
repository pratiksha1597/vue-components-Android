
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>PopupProxy</h5>
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
      <q-breadcrumbs-el label="PopupProxy" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
       QPopupProxy should be used when you need either a QMenu (on bigger screens) or a QDialog (on smaller screens) to be displayed. It acts as a proxy which picks either of the two components to use. QPopupProxy also handles context-menus.


        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------- standared code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standared</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                         <div class="q-pa-md">
    <q-btn push color="primary" label="Handles click">
      <q-popup-proxy>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- standared code End------------ -->
 

  <!-------------------------- Context menu code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Context menu</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-btn push color="purple" label="Handles right-click">
      <q-popup-proxy context-menu>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Context menu code End------------ -->
 
 

 <!-------------------------- Break Point code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Break Point</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-input filled v-model="input" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy :breakpoint="600">
            <q-date v-model="input" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Break Point code End------------ -->
 
 

 <!-------------------------- -Props-from-QMenu-or-QDialog code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Props from QMenu or QDialog</div>
                <div class="text-subtitle2">
                 
                   <div class="q-pa-md q-gutter-md" style="font-size: 36px">
    <q-icon name="settings_remote" class="text-brown cursor-pointer">
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
        <q-banner class="bg-brown text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-icon>

    <q-icon name="perm_data_setting" class="text-purple cursor-pointer">
      <q-popup-proxy :offset="[10, 10]">
        <q-banner class="bg-purple text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-icon>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- -Props-from-QMenu-or-QDialog code End------------ -->
 
 


  

  </div>
</template>

<script>


export default {
   data () {
    return {
      input: '',
      date: '2018/11/03'
    }
  }
    
}
</script>
<style scoped>

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
  padding-left:30px;
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