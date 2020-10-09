
<template>

<div >
  <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Sanitization</div>
                <div class="text-subtitle2">
                  <q-item-section id="rcorners3">
        <q-item-label>
       Always sanitize values if you do not trust the origin (if the value comes from user input).
        </q-item-label>
      </q-item-section>
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
   <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="<span class='text-positive'>Trusted Source</span>"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['hey, how are <strong>you</strong>?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="<span class='text-negative'>Jane (untrusted text but trusted name)</span>"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, <strong>REALLY</strong> long message to annoy you...'
        ]"
        text-sanitize
        size="6"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="<span class='text-negative'>Jao (untrusted)</span>"
        name-sanitize
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['<strong>Did it work?</strong>']"
        text-sanitize
        stamp="1 minutes ago"
        size="8"
        text-color="white"
        bg-color="primary"
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
   
  

  </div>
</template>

<script>
export default {
    name: 'sanitization'
   
    
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