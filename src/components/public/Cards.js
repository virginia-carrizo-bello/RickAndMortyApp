import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import RickAndMortyService from '../../services/RickAndMorty.service';


export const Cards = () => {

    const [rickAndMortyElements, setRickAndMortyElements] = useState([]);

    useEffect(() => {
        RickAndMortyService.getAllCharacters()
        .then((data)=> setRickAndMortyElements(data.results))
        .catch((error)=> console.log(error));
    },[rickAndMortyElements])


    const cardsList = rickAndMortyElements.map((e) => <Card rickAndMortyElements={e} key={e.id} />);

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {cardsList}
                </div>
            </div>
        </div>
    )
}


