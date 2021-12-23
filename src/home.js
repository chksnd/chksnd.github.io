import React from 'react'

import Android from './assets/images/app-badge-android.png'
import iOS from './assets/images/app-badge-ios.png'
import Screen from './assets/images/app-screen.png'
import Promo from './assets/video/promo.webm'
import ScreeniOS from './assets/images/app-screen-ios.jpeg'
import PromoiOS from './assets/video/promo-ios.webm'

const Home = () => {
  const [os, setOS] = React.useState(0)

  return (
    <div className='home' style={{ textAlign: 'center' }}>
      <section>
        <div className='os-toggle'>
          <a href='/' className={os === 0 ? 'active' : ''} onClick={e => {
            e.preventDefault()
            setOS(0)
          }}>iOS</a>
          <a href='/' className={os === 1 ? 'active' : ''} onClick={e => {
            e.preventDefault()
            setOS(1)
          }}>Android</a>
        </div>
        {os === 0 && (
          <video loop autoPlay poster={ScreeniOS} style={{ width: '100%', maxWidth: 300, borderRadius: 8 }}>
            <source src={PromoiOS} type='video/webm' />
          </video>
        )}
        {os === 1 && (
          <video loop autoPlay poster={Screen} style={{ width: '100%', maxWidth: 300, borderRadius: 8 }}>
            <source src={Promo} type='video/webm' />
          </video>
        )}
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
      <br />
      <section>
        <h1>Support</h1>
        <p>Thank you so much for thinking about supporting this project. It would not be possible without you and your continued support.</p>
        <div>
          <a className='bmac' href='https://www.buymeacoffee.com/aimazh' target='_blank' rel='noopener noreferrer'>
            <span />
          </a>
        </div>
        <div>
          <a className='patreon' href='https://www.patreon.com/bePatron?u=66639963' target='_blank' rel='noopener noreferrer'>
            <span />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
