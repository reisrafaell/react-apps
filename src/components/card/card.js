import './card.scss'

const Card =(props)=>{
    return (
      <div className="card">
          <div>{props.children}</div>
          
      </div>
    );
  }

  export default Card

