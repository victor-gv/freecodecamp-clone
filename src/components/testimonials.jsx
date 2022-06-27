import '../stylesheets/testimony.css';

export function Testimony(props){
  return (
    <div className="testimony-container">
      <img
        className='testimony-container__img'
        src={require(`../images/${props.image}.png`)}
        alt='First testimony person' />

     <div className="testimony-container__text">
        <p className='testimony-name'><strong>{props.name}</strong> in {props.country}</p>
        <p className='testimony-job'>{props.job} at <strong>{props.company}</strong></p>
        <p className='testimony-text'>"{props.testimony}"</p>
      </div>
    </div>
    
  )
}
