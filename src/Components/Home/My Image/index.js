import './index.scss'
import ProfilePhoto from '../../../assets/images/my image.jpg'

function Logo() {
  return (
    <div className="logo-container">
      <img src={ProfilePhoto} alt="My Photo" className="ProfilePhoto" />
    </div>
  )
}

export default Logo
