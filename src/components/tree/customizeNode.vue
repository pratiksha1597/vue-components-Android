<template>
    <!-------------------------------- Grouped Horizontally code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Customizing nodes</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="customize"
      node-key="label"
      default-expand-all
    >
      <template v-slot:header-root="prop">
        <div class="row items-center">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" class="avatar q-mr-sm">
          <div>
            {{ prop.node.label }}
            <q-badge color="orange" class="q-ml-sm">New!</q-badge>
          </div>
        </div>
      </template>

      <template v-slot:header-generic="prop">
        <div class="row items-center">
          <q-icon :name="prop.node.icon || 'star'" color="orange" size="28px" class="q-mr-sm" />
          <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
        </div>
      </template>

      <template v-slot:body-story="prop">
        <span class="text-weight-thin">The story is:</span> {{ prop.node.story }}
      </template>

      <template v-slot:body-toggle="prop">
        <p class="text-caption">{{ prop.node.caption }}</p>
        <q-toggle v-model="prop.node.enabled" label="I agree to the terms and conditions" />
      </template>
    </q-tree>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Grouped Horizontally code End --------- --> 
  
</template>
<script>
export default {
    data () {
    return {
      customize: [
        {
          label: 'Satisfied customers',
          header: 'root',
          children: [
            {
              label: 'Good food',
              icon: 'restaurant_menu',
              header: 'generic',
              children: [
                {
                  label: 'Quality ingredients',
                  header: 'generic',
                  body: 'story',
                  story: 'Lorem ipsum dolor sit amet.'
                },
                {
                  label: 'Good recipe',
                  body: 'story',
                  story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
                }
              ]
            },
            {
              label: 'Good service',
              header: 'generic',
              body: 'toggle',
              caption: 'Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...',
              enabled: false,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings',
              children: [
                { label: 'Happy atmosphere' },
                { label: 'Good table presentation', header: 'generic' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
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