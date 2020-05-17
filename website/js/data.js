var Data = (function () {
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

  var photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

  var randomPhotos = function (arr) {
    var j;
    var temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random()*(i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    };
    return arr;
  };

  var similar = [];
  return {
    mySimilar: similar = [
      {
        author: {
          avatar: 'img/avatars/user01.png'
        },
        offer: {
          title: 'Большая уютная квартира',
          address: function () {
            var coordinates = [similar[0].location.x, similar[0].location.y];
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
            var coordinates = [similar[1].location.x, similar[1].location.y];
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
            var coordinates = [similar[2].location.x, similar[2].location.y];
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
            var coordinates = [similar[3].location.x, similar[3].location.y];
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
            var coordinates = [similar[4].location.x, similar[4].location.y];
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
            var coordinates = [similar[5].location.x, similar[5].location.y];
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
            var coordinates = [similar[6].location.x, similar[6].location.y];
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
            var coordinates = [similar[7].location.x, similar[7].location.y];
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
    ]
  };
})();
