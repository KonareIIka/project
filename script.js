const personalMovieDB= {
    count:0,
    movie: {},
    actors:{},
    genres:[],
    privat: false,
   start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?','');   
    
        while(personalMovieDB.count=='' || personalMovieDB.count==null|| isNaN(personalMovieDB.count)){
            personalMovieDB.count=+('Сколь фильмов вы уже посмотрели');
        }
    
    },
    rememberMyFilms: function() {
        for (let i=0;i<personalMovieDB.count;i++){
            const a=prompt('Один из последних просмотренных фильмов?',''),
            b=prompt('На сколько вы его оцениваете?','');
            if (a.length < 50 && a!='' && b!='' && a!=null & b!=null ) {
            personalMovieDB.movie[a]=b;
            console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function()
    {if (personalMovieDB.count<10){
        const c =alert('Просмотренно мало фильмов');
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        const c =alert('Вы класический зритель');
    }else if (personalMovieDB.count>=30){
        const c=alert('Вы киноман')
    } else {
        const c =alert('Произошла ошибка');
    }

},
showMyDB: function(){
    if(personalMovieDB.privat==false){
        console.log(personalMovieDB);
    }
},
 writeYourGenres:function(){
    for(let i=1;i<=3;i++){
         let genre=prompt(`Ваш любимый жанр под номером ${i}`);
         if (genre===null || genre===''){
           genre=prompt(`Ваш любимый жанр под номером ${i}`);
            }
        personalMovieDB.genres[i-1]=genre;
}
personalMovieDB.genres.forEach((item,i)=> {
    console.log(`Любимый жанр ${i+1}-это ${item} `);
});
},
toggleVisibleMyBD: function(){
    if (personalMovieDB.privat){
        personalMovieDB.privat=false} else{
               personalMovieDB.privat=true}
           }      
};




 
