import React, {useMemo} from "react";
import queryString from 'query-string';
import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {useLocation} from 'react-router-dom'
import {getHeroesByName} from "../../selectors/getHeroesByName";

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [values,handleInputChange] = useForm({
        searchText:q
    });

    const {searchText} = values;

    const heroesfiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return(
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find Your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="false"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <div className="d-grid gap-1">
                            <button
                                type="submit"
                                className="btn m-1 btn-outline-primary"
                            >
                                Search
                            </button>
                        </div>

                    </form>

                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '')&&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesfiltered.length === 0)&&
                        <div className="alert alert-danger">
                            There is no a Hero with {q}
                        </div>
                    }

                    {
                        heroesfiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }

                </div>
            </div>

        </div>
    );
}
