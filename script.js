const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');
const personalMovieDB= {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    privat: false

};
const a=prompt('Один из последних просмотренных фильмов?',''),
    b=prompt('На сколько вы его оцениваете?',''),
    c=prompt('Один из последних просмотренных фильмов?',''),
    d=prompt('На сколько вы его оцениваете?','');

personalMovieDB.movie[a]=b;
personalMovieDB.movie[c]=d;
console.log(personalMovieDB);