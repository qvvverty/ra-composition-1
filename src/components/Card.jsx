export default function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.btnLink} className="btn btn-primary">{props.btnText}</a>
      </div>
    </div>
  )
}
