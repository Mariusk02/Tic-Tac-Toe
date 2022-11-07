import "../CSS/FirstBlock.css";


export default function FirstBlock({value, onClick}) {
    const style = value === "X" ? 'box x' : 'box o'
  return (
    <button className={style} onClick={onClick}>{value}</button>
  
  );
}
