const showMenu=function (evt){// задаем новую переменную обработка событий
    const parent = evt.target.parentNode;// запись ссылки текущего элемента на родителя
    const addMenu = parent.querySelector('.choose-elem');// поиск класса '.choose-elem'
    addMenu.classList.toggle('hidden');// добавление класса 'hidden'
}
const addButtonElements = document.querySelectorAll('.add-btn');// поиск класса '.add-btn' в документе
addButtonElements.forEach(function (item){// выполнение функции
    return item.addEventListener('click', showMenu);// возврат события при клике showMenu
});

const deleteButton = function (evt){
    const divElement = evt.target.parentNode;// определим блок-родитель кнопки удаления, которую нажали
    const divWrapper = divElement.parentNode;// удаление элементов меню
    const block = divWrapper.parentNode;// удаление блоков меню
    divElement.remove();

    const wrapperItems = divWrapper.querySelectorAll('.element');//  находим все элементы и возвращаем их список
    if (wrapperItems.lenght ===0) {// если длина равна 0
        if (block.classList.contains('header')) { // если в блоке есть класс 'header'
            block.classList.add('header--empty'); // то в блок добавляем 'header--empty'
        }
        if (block.classList.contains('content')) { //если в блоке есть класс 'content'
            block.classList.add('content--empty');// то в блок добавляем 'content--empty'
        }
        if (block.classList.contains('footer')) {// если в блоке есть класс 'footer'
            block.classList.add('footer--empty');// то в блок добавляем 'footer--empty'
        }
    }
};
const editContent = function (evt) {
    const editElement = evt.target;// находим ссылки на старые элементы
    let oldValue;

    if (editElement.tagName === 'IMG') {
        oldValue = editElement.src;// отображение ссылки предыдущего изображения
    } else {
        oldValue = editElement.textContent;// отображение предыдущего текста
    }
    const newValue = window.prompt('Напишите новый текст', oldValue);// назначили путь для вставки изображения
    if (editElement.tagName === 'IMG') {
        editElement.src = newValue;// отображение ссылки нового изображения
    } else {
        editElement.textContent = newValue;// отображение нового текста
    }
}



const changeLayout = function (evt){ // задаем функцию обработки события
    const newLayout = evt.target.value;// запись текущего значения в newLayout
    const layoutElement = document.querySelector('.layout');// возвращает первый элемент документа
    layoutElement.classList.remove('layout--landing');// возвращаем класс 'layout--landing'
    layoutElement.classList.remove('layout--blog');// возвращаем класс 'layout--blog'
    layoutElement.classList.remove('layout--shop');// возвращаем класс 'layout--shop'
    layoutElement.classList.add('layout--' + newLayout);// добавляем класс 'layout--' и константу newLayout
};
const chooseButtonElements = document.querySelectorAll('.choose-elem__btn');
document.querySelector('.grid-select').addEventListener('change', changeLayout);

const addElement = function (evt){
    const clickedButton = evt.target; // найдем нажатую кнопку
    const chooseElem = clickedButton.parentNode;// нашли родителя , т.е всю панель
    chooseElem.classList.add('hidden');// прячем панель

    const blockType = clickedButton.dataset.type;
    const blockContainer = clickedButton.dataset.container;

    //ищем <template> по id:
    const Template = document.querySelector('#' + blockType + '-template').content;
    const Clone = Template.cloneNode(true); //создаем и воозвращаем копию
    const templateElement = Clone.querySelector('.element');//получаем копию элемента
    const Wrapper = document.querySelector('.' + blockContainer + '__elements-wrapper');//
    Wrapper.append(Clone);

    if (blockContainer.includes('content')){//если блок контейнер содержит контент
        Wrapper.parentNode.classList.remove('content--empty');// тогда удаляем content--empty
    }
    else {
        Wrapper.parentNode.classList.remove(blockContainer + '--empty');// либо удаляем класс
    }
    templateElement.querySelector('.delete-btn').addEventListener('click', deleteButton);// добавляем кнопку удаления
    templateElement.querySelector('.template-content').addEventListener('dblclick', editContent);// двойным кликом меняем название элемента контента
};
chooseButtonElements.forEach(function (item){ //выполнение функции
    return item.addEventListener('click', addElement);// возврат события при клике addElement
});

