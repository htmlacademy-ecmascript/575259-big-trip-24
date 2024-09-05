import { getRandomPhotoUrl } from '../utils.js';

const mockDestinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: 'a7b23f1d-5c8e-4d9f-b6a2-1e9c4d8f3a2b',
    description: 'Kyoto, the ancient capital of Japan, famous for its temples and gardens.',
    name: 'Kyoto',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Golden Pavilion in Kyoto'
      }
    ]
  },
  {
    id: 'e9d45g6h-7i8j-9k0l-1m2n-3o4p5q6r7s8t',
    description: 'Barcelona, the city of Gaudi and beautiful beaches on the Mediterranean coast.',
    name: 'Barcelona',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Sagrada Familia in Barcelona'
      }
    ]
  },
  {
    id: 'u9v8w7x6-y5z4-a3b2-c1d0-e1f2g3h4i5j6',
    description: 'Rio de Janeiro, the city of carnivals and the statue of Christ the Redeemer.',
    name: 'Rio de Janeiro',
    pictures: [
      {
        src: getRandomPhotoUrl(),
        description: 'Copacabana Beach in Rio de Janeiro'
      }
    ]
  }
];

export { mockDestinations };
