<template>
    
    <div class="q-pd-md row1" style="padding-top: 25px;">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Generate item on  the fly </div>
                <div class="text-subtitle2">
            <q-virtual-scroll
    style="max-height: 300px; overflow-x: hidden"
    :items-size="size"
    :items-fn="getItems"
    :virtual-scroll-item-size="78"
    separator
  >
    <template v-slot="{ item, index }">
      <async-component :key="index" :index="item.index" :sent="item.sent"></async-component>
    </template>
  </q-virtual-scroll>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 

</template>
<script>
export default {
  components: {
    asyncComponent: {
      props: {
        index: Number,
        sent: Boolean
      },

      data () {
        return {
          asyncContent: null
        }
      },

      mounted () {
        this.timer = setTimeout(() => {
          this.asyncContent = {
            sent: this.sent,
            name: this.sent === true ? 'me' : 'Someone else',
            avatar: this.sent === true ? 'https://cdn.quasar.dev/img/avatar4.jpg' : 'https://cdn.quasar.dev/img/avatar3.jpg',
            stamp: `${Math.floor(this.index / 1000)} minutes ago`,
            text: [ `Message with id ${this.index}` ]
          }
        }, 300 + Math.random() * 2000)
      },

      beforeDestroy () {
        clearTimeout(this.timer)
      },

      render (h) {
        return h('q-chat-message', {
          staticClass: 'q-mx-sm',
          props: this.asyncContent === null
            ? {
              sent: this.sent,
              text: [ `Retrieving message ${this.index}` ]
            }
            : this.asyncContent
        })
      }
    }
  },

  data () {
    return {
      size: 100000
    }
  },

  methods: {
    getItems (from, size) {
      const items = []

      for (let i = 0; i < size; i++) {
        items.push({
          index: this.size - from - i,
          sent: Math.random() > 0.5
        })
      }

      return Object.freeze(items)
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