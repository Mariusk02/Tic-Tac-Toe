import FirstBlock from "./firstBlock";

export default function Board({board,onClick}) {
  return (
    <div className="first-box">
      {board.map((value, idx)=>{
       return <FirstBlock value={value} onClick={()=> value === null && onClick(idx)}/>
      })}
    
    </div>
  );
}
