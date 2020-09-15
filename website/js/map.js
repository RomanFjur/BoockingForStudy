const map = document.querySelector('.map'),
      mapPinMain = document.querySelector('.map__pin--main'),
      addressInput = document.querySelector('#address'),
      bookingForm = document.querySelector('.notice__form'),
      mapPin = document.querySelector('template').content.querySelector('.map__pin'),
      mapCard = document.querySelector('template').content.querySelector('.map__card'),
      mapPins = document.querySelector('.map__pins'),
      mapFilters = document.querySelector('.map__filters-container');

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let bookingFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

let randomFeaturesLength = function (min, max) {
  bookingFeatures.length = getRandomIntInclusive (min, max);
  return bookingFeatures;
};

let photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

let randomPhotos = function (arr) {
  let j;
  let temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

let similar = [
  {
    author: {
      avatar: 'img/avatars/user01.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: function () {
        let coordinates = [similar[0].location.x, similar[0].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'flat',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '12:00',
      checkout: '12:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user02.png'
    },
    offer: {
      title: 'Маленькая неуютная квартира',
      address: function () {
        let coordinates = [similar[1].location.x, similar[1].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'flat',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '14:00',
      checkout: '14:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user03.png'
    },
    offer: {
      title: 'Огромный прекрасный дворец',
      address: function () {
        let coordinates = [similar[2].location.x, similar[2].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'palace',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '12:00',
      checkout: '12:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user04.png'
    },
    offer: {
      title: 'Маленький ужасный дворец',
      address: function () {
        let coordinates = [similar[3].location.x, similar[3].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'palace',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '13:00',
      checkout: '13:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user05.png'
    },
    offer: {
      title: 'Красивый гостевой домик',
      address: function () {
        let coordinates = [similar[4].location.x, similar[4].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'house',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '12:00',
      checkout: '12:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user06.png'
    },
    offer: {
      title: 'Некрасивый негостеприимный домик',
      address: function () {
        let coordinates = [similar[5].location.x, similar[5].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'house',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '13:00',
      checkout: '13:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user07.png'
    },
    offer: {
      title: 'Уютное бунгало далеко от моря',
      address: function () {
        let coordinates = [similar[6].location.x, similar[6].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'bungalo',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '14:00',
      checkout: '14:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user08.png'
    },
    offer: {
      title: 'Неуютное бунгало по колено в воде',
      address: function () {
        let coordinates = [similar[7].location.x, similar[7].location.y];
        return coordinates;
      },
      price: getRandomIntInclusive (1000, 100000),
      type: 'bungalo',
      rooms: getRandomIntInclusive (1, 5),
      guests: getRandomIntInclusive (1, 20),
      checkin: '14:00',
      checkout: '14:00',
      features: randomFeaturesLength(1, 6),
      description: '',
      photos: randomPhotos(photos)
    },
    location: {
      x: getRandomIntInclusive (0, map.offsetWidth),
      y: getRandomIntInclusive (130, 630)
    }
  }
];

addressInput.value = [546, 375];

let renderPin = function (pin) {
  let pinElement = mapPin.cloneNode(true);
  pinElement.style = "left: " + pin.location.x + "px; top: " + pin.location.y + "px";
  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = pin.offer.title;
  pinElement.classList.add('pin', 'hidden');
  return pinElement;
};

let renderCard = function (card) {
  let cardElement = mapCard.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = "Наши координаты " +       card.offer.address();
  cardElement.querySelector('.popup__price').textContent = card.offer.price + "₽/ночь";
  cardElement.querySelector('.popup__text--capacity').textContent =
    card.offer.rooms + " комнаты для " + card.offer.guests + " гостей";
  cardElement.querySelector('.popup__text--time').textContent =
    "Заезд после " + card.offer.checkin + ", выезд до " + card.offer.checkout;
  cardElement.classList.add('card', 'hidden');
  return cardElement;
};

for (let i = 0; i < similar.length; i++) {
  console.log(renderPin(similar[i]));
  mapPins.append(renderPin(similar[i]));
  map.append(renderCard(similar[i]));
}

let pinElements = mapPins.querySelectorAll('.pin');
let cardElements = map.querySelectorAll('.card');
let closeCard = map.querySelectorAll('.popup__close');

mapPins.addEventListener('click', function () {
  let pinTarget = event.target;

  for (let i = 0; i < pinElements.length; i++) {
    cardElements[i].classList.add('hidden');
  }

  for (let j = 0; j < pinElements.length; j++) {
    if (pinElements[j] == pinTarget || pinElements[j].querySelector('img') == pinTarget) {
      cardElements[j].classList.remove('hidden');
    }
  }
});

map.addEventListener('click', function () {
  let closeTarget = event.target;
  for (let i = 0; i < closeCard.length; i++) {
    if (closeCard[i] == closeTarget) {
      cardElements[i].classList.add('hidden');
    }
  }
});

document.addEventListener('keydown', function () {
  if (event.keyCode == 27) {
    for (let i = 0; i < cardElements.length; i++) {
      cardElements[i].classList.add('hidden');
    }
  }
});

mapPinMain.addEventListener('mousedown', function (event) {
  event.preventDefault();

  let startCoords = {
    x: event.clientX,
    y: event.clientY
  };

  let onMouseMove = function (evtMove) {
    evtMove.preventDefault();

    let shift = {
      x: startCoords.x - evtMove.clientX,
      y: startCoords.y - evtMove.clientY
    };

    startCoords = {
      x: evtMove.clientX,
      y: evtMove.clientY
    };

    mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
    mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';

    let mainPinStyleTop = (mapPinMain.offsetTop - shift.y);
    let mainPinStyleLeft = (mapPinMain.offsetLeft - shift.x);
    let mapWidth = map.offsetWidth;

    if (mainPinStyleTop < 130) {
        mapPinMain.style.top = 130 + 'px';
    } else if (mainPinStyleTop > 630) {
        mapPinMain.style.top = 630 + 'px';
    }

    if (mainPinStyleLeft < 0) {
      mapPinMain.style.left = 0 + 'px';
    } else if (mainPinStyleLeft > mapWidth) {
      mapPinMain.style.left = mapWidth + 'px';
    }
    //Разобраться по пункту 3.4 (расчёт координат по игле пина, а не по его верхнему углу)
  };

  let onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    map.classList.remove('map--faded');
    bookingForm.classList.remove('notice__form--disabled');
    addressInput.value = [mapPinMain.offsetLeft, mapPinMain.offsetTop];

    for (let i = 0; i < pinElements.length; i++) {
      pinElements[i].classList.remove('hidden');
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
