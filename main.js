const app = Vue.createApp({
    data(){
        return {
            searchQuery: null,
            msg: 'Hello World!',
            roses: [
                { name:"red" , image:'./img/red.jpg', isFav: false ,isHidden: false },
                {  name:"yellow" , image:'./img/yellow.jpg', isFav: false,isHidden: false },
                {  name:"white" , image:'./img/white.jpg', isFav: false,isHidden: false }
              ],
            
            fav: './img/fav.png',
            unfav: './img/unfav.png',
            favCount: 0,
            keyword: "",
            isFound: true,
            isShowSearchBox: false,
            isShowImg : false,
            currentImg: './img/red.jpg'
        }
    },
    methods: {
        updateFav(index) {

                    this.roses[index].isFav = !this.roses[index].isFav
                    if(this.roses[index].isFav){
                        this.favCount += 1
                    }else{
                        this.favCount -= 1
                    }
                
        },
        showSearchBox(){
            this.isShowSearchBox = !this.isShowSearchBox;
            console.log("searchbox");
        },
        Search(keyword){
            if(keyword){
                for (let i = 0; i < this.roses.length; i++) {

                    if(this.roses[i].name === keyword){
                        this.roses[i].isHidden = false;
                    }else{
                        this.roses[i].isHidden = true;
                    }
                }
                if(this.roses.every(element => element.isHidden)) this.isFound = false;
                keyword = '';

            
            }
        },
        Cancel(){
            this.isShowSearchBox = !this.isShowSearchBox;
            for (const element of this.roses) {
                element.isHidden = false
            }
            this.isFound = true
        },
        Close(){
            this.isShowImg = false;
        },
        handleClickImg(index){
            this.currentImg = this.roses[index].image;
            this.isShowImg = true;
            console.log(this.currentImg);
        }
    },
    computed: {
        calculate(){
       return this.roses.length
        } ,
        filteredSearch(search) {
           return this.roses.filter(rose => search === rose.name)
        }
        
    }
})
