
<template>
  <div>
    <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Inner Loading</h5>
      </div>
      <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
      <div style="padding: 10px; font-size: 29px; color: darkgrey">|</div>
      <q-breadcrumbs class="text-brown hiddensection">
        <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Inner Loading" />
      </q-breadcrumbs>
    </div>
    <!------------------- Tital and Path(breadcrumbs) code End ----------->

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The QList and QItem are a group of components which can work together to present multiple line items vertically as a single continuous element. 
          List Items have the  pre-built child components:<code>QItemSection</code> ,<code>QItemLabel</code>
        </q-item-label>
      </q-item-section>
    </div>

    <!-- ---------------------- basic list code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ---------------------- basic list code End------------------------- -->

    <!-- ---------------------- Dense list code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Dense</div>
              <div class="text-subtitle2">
                <div class="q-pa-md" style="max-width: 350px">
    <q-list dense bordered padding class="rounded-borders">
      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>
    </q-list>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ---------------------- Dense list code End------------------------- -->

     <!-- ---------------------- Left-avatar thumbnail-QItemSection code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Left avatar thumbnail QItemSection</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>

        <q-item-section>Icon as avatar</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="teal" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>Avatar-type icon</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>Rounded avatar-type icon</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            R
          </q-avatar>
        </q-item-section>

        <q-item-section>Letter avatar-type</q-item-section>
      </q-item>

      <q-separator />
    </q-list>
                 </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ---------------------- Left-avatar thumbnail-QItemSection code End------------------------- -->

           <!-- ---------------------- Right    -avatar thumbnail-QItemSection code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Right avatar thumbnail QItemSection</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>Icon as avatar</q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Avatar-type icon</q-item-section>
        <q-item-section avatar>
          <q-avatar color="teal" text-color="white" icon="bluetooth" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Rounded avatar-type icon</q-item-section>
        <q-item-section avatar>
          <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Letter avatar-type</q-item-section>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            R
          </q-avatar>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>
                 </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ---------------------- Right-avatar thumbnail-QItemSection code End------------------------- -->


         <!-- ---------------------- Active State code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6"> Active State</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md q-gutter-md" style="max-width: 350px">
    <q-toggle v-model="active" label="Active" />

    <q-list bordered separator>
      <q-item clickable v-ripple :active="active">
        <q-item-section avatar>
          <q-icon name="signal_wifi_off" />
        </q-item-section>
        <q-item-section>Active</q-item-section>
        <q-item-section side>Side</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="active" active-class="text-orange">
        <q-item-section avatar>
          <q-icon name="signal_wifi_off" />
        </q-item-section>
        <q-item-section>Active, Active class</q-item-section>
        <q-item-section side>Side</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="active" active-class="bg-teal-1 text-grey-8">
        <q-item-section avatar>
          <q-icon name="signal_wifi_off" />
        </q-item-section>
        <q-item-section>Active, Active class</q-item-section>
        <q-item-section side>Side</q-item-section>
      </q-item>
    </q-list>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ----------------------  Active State code End------------------------- -->

          <!-- ---------------------- Contact List code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6"> Contact List</div>
              <div class="text-subtitle2">
                   <div class="q-pa-md" style="max-width: 350px">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Contacts</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item-label header>Offline</q-item-label>

      <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="grey" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>

              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ----------------------  Contact List code End------------------------- -->

     <!-- ---------------------- Setting code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">   
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Setting</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered padding>
      <q-item-label header>User Controls</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Content filtering</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict
            apps that can be downloaded
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Password</q-item-label>
          <q-item-label caption>
            Require password for purchase or use
            password to restrict purchase
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>General</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Notifications</q-item-label>
          <q-item-label caption>
            Notify me about updates to apps or games that I downloaded
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check2" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Sound</q-item-label>
          <q-item-label caption>
            Auto-update apps at anytime. Data charges may apply
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check3" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Auto-add widgets</q-item-label>
          <q-item-label caption>
            Automatically add home screen widgets
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Notifications</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery too low</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="notif1" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Friend request</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="notif2" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Picture uploaded</q-item-label>
          <q-item-label caption>Allow notification when uploading images</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" v-model="notif3" val="picture" />
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Other settings</q-item-label>

      <q-item>
        <q-item-section side>
          <q-icon color="teal" name="volume_down" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="10"
            label
            color="teal"
          />
        </q-item-section>
        <q-item-section side>
          <q-icon color="teal" name="volume_up" />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section side>
          <q-icon color="deep-orange" name="brightness_medium" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="brightness"
            :min="0"
            :max="10"
            label
            color="deep-orange"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section side>
          <q-icon color="primary" name="mic" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="mic"
            :min="0"
            :max="50"
            label
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ---------------------- Setting code End------------------------- -->

<!-- ---------------------- Emails list code start------------------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Emails</div>
              <div class="text-subtitle2">
                <div class="q-pa-md q-gutter-md">
    <q-list bordered class="rounded-borders" style="max-width: 350px">
      <q-item-label header>Friends</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
     <!-- ---------------------- Emails list code End------------------------- -->



  </div>
</template>

<script>
const contacts = [ {
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, 
 ]

const offline = [ {
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
} ]

export default {
   data () {
    return {
      active: true,
      contacts,
      offline,
      //setting
       check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8
    }
  }
    
};
</script>
<style scoped>
h5 {
  margin-left: 30px;
  font-family: "Times New Roman", Times, serif;
  /* color: dimgray;
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
  padding-left: 30px;
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