import React, { useState } from 'react';
import { applyMiddleware, createStore } from 'redux';
import reducer from './Reducer';
import { fetchUserData, showError } from './Action';
import axios from 'axios';
import '../App.css'
import {thunk} from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
const fetchData = () => () => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => store.dispatch(fetchUserData(res.data)))
    .catch(error => store.dispatch(showError(error.message)));
};
export default function Counter() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const toggleDataVisibility = () => {
    setShowData(!showData);
  };
  const unsubscribe = store.subscribe(() => {
    setData(store.getState().users);
  });

  return (
    <div>
      {showData && (
        <div>
          {data.map(item => (
            <div key={item.id}>
              <div className='name-mail'>
                <h3>{item.name}</h3>
                <h4>{item.email}</h4>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
      <button  style={{fontSize: '28px'}} onClick={() => {store.dispatch(fetchData());toggleDataVisibility();}}>
        {showData ? 'Hide Data' : 'Fetch Data'}
      </button>
    </div>
  );
}