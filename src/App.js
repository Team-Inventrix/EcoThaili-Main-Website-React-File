import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar active_item='Our Story' />
    </Router>
    
  );
}

export default App;
