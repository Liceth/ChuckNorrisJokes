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
        <div className="form">
          <p className="form-body">
          No prostitute ever survived giving Chuck Norris a bj.
            Every time he climaxed, he blew a crater out the 
            back of her neck.</p>
        </div>
        <div className="options">
          <p>Get me a new one...</p>
        </div>
        
        <div className="powered_">
          Made with <img alt="" src={heart} width="16" height="16" />
          <a href="https://about.me/licethovalles"> By Lilo </a>
        </div>
      </div>
    </div>
  )}
}