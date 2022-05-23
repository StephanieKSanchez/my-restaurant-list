
import './App.css';
import {  Layout } from 'antd'
import RestaurantList from './components/RestaurantList';
import Menubar from './components/Menubar';


const { Header, Content } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header>
        <Menubar />
      </Header>
      <Content>
        <RestaurantList />
      </Content>
        
      </Layout>
  );
}

export default App;
