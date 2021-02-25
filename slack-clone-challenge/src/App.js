import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Chat from './component/Chat';
import Login from './component/Login';
import styled from 'styled-components';
import Header from './component/Header';
import SideBar from './component/SideBar';


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <SideBar />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
width:100%;
height: 100vh;

display:grid;
grid-template-rows: 38px auto;

`

const Main = styled.div`

display: grid;
grid-template-columns: 260px auto;


`


