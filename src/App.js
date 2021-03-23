import './App.css';

// import Header compoent
import Header from './Header';

// import Tinder component
import TinderCards from './TinderCards';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
