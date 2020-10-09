<template>
    
    <div class="q-pd-md row1" style="padding-top: 25px;">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Scroll Target </div>
                <div class="text-subtitle2">
                 <div id="virtual-scroll-target" class="scroll" style="max-height: 230px">
    <div class="q-pa-md bg-yellow">
      Above the list - scrolls with the list
    </div>

    <q-virtual-scroll
      scroll-target="#virtual-scroll-target"
      :items="heavyList"
      separator
    >
      <template v-slot="{ item, index }">
        <q-item
          :key="index"
          dense
        >
          <q-item-section>
            <q-item-label>
              #{{ index }} - {{ item.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>

    <div class="q-pa-md bg-yellow">
      Below the list - scrolls with the list
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 

</template>
<script>
const maxSize = 10000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1)
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