
<template>

<div >
   
     <!------------------- Tital and Path(breadcrumbs) code Start ----------->

<div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Badge</h5>
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
      <q-breadcrumbs-el label="Badge" />
    </q-breadcrumbs>

   </div>
<!------------------- Tital and Path(breadcrumbs) code End ----------->

  <div>
      <q-item-section id="rcorners3">
        <q-item-label>
         The <code>QBadge</code> component allows you to create a small badge for <code> adding information</code> like contextual data that needs to stand out and get noticed. It is also often useful in combination with other elements like a user <code> avatar</code> to show a <code>number</code> of <code>new messages</code>.
  
        </q-item-label>
      </q-item-section>
    </div>

<!------------------- Basic code Start ----------->

    <div class="q-pa-md row1">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
           <q-card-section>
        <div class="text-h6" >Basic</div>
        <div class="text-subtitle2">
<div class=" q-pa-md q-gutter-sm">
    <q-badge color="blue">
      #4D96F2
    </q-badge>

    <q-badge color="orange" text-color="black" label="2" />

    <q-badge color="purple">
      <q-icon name="bluetooth" color="white" />
    </q-badge>

    <q-badge color="red">
      12 <q-icon name="warning" color="white" class="q-ml-xs" />
    </q-badge>

    <div class="text-h6">
      Badge <q-badge color="primary">v1.0.0+</q-badge>
    </div>

    <div>
      Feature <q-badge color="primary">v1.0.0+</q-badge>
    </div>

    <q-item clickable v-ripple class="bg-grey-2">
      <q-item-section avatar>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/chaosmonkey.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          Ganglia
        </q-item-label>
        <q-item-label caption>
          <q-badge color="yellow-6" text-color="black">
            3
            <q-icon
              name="warning"
              size="14px"
              class="q-ml-xs"
            />
          </q-badge>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <span>2 min ago</span>
      </q-item-section>
    </q-item>
</div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
  
 <!------------------- Basic code end ----------->

<!------------------- Aligned code Start ----------->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
              <q-card-section>
        <div class="text-h6" >Aligned</div>
        <div class="text-subtitle2">
<div class=" q-pa-md q-gutter-sm">
    <div class="text-h4">
      Title
      <q-badge align="top">cli v1.0.0</q-badge>
    </div>

    <q-separator />

    <div class="text-h4">
      Title
      <q-badge align="middle">app v1.0.0</q-badge>
    </div>

    <q-separator />

    <div class="text-h4">
      Title
      <q-badge align="bottom">docs v1.0.0</q-badge>
    </div>
</div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
  <!------------------- Aligned code End ----------->
  <!------------------- Floating code Start ----------->

  <div class="q-pa-md row1 row2">
    <div class="column">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
             <q-card-section>
        <div class="text-h6" >Floating</div>
        <div class="text-subtitle2">
<div class=" q-pa-md q-gutter-sm">
    
    <q-btn push color="white" text-color="primary" label="Unread Mails">
      <q-badge color="orange" floating>22</q-badge>
    </q-btn>

    <q-btn dense color="purple" round icon="email" class="q-ml-md">
      <q-badge color="red" floating>4</q-badge>
    </q-btn>
</div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>
  <!------------------- floating code end ----------->

  <!------------------- outline design code Start ----------->
 <div class="q-pa-md row1 ">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Outline Design</div>
        <div class="text-subtitle2">
 <div class="q-pa-md q-gutter-md">
    <q-badge outline color="primary" label="Outline" />
    <q-badge outline color="orange" label="Outline" />
    <q-badge outline color="secondary" label="Outline" />

    <div class="text-h4">
      Text
      <q-badge outline align="middle" color="teal">
        v1.0.0
      </q-badge>
    </div>
  </div>
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

<!------------------- outline Design code end ----------->

  

 

  </div>
</template>

<script>
export default {
   
    
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;  */
    
}

#rcorners3 {
  padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
}

.text-h6 {
  /* color: rgb(94 92 92); */
  padding-bottom: 10px;
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;

}
.row2{
   padding-top: 120px;
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

#title {
  color: rgb(131, 128, 128);
  font-size: 30px;
  font-style: inherit;
}

#title1 {
  color: rgb(214, 211, 211);
  font-size: 30px;
}

.pill-nav p {
  margin-left: 20px;
  margin-top: 20px;
  display: inline-block;
  color: black;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0px;
}
.my-card{
  width: 100%;
  /* max-width: 250px; */
  
}
</style>