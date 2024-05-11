import { Extension, HeroeResult, ItemType, URLType } from 'src/types';

export const MOCK_HEROES: HeroeResult[] = [
  {
    "id": 1011334,
    "name": "3-D Man",
    "description": "",
    "modified": "2014-04-29T14:18:17-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      "extension": Extension.Jpg
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
    "comics": {
      "available": 12,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
          "name": "Avengers: The Initiative (2007) #14"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
          "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
          "name": "Avengers: The Initiative (2007) #15"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
          "name": "Avengers: The Initiative (2007) #16"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
          "name": "Avengers: The Initiative (2007) #17"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
          "name": "Avengers: The Initiative (2007) #18"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
          "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
          "name": "Avengers: The Initiative (2007) #19"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
          "name": "Deadpool (1997) #44"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
          "name": "Marvel Premiere (1972) #35"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
          "name": "Marvel Premiere (1972) #36"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
          "name": "Marvel Premiere (1972) #37"
        }
      ],
      "returned": 12
    },
    "series": {
      "available": 3,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
          "name": "Deadpool (1997 - 2002)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
          "name": "Marvel Premiere (1972 - 1981)"
        }
      ],
      "returned": 3
    },
    "stories": {
      "available": 21,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
          "name": "Cover #19947",
          "type": ItemType.Cover
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
          "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
          "type": ItemType.InteriorStory
        }
      ],
      "returned": 20
    },
    "events": {
      "available": 1,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
          "name": "Secret Invasion"
        }
      ],
      "returned": 1
    },
    "urls": [
      {
        "type": URLType.Wiki,
        "url": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=b222c4b71c5065a43c5a75feb85997da"
      }
    ]
  },
  {
    "id": 1017100,
    "name": "A-Bomb (HAS)",
    "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    "modified": "2013-09-18T15:54:04-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
      "extension": Extension.Jpg
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
    "comics": {
      "available": 4,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/comics",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/47176",
          "name": "FREE COMIC BOOK DAY 2013 1 (2013) #1"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40632",
          "name": "Hulk (2008) #53"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40630",
          "name": "Hulk (2008) #54"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40628",
          "name": "Hulk (2008) #55"
        }
      ],
      "returned": 4
    },
    "series": {
      "available": 2,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/17765",
          "name": "FREE COMIC BOOK DAY 2013 1 (2013)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
          "name": "Hulk (2008 - 2012)"
        }
      ],
      "returned": 2
    },
    "stories": {
      "available": 7,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/stories",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92078",
          "name": "Hulk (2008) #55",
          "type": ItemType.Cover
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92079",
          "name": "Interior #92079",
          "type": ItemType.Cover
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92087",
          "name": "Interior #92087",
          "type": ItemType.InteriorStory
        }
      ],
      "returned": 7
    },
    "events": {
      "available": 0,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/events",
      "items": [],
      "returned": 0
    },
    "urls": [
      {
        "type": URLType.Wiki,
        "url": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=b222c4b71c5065a43c5a75feb85997da"
      },
      {
        "type": URLType.Comiclink,
        "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=b222c4b71c5065a43c5a75feb85997da"
      }
    ]
  },
];
