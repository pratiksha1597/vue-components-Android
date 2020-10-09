
<template>

<div >
  
  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Out of Box types</div>
        <div class="text-subtitle2">
         <div class="q-pa-md">
    <div class="row q-gutter-sm">
      <q-btn no-caps unelevated color="positive" @click="triggerPositive" label="Trigger 'positive'" />
      <q-btn no-caps unelevated color="negative" @click="triggerNegative" label="Trigger 'negative'" />
      <q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="Trigger 'warning'" />
      <q-btn no-caps unelevated color="info" @click="triggerInfo" label="Trigger 'info'" />
      <q-btn no-caps unelevated color="grey-8" @click="triggerOngoing" label="Trigger 'ongoing' (v1.14+)" />
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
    triggerPositive () {
      this.$q.notify({
        type: 'positive',
        message: `This is a "positive" type notification.`
      })
    },

    triggerNegative () {
      this.$q.notify({
        type: 'negative',
        message: `This is a "negative" type notification.`
      })
    },

    triggerWarning () {
      this.$q.notify({
        type: 'warning',
        message: `This is a "warning" type notification.`
      })
    },

    triggerInfo () {
      this.$q.notify({
        type: 'info',
        message: `This is a "info" type notification.`
      })
    },

    triggerOngoing () {
      // we need to get the notification reference
      // otherwise it will never get dismissed ('ongoing' type has timeout 0)
      const notif = this.$q.notify({
        type: 'ongoing',
        message: 'Looking up the search terms...'
      })

      // simulate delay
      setTimeout(() => {
        notif({
          type: 'positive',
          message: 'Found the results that you were looking for',
          timeout: 1000
        })
      }, 4000)
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