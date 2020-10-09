
<template>
  <div>
    <!-------------------- Tital and path start------------- -->
    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Expansion Item</h5>
      </div>
      <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
      <div style="padding: 10px; font-size: 29px; color: darkgrey">|</div>
      <q-breadcrumbs class="text-brown hiddensection">
        <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Expansion Item" />
      </q-breadcrumbs>
    </div>
    <!-------------------- Tital and path End------------- -->

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The <code>QExpansionItem</code> component allows the
          <code>hiding</code> of content that is not
          <code>immediately relevant to the user</code>. Think of them as
          accordion elements that expand when clicked on. It’s also known as a
          collapsible.
        </q-item-label>
      </q-item-section>
    </div>

    <!----------------------------- Expansion Item Basic Code Start ----------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered class="rounded-borders">
                      <q-expansion-item
                        expand-separator
                        icon="perm_identity"
                        label="Account settings"
                        caption="John Doe"
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-expansion-item
                        expand-separator
                        icon="signal_wifi_off"
                        label="Wifi settings"
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-expansion-item
                        expand-separator
                        icon="drafts"
                        label="Drafts"
                        header-class="text-purple"
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-expansion-item
                        icon="assessment"
                        label="Disabled"
                        disable
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </q-list>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!----------------------------- Expansion Item Basic Code End ----------------->

    <!----------------------------- Controlling-expansion-state Code Start ----------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Controlling expansion state</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-toggle
                      v-model="expanded"
                      label="Expanded"
                      class="q-mb-md"
                    />

                    <q-expansion-item
                      v-model="expanded"
                      icon="perm_identity"
                      label="Account settings"
                      caption="John Doe"
                    >
                      <q-card>
                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!----------------------------- Expansion Item Basic Code End ----------------->

    <!----------------------------- style Code Start ----------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Style</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div
                    class="q-pa-md bg-grey-10 text-white"
                    style="max-width: 350px"
                  >
                    <q-list padding bordered class="rounded-borders">
                      <q-expansion-item
                        dense
                        dense-toggle
                        expand-separator
                        icon="perm_identity"
                        label="Account settings"
                      >
                        <q-card class="bg-grey-9">
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-expansion-item
                        dense
                        dense-toggle
                        expand-separator
                        icon="signal_wifi_off"
                        label="Wifi settings"
                      >
                        <q-card class="bg-grey-9">
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-expansion-item
                        dense
                        dense-toggle
                        expand-separator
                        icon="drafts"
                        label="Drafts"
                        header-class="text-purple"
                      >
                        <q-card class="bg-grey-9">
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </q-list>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!----------------------------- Style Code End ----------------->


    <!----------------------------- switch-toggle-side Code Start ----------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">switch toggle side</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        switch-toggle-side
        expand-separator
        icon="perm_identity"
        label="Account settings"
      >
        <q-card>
          <q-card-section>
           {{lorem}}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        switch-toggle-side
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
            {{lorem}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item
        dense-toggle
        switch-toggle-side
        expand-separator
        icon="perm_identity"
        label="Account settings"
      >
        <q-card>
          <q-card-section>
           {{lorem}}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        dense-toggle
        switch-toggle-side
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
           {{lorem}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!----------------------------- switch-toggle-side Code End ----------------->



    <!----------------------------- Handaling Event Code Start ----------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Handaling Event</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      @show="startCounting"
      @hide="stopCounting"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">{{ counter }}</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!----------------------------- Handaling Event Code End ----------------->
<behvaior/>

  </div>
</template>

<script>
import behvaior from "components/expantionItem/behvaior.vue";

export default {
  components: {
    
    behvaior,
    
  },
  data() {
    return {
      counter: 0,
      expanded: false,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    startCounting () {
      this.timer = setInterval(() => {
        this.counter++
      }, 1000)
    },

    stopCounting () {
      clearInterval(this.timer)
    }
  },

  beforeDestroy () {
    this.stopCounting()
  }
};
</script>
<style scoped>
h5 {
  margin-left: 30px;
  font-family: "Times New Roman", Times, serif;
  /* color: dimgray; */
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
  padding-left: 30px;
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