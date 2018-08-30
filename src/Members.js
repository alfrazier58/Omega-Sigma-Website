import React from 'react';
import Calendar from './Calendar';
import Nav from './Nav';
import './Member.css';

class Member extends React.Component {
  componentWillMount() {
    console.log('asdf')
    window.app.gapiPromise.then(() => {
      window.gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = window.gapi.auth2.init({
          client_id: '1044693233516-kh705h38np3in34ni6io8jfvj821gffn.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          ux_mode: 'redirect',
          redirect_uri: 'http://localhost:3000/members'
        });
        console.log(this.auth2.currentUser.get())
      });
    })
  }

  render() {
    return (
      <div className='Member'>
        <Nav />
        <div className='content'>
          <div className='content-left'>
            <div className='announcements'>
              <h1>ANNOUNCEMENTS</h1>
            </div>
            <div className='calendar'>
              <h1>CALENDAR</h1>
              <Calendar />
            </div>
          </div>
          <div className='content-right'>
            <h1>POLLS</h1>
          </div>
        </div>
      </div>
    );
  }
}



export default Member;