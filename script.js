let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');   

    while(numberOfFilms=='' || numberOfFilms==null|| isNaN(numberOfFilms)){
        numberOfFilms=+('Сколь фильмов вы уже посмотрели');
    }

}
start();

const personalMovieDB= {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    privat: false};

    function rememberMyFilms()
    {
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
    }
    rememberMyFilms();
    function detectPersonalLevel(){

        if (personalMovieDB.count<10){
            const c =alert('Просмотренно мало фильмов');
        } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
            const c =alert('Вы класический зритель');
        }else if (personalMovieDB.count>=30){
            const c=alert('Вы киноман')
        } else {
            const c =alert('Произошла ошибка');
        }
    }
    detectPersonalLevel();
    
    function showMyDB(){
        if(personalMovieDB.privat==false){
            console.log(personalMovieDB);
        }
    }
    function writeYourGenres(){
        for(let i=1;i<=3;i++){
            personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);;
        }
    }

    writeYourGenres();

console.log(personalMovieDB);


 