import React from 'react';
import './App.css';
import * as data from './mock.json';
import Form from './components/form/form';
import Header from './components/header';
import Aside from './components/aside/aside';
import InnerNav from './components/inner_navbar';

function App() {
  let word = data.todo;
  let word1 = data.inprogress
  let word2 = data.done;

  const ans = word.map((curElement: any, index: any) => {
    return (
      <div className="card box-shadow" key={index}>
        <div className="card-inner-data">
          <div className="py-2"> ID: {curElement.id} </div>
          <div className="py-2 primary-light">{curElement.date} </div>
        </div>
        <h3>{curElement.heading}</h3>
        <p className="primary-light"> {curElement.p}</p>
        <div className="card-inner-data">
          <div>
            <p>Assignee</p>
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="high-priority">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
  });


  const ans2 = word1.map((curElement: any, index: any) => {
    return (
      <div className="card box-shadow" key = {index}>
        <div className="card-inner-data">
          <div className="py-2"> ID: {curElement.id} </div>
          <div className="py-2 primary-light">{curElement.date} </div>
        </div>
        <h3>{curElement.heading}</h3>
        <p className="primary-light"> {curElement.p}</p>
        <div className="card-inner-data">
          <div>
            <p>Assignee</p>
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="in-progress">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
  });

  const ans3 = word2.map((curElement: any, index: any) => {
    return (
      <div className="card box-shadow" key = {index}>
        <div className="card-inner-data">
          <div className="py-2"> ID: {curElement.id} </div>
          <div className="py-2 primary-light">{curElement.date} </div>
        </div>
        <h3>{curElement.heading}</h3>
        <p className="primary-light"> {curElement.p}</p>
        <div className="card-inner-data">
          <div>
            <p>Assignee</p>
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="done">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
  });


  return (
    <div>
      <Header></Header>
      <div id="main-container">
        <Aside></Aside>
        <div className="container-element container-element-2">
          <InnerNav></InnerNav>
          <div className="content-grid">
            <div className="content-grid-item-1">
              <h2>To do {word.length}</h2>
              {ans}
            </div>
            <div className="content-grid-item-2">
              <h2>In Progress {word1.length}</h2>
              {ans2}
            </div>
            <div className="content-grid-item-3">
              <h2> Done {word2.length}</h2>
              {ans3}
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
