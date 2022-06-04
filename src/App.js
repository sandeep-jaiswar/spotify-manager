import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { setDeviceDetails } from './redux/actions/config';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDeviceDetails({
      os: "IOS"
    }))
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
