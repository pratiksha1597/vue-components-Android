
<template>
  <div>
     <!------------------- Tital and Path(breadcrumbs) code Start ----------->
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Banner</h5>
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
      <q-breadcrumbs-el label="Banner" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->
    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The <code>QBanner</code> component creates a banner element to display
          a prominent message and related optional actions.
        </q-item-label>
      </q-item-section>
    </div>

 <!------------------- Basic code Start ----------->
    <div class="q-pa-md row1">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
       <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <q-banner class="bg-primary text-white">
                    Unfortunately, the credit card did not go through, please
                    try again.
                    <template v-slot:action>
                      <q-btn flat color="white" label="Dismiss" />
                      <q-btn flat color="white" label="Update Credit Card" />
                    </template>
                  </q-banner>

                  <q-banner class="bg-grey-3">
                    <template v-slot:avatar>
                      <q-icon name="signal_wifi_off" color="primary" />
                    </template>
                    You have lost connection to the internet. This app is
                    offline.
                    <template v-slot:action>
                      <q-btn flat color="primary" label="Turn on Wifi" />
                    </template>
                  </q-banner>

                  <q-banner inline-actions class="text-white bg-red">
                    You have lost connection to the internet. This app is
                    offline.
                    <template v-slot:action>
                      <q-btn flat color="white" label="Turn ON Wifi" />
                    </template>
                  </q-banner>
                </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- Basic code End ----------->
<!------------------- Rounded Border code Start ----------->
   <div class="q-pa-md row1 ">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
         <q-card-section>
              <div class="text-h6">Rounded Border</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <q-banner rounded class="bg-purple-8 text-white">
                    We can't find your saved recipes until you sign in.

                    <template v-slot:action>
                      <q-btn flat color="white" label="Continue as a Guest" />
                      <q-btn flat color="white" label="Sign in" />
                    </template>
                  </q-banner>
                </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- Rounded border code End ----------->
<!------------------- with an image code Start ----------->
  <div class="q-pa-md row1 ">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
            <q-card-section>
              <div class="text-h6">With an image</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <q-banner rounded class="bg-grey-3">
                    <template v-slot:avatar>
                      <img
                        src="https://cdn.quasar.dev/img/mountains.jpg"
                        style="width: 100px; height: 64px"
                      />
                    </template>

                    Could not retrieve travel data.
                    <template v-slot:action>
                      <q-btn flat label="Retry" />
                    </template>
                  </q-banner>
                </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- with in img code end ----------->

<!------------------- inline actions code Start ----------->
    <div class="q-pa-md row1 ">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
       <q-card-section>
              <div class="text-h6">Inline actions</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <q-banner inline-actions rounded class="bg-orange text-white">
                    You have lost connection to the internet. This app is
                    offline.

                    <template v-slot:action>
                      <q-btn flat label="Turn ON Wifi" />
                      <q-btn flat label="Dismiss" />
                    </template>
                  </q-banner>
                </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- inline action code end ----------->
<!------------------- Dense code Start ----------->
    <div class="q-pa-md row1 ">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
        <q-card-section>
              <div class="text-h6">Dense</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <q-banner dense class="bg-primary text-white">
                    Unfortunately, the credit card did not go through, please
                    try again.
                    <template v-slot:action>
                      <q-btn flat color="white" label="Dismiss" />
                      <q-btn flat color="white" label="Update Credit Card" />
                    </template>
                  </q-banner>

                  <q-banner dense class="bg-grey-3">
                    <template v-slot:avatar>
                      <q-icon name="signal_wifi_off" color="primary" />
                    </template>
                    You have lost connection to the internet. This app is
                    offline.
                    <template v-slot:action>
                      <q-btn flat color="primary" label="Turn on Wifi" />
                    </template>
                  </q-banner>

                  <q-banner dense inline-actions class="text-white bg-red">
                    You have lost connection to the internet. This app is
                    offline.
                    <template v-slot:action>
                      <q-btn flat color="white" label="Turn ON Wifi" />
                    </template>
                  </q-banner>
                </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- Dense code end ----------->
    
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;     */
}
#rcorners3 {
 padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
}

.text-h6 {
  /* color: rgb(94 92 92); */
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