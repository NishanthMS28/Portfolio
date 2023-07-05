import Loader from 'react-loaders'
import './index.scss'
import { gsap } from 'gsap'
import AnimatedLetters from '../Animated letters'
import { useEffect, useRef, useState } from 'react'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const LetterAnimate = () => {
    return setTimeout(() => {
      setLetterClass(`text-animate-hover`)
    }, 3000)
  }

  useEffect(() => {
    LetterAnimate()
  }, [])

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_guewxq7',
        'template_c9b9b16',
        refForm.current,
        '-atEGe3Y3TDQkhWFC'
      )
      .then(
        () => {
          alert('Message succesfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  useEffect(() => {
    gsap.to('.contactDesign', {
      duration: 1.4,
      y: '880px',
      ease: 'bounce',
      delay: 1,
    })
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am intrested in freelance opportunities - especially ambitious on
            large projects. However, if you have other request or question,
            don't hestate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    placeholder="Message"
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nishanth M S,
          <br />
          India,
          <br />
          NH17B, Zuarinagar, 403726,
          <br />
          Goa
          <br />
          <span>nishanthms28@gmail.com</span>
        </div>
        <div className="contactDesign">
          LET'S WORK <br /> TOGETHER!
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
