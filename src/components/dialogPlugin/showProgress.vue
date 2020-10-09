
<template>
  <div>
    <div class="q-pa-md row1">
      <div class="column" style="height: 150px">
        <div class="column">
          <div class="col">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Showing Progress</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md q-gutter-sm">
                    <q-btn
                      label="Default progress"
                      color="primary"
                      @click="showDefault"
                    />
                    <q-btn
                      label="Custom progress"
                      color="primary"
                      @click="showCustom"
                    />
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
//import { Dialog } from 'quasar'
import { QSpinnerGears } from "quasar";
export default {
  methods: {
    showDefault() {
      const dialog = this.$q.dialog({
        message: "Uploading... 0%",
        progress: true, // we enable default settings
        persistent: true, // we want the user to not be able to close it
        ok: false, // we want the user to not be able to close it
      });

      // we simulate some progress here...
      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

        // we update the dialog
        dialog.update({
          message: `Uploading... ${percentage}%`,
        });

        // if we are done, we're gonna close it
        if (percentage === 100) {
          clearInterval(interval);
          setTimeout(() => {
            dialog.hide();
          }, 350);
        }
      }, 500);
    },

    showCustom() {
      const dialog = this.$q.dialog({
        title: "Uploading...",
        dark: true,
        message: "0%",
        progress: {
          spinner: QSpinnerGears,
          color: "amber",
        },
        persistent: true, // we want the user to not be able to close it
        ok: false, // we want the user to not be able to close it
      });

      // we simulate some progress here...
      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

        // we update the dialog
        dialog.update({
          message: `${percentage}%`,
        });

        // if we are done...
        if (percentage === 100) {
          clearInterval(interval);

          dialog.update({
            title: "Done!",
            message: `Upload completed successfully`,
            progress: false,
            ok: true,
          });
        }
      }, 500);
    },
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
  padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;
  color: rgb(148, 146, 146);
}
code {
  background: #eee;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

.text-h6 {
  color: rgb(94 92 92);
  padding-bottom: 10px;
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;
}
</style>