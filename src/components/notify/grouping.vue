
<template>

<div >
  
  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Grouping</div>
        <div class="text-subtitle2">
           <div class="q-pa-md">
    <div class="row q-gutter-sm">
      <q-btn no-caps color="teal" @click="triggerTwice" label="Trigger twice" />
      <q-btn no-caps color="teal" @click="triggerNoGroupingTwice" label="Trigger twice (no grouping)" />
      <q-btn no-caps color="teal" @click="triggerTwiceCustomGroup" label="Trigger twice (custom group)" />
    </div>
  </div>
            
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

  </div>
  
</template>

<script>


export default {
  methods: {
    triggerTwice () {
      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })

      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },

    triggerNoGroupingTwice () {
      this.$q.notify({
        group: false,
        message: 'Jim pinged you.',
        color: 'purple'
      })

      this.$q.notify({
        group: false,
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },

    triggerTwiceCustomGroup () {
      this.$q.notify({
        group: 'my-group',
        message: 'Jim pinged you.',
        color: 'purple'
      })

      // same group as the previous one,
      // so it will replace it and
      // increment the badge number:
      this.$q.notify({
        group: 'my-group',
        message: 'Jack has messaged you.',
        color: 'primary'
      })
    }
  }
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;     */
}

#rcorners3{
  padding-left: 30px;
  padding-right: 30px;
    font-size: 20px;
    color: rgb(148, 146, 146);
}
code{
  background: #eee;
    padding: .1rem .3rem;
    border-radius: 3px;
}

.text-h6{
  /* color: rgb(94 92 92); */
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>