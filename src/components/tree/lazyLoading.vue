<template>
    <!-------------------------------- LazyLoading code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Lazy Loading</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="lazy"
      default-expand-all
      node-key="label"
      @lazy-load="onLazyLoad"
    />
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!--------------------------------LazyLoading code End --------- --> 
  
</template>
<script>
export default {
    data () {
    return {
      lazy: [
        {
          label: 'Node 1',
          children: [
            { label: 'Node 1.1', lazy: true },
            { label: 'Node 1.2', lazy: true }
          ]
        },
        {
          label: 'Node 2',
          lazy: true
        },
        {
          label: 'Lazy load empty',
          lazy: true
        },
        {
          label: 'Node is not expandable',
          expandable: false,
          children: [
            { label: 'Some node' }
          ]
        }
      ]
    }
  },

  methods: {
    onLazyLoad ({ node, key, done, fail }) {
      // call fail() if any error occurs

      setTimeout(() => {
        // simulate loading and setting an empty node
        if (key.indexOf('Lazy load empty') > -1) {
          done([])
          return
        }

        const label = node.label
        done([
          { label: `${label}.1` },
          { label: `${label}.2`, lazy: true },
          {
            label: `${label}.3`,
            children: [
              { label: `${label}.3.1`, lazy: true },
              { label: `${label}.3.2`, lazy: true }
            ]
          }
        ])
      }, 1000)
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
  padding-top: 10px;
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

</style>