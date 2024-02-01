import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';


const App = () => {
  return (
    <div id="dashboard">
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='dashboard' element={<Dashboard/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
)
};

export default App;
