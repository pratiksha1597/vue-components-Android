
<template>

<div >
  <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Customization</div>
                <div class="text-subtitle2">
                  <q-item-section id="rcorners3">
        <q-item-label>
        Using the attribute <code>Backround color</code> , <code>size</code>,<code>Avater Slot</code> intended for the sender of the chat message. The other side is for received messages
        </q-item-label>
      </q-item-section>
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
   <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        stamp="7 minutes ago"
        :text="['Have you seen Quasar?']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          >
        </template>
      </q-chat-message>

      <q-chat-message
        name="Jane"
        :text="['Already building an app with it..']"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          >
        </template>

        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>

    
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
   
  
  </div>
</template>

<script>
export default {
    name: 'customization'
   
    
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