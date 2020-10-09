
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Input Textfield</h5>
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
      <q-breadcrumbs-el label="Input Textfield" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
         The QInput component is used to capture text input from the user. It uses <code> v-model </code>, similar to a regular input. It has support for errors and validation, and comes in a variety of styles, colors, and types.
        </q-item-label>
      </q-item-section>
    </div>
    <!----------------------- Basic Input fields Design Overview code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Design Overview</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text" label="Filled" />

      <q-input outlined v-model="text" label="Outlined" />

      <q-input standout v-model="text" label="Standout" />

      <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" />

      <q-input borderless v-model="text" label="Borderless" />

      <q-input rounded filled v-model="text" label="Rounded filled" />

      <q-input rounded outlined v-model="text" label="Rounded outlined" />

      <q-input rounded standout v-model="text" label="Rounded standout" />

      <q-input square filled v-model="text" label="Square filled" />

      <q-input square outlined v-model="text" label="Square outlined" />

      <q-input square standout v-model="text" label="Square standout" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Basic Input fields Design Overview code End------------ -->
 

    <!-----------------------  Input fields Coloring code Start------------ -->
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
      <q-input color="purple-12" v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="grey-3" label-color="orange" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </q-input>

      <q-input color="lime-11" bg-color="green" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input color="orange" standout bottom-slots v-model="text" label="Label" counter clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields Coloring code End------------ -->
 
        <!-----------------------  Input fields Standard code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standard</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
               <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-toggle v-model="dense" label="Dense QInput" />

      <q-input v-model="text" :dense="dense" />

      <q-input v-model="text" label="Label (stacked)" stack-label :dense="dense" />

      <q-input v-model="text" label="Label" :dense="dense" />

      <q-input v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

      <q-input v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

      <q-input v-model="text" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input v-model="text" :dense="dense">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input bottom-slots v-model="text" label="Label" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>

      <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
        <template v-slot:before>
          <q-icon name="flight_takeoff" />
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>

      <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="schedule" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>

      <q-input bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>

      <q-input v-model="text" hint="Disable" :dense="dense" disable />

      <q-input v-model="text" hint="Readonly" :dense="dense" readonly />

      <q-input v-model="text" hint="Disable and readonly" :dense="dense" disable readonly />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields Standard code End------------ -->
 
<!----------------------- Basic Input fields  filled code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Filled</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-toggle v-model="dense" label="Dense QInput" />

      <q-input filled v-model="text" :dense="dense" />

      <q-input filled v-model="text" label="Label (stacked)" stack-label :dense="dense" />

      <q-input filled v-model="text" label="Label" :dense="dense" />

      <q-input filled v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

      <q-input filled v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

      <q-input filled square v-model="text" hint="With perfect square borders" :dense="dense" />

      <q-input filled v-model="text" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-input filled v-model="text" hint="Disable" :dense="dense" disable />

      <q-input filled v-model="text" hint="Readonly" :dense="dense" readonly />

      <q-input filled v-model="text" hint="Disable and readonly" :dense="dense" disable readonly />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Basic Input fields filled  code End------------ -->
 

<!----------------------- Basic Input fields  Outlined code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Outlined</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-toggle v-model="dense" label="Dense QInput" />
     
      <q-input outlined v-model="ph" placeholder="Placeholder" hint="With placeholder" :dense="dense" />

      <q-input outlined square v-model="text" hint="With perfect square borders" :dense="dense" />

      <q-input outlined v-model="text" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input outlined v-model="text" :dense="dense">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input outlined bottom-slots v-model="text" label="Label" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>

     
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Basic Input fields Outlined  code End------------ -->
 

<!-----------------------  Input fields  Standout code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standout</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-toggle v-model="dense" label="Dense QInput" />

      <q-input standout v-model="text" :dense="dense" />

      <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" :dense="dense" />

      <q-input standout v-model="text" label="Label (stacked)" stack-label :dense="dense" />

      <q-input standout v-model="text" label="Label" :dense="dense" />
      <q-input standout square v-model="text" hint="With perfect square borders" :dense="dense" />

      <q-input standout v-model="text" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input standout v-model="text" :dense="dense">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-input>

      

    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields Standout  code End------------ -->
 
    <!-----------------------  Input fields  Standout-in-QToolbar code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standout in QToolbar</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn round dense flat icon="menu" class="q-mr-xs" />
        <q-avatar class="gt-xs">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>

        <q-space />

        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields Standout-in-QToolbar  code End------------ -->
 
    <!-----------------------  Input fields  borderless code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Borderless</div>
                <q-item-section id="rcorners3">
        <q-item-label>
        The <code> borderless </code> design allows you to seamlessly integrate your QInput into other components without QInput drawing a border around itself or changing its background color
        </q-item-label>
      </q-item-section>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn round dense flat icon="menu" class="q-mr-xs" />
        <q-avatar class="gt-xs">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>

        <q-space />

        <q-input dark borderless v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields  borderless  code End------------ -->
 
 <!-----------------------  Input fields  Rounded-design code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Rounded design</div>
                <q-item-section id="rcorners3">
        <q-item-label>
       The <code>rounded</code> prop only works along with Filled, Outlined and Standout designs, as showcased in the example below:
               </q-item-label>
      </q-item-section>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input rounded filled v-model="text">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input rounded outlined v-model="text">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input rounded standout bottom-slots v-model="text" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields  Rounded-design  code End------------ -->
 
 <!-----------------------  Input fields   Square borders code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Square borders</div>
                <q-item-section id="rcorners3">
        <q-item-label>
     The <code>square</code> prop only makes sense along with Filled, Outlined and Standout designs, as showcased in the example below:
               </q-item-label>
      </q-item-section>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input square filled v-model="text">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input square outlined v-model="text">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input square standout bottom-slots v-model="text" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input fields  Square borders code End------------ -->
 

  <!-----------------------  Input Types  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Input Types</div>
                <q-item-section id="rcorners3">
        <q-item-label>
    The following QInputs make use of the <code>type</code> prop in order to render native equivalent <code>input type="..." </code>inside of them.
               </q-item-label>
      </q-item-section>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input v-model="password" filled type="password" hint="Password" />

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input v-model="email" filled type="email" hint="Email" />

      <q-input v-model="search" filled type="search" hint="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-input v-model="tel" filled type="tel" hint="Telephone number" />

      <q-input v-model="url" filled type="url" hint="URL" />

      <q-input v-model="time" filled type="time" hint="Native time" />

      <q-input v-model="date" filled type="date" hint="Native date" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Input Types  code End------------ -->
 

     <!-----------------------  Input of file type code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Input of file type</div>
               
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <!--
        Due to browser security policy,
        we can only read the value, but not
        write to it, so we only have an @input listener
      -->

      <q-input
        @input="val => { file = val[0] }"
        filled
        type="file"
        hint="Native file"
      />

      <q-input
        @input="val => { files = val }"
        multiple
        filled
        type="file"
        hint="Native file (multiple)"
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
      <!----------------------- Input of file type code End------------ -->
 
 <!-----------------------  TextArea  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">TextArea</div>
              
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md" style="max-width: 300px">
    <q-input
      v-model="text"
      filled
      type="textarea"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- TextArea  code End------------ -->
 


  </div>
</template>

<script>
import customization from 'components/chatMessage/customization.vue';
import sanitization from 'components/chatMessage/sanitization.vue';


export default {
  data () {
    return {
      text: '',
       ph: '',
      dense: false,

      //input type
      password: '',
      isPwd: true,

      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: '',
      //input  of file type
      file: null,
      files: null
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