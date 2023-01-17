
import React from 'react';
import Home from './Screens/Home';

export default function App() {

  return (
    <>
      <div className="mainApp">
      <div className="topBar">
        <div className="titleBar">
          <button id="showHideMenus" className="toggleButton"></button>
          <img src="icons/icon_top_bar.png" alt="" />
          <div className="title">
            My App Top Bar 2
          </div>          
        </div>
        <div className="titleBarBtns">
          <button id="minimizeBtn" className="topBtn minimizeBtn"></button>
          <button id="maxResBtn" className="topBtn maximizeBtn"></button>
          <button id="closeBtn" className="topBtn closeBtn"></button>
        </div>
      </div>
      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPages">
                <h1>I am App Component!!! Hello !</h1>
                <Home />
                <button className='btn btn-primary' onClick={() => {
                    electron.notificationApi.sendNotification('My custom notification!');
                }}>Notify</button>


                <button className='btn btn-primary' onClick={() => {
                    electron.notificationApi.newWindow('');
                }}>Yeni encere aç</button>

                <br/><br/><br/><br/>
                <button className='btn btn-primary' onClick={() => {
                    electron.notificationApi.quitApp();
                }}>Uygulamadan çık</button>
        </div>
      </div>
    </div>
    </>
  )
} 