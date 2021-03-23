import './App.css';

// import Header compoent
import Header from './Header';

// import Tinder component
import TinderCards from './TinderCards';

// import Buttons component
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
