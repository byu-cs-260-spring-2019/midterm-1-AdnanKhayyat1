var app = new Vue({
    el: '#root',
    data : {
        inquiry: '',
        loading: true,
        ISBN: '',
        myBooks: [
        ],
        favs: [],
    },
    // title, author, publish date, cover image

    created() {
        this.bookFind();    
    },
    methods: {
        async bookFind() {
            try{
                this.loading = true;
                const response = await axios.get('http://openlibrary.org/search.json?q=' + this.inquiry)
                const data = response.data;
                console.log(data);
                this.loading = false;
                for(var i = 0; i < data.docs.length; i++){
                    // this.ISBN = data.docs[i].isbn[0];
                    // const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.ISBN + '&jscmd=details&format=json')
                    // const data2 = response2.data;
                    // console.log(data2);

                    this.myBooks.push({title : data.docs[i].title_suggest, author : data.docs[i].author_name, publishDate : data.docs[i].first_publish_year, index : i});
                 
                }
                
                return true;
            }
            
            catch(error){
                console.log(error);
                this.loading = false;
                return false;
            }
     
        },
        FaveItem(item){
            this.favs.push(myBooks[item]);
        }

    },
    computed: {
   
    },


});