
<template>
  <div>
    <!-- ----------------------- Play with Insert levels code start ------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Playing With insert level</div>
              <div class="text-subtitle2">
                <q-item-section id="rcorners3">
                  <q-item-label>
                    When dealing with inset levels, a general rule of thumb is
                    that <code>header-inset-level</code> adds left padding to
                    header while it doesn’t do anything with the content, while
                    <code>content-inset-level</code> adds left padding to the
                    content.
                  </q-item-label>
                </q-item-section>
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered class="rounded-borders">
                      <q-expansion-item
                        expand-separator
                        icon="mail"
                        label="Inbox"
                        caption="5 unread emails"
                        default-opened
                      >
                        <q-expansion-item
                          :header-inset-level="1"
                          expand-separator
                          icon="receipt"
                          label="Receipts"
                          default-opened
                        >
                          <q-expansion-item
                            switch-toggle-side
                            dense-toggle
                            label="Today"
                            :header-inset-level="1"
                            :content-inset-level="2"
                          >
                            <q-card>
                              <q-card-section>
                                {{ lorem }}
                              </q-card-section>
                            </q-card>
                          </q-expansion-item>

                          <q-expansion-item
                            switch-toggle-side
                            dense-toggle
                            label="Yesterday"
                            :header-inset-level="1"
                            :content-inset-level="2"
                          >
                            <q-card>
                              <q-card-section>
                                {{ lorem }}
                              </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </q-expansion-item>

                        <q-expansion-item
                          :header-inset-level="1"
                          :content-inset-level="1"
                          expand-separator
                          icon="schedule"
                          label="Postponed"
                        >
                          <q-card>
                            <q-card-section>
                              {{ lorem }}
                            </q-card-section>
                          </q-card>
                        </q-expansion-item>
                      </q-expansion-item>

                      <q-expansion-item
                        :content-inset-level="0.5"
                        expand-separator
                        icon="mail"
                        label="Inbox"
                        caption="5 unread emails"
                        default-opened
                      >
                        <q-expansion-item
                          expand-separator
                          :content-inset-level="0.5"
                          icon="receipt"
                          label="Receipts"
                        >
                          <q-expansion-item
                            label="Today"
                            :content-inset-level="0.5"
                          >
                            <q-card>
                              <q-card-section>
                                {{ lorem }}
                              </q-card-section>
                            </q-card>
                          </q-expansion-item>

                          <q-expansion-item
                            label="Yesterday"
                            :content-inset-level="0.5"
                          >
                            <q-card>
                              <q-card-section>
                                {{ lorem }}
                              </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </q-expansion-item>

                        <q-expansion-item
                          :content-inset-level="0.5"
                          expand-separator
                          icon="schedule"
                          label="Postponed"
                        >
                          <q-card>
                            <q-card-section>
                              {{ lorem }}
                            </q-card-section>
                          </q-card>
                        </q-expansion-item>
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
    <!-- ----------------------- Play with Insert levels code End ------------- -->

    <!-- ----------------------- Toggle by expand icon only code start ------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Toggle by expand icon only</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered class="rounded-borders">
                      <q-expansion-item
                        expand-icon-toggle
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
                        expand-icon-toggle
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
                        expand-icon-toggle
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
                    </q-list>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- ----------------------- Toggle by expand icon only code End ------------- -->

    <!-- ----------------------- According Mode code start ------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">According Mode</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered>
                      <q-expansion-item
                        group="somegroup"
                        icon="explore"
                        label="First"
                        default-opened
                        header-class="text-primary"
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-separator />

                      <q-expansion-item
                        group="somegroup"
                        icon="perm_identity"
                        label="Second"
                        header-class="text-teal"
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-separator />

                      <q-expansion-item
                        group="somegroup"
                        icon="shopping_cart"
                        label="Third"
                        header-class="text-purple"
                      >
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                      <q-separator />

                      <q-expansion-item
                        group="somegroup"
                        icon="bluetooth"
                        label="Fourth"
                        header-class="bg-teal text-white"
                        expand-icon-class="text-white"
                      >
                        <q-card class="bg-teal-2">
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
    <!-- ----------------------- According Mode code End ------------- -->

    <!-- ----------------------- Popup Mode code start ------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Popup Mode</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list>
                      <q-expansion-item
                        popup
                        default-opened
                        icon="mail"
                        label="Inbox"
                        caption="5 unread emails"
                      >
                        <q-separator />
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                      <q-expansion-item
                        popup
                        icon="send"
                        label="Outbox"
                        caption="Empty"
                      >
                        <q-separator />
                        <q-card>
                          <q-card-section>
                            {{ lorem }}
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                      <q-expansion-item
                        popup
                        icon="drafts"
                        label="Draft"
                        caption="Draft a new email"
                      >
                        <q-separator />
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
    <!-- ----------------------- Popup Mode code End ------------- -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      expanded: false,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style scoped>
h5 {
  margin-left: 30px;
  font-family: "Times New Roman", Times, serif;
  color: dimgray;
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