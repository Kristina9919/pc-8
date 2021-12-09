const showMenu=function (evt){
    const parent = evt.target.parentNode;
    const addMenu = parent.querySelector('.choose-elem');
    addMenu.classList.toggle('hidden');
}
const addButtonElements = document.querySelectorAll('.add-btn');
addButtonElements.forEach(function (item){
 return item.addEventListener('click', showMenu);
});

const deleteButton = function (evt){
    const divElement = evt.target.parentNode;
    const divWrapper = divElement.parentNode;
    const block = divWrapper.parentNode;
    divElement.remove();

    const wrapperItems = divWrapper.querySelectorAll('.element');
};

const changeLayout = function (evt){
const newLayout = evt.target.value;
const layoutElement = document.querySelector('.layout');
layoutElement.classList.remove('layout--landing');
layoutElement.classList.remove('layout--blog');
layoutElement.classList.remove('layout--shop');
layoutElement.classList.add('layout--' + newLayout);
};
const chooseButtonElements = document.querySelectorAll('.choose-elem__btn');
document.querySelector('.grid-select').addEventListener('change', changeLayout);

const addElement = function (evt){
    const clickedButton = evt.target; // найдем нажатую кнопку
    const chooseElem = clickedButton.parentNode;
    chooseElem.classList.add('hidden');

    const blockType = clickedButton.dataset.type;
    const blockContainer = clickedButton.dataset.container;

    const Template = document.querySelector('#' + blockType + '-template').content;
    const Clone = Template.cloneNode(true);
    const templateElement = Clone.querySelector('.element');
    const Wrapper = document.querySelector('.' + blockContainer + '__elements-wrapper');
    Wrapper.append(Clone);

    if (blockContainer.includes('content')){
        Wrapper.parentNode.classList.remove('content--empty');
    }
    else {
    Wrapper.parentNode.classList.remove(blockContainer + '--empty');
    }
 templateElement.querySelector('.delete-btn').addEventListener('click', deleteButton);
};
chooseButtonElements.forEach(function (item){
    return item.addEventListener('click', addElement);
});




