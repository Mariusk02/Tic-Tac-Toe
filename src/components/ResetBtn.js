import '../App.css'

export default function ResetBtn({resetBoard}){
    return(
        <button className="btn" onClick={resetBoard}>Resert</button>
    )
}