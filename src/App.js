// import logo from './logo.svg';
import './App.css';

import AllRoutes from './Routes/AllRoutes';

function App() {
  // console.log(process.env.REACT_APP_MY_ENVIRONMENT_API_KEY);
  console.log("hi from app.js")
  return (
    <div className="App">
     {/* <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
     <AllRoutes />
    </div>
  );
}

export default App;
