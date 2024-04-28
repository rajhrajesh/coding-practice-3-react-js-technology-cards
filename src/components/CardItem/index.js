import './index.css'
const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
            <img className="card-img" alt={title} src={imgUrl} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
