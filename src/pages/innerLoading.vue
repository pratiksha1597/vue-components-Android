
<template>
  <div>
    <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Inner Loading</h5>
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
        <q-breadcrumbs-el label="Inner Loading" />
      </q-breadcrumbs>
    </div>
    <!------------------- Tital and Path(breadcrumbs) code End ----------->

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The QInnerLoading component allows you to add a progress animation
          within a component.
        </q-item-label>
      </q-item-section>
    </div>
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                <div class="row">
                  <div class="col-md-3">
                    <div class="my-content">
                      <div class="q-pa-md q-gutter-md">
                        <q-btn color="primary" @click="showTextLoading">
                          Show Text Loading
                        </q-btn>

                        <q-card
                          class="bg-grey-3 relative-position card-example"
                        >
                          <q-card-section class="q-pb-none">
                            <div class="text-h6">Lorem Ipsum</div>
                          </q-card-section>

                          <q-card-section>
                            <transition
                              appear
                              enter-active-class="animated fadeIn"
                              leave-active-class="animated fadeOut"
                            >
                              <div v-show="showSimulatedReturnData">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent vel magna eu risus
                                laoreet tristique. Nulla ut fermentum elit, nec
                                consequat augue. Morbi et dolor nec metus
                                tincidunt pellentesque. Nullam non semper ante.
                                Fusce pellentesque sagittis felis quis porta.
                                Aenean condimentum neque sed erat suscipit
                                malesuada. Nulla eget rhoncus enim. Duis dictum
                                interdum eros.
                              </div>
                            </transition>
                          </q-card-section>

                          <q-inner-loading :showing="visible">
                            <q-spinner-gears size="50px" color="primary" />
                          </q-inner-loading>
                        </q-card>
                      </div>
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
  data() {
    return {
      visible: false,
      showSimulatedReturnData: false,
    };
  },

  methods: {
    showTextLoading() {
      this.visible = true;
      this.showSimulatedReturnData = false;
      setTimeout(() => {
        this.visible = false;
        this.showSimulatedReturnData = true;
      }, 3000);
    },
  },
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