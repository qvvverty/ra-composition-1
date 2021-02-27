import './App.css';
import Card from './components/Card';

const cardContent = {
  title: 'Sample card title',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  btnLink: 'https://google.com',
  btnText: 'Go somewhere'
};

function App() {
  return (
    <Card {...cardContent} >
      <img src="./logo192.png" className="card-img-top" alt="..." />
    </Card>
  );
}

export default App;
