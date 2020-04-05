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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
      address: 'location.x, location.y',
      price: getRandomIntInclusive (1000, 1000000),
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
  }
];

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var mapPin = document.querySelector('template').content.querySelector('.map__pin');
var mapCard = document.querySelector('template').content.querySelector('.map__card');
var mapPins = document.querySelector('.map__pins');

var renderPin = function (pin) {
  var pinElement = mapPin.cloneNode(true);
  pinElement.style = "left: " + pin.location.x + "px; top: " + pin.location.y + "px";
  pinElement.querySelector('img').src = pin.author.avatar;

  return pinElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < similar.length; i++) {
  fragment.appendChild(renderPin(similar[i]));
};

mapPins.appendChild(fragment);
