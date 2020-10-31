import React from 'react';      //imports react from React library
import { Movies } from './movies'; //imports 'Movies' class 
import axios from 'axios';

export class Read extends React.Component { //'export' keyword allows exportation & access to components (etc.) to other js files

    state = { //this object allows data to be stored
        movies: []
    };

    componentDidMount() { //component life cycle hook is called every time a component becomes active
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032') //get method retrieves information
            .then((response) => {
                this.setState({ movies: response.data.Search })
            }) //fulfilled state in a promise

            .catch((error) => {
                console.log(error)
            }); //rejected state in a promise, error

    }

    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div> //embedded in the 'read' component is the 'movie' component in this div
        );
    }
}