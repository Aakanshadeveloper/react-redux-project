import './App.css';
import { Provider } from 'react-redux';
import store from './store/Store'
import Datepicker from './pages/Datepicker';

function App() {
  return (
   <div>
   <Provider store={store}>
      <div>
        <Datepicker />
      </div>
    </Provider>
   </div>
  );
}

export default App;
