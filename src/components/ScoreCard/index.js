import './index.css'

const ScoreCard = props => {
  const {score, clickPlayAgain} = props
  const onClickPlayAgain = () => {
    clickPlayAgain()
  }
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-text">YOUR SCORE</p>
      <h1 className="score-text">{score}</h1>
      <button
        className="play-again-btn"
        type="button"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="play-again-img"
        />{' '}
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
