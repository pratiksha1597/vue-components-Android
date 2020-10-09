
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Pull to Refresh</h5>
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
      <q-breadcrumbs-el label="Pull to Refresh" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
       The QPullToRefresh is a component that allows the user to pull down in order to refresh page content (or retrieve the newest content).

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
                          <div class="q-pa-md scroll" style="height: 300px">
    <q-pull-to-refresh @refresh="refresh">
      <div v-for="(item, index) in items" :key="index" class="q-mb-sm">
        <q-badge color="secondary">
          {{ items.length - index }}
        </q-badge>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </q-pull-to-refresh>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- standared code End------------ -->
 

  <!-------------------------- Custom icon code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom icon</div>
                <div class="text-subtitle2">
                <div class="q-pa-md scroll" style="height: 300px">
    <q-pull-to-refresh
      @refresh="refresh"
      color="yellow-9"
      icon="lightbulb"
    >
      <div v-for="(item, index) in items" :key="index" class="q-mb-sm">
        <q-badge color="secondary">
          {{ items.length - index }}
        </q-badge>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </q-pull-to-refresh>
  </div>                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Custom icon code End------------ -->
 
 

 <!-------------------------- Custom Color code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom Color</div>
                <div class="text-subtitle2">
                <div class="q-pa-md scroll" style="height: 300px">
    <q-pull-to-refresh
      @refresh="refresh"
      color="orange-2"
      bg-color="black"
      icon="autorenew"
    >
      <div v-for="(item, index) in items" :key="index" class="q-mb-sm">
        <q-badge color="accent">
          {{ items.length - index }}
        </q-badge>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </q-pull-to-refresh>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Custom Color code End------------ -->
 
 



  

  </div>
</template>

<script>


export default {
   data () {
    return {
      items: [ {}, {}, {}, {}, {}, {}, {}, {}, {} ]
    }
  },

  methods: {
    refresh (done) {
      setTimeout(() => {
        this.items.push({}, {}, {}, {}, {}, {}, {})
        done()
      }, 1000)
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