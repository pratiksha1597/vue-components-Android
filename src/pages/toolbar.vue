
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Toolbar</h5>
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
      <q-breadcrumbs-el label="Toolbar" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
      QToolbar is a component usually part of Layout Header and Footer, but it can be used anywhere on the page.

        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- Basic code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md q-gutter-y-sm">
    <q-toolbar class="text-primary">
      <q-btn flat round dense icon="menu" />
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>

    <q-toolbar class="bg-grey-3">
      <q-btn flat round dense>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>

    <q-toolbar class="bg-purple text-white">
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn flat round dense icon="apps" class="q-mr-xs" />
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>

    <q-toolbar class="bg-black text-white">
      <q-btn flat round dense icon="assignment_ind">
        <q-badge floating color="red">2</q-badge>
      </q-btn>
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
      <q-btn flat round dense icon="gamepad" />
    </q-toolbar>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Basic code End --------- --> 
  

   <!-------------------------------- With avatar code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With avatar</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

      <q-toolbar-title>Quasar Framework</q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- With avatar  code End --------- --> 
  

  <!-------------------------------- Glossy code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Glossy</div>
                <div class="text-subtitle2">
                        <div class="q-pa-md">
    <q-toolbar class="bg-primary glossy text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

      <q-toolbar-title>Quasar Framework</q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Glossy code End --------- --> 
  

   <!-------------------------------- Grouped vertically code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Grouped vertically</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md q-gutter-y-sm">
    <div class="bg-orange text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
      <q-toolbar inset>
        <q-toolbar-title><strong>Quasar</strong> Framework</q-toolbar-title>
      </q-toolbar>
    </div>

    <div class="bg-cyan text-white">
      <q-toolbar>
        <q-btn flat round dense icon="assignment_ind" />

        <q-space />

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
     
 <!-------------------------------- Grouped vertically code End --------- --> 

 <!-------------------------------- Grouped Horizontally code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Grouped Horizontally</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <div class="row no-wrap shadow-1">
      <q-toolbar class="col-8 bg-grey-3">
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title>Title</q-toolbar-title>
        <q-btn flat round dense icon="search" />
      </q-toolbar>
      <q-toolbar class="col-4 bg-primary text-white">
        <q-space />
        <q-btn flat round dense icon="bluetooth" class="q-mr-sm" />
        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Grouped Horizontally code End --------- --> 
  
  
  
   <!-------------------------------- with tab code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Tabs</div>
                <div class="text-subtitle2">
                      <div class="q-pa-md">
    <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="Tab 1" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- With Tabs code End --------- --> 
  
   <!-------------------------------- With DropDown code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Dropdowns</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white q-my-md shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-separator dark vertical inset />
      <q-btn stretch flat label="Link" />

      <q-space />

      <q-btn-dropdown stretch flat label="Dropdown">
        <q-list>
          <q-item-label header>Folders</q-item-label>
          <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header>Files</q-item-label>
          <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
    </q-toolbar>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- With Dropdowns code End --------- --> 
  
   <!-------------------------------- with  button toggels code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Button Toggels</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />

      <q-space />

      <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="yellow"
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      />
    </q-toolbar>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- with  button toggels code End --------- --> 
  
  
  
    
  



  </div>
</template>

<script>

export default {
  data () {
    return {
      tab: '',
      model: 'one'
    }
  }
  
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