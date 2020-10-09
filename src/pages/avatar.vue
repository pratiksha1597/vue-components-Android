
<template>
  <div>
   
   <!------------------- Tital and Path(breadcrumbs) code Start ----------->

<div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Avatar</h5>
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
      <q-breadcrumbs-el label="Avatar" />
    </q-breadcrumbs>

   </div>
   <!------------------- Tital and Path(breadcrumbs) code End ----------->

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The <code> QAvatar</code> component creates a scalable, color-able
          element that can have <code>text</code>,<code> icon</code> or
          <code> image</code> within its shape. By default it is circular, but
          it can also be square or have a border-radius applied to give rounded
          corners to the square shape.
        </q-item-label>
      </q-item-section>
    </div>

   <!------------------- Basic avatar code Start ----------->
<div class="q-pa-md row1">
    <div class="column">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Basic</div>

           <div class="text-subtitle2">
                  <div class="q-gutter-sm">
                    <q-avatar
                      color="red"
                      text-color="white"
                      icon="directions"
                    />
                    <q-avatar color="primary" text-color="white">J</q-avatar>
                    <q-avatar
                      size="100px"
                      font-size="52px"
                      color="teal"
                      text-color="white"
                      icon="directions"
                    />
                    <q-avatar size="24px" color="orange">J</q-avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>
       <!------------------- Basic avatar code End ----------->

          <!------------------- Square avatar code End ----------->

<div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
                <div class="text-h6">Square</div>
                <div class="text-subtitle2">
                  <div class="q-gutter-sm">
                    <q-avatar
                      square
                      color="red"
                      text-color="white"
                      icon="directions"
                    />
                    <q-avatar square color="primary" text-color="white"
                      >J</q-avatar
                    >
                    <q-avatar
                      square
                      size="100px"
                      font-size="82px"
                      color="teal"
                      text-color="white"
                      icon="directions"
                    />
                    <q-avatar square size="24px" color="orange">J</q-avatar>
                    <q-avatar square>
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
              </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- Square avatar code End ----------->
  
  <!------------------- Rounded avatar code End ----------->
  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
           <q-card-section>
                <div class="text-h6">Rounded</div>
                <div class="text-subtitle2">
                  <div class="q-gutter-sm">
                    <q-avatar
                      rounded
                      color="red"
                      text-color="white"
                      icon="directions"
                    />
                    <q-avatar rounded color="primary" text-color="white"
                      >J</q-avatar
                    >
                    <q-avatar
                      rounded
                      size="100px"
                      font-size="82px"
                      color="teal"
                      text-color="white"
                      icon="directions"
                    />
                    <q-avatar rounded size="24px" color="orange">J</q-avatar>
                    <q-avatar rounded>
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
              </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

   <!------------------- Rounded avatar code End ----------->
   <!------------------- standared size avatar code End ----------->

   <div class="q-pa-md row1">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
          <q-card-section>
                <div class="text-h6">Standard sizes</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md q-gutter-sm">
                    <q-avatar
                      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
                      :key="size"
                      :size="size"
                      color="primary"
                      text-color="white"
                      icon="directions"
                    />
                  </div>
                </div>
              </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
<!------------------- Basic avatar code End ----------->
   

   
  </div>
</template>

<script>
export default {};
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
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;
 

}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}
.my-card{
  width: 100%;
  /* max-width: 250px; */
  
}
</style>