
<template>

<div >

 
<!-- ------------------------heding section for Button group page start-------------- -->
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Button Dropdown</h5>
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
      <q-breadcrumbs-el label="Button Dropdown" />
    </q-breadcrumbs>

   </div>

    <!-- ------------------------heding section for button End-------------- -->

    <!----------------------------- Basic dropdown Code start ------------>

 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
               <div class="q-gutter-sm">
    <q-btn-dropdown color="primary" label="Dropdown Button">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
              </div>
            </q-card-section>

            
          </q-card>
        </div>
      </div>
    </div>
   <!----------------------------- Basic dropdown Code End ------------>
   <q-space />

 <!----------------------------- various content dropdown Code start ------------>

 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Various content</div>
              <div class="text-subtitle2">
              <div class="q-gutter-sm">
    <q-btn-dropdown
      class="glossy"
      color="purple"
      label="Account Settings"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

 <!----------------------------- various content dropdown Code end ------------>

 <!----------------------------- split dropdown Code start ------------>


 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">split</div>
              <div class="text-subtitle2">
               <div class="q-gutter-sm">
    <q-btn-dropdown
      split
      class="glossy"
      color="teal"
      label="Folders"
      @click="onMainClick"
    >
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="assignment" color="secondary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Vacation</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
 <!----------------------------- split dropdown Code end ------------>

 <!----------------------------- custom button dropdown Code start ------------>


 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Custom Button</div>
              <div class="text-subtitle2">
              <div class="q-gutter-sm">
    <q-btn-dropdown
      split
      color="orange"
      push
      glossy
      no-caps
      icon="folder"
      label="Dropdown Button"
      @click="onMainClick"
    >
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="assignment" color="secondary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Vacation</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

 <!----------------------------- custom button dropdown Code End ------------>

 <!----------------------------- custom dropdown icon dropdown Code start ------------>

  <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Custom dropdown icon</div>
              <div class="text-subtitle2">
               <div class="q-gutter-sm">
    <q-btn-dropdown color="pink" label="Dropdown Button" dropdown-icon="change_history">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

 <!----------------------------- custom dropdown icon dropdown Code end ------------>

 <!----------------------------- using v-model dropdown Code start ------------>


 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Using v-model</div>
              <div class="text-subtitle2">
               <div class="q-gutter-sm">
    <q-toggle v-model="menu" label="Menu state" />

    <q-btn-dropdown
      v-model="menu"
      class="glossy q-ml-lg"
      color="primary"
      label="Dropdown"
    >
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="assignment" color="secondary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Vacation</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

 <!----------------------------- using v-model dropdown Code end ------------>

 <!----------------------------- disable dropdown Code start ------------>


 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Disable</div>
              <div class="text-subtitle2">
               <div class="q-gutter-sm">
    <div class="row q-gutter-sm">
      <q-btn-dropdown
        disable
        class="glossy"
        color="primary"
        label="Default"
      >
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown
        split
        disable-main-btn
        class="glossy"
        color="primary"
        label="Only main btn"
      >
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="assignment" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown
        split
        disable-dropdown
        class="glossy"
        color="primary"
        label="Only dropdown"
      >
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

 <!----------------------------- Disable dropdown Code End ------------>






  </div>
</template>

<script>
export default {
 methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    },
     onMainClick () {
      // console.log('Clicked on main button')
    },

    onItemClick () {
      // console.log('Clicked on an Item')
    }
  },
   data () {
    return {
      mobileData: true,
      bluetooth: false,
      menu: false
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

.my-card{
  /* width: 100%; */
  /* max-width: 250px; */
}

</style>