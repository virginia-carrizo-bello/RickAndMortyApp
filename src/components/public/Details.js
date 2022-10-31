import React, { useState, useLocation, useEffect } from 'react';
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Link, useParams } from 'react-router-dom';

export const Details = () => {

  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {

    RickAndMortyService.getAllCharactersById(id)
      .then((data) => setDetail(data))
  }, []);

  return (
    <div>
      <div className="row m-3">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column aling-items-start">
              <strong className="d-inline-block mb-2 text-success">
                {detail.species}
              </strong>
              <h3 className="mb-0 text-dark"> {detail.name} </h3>
              <div className="mb-1 text-muted">
                {new Date(detail.created).toLocaleDateString()}
              </div>
              <div className="mb-1 text-muted"></div>
              <p className="card-text mb-auto">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <ul className="list-group mt-1">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>

              <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
                Volver
              </Link>
            </div>
            <img
              className="h-100 d-inline-block rounder card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={detail.image}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}


