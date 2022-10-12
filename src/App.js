import "./App.css";
import Card from "./components/Card";
const date = [
  {
    title: "Pen",
    price: 20,
    color: "blue",
    date: new Date(2002, 7, 5),
  },
  {
    title: "Paper",
    price: 20,
    color: "blue",
    date: new Date(2020, 3, 14),
  },
  {
    title: "Apple",
    price: 20,
    color: "blue",
    date: new Date(2021, 7, 24),
  },
];
function App() {
  return (
    <div className="App">
    {date.map((el) => {
      return (
        <div>
          <h2>{el.title}</h2>
          <p>{el.color}</p>
          <Card date={el.date}/>
        </div>
      )
    })}
    </div>
  );
}

export default App;
