import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

const App = () => {
    useEffect(() => {
        const getAPI = () => {
            // Change this endpoint to whatever local or online address you have
            // Local PostgreSQL Database
            const API = 'http://127.0.0.1:5000/';

            fetch(API)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setLoading(false);
                    setApiData(data);
                });
        };
        getAPI();
    }, []);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    return (
        <Fragment>
            <header>
                <h1>Meta Movie Reviews</h1>
            </header>
            <div className="form-container">
                <h2>Add Movie</h2>
                <form method="POST" action="http://127.0.0.1:5000/add-movie">
                    <div>
                        <label>Movie Name</label>
                        <input type="text" name="movieName" required />
                    </div>
                    <div>
                        <label>Box Image</label>
                        <input type="text" name="imgUrl" required />
                    </div>
                    <div>
                        <label>Realease Year</label>
                        <input type="text" name="releaseYear" required />
                    </div>
                    <div>
                        <label>Summary</label>
                        <textarea rows="5" cols="50" name="summary"></textarea>
                    </div>
                    <div>
                        <label>Director</label>
                        <input type="text" name="director" required />
                    </div>
                    <div>
                        <label>Genre</label>
                        <input type="text" name="genre" required />
                    </div>
                    <div>
                        <label>Rating</label>
                        <input type="text" name="rating" required />
                    </div>
                    <div>
                        <label>Runtime</label>
                        <input type="text" name="movieRuntime" required />
                    </div>
                    <div>
                        <label>Meta Score</label>
                        <input type="text" name="metaScore" required />
                    </div>
                    <div>
                        <button type="submit">Add Movie</button>
                    </div>
                </form>
            </div>
            <main>
                {loading === true ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <section>
                        {apiData.map((movie) => {
                            const movieId = movie[0];
                            const movieName = movie[1];
                            const movieImgUrl = movie[2];
                            const movieReleaseYear = movie[3];
                            const movieSummary = movie[4];
                            const movieDirector = movie[5];
                            const movieGenre = movie[6];
                            const movieRating = movie[7];
                            const movieRuntime = movie[8];
                            const movieMetaScore = movie[9];

                            let metaColor = 'low';

                            if (movieMetaScore >= 70) {
                                metaColor = 'high';
                            } else if (movieMetaScore <= 69 && movieMetaScore >= 49) {
                                metaColor = 'medium';
                            } else {
                                metaColor = 'low';
                            }

                            return (
                                <div className="movie-container" key={String(movieId)}>
                                    <h1>{movieName}</h1>
                                    <p>
                                        <strong>Director:</strong> {movieDirector}
                                    </p>
                                    <p>
                                        <strong>Genre:</strong> {movieGenre}
                                    </p>
                                    <img src={movieImgUrl} alt={movieName} />

                                    <p>
                                        <strong>Meta Score:</strong> <span className={metaColor}>{movieMetaScore}</span>
                                    </p>
                                    <p>
                                        <strong>Runtime:</strong> {movieRuntime}
                                    </p>
                                    <p>
                                        <strong>Rating:</strong> {movieRating}
                                    </p>
                                    <p>
                                        <strong>Release Year:</strong> {movieReleaseYear}
                                    </p>
                                    <p>{movieSummary}</p>
                                </div>
                            );
                        })}
                    </section>
                )}
            </main>
        </Fragment>
    );
};

export default App;
