import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card
        style={{ width: '18rem' }}
        imgSrc="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
      >
        <h5 className="card-title">Cats</h5>
        <p>
          There are over 500 million domestic cats in the world. Cats and humans
          have been associated for nearly 10000 years. Cats are one of, if not
          the most, popular pet in the world
        </p>
        <div className="btn btn-primary">Have a look at other cats</div>
      </Card>
      <Card style={{ width: '18rem' }}>
        <h5 className="card-title">There are two kinds of people</h5>
        <ul>
          <li>Lefties can hardly cut a sheet with standard scissors</li>
          <li>Apes and dogs have a preferred paw to lead with</li>
          <li>
            Left-handed childs who are forced to write by right hand might have
            got mental health problems
          </li>
        </ul>
        <div className="btn btn-primary">
          More facts about left-handed and right-handed
        </div>
      </Card>
    </div>
  );
}

export default App;
