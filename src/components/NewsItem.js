import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
    render() {
        let { title, description, img_Url, main_url, date, author } = this.props;
        return (
            <>
                <div className="card my-1">
                    <img src={!img_Url ? "./assets/null_img.jpg" : img_Url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-primary">By {!author?"Unknown":author} on {new Date(date).toDateString   ()}</small></p>
                        <Link rel='noreferrer' to={main_url} target='blank' className="btn text-center rounded-5">Read More</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItem;
