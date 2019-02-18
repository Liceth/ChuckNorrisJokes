import React from 'react';
import {} from '../../../assets/styles/Feed.css';
const heart = require('../../../assets/icons/heart.png');
const chuckNorris = require('../../../assets/images/chucknorris_logo.png');

export default class FeedPage extends React.Component {
  constructor (props){
    super(props);
  }
 
  render(){
  return(
    <div>
      <div className="feedBody">
      <img src={chuckNorris} width="360" style={{padding:'25px'}}/>
        <div className="options">
          <p>Chuck Norris Jokes</p>
        </div>
        <div className="form"></div>
        <div className="powered_">
          Made with <img alt="" src={heart} width="16" height="16" />
          <a href="https://about.me/licethovalles"> By Lilo </a>
        </div>
      </div>
    </div>
  )}
}