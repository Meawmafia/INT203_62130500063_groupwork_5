app.component('photo-count',{
    props:{
        favcount: {
            type: Number,
            require: true
        },
        cal: {
            type: Number,
            require: true
        }
    },
    template: 
    /*html*/
    ` 
 
    <p class="text-xl font-bold">Photo({{ cal }}) </p>
    <p class="text-xl font-bold">Favorite: ({{favcount}})</p>
    `
  ,data() {
    return {
      
    }
},

})