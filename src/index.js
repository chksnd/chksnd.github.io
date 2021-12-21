import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'

import './index.css'

import Home from './home'
import Privacy from './privacy'
import Terms from './terms'
import Cookies from './cookies'
import OpenSource from './open-source'

import Logo from './assets/images/app-logo.png'

const NotFound = () => (
  <div>
    <section style={{ textAlign: 'center' }}>
      <iframe title='404' src='https://giphy.com/embed/xTiN0L7EW5trfOvEk0' width='100%' height='600px' frameBorder='0' allowFullScreen />
    </section>
  </div>
)

const App = () => (
  <div>
    <div className='header'>
      <a href='/'>
        <img src={Logo} alt='Logo' width='80' height='80' />
      </a>
    </div>
    <div className='content'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} index />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/open-source' element={<OpenSource />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
    <div className='footer'>
      <div className='social'>
        <a href="https://instagram.com/chksnd.app" target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram fa-lg' />
        </a>
        <a href="https://tiktok.com/@chksnd.app" target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-tiktok fa-lg' />
        </a>
        <a href="https://t.me/chksndapp" target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-telegram fa-lg' />
        </a>
        <a href="https://discord.gg/fCFkf6ZfPC" target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-discord fa-lg' />
        </a>
      </div>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/privacy'>Privacy</a>
        <a href='/terms'>Terms</a>
        <a href='/cookies'>Cookies</a>
      </div>
    </div>
    <div className='credits'>
      <a href='https://aimazh.com/' className='rainbow' target='_blank' rel='noopener noreferrer'>&lt;/&gt; by @aimazh</a>
    </div>
  </div>
)

ReactDOM.render((
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
