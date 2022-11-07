import '../CSS/Counter.css'

export default function Counter({score, xPlaying}){
    const {xScore, oScore} = score
    return(
        <div className="counter-box">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}