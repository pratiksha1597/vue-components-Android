<template>
    <div>
        <!--------------------------- Removeable code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Removeable</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-xs">
      <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white" icon="cake">
        Ice cream
      </q-chip>
      <q-chip removable v-model="eclair" @remove="log('Icecream')" color="teal" text-color="white" icon="cake">
        Eclair
      </q-chip>
      <q-chip removable v-model="cupcake" @remove="log('Icecream')" color="orange" text-color="white" icon="cake">
        Cupcake
      </q-chip>
      <q-chip disable removable v-model="gingerbread" @remove="log('Icecream')" color="red" text-color="white" icon="cake">
        Gingerbread (disable)
      </q-chip>
    </div>

    <q-btn color="primary" label="Reset" @click="reset" class="q-mt-sm" />
  </div>
                      
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
  <!--------------------------- Selected  code End---------------------------------- -->


     <!--------------------------- Long label truncation code start---------------------------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Long label truncation</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <div class="q-gutter-xs row" style="max-width: 300px" :class="{ 'truncate-chip-labels': truncate }">
      <q-chip
        removable
        v-model="vanilla"
        color="primary"
        text-color="white"
        icon="cake"
        :label="vanillaLabel"
        :title="vanillaLabel"
      />
      <q-chip
        removable
        v-model="chocolate"
        color="teal"
        text-color="white"
        icon="cake"
        :label="chocolateLabel"
      >
        <q-tooltip>{{ chocolateLabel }}</q-tooltip>
      </q-chip>
      <q-chip
        removable
        v-model="strawberry"
        color="orange"
        text-color="white"
        icon="cake"
      >
        <div class="ellipsis">
          {{ strawberryLabel }}
          <q-tooltip>{{ strawberryLabel }}</q-tooltip>
        </div>
      </q-chip>
      <q-chip
        removable
        v-model="cookies"
        color="red"
        text-color="white"
      >
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="ellipsis">
          {{ cookiesLabel }}
          <q-tooltip>{{ cookiesLabel }}</q-tooltip>
        </div>
      </q-chip>
    </div>

    <div class="row items-center q-mt-sm">
      <q-btn color="primary" label="Reset" @click="reset" class="q-mr-sm" />
      <q-toggle v-model="truncate" label="Truncate labels" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
  <!--------------------------- Long label truncation  code End---------------------------------- -->



    </div>
</template>

<script>
export default {
  data () {
    return {
      icecream: true,
      eclair: true,
      cupcake: true,
      gingerbread: true,
       truncate: true,

      vanilla: true,
      chocolate: true,
      strawberry: true,
      cookies: true,

      vanillaLabel: 'I want vanilla flavoured ice cream',
      chocolateLabel: 'I want chocolate flavoured ice cream',
      strawberryLabel: 'I want strawberry flavoured ice cream',
      cookiesLabel: 'I want cookies flavoured ice cream'
    }
  },

  methods: {
    reset () {
      this.icecream = true
      this.eclair = true
      this.cupcake = true
      this.gingerbread = true
    },

    log (desert) {
      // console.log(`${desert} has been removed`)
    },
     reset () {
      this.vanilla = true
      this.chocolate = true
      this.strawberry = true
      this.cookies = true
    }
  }
}
</script>


<style  scoped>

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