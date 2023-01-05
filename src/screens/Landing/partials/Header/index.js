import React from 'react';
import { SectionContainer } from '../Layout';

function Header(){
  console.log(JSON.parse(localStorage.getItem('loginState')))
  return (
    <>
    {
      !JSON.parse(localStorage.getItem('loginState'))?.email_verification_id ? (
        <>
          <SectionContainer className="bg-dark">
            <div className="wl-header py-4">
              <div>
                <button
                  className="btn btn-responsive"
                  type="button"
                  data-toggle="modal"
                  data-target="#modal">
                  Join waitlist
                </button>
              </div>
            </div>
          </SectionContainer>
          <div className="wl-header-hr" />
        </>
      ) : (
        <>
          <SectionContainer className="bg-dark">
            <div className="wl-header py-4">
              <div className="dropdown">
                <button className="dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Welcome {JSON.parse(localStorage.getItem('loginState'))?.firstName} 
                  <i className='fas fa-long-arrow-alt-down' style={{fontSize: 20, marginLeft: 12}} />
                </button>
                <div className="dropdown-menu dropdown-container" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item dropdown-item-btn" href="https://vetcoin-members.sentinel-digital.com/?uid=O5mI1RTa2StybzhsTTle">Members Area</a>
                  <button className="dropdown-item dropdown-item-btn" type="button">Check your Rank</button>
                  <button className="dropdown-item dropdown-item-btn" type="button">Change Password</button>
                  <button className="dropdown-item dropdown-item-btn" type="button"
                    onClick = {
                      () => {
                        localStorage.removeItem('loginState');
                        window.location.reload();
                      }
                    }
                  >Sign out</button>
                </div>
              </div>
            </div>
          </SectionContainer>
          <div className="wl-header-hr" />
        </>
      )
    }
      
    </>
  );
} 

export default Header;
