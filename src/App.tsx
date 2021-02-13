import React from 'react';
import './App.css';
import * as data from './mock.json';
import Form from './components/form/form';
import Header from './components/header';
import Aside from './components/aside/aside';
import InnerNav from './components/inner_navbar';
import ContentGridItem from './components/content-grid/content-grid';
import ans from './components/content-grid/content-grid-items/content-grid-item-1';
import ans2 from './components/content-grid/content-grid-items/content-grid-item-2';
import ans3 from './components/content-grid/content-grid-items/content-grid-item-3';

function App() {
  let word = data.todo;
  let word1 = data.inprogress
  let word2 = data.done;

  return (
    <div>
      <Header></Header>
      <div id="main-container">
        <Aside></Aside>
        <div className="container-element container-element-2">
          <InnerNav></InnerNav>
          <div className="content-grid">
            <ContentGridItem class="content-grid-item-1" text="To do" length={word.length} data={ans}></ContentGridItem>
            <ContentGridItem class="content-grid-item-2" text="In Progress" length={word1.length} data={ans2}></ContentGridItem>
            <ContentGridItem class="content-grid-item-3" text="Done" length={word2.length} data={ans3}></ContentGridItem>
          </div>
          <div className="form-container">
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;