app.component('Searchbar',{
    props: {
      isshowsearchbox:{
        type: Boolean,
        require: true
      },
      isfound:{
        type: Boolean,
        require: true
      }
      
    },
    /*html*/
    template: 
    ` 
    
    <div class="flex justify-center my-10">
    <div class="w-72 inline-flex space-x-2 mt-5 h-8">
  <i class="border-4 border-indigo-600 w-48 cursor-pointer" @click="showSearchBox" v-show="!isshowsearchbox">search</i>
   <input v-model="keyword" @keyup.enter="Search" type="text" v-if="isshowsearchbox" 
   class="inline w-auto border-4 border-indigo-600 flex-1">
   <button @click="Cancel" v-if="isshowsearchbox" class="bg-indigo-600 text-white rounded flex-1">cancel</button>
  </div>
</div>
<p v-if="!isfound" class="flex justify-center"> Not found. </p>
    `
  ,data() {
    return {
      keyword:""
    }
},
methods: {
  showSearchBox(){
    this.$emit("show-searchbox")
},
  Cancel(){
    this.$emit("cancel")
  },
  Search(){
    this.$emit("search",this.keyword)
  }
},

})