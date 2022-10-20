document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){

  const dropDownButton = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownItem = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input');
  
  //Клик по копке открыть/закрыть список
  dropDownButton.addEventListener('click', function() {
    dropDownList.classList.toggle('dropdown__list-active');
    this.classList.add('dropdown__button-active');
  });
  
  //Выбор элемета списка. Запомить выбранное значение. Закрыть список
  dropDownItem.forEach(function(listItem){
    listItem.addEventListener('click', function(e) {
      e.stopPropagation();
      dropDownButton.innerText = this.innerText;
      dropDownButton.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list-active')
      dropDownButton.classList.remove('dropdown__button-active');
    })
  });
  
  //Клик снаружи списка закрывает список
  document.addEventListener('click', function(e) {
    if (e.target !== dropDownButton) {
      dropDownList.classList.remove('dropdown__list-active')
      dropDownButton.classList.remove('dropdown__button-active');
    }
  });
  //По нажатию на "Tab" или "Escape" список тоже закроется
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key ==='Escape') {
      dropDownList.classList.remove('dropdown__list-active')
      dropDownButton.classList.remove('dropdown__button-active');
    }
  });
    
});


//Список настроек по нажатию на кнопку в хедере 
const settingsButton = document.querySelector('.user-settings');
const settingsList = document.querySelector('.settings__list');
settingsButton.addEventListener('click', function(){
  settingsList.classList.toggle('setting-wrapper-active');
  document.addEventListener('click', function(e) {
    if (e.target !== settingsList && e.target !== settingsButton){
      settingsList.classList.remove('setting-wrapper-active');
    }
  });
});


//Слайдер карточки товара 
const sliderWrapper = document.querySelectorAll('.goods__list-item');
sliderWrapper.forEach(function(wrapper){
  const sliderLine = wrapper.querySelector('.slider-line');
  const sliderButton = wrapper.querySelectorAll('.slider-pagination__button');

wrapper.querySelector('.slide-1').addEventListener('click', function() {
  sliderLine.style.left = 0;
  sliderButton.forEach(function(btn){
    btn.classList.remove('slider-pagination__button-active');
  });
  this.classList.add('slider-pagination__button-active');
});

wrapper.querySelector('.slide-2').addEventListener('click', function() {
  sliderLine.style.left = -356 + 'px';
  sliderButton.forEach(function(btn){
    btn.classList.remove('slider-pagination__button-active');
  });
  this.classList.add('slider-pagination__button-active');
});

wrapper.querySelector('.slide-3').addEventListener('click', function() {
  sliderLine.style.left = -712 + 'px';
  sliderButton.forEach(function(btn){
    btn.classList.remove('slider-pagination__button-active');
  });
  this.classList.add('slider-pagination__button-active');
});
});


//Like button
const likeBtn = document.querySelectorAll('.list-item__like-button');
likeBtn.forEach(function(like){
  like.addEventListener('click', function(){
    like.classList.toggle('list-item__like-button-active');
    });
});



//Statistics slider 
const statColumn = document.querySelector('.statistics__column');
const statButton = document.querySelectorAll('.statistics__pagination-item');


document.querySelector('.statistics-1').addEventListener('click', function(){
  statColumn.style.top = 0;
  statButton.forEach(function(button){
    button.classList.remove('statistics__pagination-item-active');
  });
  this.classList.add('statistics__pagination-item-active');
});

document.querySelector('.statistics-2').addEventListener('click', function(){
  statColumn.style.top = -120 + 'px';
  statButton.forEach(function(button){
    button.classList.remove('statistics__pagination-item-active');
  });
  this.classList.add('statistics__pagination-item-active');
});

document.querySelector('.statistics-3').addEventListener('click', function(){
  statColumn.style.top = -240 + 'px';
  statButton.forEach(function(button){
    button.classList.remove('statistics__pagination-item-active');
  });
  this.classList.add('statistics__pagination-item-active');
});

document.querySelector('.statistics-4').addEventListener('click', function(){
  statColumn.style.top = -360 + 'px';
  statButton.forEach(function(button){
    button.classList.remove('statistics__pagination-item-active');
  });
  this.classList.add('statistics__pagination-item-active');
});

document.querySelector('.statistics-5').addEventListener('click', function(){
  statColumn.style.top = -480 + 'px';
  statButton.forEach(function(button){
    button.classList.remove('statistics__pagination-item-active');
  });
  this.classList.add('statistics__pagination-item-active');
});