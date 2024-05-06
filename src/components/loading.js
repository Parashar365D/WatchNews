import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Loading extends Component {
    render() {
        return (
            <div className="container my-1">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <div className="card my-2" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6" />
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-6" />
                                    <span className="placeholder col-8" />
                                </p>
                                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card my-2" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6" />
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-6" />
                                    <span className="placeholder col-8" />
                                </p>
                                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card my-2" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6" />
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-6" />
                                    <span className="placeholder col-8" />
                                </p>
                                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
