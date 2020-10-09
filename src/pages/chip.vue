
<template>

<div >
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Chip</h5>
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
      <q-breadcrumbs-el label="Chip" />
    </q-breadcrumbs>

   </div>


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        Chips can contain entities such as an <code>avatar</code>, <code>text</code> or an <code>icon</code>, optionally having a pointer too. They can also be <code>closed</code> or <code>removed</code> if configured so.
        </q-item-label>
      </q-item-section>
    </div>
            <!--------------------------- chip basic code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div>
      <q-chip icon="event">Add to calendar</q-chip>
      <q-chip icon="bookmark">Bookmark</q-chip>
      <q-chip icon="alarm" label="Set alarm" />
      <q-chip class="glossy" icon="directions">Get directions</q-chip>
    </div>
    <div>
      <q-chip color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip>
      <q-chip color="teal" text-color="white" icon="bookmark">
        Bookmark
      </q-chip>
      <q-chip class="glossy" color="orange" text-color="white" icon-right="star">
        Star
      </q-chip>
      <q-chip color="red" text-color="white" icon="alarm" label="Set alarm" />
      <q-chip color="deep-orange" text-color="white" icon="directions">
        Get directions
      </q-chip>
      <q-chip>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        Bookmark
      </q-chip>
      <q-chip>
        <q-avatar color="red" text-color="white">50</q-avatar>
        Emails
      </q-chip>
      <q-chip>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar5.jpg">
        </q-avatar>
        John
      </q-chip>
    </div>

    
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
        <!--------------------------- chip basic code End---------------------------------- -->

        <!--------------------------- Custom Size  code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom Size</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
                     <div>
      <q-chip size="18px" icon="bookmark">
        Bookmark
      </q-chip>
    </div>

    <div>
      <q-chip size="xs" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip size="sm" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip size="md" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip size="lg" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip size="xl" icon="bookmark">
        Bookmark
      </q-chip>
    </div>

    <div>
      <q-chip dense size="xs" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip dense size="sm" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip dense size="md" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip dense size="lg" icon="bookmark">
        Bookmark
      </q-chip>

      <q-chip dense size="xl" icon="bookmark">
        Bookmark
      </q-chip>
    </div>

    
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
          <!--------------------------- Custom Size  code End---------------------------------- -->
 
 
     <!--------------------------- Square Size  code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Square</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
                    <div>
      <q-chip square icon="event">Add to calendar</q-chip>
      <q-chip class="glossy" square icon="bookmark">Bookmark</q-chip>
      <q-chip square icon="alarm" label="Set alarm" />
      <q-chip square icon="directions">Get directions</q-chip>
    </div>
    <div>
      <q-chip square color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip>
      <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">
        Bookmark
      </q-chip>
      <q-chip square color="orange" text-color="white" icon-right="star">
        Star
      </q-chip>
      <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
      <q-chip square color="deep-orange" text-color="white" icon="directions">
        Get directions
      </q-chip>
      <q-chip square>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        Bookmark
      </q-chip>
      <q-chip square>
        <q-avatar color="red" text-color="white">50</q-avatar>
        Emails
      </q-chip>
      <q-chip square>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        John
      </q-chip>
    </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
          <!--------------------------- Square  Size  code End---------------------------------- -->

     <!--------------------------- Outline code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Outline</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
                   <q-chip outline color="primary" text-color="white" icon="event">
      Add to calendar
    </q-chip>
    <q-chip outline color="teal" text-color="white" icon="bookmark">
      Bookmark
    </q-chip>
    <q-chip outline color="orange" text-color="white" icon-right="star">
      Star
    </q-chip>
    <q-chip outline square color="red" text-color="white" icon="alarm" label="Set alarm" />
    <q-chip outline square color="deep-orange" text-color="white" icon="directions">
      Get directions
    </q-chip>
    <div>
      <q-chip square color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip>
      <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">
        Bookmark
      </q-chip>
      <q-chip square color="orange" text-color="white" icon-right="star">
        Star
      </q-chip>
      <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
      <q-chip square color="deep-orange" text-color="white" icon="directions">
        Get directions
      </q-chip>
      <q-chip square>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        Bookmark
      </q-chip>
      <q-chip square>
        <q-avatar color="red" text-color="white">50</q-avatar>
        Emails
      </q-chip>
      <q-chip square>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        John
      </q-chip>
    </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
          <!--------------------------- Outline  code End---------------------------------- -->
     <!--------------------------- Clickable code start---------------------------------- -->
    
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Clickable</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <q-chip clickable @click="onClick" color="primary" text-color="white" icon="event">
      Add to calendar
    </q-chip>
    <q-chip clickable @click="onClick" icon="bookmark">
      Bookmark
    </q-chip>
    <q-chip clickable @click="onClick" color="teal" text-color="white" icon="bookmark">
      Bookmark
    </q-chip>
    <q-chip clickable @click="onClick" color="red" text-color="white" icon="alarm" label="Set alarm" />
    <q-chip clickable @click="onClick" color="orange" text-color="white" icon="directions">
      Get directions
    </q-chip>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      
   
          <!--------------------------- Clickable  code End---------------------------------- -->

  <!--------------------------- Selected code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Selected</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <div class="q-gutter-xs">
      <q-chip :selected.sync="desert.Icecream" color="primary" text-color="white" icon="cake">
        Ice cream
      </q-chip>
      <q-chip :selected.sync="desert.Eclair" color="teal" text-color="white" icon="cake">
        Eclair
      </q-chip>
      <q-chip :selected.sync="desert.Cupcake" color="orange" text-color="white" icon="cake">
        Cupcake
      </q-chip>
      <q-chip :selected.sync="desert.Gingerbread" color="red" text-color="white" icon="cake">
        Gingerbread
      </q-chip>
    </div>

    <div class="q-mt-sm">
      Your pick: {{ selection }}
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
  <!--------------------------- Selected  code End---------------------------------- -->

 <Removeable/>
  

  </div>
</template>

<script>

import Removeable from 'components/chip/Removeable.vue';

export default {
  components:{
    Removeable
  },
    methods: {
    onClick () {
      // console.log('Clicked on a QChip')
    },
     reset () {
      this.icecream = true
      this.eclair = true
      this.cupcake = true
      this.gingerbread = true
    },

    log (desert) {
      // console.log(`${desert} has been removed`)
    }
  
  },
  data () {
    return {
      desert: {
        Icecream: false,
        Eclair: true,
        Cupcake: false,
        Gingerbread: false,
        
      }
    }
  },

  computed: {
    selection () {
      return Object.keys(this.desert)
        .filter(type => this.desert[type] === true)
        .join(', ')
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