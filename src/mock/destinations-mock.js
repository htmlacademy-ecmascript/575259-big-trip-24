import { getRandomPhotoUrl } from '../utils.js';

const destinationsMock = [
  {
    id: '1cf86b06-e5d8-4fb0-9084-dff6faaf6d18',
    description: 'Den Haag - for those who value comfort and coziness',
    name: 'Den Haag',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Den Haag a perfect place to stay with a family'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Den Haag a perfect place to stay with a family'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Den Haag famous for its crowded street markets with the best street food in Asia'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Den Haag is a beautiful city'
      }
    ]
  },
  {
    id: 'e385a3ce-2e95-4262-989f-51799f504408',
    description: 'Madrid - with a beautiful old town',
    name: 'Madrid',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Madrid is a beautiful city'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Madrid full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Madrid for those who value comfort and coziness'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Madrid with crowded streets'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Madrid famous for its crowded street markets with the best street food in Asia'
      }
    ]
  },
  {
    id: '8cbb6d07-3758-40a9-b48d-973d8f07e6cd',
    description: 'Hiroshima - for those who value comfort and coziness',
    name: 'Hiroshima',
    pictures: []
  },
  {
    id: 'e6ca0dad-5322-439f-a793-4e56e4b8458a',
    description: 'Rome - a true asian pearl',
    name: 'Rome',
    pictures: []
  },
  {
    id: '733a7d11-615f-4421-b548-7ad7832b79c1',
    description: 'Rotterdam - middle-eastern paradise',
    name: 'Rotterdam',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Rotterdam with an embankment of a mighty river as a centre of attraction'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Rotterdam in a middle of Europe'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Rotterdam full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Rotterdam full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    id: '2c5a64ff-3d19-4961-8126-85fad7240df8',
    description: '',
    name: 'Barcelona',
    pictures: []
  },
  {
    id: 'b4e50dbd-9525-48cd-a47f-67cc08025912',
    description: 'Nagasaki - a true asian pearl',
    name: 'Nagasaki',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Nagasaki a true asian pearl'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Nagasaki a true asian pearl'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Nagasaki for those who value comfort and coziness'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Nagasaki famous for its crowded street markets with the best street food in Asia'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Nagasaki full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    id: 'f3ce1e9f-d82c-4ebd-b93d-15f48e2baadb',
    description: 'Amsterdam - famous for its crowded street markets with the best street food in Asia',
    name: 'Amsterdam',
    pictures: []
  },
  {
    id: 'e9d6f17b-c3f3-4445-b98e-74bdeaee2e9b',
    description: 'Paris - a perfect place to stay with a family',
    name: 'Paris',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Paris is a beautiful city'
      },
      {
        'src': getRandomPhotoUrl(),
        'description': 'Paris in a middle of Europe'
      },
      {
        src: getRandomPhotoUrl(),
        description: 'Paris full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    id: 'e3e9c36e-3116-4046-bf6e-ba3d2a55b22d',
    description: 'Valencia - for those who value comfort and coziness',
    name: 'Valencia',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Valencia full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  }
];

export { destinationsMock };
