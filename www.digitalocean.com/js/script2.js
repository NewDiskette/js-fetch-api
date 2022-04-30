const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

/*
    функция создания Узла (элемент) {
        вернуть документ создать элемент (элемент);
    }
*/
function createNode(element) {
	return document.createElement(element);
}

/*
    функция добавления(родитель, эль){
        вернуть родитель.добавитьРебенок (эль);
    }
*/
function append(parent, el) {
	return parent.appendChild(el);
}

/*
    получить (адрес)
        .затем((ответ) => ответ.json())
        .затем (функция(данные) {
            пусть авторы = данные.полученные результаты;
            консоль.журнал(авторы);
            вернуть авторов.карта (функция(автор) {
                пусть li = создать узел ('li');
                пусть img = создать узел ('img');
                пусть span = создать узел ('span');
                img.источник = автор.картина.средний;
                span.внутренний HTML = `${автор.имя.первый} ${автор.имя.последний}`;
                добавить (li, img);
                добавить (li, span);
                добавить (ul, li);
            })
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
        return authors.map(function(author) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });