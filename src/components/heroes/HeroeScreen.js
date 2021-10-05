import React, {useMemo} from "react";
import {Redirect, useParams} from 'react-router-dom';
import {getHeroesById} from "../../selectors/getHeroById";
import "animate.css";

export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if ( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return(
        <div className="row mt-5">
            <div className="col-md-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>
            <div className="col-md-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b> Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b> Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b> First Appearance: </b> {first_appearance}
                    </li>
                </ul>

                <h5> characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
