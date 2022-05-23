
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {  Layout } from 'antd'
import RestaurantList from './components/RestaurantList';
import Menubar from './components/Menubar';


const { Header, Content } = Layout;

function App() {
  return (
  <BrowserRouter>
    <Layout className='layout'>
      <Header>
        <Menubar />
      </Header>
      <Content>
        <Routes>
          <Route path='/random' element={<h1>Random</h1>} />
          <Route path='/add' element={<h1>Add Restaurant</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/' element={<RestaurantList />} />
        </Routes>
      </Content>
        
      </Layout>
    </BrowserRouter>
  );
}

export default App;
