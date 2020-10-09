
<template>

<div >
  
  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">TimeOut Progress</div>
        <div class="text-subtitle2">
           <div class="q-pa-md">
    <q-btn no-caps color="purple" @click="showNotifs" label="Show timeout progress" />
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
    showNotifs () {
      this.$q.notify({
        progress: true,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.',
        color: 'primary',
        multiLine: true,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } }
        ]
      })

      setTimeout(() => {
        this.$q.notify({
          progress: true,
          message: 'Jim emailed you.',
          icon: 'mail',
          color: 'white',
          textColor: 'primary'
        })
      }, 2000)

      setTimeout(() => {
        this.$q.notify({
          progress: true,
          message: 'Jim pinged you.',
          color: 'purple',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          actions: [
            { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } }
          ]
        })
      }, 3200)
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