import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import '../index.css';
import Mission from './Mission';
import { getAllMissions } from '../redux/missions/missionStore';

const Missions = () => {
    const missionsCollection = useSelector((state) => state.missionsReducer);
    const dispatch = useDispatch();
    let alternative = true;
    useEffect(() => {
        dispatch(getAllMissions());
    }, []);
    return (
        <section className="missionsContainer">
            <section className="missionsSection">
                {
                    missionsCollection.map((mission) => {
                        alternative = !alternative;
                        return (
                            <Mission
                                id={mission.id}
                                name={mission.name}
                                description={mission.description}
                                classType={(alternative) ? "alternative" : "normal"}
                                status={"NOT A MEMBER"}
                            />
                        )
                    }
                    )
                }
            </section>
        </section>
    );
};
export default Missions;
