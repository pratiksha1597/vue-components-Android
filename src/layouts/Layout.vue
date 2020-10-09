<template>
  <q-layout view="lHh Lpr lFf">
    <!--------------------------- header Section Start ------------------------>
    <q-header :class="(dark)?'darkcss':'lightcss'">
      <q-toolbar id="main">
        <div>
          <!------------------- left side of header section start-------------- -->
          <q-btn flat dense round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
         
        </div>
        <!--------------------------- left side of header section start End-------------- -->
        <div>
          <!-- if You want to add title -->
        </div>

        <!-- right side of header section  start------>
        <div  v-if="show">
          <q-btn flat round icon="search" size="20px" @click="show = !show"></q-btn>
          <q-btn flat round icon="notifications_none" size="20px" >
            <q-badge color="blue" floating>4</q-badge>

            <q-menu
              transition-show="scale"
              transition-hide="scale"
              :offset="[320, -6]"
              style=""
            >
              <q-toolbar class="bg-indigo-5 text-white shadow-2" style="height:80px;">
                <q-item-section class="text-center">
                  <q-item-label>5 New</q-item-label>
                  <q-item-label caption lines="1" style="color: white"
                    >Notification</q-item-label
                  >
                </q-item-section>
              </q-toolbar>
              <q-scroll-area style="height: 250px; width: 350px;">
                <q-list class="q-py-xs" bordered>
                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="chat" class="text-primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-primary"
                        >New Messages</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Are you going to meet me tonight ?
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 1 min ago </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="info" class="text-red" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-red"
                        >Server Limit Reached!</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Server have 99% CPU usage.
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 2 min ago </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="event" class="text-orange" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-orange"
                        >Bruce's Party</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Chocolate cake oat cake tiramisu
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 12 min ago </q-item-section>
                  </q-item>

                  <q-item class="q-my-sm" clickable v-ripple>
                    <q-item-section side>
                      <q-icon name="mail" class="text-primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-primary"
                        >New Mail From Peter</q-item-label
                      >
                      <q-item-label caption lines="1"
                        >Cake sesame snaps cupcake
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top> 2 hr ago </q-item-section>
                  </q-item>
                </q-list>
              </q-scroll-area>

              <q-item class="bg-grey-4" clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-primary text-center"
                    >View All Notifications
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
            </q-menu>
          </q-btn>

          <q-btn flat>
            <q-item-label> Zarin Doe </q-item-label>
            <q-avatar size="42px" style="margin-left: 10px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>

            <q-menu transition-show="scale" transition-hide="scale" >
              <q-list style="margin:5px;">
                <q-item clickable v-close-popup>
                  <q-item-section side>
                    <q-icon name="person_outline" color="dimgray" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>profile</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section side>
                    <q-icon name="mail" color="dimgray" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Inbox</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section side>
                    <q-icon name="favorite_border" color="dimgray" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Wish list</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section side>
                    <q-icon name="logout" color="dimgray" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Logout</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <!-- right side of header section End------>
        <div v-else style="width:100%"> 
     

        <q-input  bottom-slots v-model="text"  :dense="dense"  >
        
        <template v-slot:append>
          <!-- <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" /> -->
          <q-icon name="search" />
          <q-space />
          <q-icon name="close" @click="show = !show"/>
        </template>

       
      </q-input>

          </div>
      </q-toolbar>
    </q-header>
    <!--------------------------- header Section End ------------------------>

    <!---------------------------- Footer code-------------------------------------- -->
      
        <footerr/>
    
    <!---------------------------- Footer End-------------------------------------- -->
   

    <!-------------------------------- Navigation bar start -------------------------- -->

    <q-scroll-area class="q-scroll-area-tasks">
      <q-drawer
        v-model="leftDrawerOpen"
        :breakpoint="767"
        bordered
        show-if-above
        id="layout"
        :width="250"
      >
        <q-list>
          <div>
            <q-item-label header>
              <img src="icons/favicon-128x128.png" width="40" height="40" />
              <span id="title" class="text-primary">Quasar </span></q-item-label
            >
          </div>
          
          <menubar />
        </q-list>
      </q-drawer>
    </q-scroll-area>
 <!-------------------------------- Navigation bar End -------------------------- -->

 

    <q-page-container>
         <router-view />
        
        <settings/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import menubar from "components/navBar/menu.vue";
import footerr from "components/navBar/footer.vue";
import settings from "components/navBar/settings.vue";

import { Dark } from 'quasar'

export default {
  name: "MainLayout",
  components: { EssentialLink, menubar ,footerr,settings},
   created() {
		this.dark = this.$q.dark.isActive;
	},
	watch: {
		'$q.dark.isActive' (val) {
			this.dark = val;
		}
	},
  data() {
    return {
      leftDrawerOpen: false,
      hidden: false,
      show: true,
       text: '',
      ph: '',
      dark:false,
      dense: false

     
    };
  },
   methods:{
  // lightDialog () {
  //   Dark.set(true) 
  //   }

  // hidde (){
  //   debugger
  //           visibility: hidden;
  // }
   }
};
</script>
<style lang="scss">
// @media screen and (min-width: 768px) {
//   .q-footer {
//     display: none;
//   }
// }
.q-drawer {.q-router-link--exact-active{
  color:white ! important;
  background-color: #7367f0;
  
}

}

#main {
  display: flex;
}

#main div:nth-of-type(1) {
  flex-grow: 2;
}
#main div:nth-of-type(2) {
  flex-grow: 175;
}
#main div:nth-of-type(3) {
  flex-grow: 1;
}

.q-header {
  margin: 20px;
 // background-color: white;
  border-radius: 5px;
  padding: 10px;
  height: 70px;
}
.q-layout {
  //background-color: whitesmoke;
}


#title {
  font-size: 30px;
  //color:;
  font-style: italic;
}
.q-btn {
  // color: dimgray;
}
#heding {
  margin-left: 100px;
}
.scroll {
overflow: hidden;}


//for header theam
.darkcss{
  background: #1D1D1D;
  color:white;
}
.lightcss{
  background: rgb(243, 241, 241);
  color:black;
}
</style>
