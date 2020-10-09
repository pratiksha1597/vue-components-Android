<template>
    <!-------------------------------- Different templates for Horizontal code start --------- -->
    <div class="q-pd-md row1" style="padding-top: 25px;">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Different templates for Horizontal </div>
                <div class="text-subtitle2">
                  <q-virtual-scroll
                  style="max-width: 1200px;"
    :items="heavyList"
    virtual-scroll-horizontal
  >
    <template v-slot="{ item, index }">
      <div :key="index" class="row items-center">
        <q-separator v-if="index === 0" vertical spaced />

        <q-avatar v-if="item.avatar === true" class="bg-black text-white q-my-md">
          {{ index % 10 + 1 }}
        </q-avatar>

        <q-item
          v-else
          dense
          clickable
        >
          <q-item-section>
            <q-item-label>
              #{{ index }} - {{ item.label }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator vertical spaced />
      </div>
    </template>
  </q-virtual-scroll>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Different templates for Horizontal   code End --------- --> 

</template>
<script>
const maxSize = 10000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
    avatar: i % 5 === 0
  })
}

Object.freeze(heavyList)

export default {
  data () {
    return {
      heavyList
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
  /* color: rgb(94 92 92); */
  padding-bottom: 10px;
  padding-left:30px;
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}
</style>