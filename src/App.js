
import './App.css';
import React, {useEffect, useState } from 'react';
import Goals from './components/goals.component'
import LoadingComponent from './components/loading.component'
// import { Divider } from '@material-ui/core';
import axiosInstance from './axios';


function App() {
  const Loading = LoadingComponent(Goals);
  const [appState, setAppState] = useState({
    loading:false,
    goals: null,
  });
 

  axiosInstance.get('/goals')
  .then((response) => console.log(response.data))
  

  useEffect(() => {
    setAppState({loading: true});

    
  //   const apiUrl = 'http://127.0.0.1:8000/api/goals';
  //   fetch(apiUrl)
  //     .then((data) => data.json())
  //     .then((goals) => {
  //       setAppState({ loading:false, goals: goals });
  //     });
  // },[setAppState]);
    axiosInstance.get('/goals')
      .then((response) => response.data)
      .then((goals) => {
        console.log(goals, "GOALS")
        setAppState({ loading:false, goals: goals });
      });
    },[setAppState]);
  return (
    <div className="App">
      <h1>Goals</h1>
      <Loading isLoading={appState.loading} goals={appState.goals}/>

    </div>
  )
  
};

// class ConnectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api/goals/1';
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   }
//   render() {
//     return <div> Example Connection </div>
//   }
// }
// export default ConnectionExample;
export default App;
