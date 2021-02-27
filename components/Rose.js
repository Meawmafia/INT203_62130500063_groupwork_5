app.component('Rose', {
  props: {
    roses: {
      type: Array,
      require: true
    },
    fav: {
      type: String,
      require: true
    },
    unfav: {
      type: String,
      require: true
    },
    isshowimg: {
      type: Boolean,
      require: true
    },
    isshowimg: {
      type: Boolean,
      require: true
    },
    currentimg: {
      type: String,
      require: true
    }
  },
  template:
    /*html*/
    ` 
    <div v-if="!isshowimg">
      <div v-for="(rose,index) in roses" class="flex justify-center my-5" :class="[rose.isHidden ? 'hidden' : '']">
        <img class="w-72 mr-10 cursor-pointer" :src="rose.image" :alt="rose.name" :key="rose.name" @click="handleClickImg(index);">
        <p class="w-20 my-24">{{ rose.name }}</p>
        <img :src="fav" v-if="rose.isFav" class="w-12 h-12 ml-10 my-20"  @click="updateFav(index)">
        <img :src="unfav" v-else class="w-12 h-12 ml-10 my-20" @click="updateFav(index)">
      </div>
    </div>

  `
  , data() {
    return {

    }
  },
  methods: {
    updateFav(index) {
      this.$emit("update-fav", index)
    },
    handleClickImg(index) {
      this.$emit("handle-click", index)
    },

  },

})