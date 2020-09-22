import React from 'react'
import ReactDOM from 'react-dom'

import './assets/css/index.css'
import appLogo from './assets/images/app-logo.png'
import appScreen from './assets/images/app-screen.png'
import appPromo from './assets/video/promo.webm'

// 2220 1,080
// 1280 720

import AppBadgeAndroid from './assets/images/app-badge-android.png'
import AppBadgeIOS from './assets/images/app-badge-ios.png'

const App = () => (
  <div className=''>
    <nav className='navbar is-dark is-transparent is-spaced'>
      <div className='container'>
        <div className='navbar-menu is-active'>
          <div className='navbar-end'>
            <a className='navbar-item' href='#legal'><span role='img' aria-label=''>📖</span>Legal</a>
            <div className='navbar-item'>
              <a className='button is-white is-rounded' href='#download'>Download</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div id='cover' />

    <div style={{ alignItems: 'center', textAlign: 'center', margin: 64 }}>
      <div className=''>
        <strong>ChkSnd</strong> is a tool to create<br />
        music <strong>videos</strong><br />
        with <strong>visual</strong> accompaniment.<br />
        <div className='is-size-1'><span role='img' aria-label=''>🔥</span></div>
      </div>
    </div>

    <div id='app-screen' style={{ marginBottom: 64 }}>
      <video loop={true} autoPlay={true} muted={true} poster={appScreen}>
        <source src={appPromo} type='video/webm' />
      </video>
    </div>

    <section id='download' className='hero is-light'>
      <div id='hero-body' style={{ padding: 64, textAlign: 'center' }}>
        <img src={appLogo} alt='ChkSnd App Logo' width={100} style={{ marginBottom: 32 }} />
        <div className='title'>Get It Now</div>
        <div className='subtitle is-6'>ChkSnd is currently available only for Android platform.</div>
        <div className='badges'>
          <div className='badge android'>
            <a href='https://play.google.com/store/apps/details?id=co.chksndapp'>
              <img alt='Get it on Google Play' src={AppBadgeAndroid} />
            </a>
          </div>
          <div className='badge ios'>
            <a href='https://apps.apple.com/app/id1528056717'>
              <img alt='Get it on App Store' src={AppBadgeIOS} />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id='legal' className='hero'>
      <div className='container'>
        <div id='hero-body' style={{ padding: 64 }}>
          <div className='title is-4'>Privacy & Terms Of Use</div>
          <p>ChkSnd does not collect any sensitive information about your personal information and/or your device. ChkSnd does not contain any illegal and/or obscene content.</p>
          <br />
          <p>All costs incurred with the use of ChkSnd are borne by you.</p>
          <br />
          <p>By using ChkSnd, you agree to these terms and conditions.</p>
        </div>
      </div>
    </section>

    <section className='hero is-dark'>
      <div id='hero-body' style={{ padding: 64, textAlign: 'center' }}>
        <small className='is-size-'>
          Made with &heart; by <strong><a style={{ color: 'white' }} href='https://aimazh.github.io/' target='_blank' rel='noopener noreferrer'>@aimazh</a></strong>
          <br />
          &copy; 2020 ChkSnd
        </small>
      </div>
    </section>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
