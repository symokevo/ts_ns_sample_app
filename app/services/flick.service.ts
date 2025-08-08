import { FlickModel } from '../models/flick.model';

export class FlickService {
  private flicks: FlickModel[] = [
    {
      id: 1,
      genre: 'Musical',
      title: 'Book of Christ',
      image: '~/assets/bookofmormon.png',
      url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      description: `This is just another good book`,
      details: [
        {
          title: 'Music, Lyrics and Book by',
          body: 'Simon Rabbs'
        },
        {
          title: 'Director',
          body: 'Simon Rabbs'
        },
        {
          title: 'Choreography',
          body: 'Simon Rabbs'
        },
        {
          title: 'Cast',
          body: 'Simon Rabbs, Simon Rabbs, Simon Rabbs'
        },
        {
          title: 'Producer',
          body: 'Simon Rabbs'
        }
      ]
    },
    {
      id: 2,
      genre: 'Musical',
      title: 'Book of Christ',
      image: '~/assets/bookofmormon.png',
      url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      description: `This is just another good book`,
      details: [
        {
          title: 'Music, Lyrics and Book by',
          body: 'Simon Rabbs'
        },
        {
          title: 'Director',
          body: 'Simon Rabbs'
        },
        {
          title: 'Choreography',
          body: 'Simon Rabbs'
        },
        {
          title: 'Cast',
          body: 'Simon Rabbs, Simon Rabbs, Simon Rabbs'
        },
        {
          title: 'Producer',
          body: 'Simon Rabbs'
        }
      ]
    },
    {
      id: 3,
      genre: 'Musical',
      title: 'Book of Christ',
      image: '~/assets/bookofmormon.png',
      url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      description: `This is just another good book`,
      details: [
        {
          title: 'Music, Lyrics and Book by',
          body: 'Simon Rabbs'
        },
        {
          title: 'Director',
          body: 'Simon Rabbs'
        },
        {
          title: 'Choreography',
          body: 'Simon Rabbs'
        },
        {
          title: 'Cast',
          body: 'Simon Rabbs, Simon Rabbs, Simon Rabbs'
        },
        {
          title: 'Producer',
          body: 'Simon Rabbs'
        }
      ]
    },
  ]

  static getInstance(): FlickService {
    return FlickService._instance
  }

  private static _instance: FlickService = new FlickService();

  getFlicks(): FlickModel[]{
    return this.flicks;
  }

  getFlickById(id: number): FlickModel | undefined {
    return this.flicks.find((flick) => flick.id === id) || undefined;
  }
}

