import './index.scss'
import AnimatedLetters from '../Animated letters'
import { useState, useEffect } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const LetterAnimate = () => {
    return setTimeout(() => {
      setLetterClass(`text-animate-hover`)
    }, 3000)
  }

  useEffect(() => {
    LetterAnimate()
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am currently pursuing a Computer Science degree (BE) at Bits
            Pilani. I have a strong academic background, having cleared the
            Joint Entrance Examination (JEE) with an impressive 98.5 percentile.
          </p>
          <p>
            I am a highly motivated front-end developer seeking opportunities in
            an established IT company. I am also eager to take on freelance
            projects, where I can work with the latest technologies and engage
            in diverse and challenging projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I were to describe myself in one sentence, I would say that I am
            a devoted child to my parents, a passionate cricket fan, a stock
            market enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="Green" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
