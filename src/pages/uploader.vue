
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Uploader</h5>
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
      <q-breadcrumbs-el label="Uploader" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    Quasar supplies a way for you to upload files through the QUploader component.
        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- Design code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Design</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="q-gutter-sm row items-start">
      <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 300px"
      />

      <q-uploader
        url="http://localhost:4444/upload"
        color="teal"
        flat
        bordered
        style="max-width: 300px"
      />

      <q-uploader
        url="http://localhost:4444/upload"
        label="Upload files"
        color="purple"
        square
        flat
        bordered
        style="max-width: 300px"
      />

      <q-uploader
        url="http://localhost:4444/upload"
        label="No thumbnails"
        color="amber"
        text-color="black"
        no-thumbnails
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
     
 <!-------------------------------- Design code End --------- --> 
  

   <!-------------------------------- Dark  code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Dark</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md" style="max-width: 300px">
    <q-uploader
      url="http://localhost:4444/upload"
      dark
    />
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Dark  code End --------- --> 
  
 <!-------------------------------- Multiple code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Multiple</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <div class="q-gutter-sm row items-start">
      <q-uploader
        url="http://localhost:4444/upload"
        label="Individual upload"
        multiple
        style="max-width: 300px"
      />

      <q-uploader
        url="http://localhost:4444/upload"
        label="Batch upload"
        multiple
        batch
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
     
 <!-------------------------------- Multiple  code End --------- --> 
  

 <!-------------------------------- Basic Restrictions  code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Basic Restrictions</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Restricted to images"
        multiple
        accept=".jpg, image/*"
        @rejected="onRejected"
      />

      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Max file size (2k)"
        multiple
        max-file-size="2048"
        @rejected="onRejected"
      />

      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Max total upload size (4k)"
        multiple
        max-total-size="4096"
        @rejected="onRejected"
      />

      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Max number of files (3)"
        multiple
        max-files="3"
        @rejected="onRejected"
      />
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Basic Restrictions  code End --------- --> 
  

 <!-------------------------------- Headers  code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Headers</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-uploader
      url="http://localhost:4444/upload"
      :headers="[{name: 'X-Custom-Timestamp', value: 1550240306080}]"
      style="max-width: 300px"
    />
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Headers  code End --------- --> 

 <!-------------------------------- Auto upload on file selection code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Auto upload on file selection</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <q-uploader
      label="Auto Uploader"
      auto-upload
      url="http://localhost:4444/upload"
      multiple
    />
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Auto upload on file selection  code End --------- --> 
 <!-------------------------------- Promise-based factory function code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Promise-based factory function</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-uploader
      :factory="factoryFn"
      multiple
      style="max-width: 300px"
    />
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Promise-based factory function  code End --------- --> 
 <!-------------------------------- custom file list code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">custom file list</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md" style="max-width: 300px">
    <q-uploader
      url="http://localhost:4444/upload"
      label="Custom list"
      multiple
    >
      <template v-slot:list="scope">
        <q-list separator>

          <q-item v-for="file in scope.files" :key="file.name">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.name }}
              </q-item-label>

              <q-item-label caption>
                Status: {{ file.__status }}
              </q-item-label>

              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section
              v-if="file.__img"
              thumbnail
              class="gt-xs"
            >
              <img :src="file.__img.src">
            </q-item-section>

            <q-item-section top side>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="scope.removeFile(file)"
              />
            </q-item-section>
          </q-item>

        </q-list>
      </template>
    </q-uploader>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom file list  code End --------- --> 
  

 

  
 
  
  


  </div>
</template>

<script>

export default {

    //basic restriction
    methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },

    //promise based factory  function
     factoryFn (files) {
      // returning a Promise

      return new Promise((resolve) => {
        // simulating a delay of 2 seconds
        setTimeout(() => {
          resolve({
            url: 'http://localhost:4444/upload'
          })
        }, 2000)
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