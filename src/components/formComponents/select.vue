
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Select</h5>
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
      <q-breadcrumbs-el label="Select" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The QSelect component has two types of selection: single or multiple. This component opens up a menu for the selection list and action. A filter can also be used for longer lists.
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
      <q-select v-model="model" :options="options" label="Standard" />

      <q-select filled v-model="model" :options="options" label="Filled" />

      <q-select outlined v-model="model" :options="options" label="Outlined" />

      <q-select standout v-model="model" :options="options" label="Standout" />

      <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />

      <q-select borderless v-model="model" :options="options" label="Borderless" />

      <q-select rounded filled v-model="model" :options="options" label="Rounded filled" />

      <q-select rounded outlined v-model="model" :options="options" label="Rounded outlined" />

      <q-select rounded standout v-model="model" :options="options" label="Rounded standout" />

      <q-select square filled v-model="model" :options="options" label="Square filled" />

      <q-select square outlined v-model="model" :options="options" label="Square outlined" />

      <q-select square standout v-model="model" :options="options" label="Square standout" />
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
    <div class="q-pb-lg">
      <q-toggle v-model="dense" label="Dense QSelect" />
      <q-toggle v-model="denseOpts" label="Dense options" />
    </div>

    <div class="q-gutter-md" style="max-width: 300px">
      <q-select filled v-model="model" :options="options" label="Label (stacked)" stack-label :dense="dense" :options-dense="denseOpts" />

      <q-select outlined v-model="model" :options="options" :dense="dense" :options-dense="denseOpts">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>

      <q-select standout v-model="model" :options="options" :dense="dense" :options-dense="denseOpts">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-select>

      <q-select filled bottom-slots v-model="model" :options="options" label="Label" counter :dense="dense" :options-dense="denseOpts">
        <template v-slot:prepend>
          <q-icon name="place" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>

      <q-select rounded outlined bottom-slots v-model="model" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
        <template v-slot:before>
          <q-icon name="flight_takeoff" />
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
          <q-icon name="search" @click.stop />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>

      <q-select filled bottom-slots v-model="model" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
          <q-icon name="schedule" @click.stop />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-select>

      <q-select filled bottom-slots v-model="model" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" @click.stop />
        </template>
      </q-select>
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
      <q-select color="purple-12" v-model="model" :options="options" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>

      <q-select color="teal" filled v-model="model" :options="options" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>

      <q-select color="grey-3" outlined label-color="orange" v-model="model" :options="options" label="Label">
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </q-select>

      <q-select color="lime-11" bg-color="green" filled v-model="model" :options="options" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>

      <q-select color="teal" outlined v-model="model" :options="options" label="Label">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </template>
      </q-select>

      <q-select clearable color="orange" standout bottom-slots v-model="model" :options="options" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>
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
      <q-select clearable filled color="purple-12" v-model="model" :options="options" label="Label" />

      <!-- equivalent -->
      <q-select color="orange" filled v-model="model" :options="options" label="Label">
        <template v-if="model" v-slot:append>
          <q-icon name="cancel" @click.stop="model = null" class="cursor-pointer" />
        </template>
      </q-select>
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
      <q-select
        disable
        filled
        v-model="model"
        :options="options"
        hint="Disable"
        style="width: 250px"
      />

      <q-select
        readonly
        filled
        v-model="model"
        :options="options"
        hint="Readonly"
        style="width: 250px"
      />

      <q-select
        disable
        readonly
        filled
        v-model="model"
        :options="options"
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
 

<!-----------------------  Show-options-in-dialog code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Show options in dialog</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        v-model="model"
        label="Simple select"
        :options="stringOptions"
        style="width: 250px"
        behavior="dialog"
      />

      <q-select
        filled
        v-model="model"
        use-input
        input-debounce="0"
        label="Simple filter"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="dialog"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Show-options-in-dialog code End------------ -->
 
    <!----------------------- Single-vs-multiple-selection code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Single vs Multiple Selection</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-select
        filled
        v-model="single"
        :options="options"
        label="Single"
        style="width: 250px"
      />

      <q-select
        filled
        v-model="multiple"
        multiple
        :options="options"
        label="Multiple"
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
      <!----------------------- Single-vs-multiple-selection  code End------------ -->
 
    <!-----------------------  Lazy-load-optionscode Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Lazy-load-options</div>
               
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-select
        filled
        v-model="model"
        use-chips
        label="Lazy load opts"
        :options="options"
        @filter="filterFnn"
        @filter-abort="abortFilterFn"
        style="width: 250px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>

      <q-btn
        v-if="options"
        label="Reset"
        color="primary"
        @click="options = null"
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
      <!-----------------------Lazy-load-options  code End------------ -->
 


  </div>
</template>

<script>
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
   data () {
    return {
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      //Decorator
     
      dense: false,
      denseOpts: false,

      //show in dilog box
      stringOptions,
      options: stringOptions,

      //single vs multiple
      single: null,
      multiple: null,
    }
  },
   methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
  

   filterFnn (val, update, abort) {
      if (this.options !== null) {
        // already loaded
        update()
        return
      }

      setTimeout(() => {
        update(() => {
          this.options = stringOptions
        })
      }, 2000)
    },

    abortFilterFn () {
      // console.log('delayed filter aborted')
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