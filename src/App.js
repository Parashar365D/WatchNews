import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import ContactUS from './components/ContactUS';
import NavBar from './components/Navbar';
import News from './components/News';
import './App.css';

export default class App extends Component {
  pageSize = 6;
  apiKey = 'b6d8c712c6b1441cb5e12e300064aaab'

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <Router>
          <NavBar/>
            <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}/>
          <Routes>
          <Route exact path="/WatchNews" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='WatchNews' pageSize={this.pageSize} country="in" category='general' />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="in" category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category='entertainment' />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category='general' />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category='health' />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category='science' />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category='technology' />} />
          <Route exact path="/contact_us" element={<ContactUS setProgress={this.setProgress}/>} />
          </Routes>
        </Router>
      </>
    );
  }
}