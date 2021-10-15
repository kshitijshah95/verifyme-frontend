import { Layout } from 'antd';
import {} from 'react-router-dom';
import HomePage from './components/home';
import 'antd/dist/antd.css';
import NavigationBar from './components/pageHeader';
import './styles.css';

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Header className="page-header"><NavigationBar/></Header>
      <Content className="content-body">
        <HomePage/>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
