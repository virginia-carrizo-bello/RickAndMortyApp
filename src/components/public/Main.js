import React, { Component } from 'react'
import { Cards } from './Cards';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { rickAndMortyElements: [] };
    }

    render() {
        return (
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Rick and Morty App</h1>
                            <p className="lead text-muted">Welcome and enjoy!</p>
                        </div>
                    </div>
                </section>
                <Cards />
            </main>
        )
    }
}


