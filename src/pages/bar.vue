
<template>

<div >
   <!------------------- Tital and Path(breadcrumbs) code Start ----------->
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5> Bar</h5>
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
      <q-breadcrumbs-el label=" Bar" />
    </q-breadcrumbs>

   </div>
      <!------------------- Tital and Path(breadcrumbs) code End ----------->
<div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The <code> QBar</code> is a small component for creating the top bar on different types of <code> mobile </code> or <code> desktop </code> websites/apps.
      </q-item-label>
      </q-item-section>
       <q-item-section id="rcorners3">
        <q-item-label>
         <code>QBar</code> is especially useful for <code>frame-less Electron apps </code> where you integrate it in the QHeader.
         </q-item-label>
      </q-item-section>
    </div>

<!------------------- macOS style code Start ----------->

<div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
            <q-card-section>
              <div class="text-h6">MacOS style</div>
              <div class="text-subtitle2">
                <div class=" q-gutter-sm">
    <q-bar>
      
      <div class="text-weight-bold">
        App
      </div>
      <div class="cursor-pointer gt-md">File</div>
      <div class="cursor-pointer gt-md">Edit</div>
      <div class="cursor-pointer gt-md">View</div>
      <div class="cursor-pointer gt-md">Window</div>
      <div class="cursor-pointer gt-md">Help</div>
      <q-space />
      <q-btn dense flat icon="airplay" class="gt-xs" />
      <q-btn dense flat icon="battery_charging_full" />
      <q-btn dense flat icon="wifi" />
      <div>9:41</div>
      <q-btn dense flat icon="search" />
      <q-btn dense flat icon="list" />
    </q-bar>

    <q-bar class="bg-black text-white">
     
      <div class="text-weight-bold">
        App
      </div>
      <div class="cursor-pointer gt-md">File</div>
      <div class="cursor-pointer gt-md">Edit</div>
      <div class="cursor-pointer gt-md">View</div>
      <div class="cursor-pointer gt-md">Window</div>
      <div class="cursor-pointer gt-md">Help</div>
      <q-space />
      <q-btn dense flat icon="airplay" class="gt-xs" />
      <q-btn dense flat icon="battery_charging_full" />
      <q-btn dense flat icon="wifi" />
      <div>9:41</div>
      <q-btn dense flat icon="search" />
      <q-btn dense flat icon="list" />
    </q-bar>

    <q-bar>
      <q-btn dense flat round icon="lens" size="8.5px" color="red" />
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
      <q-btn dense flat round icon="lens" size="8.5px" color="green" />
      <div class="col text-center text-weight-bold">
        My-App
      </div>
    </q-bar>

    <q-bar dark class="bg-primary text-white">
      <q-btn dense flat round icon="lens" size="8.5px" color="red" />
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
      <q-btn dense flat round icon="lens" size="8.5px" color="green" />
      <div class="col text-center text-weight-bold">
        My-App
      </div>
    </q-bar>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
 <!------------------- macOS style code End ----------->

 <!------------------- windows style code Start ----------->
<div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
          <q-card-section>
              <div class="text-h6">Windows Style</div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">

    <q-bar>
      <div class="cursor-pointer">File</div>
      <div class="cursor-pointer">Edit</div>
      <div class="cursor-pointer gt-xs">View</div>
      <div class="cursor-pointer gt-xs">Window</div>
      <div class="cursor-pointer">Help</div>
      <q-space />
      <q-btn dense flat icon="minimize" />
      <q-btn dense flat icon="crop_square" />
      <q-btn dense flat icon="close" />
    </q-bar>

    <q-bar class="bg-black text-white">
      <div class="cursor-pointer">File</div>
      <div class="cursor-pointer">Edit</div>
      <div class="cursor-pointer gt-xs">View</div>
      <div class="cursor-pointer gt-xs">Window</div>
      <div class="cursor-pointer">Help</div>
      <q-space />
      <q-btn dense flat icon="minimize" />
      <q-btn dense flat icon="crop_square" />
      <q-btn dense flat icon="close" />
    </q-bar>

  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
 <!------------------- windows style code end ----------->

 <!------------------- android code Start ----------->
 <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
              <q-card-section>
              <div class="text-h6">Android Style</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">

    <q-bar dense class="bg-black text-white">
      <div>mobi-net</div>
      <q-icon name="email" />
      <q-space />
      <q-icon name="bluetooth" />
      <q-icon name="signal_wifi_4_bar" />
      <q-icon name="signal_cellular_4_bar" />
      <div class="gt-xs">100%</div>
      <q-icon name="battery_full" />
      <div>10:00AM</div>
    </q-bar>

    <q-bar dense class="bg-green text-white">
      <div>mobi-net</div>
      <q-icon name="email" />
      <q-space />
      <q-icon name="bluetooth" />
      <q-icon name="signal_wifi_4_bar" />
      <q-icon name="signal_cellular_4_bar" />
      <div class="gt-xs">100%</div>
      <q-icon name="battery_full" />
      <div>10:00AM</div>
    </q-bar>

  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

    <!------------------- android code end ----------->
    <!------------------- with other components code Start ----------->

<div>
  
<q-item-section id="rcorners3">
        <q-item-label>
        With other Components
         </q-item-label>
      </q-item-section>
    </div>
    
 
 <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
           <q-card-section>
              <div class="text-h6">QMenu</div>
              <div class="text-subtitle2">
              <div class="q-gutter-sm">
    <q-bar>
      <div class="cursor-pointer non-selectable">
        File
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Open...</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable>
              <q-item-section>Preferences</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu anchor="top right" self="top left">
                <q-list>
                  <q-item
                    v-for="n in 3"
                    :key="n"
                    dense
                    clickable
                  >
                    <q-item-section>Submenu Label</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                    <q-menu auto-close anchor="top right" self="top left">
                      <q-list>
                        <q-item
                          v-for="n in 3"
                          :key="n"
                          dense
                          clickable
                        >
                          <q-item-section>3rd level Label</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>

            <q-separator />

            <q-item clickable v-close-popup>
              <q-item-section>Quit</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>

      <div class="q-ml-md cursor-pointer non-selectable">
        Edit
        <q-menu auto-close>
          <q-list dense style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Cut</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Copy</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Paste</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Select All</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>

      <q-space />

      <q-btn dense flat icon="minimize" />
      <q-btn dense flat icon="crop_square" />
      <q-btn dense flat icon="close" />
    </q-bar>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- with other components code end ----------->
<!------------------- QDialog code Start ----------->

   <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
              <div class="text-h6">QDialog</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn label="Light" color="primary" @click="lightDialog = true" />
    <q-btn label="Dark" color="grey-8" @click="darkDialog = true" />

    <q-dialog v-model="lightDialog" persistent>
      <q-card>
        <q-bar>
          <q-icon name="arrow_forward" />
          <div>Your Next Steps</div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="darkDialog" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-icon name="warning" />
          <div>Are you certain?</div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
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

  </div>
<!------------------- Qdilog code End ----------->
<!------------------- QHeader with QToolbar code Start ----------->
  <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
              <div class="text-h6">QHeader with QToolbar</div>
              <div class="text-subtitle2">
              
                   <div class="q-gutter-sm">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated style="background-color: #433bdb;">
        <q-bar>
          <q-icon name="laptop_chromebook" />
          <div>Google Chrome</div>

          <q-space />

          <q-btn dense flat icon="minimize" />
          <q-btn dense flat icon="crop_square" />
          <q-btn dense flat icon="close" />
        </q-bar>

        <div class="q-pa-sm q-pl-md row items-center">
          <div class="cursor-pointer non-selectable">
            File
            <q-menu>
              <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Open...</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>New</q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable>
                  <q-item-section>Preferences</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>

                  <q-menu anchor="top right" self="top left">
                    <q-list>
                      <q-item
                        v-for="n in 3"
                        :key="n"
                        dense
                        clickable
                      >
                        <q-item-section>Submenu Label</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" />
                        </q-item-section>
                        <q-menu auto-close anchor="top right" self="top left">
                          <q-list>
                            <q-item
                              v-for="n in 3"
                              :key="n"
                              dense
                              clickable
                            >
                              <q-item-section>3rd level Label</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>

                <q-separator />

                <q-item clickable v-close-popup>
                  <q-item-section>Quit</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>

          <div class="q-ml-md cursor-pointer non-selectable">
            Edit
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>Cut</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Copy</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Paste</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Select All</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
        </div>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 5" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- QHeader with QToolbar code End ----------->


 




  </div>
</template>

<script>
export default {
   
    data () {
    return {
      lightDialog: false,
      darkDialog: false
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
}

.row1 {
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

#title {
  color: rgb(131, 128, 128);
  font-size: 30px;
  font-style: inherit;
}

#title1 {
  color: rgb(214, 211, 211);
  font-size: 30px;
}

.pill-nav p {
  margin-left: 20px;
  margin-top: 20px;
  display: inline-block;
  color: black;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0px;
}


</style>