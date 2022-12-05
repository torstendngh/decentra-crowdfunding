import "./Card.css"

function Card({ size, imgSrc, category, title, percentage, currentAmount, completedAmount, currency}) {

  return (
    <button className="Card">
      <img className="Image" src={imgSrc} alt={title} />
      <div className="Details">
        <p className="Category">{category}</p>
        <p className="Title">{title}</p>
        <div className="Flex"></div>
        <p className="Percentage">{percentage}% <p className="Amount">{currentAmount} of {completedAmount} {currency}</p></p>
      </div>
      <div className="ProgressBar" style={{width: `${percentage}%`}}></div>
    </button>
  );
}

export default Card;
