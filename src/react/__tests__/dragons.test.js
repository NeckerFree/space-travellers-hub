import dragon, { joinDragon } from '../../redux/dragons/dragon';

describe('Test dragons ', () => {
  test('join dragon action', () => {
    const stateData = [
      {
        id: '1',
        name: 'dragon 1',
        description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
        reserved: false,
      },
      {
        id: '2',
        name: 'dragon 2',
        description: 'Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years.',
        reserved: false,
      },
    ];
    const expectedStateData = [
      {
        id: '1',
        name: 'dragon 1',
        description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
        reserved: true,
      },
      {
        id: '2',
        name: 'dragon 2',
        description: 'Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years.',
        reserved: false,
      },
    ];
    expect(dragon(stateData, joinDragon('1'))).toStrictEqual(expectedStateData);
  });
});
