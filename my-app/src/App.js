import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a jerk!" />
    </div>
  );
}

export default App;
