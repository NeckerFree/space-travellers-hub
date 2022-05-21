import rocket, { reserveRocket } from '../../redux/rockets/rocket';

describe('Test rockets ', () => {
  test('join rocket action', () => {
    const stateData = [
      {
        id: '1',
        flickr_images: [
          'https://imgur.com/DaCfMsj.jpg',
          'https://imgur.com/azYafd8.jpg',
        ],
        rocket_name: 'Falcon 1',
        reserved: false,
      },
      {
        id: '2',
        flickr_images: [
          'https://imgur.com/DaCfMsj.jpg',
          'https://imgur.com/azYafd8.jpg',
        ],
        rocket_name: 'Falcon 9',
        reserved: false,
      },
    ];
    const expectedStateData = [
      {
        id: '1',
        flickr_images: [
          'https://imgur.com/DaCfMsj.jpg',
          'https://imgur.com/azYafd8.jpg',
        ],
        rocket_name: 'Falcon 1',
        reserved: true,
      },
      {
        id: '2',
        flickr_images: [
          'https://imgur.com/DaCfMsj.jpg',
          'https://imgur.com/azYafd8.jpg',
        ],
        rocket_name: 'Falcon 9',
        reserved: false,
      },
    ];
    expect(rocket(stateData, reserveRocket('1'))).toStrictEqual(expectedStateData);
  });
});
