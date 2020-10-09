
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>File Picker</h5>
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
      <q-breadcrumbs-el label="File Picker" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
      QFile is a component which handles the user interaction for picking file.
        </q-item-label>
      </q-item-section>
    </div>
    <!----------------------- Basic Select Design Overview code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Design Overview</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">

                       <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-file v-model="model" label="Standard" />

      <q-file filled v-model="model" label="Filled" />

      <q-file outlined v-model="model" label="Outlined" />

      <q-file standout v-model="model" label="Standout" />

      <q-file standout="bg-teal text-white" v-model="model" label="Custom standout" />

      <q-file borderless v-model="model" label="Borderless" />

      <q-file rounded filled v-model="model" label="Rounded filled" />

      <q-file rounded outlined v-model="model" label="Rounded outlined" />

      <q-file rounded standout v-model="model" label="Rounded standout" />

      <q-file square filled v-model="model" label="Square filled" />

      <q-file square outlined v-model="model" label="Square outlined" />

      <q-file square standout v-model="model" label="Square standout" />
    </div>
  </div>
                  
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Basic Select Design Overview code End------------ -->
 

    <!-----------------------  Decorators fields code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Decorators</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-file filled v-model="model" label="Label (stacked)" stack-label />

      <q-file outlined v-model="model">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <q-file standout v-model="model">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-file>

      <q-file filled bottom-slots v-model="model" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-file>

      <q-file rounded outlined bottom-slots v-model="model" label="Label" counter max-files="12">
        <template v-slot:before>
          <q-icon name="attachment" />
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer" />
          <q-icon name="search" @click.stop />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-file>

      <q-file filled bottom-slots v-model="model" label="Label" counter max-files="12">
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer" />
          <q-icon name="create_new_folder" @click.stop />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-file>

      <q-file filled bottom-slots v-model="model" label="Label" counter max-files="12">
        <template v-slot:before>
          <q-icon name="folder_open" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" @click.stop />
        </template>
      </q-file>
    </div>
  </div>
                
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Decorators fields  code End------------ -->
 
        <!-----------------------  coloring code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Coloring</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      
                     <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-file color="purple-12" v-model="model" label="Label">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <q-file color="teal" filled v-model="model" label="Label">
        <template v-slot:prepend>
          <q-icon name="cloud_upload" />
        </template>
      </q-file>

      <q-file color="grey-3" outlined label-color="orange" v-model="model" label="Label">
        <template v-slot:append>
          <q-icon name="attachment" color="orange" />
        </template>
      </q-file>

      <q-file color="lime-11" bg-color="green" filled v-model="model" label="Label">
        <template v-slot:prepend>
          <q-icon name="attachment" />
        </template>
      </q-file>

      <q-file color="teal" outlined v-model="model" label="Label">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-file>

      <q-file clearable color="orange" standout bottom-slots v-model="model" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-file>
    </div>
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- coloring code End------------ -->
 
<!----------------------- clearable code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Clearable</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-file clearable filled color="purple-12" v-model="model" label="Label" />

      <!-- equivalent -->
      <q-file color="orange" filled v-model="model" label="Label">
        <template v-if="model" v-slot:append>
          <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
        </template>
      </q-file>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- clearable  code End------------ -->
 

<!----------------------- Disable-and-readonlycode Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Disable and Readonly</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-file
        disable
        filled
        v-model="model"
        hint="Disable"
        style="width: 250px"
      />

      <q-file
        readonly
        filled
        v-model="model"
        hint="Readonly"
        style="width: 250px"
      />

      <q-file
        disable
        readonly
        filled
        v-model="model"
        hint="Disable and readonly"
        style="width: 250px"
      />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Disable-and-readonly  code End------------ -->
 

<!-----------------------  Single file code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Single File</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                <div class="q-pa-md">
    <q-file
      v-model="file"
      label="Pick one file"
      filled
      style="max-width: 300px"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- single file code End------------ -->
 
    <!----------------------- multipal file selection code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Multipal file Selection</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <q-file
      v-model="files"
      label="Pick files"
      filled
      multiple
      style="max-width: 300px"
    />
  </div>
                      
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- multipal file selection  code End------------ -->
 
    <!-----------------------  Restricting-files code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Restricting files</div>
               
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-file
        style="max-width: 300px"
        v-model="filesImages"
        filled
        rounded
        label="Restricted to images"
        multiple
        accept=".jpg, image/*"
        @rejected="onRejected"
      />

      <q-file
        style="max-width: 300px"
        v-model="filesMaxSize"
        outlined
        label="Max file size (2k)"
        multiple
        max-file-size="2048"
        @rejected="onRejected"
      />

      <q-file
        style="max-width: 300px"
        v-model="filesMaxTotalSize"
        standout
        label="Max total upload size (4k)"
        multiple
        max-total-size="4096"
        @rejected="onRejected"
      />

      <q-file
        style="max-width: 300px"
        v-model="filesMaxNumber"
        standout
        label="Max number of files (3)"
        multiple
        max-files="3"
        @rejected="onRejected"
      />
    </div>
  </div>   
                   
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-----------------------Restricting-files  code End------------ -->
 


  </div>
</template>

<script>


export default {
   data () {
    return {
      model: null,
      file:null,
       files: null,
        filesImages: null,
      filesMaxSize: null,
      filesMaxTotalSize: null,
      filesMaxNumber: null
    }
  },
  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  }
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray; 
     */
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