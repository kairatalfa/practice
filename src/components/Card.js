import "./Card.css"

function Card(props) {
  let prevDate = props.date.getFullYear()

  let thisYear = new Date().getFullYear()

  let result;
  if (thisYear > prevDate) {
    result = thisYear - prevDate + ' year ago'
  }else{
    result = 'not found'
  }
  return <div>{result}</div>
}

export default Card;
