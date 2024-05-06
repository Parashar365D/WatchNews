import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Loading from './loading';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'General',

    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0

        };
    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let proData = await data.json();
        this.props.setProgress(70);

        this.setState({
            articles: proData.articles,
            totalResults: proData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }


    Capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    fetchData = async ()=> {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let proData = await data.json();
        this.setState({
            articles: this.state.articles.concat(proData.articles),
            totalResults: proData.totalResults,
            loading: false
        });
    };

    render() {
        return (
            <>
                <h1 className='text-center' style={{margin: '20px 0px', marginTop: '60px'}}>Watch News - Top {this.Capitalize(this.props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}>
                    <div className="container">
                        {this.state.loading && <Loading />}
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem 
                                    title={element.title ? element.title.slice(0, 45) : ""} 
                                    description={element.description ? element.description.slice(0, 88) : ""} 
                                    img_Url={element.urlToImage} 
                                    main_url={element.url} 
                                    author={element.author} 
                                    date={element.publishedAt} />
                                </div>;
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
