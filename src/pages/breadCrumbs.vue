
<template>

<div >
     <!------------------- Tital and Path(breadcrumbs) code Start ----------->
   <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Bread Crumbs</h5>
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
      <q-breadcrumbs-el label="Bread Crumbs" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->
   <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The <code>QBanner</code> component creates a banner element to display a prominent message and related optional actions.
        </q-item-label>
      </q-item-section>
    </div>


<div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
       <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-breadcrumbs class="text-grey">
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el icon="widgets" />
      <q-breadcrumbs-el icon="navigation" />
    </q-breadcrumbs>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

  <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
        <q-card-section>
              <div class="text-h6">In a QToolbar</div>
              <div class="text-subtitle2">
              <div class="q-gutter-sm">
    <div class="bg-cyan text-white">
      <q-toolbar>
        <q-btn flat round dense icon="assignment_ind" />

        <q-toolbar-title>Quasar</q-toolbar-title>

        <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
        <q-btn flat round dense icon="gamepad" />
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>
    </div>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

  
  
   <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
       <q-card-section>
              <div class="text-h6">Custom separators</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
    </q-breadcrumbs>

    <q-breadcrumbs class="text-grey" active-color="purple">
      <template v-slot:separator>
        <q-icon
          size="1.2em"
          name="arrow_forward"
          color="purple"
        />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
    </q-breadcrumbs>

    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
    </q-breadcrumbs>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

 <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
          <q-card-section>
              <div class="text-h6">Router links</div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
      <q-breadcrumbs-el label="Build" icon="build" />
    </q-breadcrumbs>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

<div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
              <div class="text-h6">Gutters</div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">
    <q-breadcrumbs gutter="none">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-separator />

    <q-breadcrumbs gutter="xs">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-separator />

    <q-breadcrumbs gutter="sm">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-separator />

    <q-breadcrumbs gutter="md">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-separator />

    <q-breadcrumbs gutter="lg">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-separator />

    <q-breadcrumbs gutter="xl">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

 <div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
         <q-card-section>
              <div class="text-h6">Align</div>
              <div>
                 <q-item-section id="rcorners3">
        <q-item-label>
         Use <code>align</code> to either align the breadcrumb to the left, center or right
        </q-item-label>
      </q-item-section>
              </div>
              <div class="text-subtitle2">
               <div class=" q-gutter-sm">
    <q-breadcrumbs align="left">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-breadcrumbs align="center">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-breadcrumbs align="right">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

  

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
export default {
   
    
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