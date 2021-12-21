import React from 'react'

import Android from './assets/images/app-badge-android.png'
import iOS from './assets/images/app-badge-ios.png'
import Screen from './assets/images/app-screen.png'
import Promo from './assets/video/promo.webm'


const Home = () => (
  <div className='home' style={{ textAlign: 'center' }}>
    <section>
      <video loop autoPlay poster={Screen} style={{ height: 600 }}>
        <source src={Promo} type='video/webm' />
      </video>
    </section>
    <br />
    <section>
      <h1>Download</h1>
      <div className='app-badges' id='download'>
        <a href='https://apps.apple.com/app/id1528056717' target='_blank' rel='noopener noreferrer'>
          <img className='ios' src={iOS} alt='iOS' />
        </a>
        <a href='https://play.google.com/store/apps/details?id=co.chksndapp' target='_blank' rel='noopener noreferrer'>
          <img className='android' src={Android} alt='Android' />
        </a>
      </div>
    </section>
  </div>
)

export default Home
