import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="image-logo"
      />
      <div className="nav-left-container">
        <p className="score-display">
          Score: <span className="display-num">{score}</span>
        </p>
        <ul className="time-container">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
          </li>
          <li>
            <p className="display-num">{time} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
