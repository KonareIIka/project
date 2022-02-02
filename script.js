const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');
const personalMovieDB= {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    privat: false};
for (let i=0;i<numberOfFilms;i++){
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
if (personalMovieDB.count<10){
    const c =alert('Просмотренно мало фильмов');
} else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
    const c =alert('Вы класический зритель');
}else if (personalMovieDB.count>=30){
    const c=alert('Вы киноман')
} else {
    const c =alert('Произошла ошибка');
}
console.log(personalMovieDB);

 
