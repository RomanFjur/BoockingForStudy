function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

var bookingFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var randomFeaturesLength = function (min, max) {
  bookingFeatures.length = getRandomIntInclusive (min, max);
  return bookingFeatures;
};

var photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github .io/assets/images/tokyo/hotel3.jpg"];

var randomPhotos = function (arr) {
	var j;
  var temp;
	for (var i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

var similar = [
  {
    author: {
      avatar: 'img/avatars/user01.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: function () {
        return location.x;
      }, //и вот хрен пойми как это сделать!
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
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
        return location.x;
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
      x: getRandomIntInclusive (100, 800),
      y: getRandomIntInclusive (130, 630)
    }
  },
  {
    author: {
      avatar: 'img/avatars/user01.png'
    },
    offer: {
      title: 'Большая уютная квартира',
      address: function () {
        var coordinates = [this.location.x, this.location.y];
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
      photos: randomPhotos(photos),
      location: {
        x: getRandomIntInclusive (100, 800),
        y: getRandomIntInclusive (130, 630)
      }
    }
  }
];

var map = document.querySelector('.map');
var mapPinMain = document.querySelector('.map__pin--main');

mapPinMain.addEventListener('mouseup', function () {
  map.classList.remove('map--faded');
  bookingForm.classList.remove('notice__form--disabled');
});

var mapPin = document.querySelector('template').content.querySelector('.map__pin');
var mapCard = document.querySelector('template').content.querySelector('.map__card');
var mapPins = document.querySelector('.map__pins');
var mapFilters = document.querySelector('.map__filters-container');

var renderPin = function (pin) {
  var pinElement = mapPin.cloneNode(true);
  pinElement.style = "left: " + pin.location.x + "px; top: " + pin.location.y + "px";
  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = pin.offer.title;
  return pinElement;
};

var renderCard = function (card) {
  var cardElement = mapCard.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = "Наши координаты " + card.offer.address();
  cardElement.querySelector('.popup__price').textContent = card.offer.price + "₽/ночь";
  cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + " комнаты для " + card.offer.guests + " гостей";
  cardElement.querySelector('.popup__text--time').textContent = "Заезд после " + card.offer.checkin + ", выезд до " + card.offer.checkout;
  return cardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < similar.length - 1; i++) {
  fragment.appendChild(renderPin(similar[i]));
};

var bookingForm = document.querySelector('.notice__form');


//mapPins.appendChild(fragment);
//map.insertBefore(renderCard(similar[i]), mapFilters);
