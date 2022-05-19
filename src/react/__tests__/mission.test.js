import mission, { joinMission } from '../../redux/missions/mission';

describe('Test missions ', () => {
  test('join mission action', () => {
    const stateData = [
      {
        mission_id: 'ABC1',
        mission_name: 'Mission Marte',
        description: 'Mission Description',
        reserved: false,
      },
      {
        mission_id: 'ABC2',
        mission_name: 'Mission Marte',
        description: 'Mission Description',
        reserved: false,
      },
    ];
    const expectedStateData = [
      {
        mission_id: 'ABC1',
        mission_name: 'Mission Marte',
        description: 'Mission Description',
        reserved: true,
      },
      {
        mission_id: 'ABC2',
        mission_name: 'Mission Marte',
        description: 'Mission Description',
        reserved: false,
      },
    ];
    expect(mission(stateData, joinMission('ABC1'))).toStrictEqual(expectedStateData);
  });
});
