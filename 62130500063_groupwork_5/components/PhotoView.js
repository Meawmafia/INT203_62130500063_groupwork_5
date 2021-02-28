app.component('photo-view',{
    props: {
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
        <div class="container flex flex-col h-full">
            <i class="text-white self-end justify-self-center cursor-pointer mt-10 text-3xl border-4 border-white p-3" @click="Close">Close</i>
            <div class="flex justify-center h-full items-center">
                <img :src="currentimg" class="w-2/4">
            </div>
        </div>

        `
        
    ,
    methods: {
        Close(){
            this.$emit("close")
        }
        
    }
})

