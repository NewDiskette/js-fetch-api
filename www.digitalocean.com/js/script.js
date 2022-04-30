const url = 'https://randomuser.me/api/?results=10';

/*
    получить (адрес)
        .затем((ответ) => ответ.json())
        .затем (функция(данные) {
            пусть авторы = данные.полученные результаты;
            консоль.журнал(авторы);
        })
        .поймать(функция(ошибка) {
            консоль.журнал(ошибка);
        });    
*/
fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        let authors = data.results;
        console.log(authors);
    })
    .catch(function(error) {
        console.log(error);
    });