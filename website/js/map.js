var map = document.querySelector('.map');
var mapPinMain = document.querySelector('.map__pin--main');
var addressInput = document.querySelector('#address');
var bookingForm = document.querySelector('.notice__form');
var mapPin = document.querySelector('template').content.querySelector('.map__pin');
var mapCard = document.querySelector('template').content.querySelector('.map__card');
var mapPins = document.querySelector('.map__pins');
var mapFilters = document.querySelector('.map__filters-container');

addressInput.value = [546, 375];

var renderPin = function (pin) {
  var pinElement = mapPin.cloneNode(true);
  pinElement.style = "left: " + pin.location.x + "px; top: " + pin.location.y + "px";
  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = pin.offer.title;
  return pinElement;
};

var renderCard = function (card) {
  var cardElement = mapCard.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = "Наши координаты " + card.offer.address();
  cardElement.querySelector('.popup__price').textContent = card.offer.price + "₽/ночь";
  cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + " комнаты для " + card.offer.guests + " гостей";
  cardElement.querySelector('.popup__text--time').textContent = "Заезд после " + card.offer.checkin + ", выезд до " + card.offer.checkout;
  return cardElement;
};

for (var i = 0; i < Data.mySimilar.length; i++) {
  mapPins.appendChild(renderPin(similar[i])).classList.add('pin', 'hidden');
  map.appendChild(renderCard(similar[i])).classList.add('card', 'hidden');
};

var pinElements = mapPins.getElementsByClassName('pin');
var cardElements = map.getElementsByClassName('card');
var closeCard = map.querySelectorAll('.popup__close');

mapPins.addEventListener('click', function () {
  var pinTarget = event.target;

  for (var i = 0; i < pinElements.length; i++) {
    cardElements[i].classList.add('hidden');
  };

  for (var i = 0; i < pinElements.length; i++) {
    if (pinElements[i] == pinTarget || pinElements[i].querySelector('img') == pinTarget) {
      cardElements[i].classList.remove('hidden');
    };
  };
});

map.addEventListener('click', function () {
  var closeTarget = event.target;
  for (var i = 0; i < closeCard.length; i++) {
    if (closeCard[i] == closeTarget) {
      cardElements[i].classList.add('hidden');
    };
  };
});

document.addEventListener('keydown', function () {
  if (event.keyCode == 27) {
    for (var i = 0; i < cardElements.length; i++) {
      cardElements[i].classList.add('hidden');
    };
  };
});

mapPinMain.addEventListener('mousedown', function (event) {
  event.preventDefault();

  var startCoords = {
    x: event.clientX,
    y: event.clientY
  };

  var onMouseMove = function (evtMove) {
    evtMove.preventDefault();

    var shift = {
      x: startCoords.x - evtMove.clientX,
      y: startCoords.y - evtMove.clientY
    };

    startCoords = {
      x: evtMove.clientX,
      y: evtMove.clientY
    };

    mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
    mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';

    var mainPinStyleTop = (mapPinMain.offsetTop - shift.y);
    var mainPinStyleLeft = (mapPinMain.offsetLeft - shift.x);
    var mapWidth = map.offsetWidth;

    if (mainPinStyleTop < 130) {
        mapPinMain.style.top = 130 + 'px';
    } else if (mainPinStyleTop > 630) {
        mapPinMain.style.top = 630 + 'px';
    };

    if (mainPinStyleLeft < 0) {
      mapPinMain.style.left = 0 + 'px';
    } else if (mainPinStyleLeft > mapWidth) {
      mapPinMain.style.left = mapWidth + 'px';
    };
    //Разобраться по пункту 3.4 (расчёт координат по игле пина, а не по его верхнему углу)
  };

  var onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    map.classList.remove('map--faded');
    bookingForm.classList.remove('notice__form--disabled');
    addressInput.value = [mapPinMain.offsetLeft, mapPinMain.offsetTop];

    for (var i = 0; i < pinElements.length; i++) {
      pinElements[i].classList.remove('hidden');
    };
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
