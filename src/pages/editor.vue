
<template>

<div >
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Editor</h5>
     </div>
     <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
   <div style="padding: 10px; font-size: 29px; color: darkgrey;">|
   </div>
     <q-breadcrumbs class="text-brown hiddensection" >
       <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
 <q-breadcrumbs-el  icon="home" />
      <q-breadcrumbs-el label="Components"  />
      <q-breadcrumbs-el label="Editor" />
    </q-breadcrumbs>

   </div>



  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The <code>QEditor</code> component is a  editor component that enables the user to write and even paste HTML. It uses the so-called Design Mode and the cross-browser <code>contentEditable</code> interface.
        </q-item-label>
      </q-item-section>
    </div>

        <!------------------------- Defult Editor code Start------------------------------------ -->
     
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Defult Editor</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="editor" min-height="5rem" />

    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>

    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
  </div>

    
  </div>
                  </div>
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Defult Editor code End------------------------------------ -->
     

     <!------------------------- Redefine-bold-command code Start------------------------------------ -->
     
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Redefine bold command</div>
                <q-item-section id="rcorners3">
        <q-item-label>
       Each of these commands is <code>pre-configured</code> with icons and their own internationalized tooltips. However, if you want to override some of their settings you can do so with the help of definitions Object property.        </q-item-label>
      </q-item-section>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor1"
      :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
    />
  </div>
    
  </div>
                  </div>
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Redefine-bold-command code End------------------------------------ -->
     
       <!------------------------- Add-New-command code Start------------------------------------ -->
     
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Add New command</div>
                <q-item-section id="rcorners3">
        <q-item-label>
      The following is an example that adds custom definitions. In such cases, make sure you don’t overlap the default commands
             </q-item-label>
      </q-item-section>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor2"
      :definitions="{
        save: {
          tip: 'Save your work',
          icon: 'save',
          label: 'Save',
          handler: saveWork
        },
        upload: {
          tip: 'Upload to cloud',
          icon: 'cloud_upload',
          label: 'Upload',
          handler: uploadIt
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />
  </div>
    
  </div>
                  </div>
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Add-New-command code End------------------------------------ -->
     
 
         <!------------------------- Kitchen-sink code Start------------------------------------ -->
     
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Kitchen sink</div>
                
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                 <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="qeditor"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
    </div>
    
  </div>
                  </div>
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Kitchen-sink code End------------------------------------ -->
     
     <!------------------------- Custom Style code Start------------------------------------ -->
     
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom Style</div>
               
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      flat
      content-class="bg-amber-3"
      toolbar-text-color="white"
      toolbar-toggle-color="yellow-8"
      toolbar-bg="primary"
      :toolbar="[
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        }]
      ]"
    />
  </div>
    
  </div>
                  </div>
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Custom Style code End------------------------------------ -->

 <!------------------------- Using-toolbar-slots code Start------------------------------------ -->
     
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Using toolbar slots</div>
               
                <div class="text-subtitle2">
                 
                <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      ref="editor"
      toolbar-text-color="white"
      toolbar-toggle-color="yellow-8"
      toolbar-bg="primary"
      :toolbar="[
        ['token'],
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        }]
      ]"
    >
      <template v-slot:token>
        <q-btn-dropdown
          dense no-caps
          ref="token"
          no-wrap
          unelevated
          color="white"
          text-color="primary"
          label="Token"
          size="sm"
        >
          <q-list dense>
            <q-item tag="label" clickable @click="add('email')">
              <q-item-section side>
                <q-icon name="mail" />
              </q-item-section>
              <q-item-section>Email</q-item-section>
            </q-item>
            <q-item tag="label" clickable @click="add('title')">
              <q-item-section side>
                <q-icon name="title" />
              </q-item-section>
              <q-item-section>Title</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
    </q-editor>
  </div>
                  </div>
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!------------------------- Using-toolbar-slots code End------------------------------------ -->
     
 
 
  


  </div>
</template>

<script>


export default {
   data () {
    return {
      editor: 'What you see is <b>what</b> you get.',
      editor1 : 'Here we are overriding the <b>bold</b> command to include a label instead of an icon and also changing its tooltip.',
      editor2: 'After you define a new button,' +
        ' you have to make sure to put it in the toolbar too!',
     qeditor: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> '
  
    }
  },
   methods: {
    saveWork () {
      this.$q.notify({
        message: 'Saved your text to local storage',
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done'
      })
    },
    uploadIt () {
      this.$q.notify({
        message: 'Server unavailable. Check connectivity.',
        color: 'red-5',
        textColor: 'white',
        icon: 'warning'
      })
    },
    add (name) {
      const edit = this.$refs.editor
      this.$refs.token.hide()
      edit.caret.restore()
      edit.runCmd('insertHTML', `&nbsp;<div class="editor_token row inline items-center" contenteditable="false">&nbsp;<span>${name}</span>&nbsp;<i class="q-icon material-icons cursor-pointer" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">close</i></div>&nbsp;`)
      edit.focus()
    }
  }
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;  */
    
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

.editor_token{
  background: rgba(0, 0, 0, .6);
  color: white;
  padding: ;
  }

 
  .q-icon{
    background: rgba(0, 0, 0, .2);
    border-radius: 3px;
}
</style>