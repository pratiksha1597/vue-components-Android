
<template>

<div >
  
  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Updatable</div>
        <div class="text-subtitle2">
         <div class="q-pa-md">
    <q-btn no-caps color="purple" @click="showNotif" label="Show updatable notification" />
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
    showNotif () {
      const notif = this.$q.notify({
        group: false, // required to be updatable
        timeout: 0, // we want to be in control when it gets dismissed
        spinner: true,
        message: 'Uploading file...',
        caption: '0%'
      })

      // we simulate some progress here...
      let percentage = 0
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

        // we update the dialog
        notif({
          caption: `${percentage}%`
        })

        // if we are done...
        if (percentage === 100) {
          notif({
            icon: 'done', // we add an icon
            spinner: false, // we reset the spinner setting so the icon can be displayed
            message: 'Uploading done!',
            timeout: 2500 // we will timeout it in 2.5s
          })
          clearInterval(interval)
        }
      }, 500)
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