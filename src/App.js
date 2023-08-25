import './App.css';

import Header from './Components/Header';
import Map from './Components/WeatherApp/Map';
import UserList from './Components/UserApp/UserList';
import TodoList from './Components/TodoApp/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/userlist" element={<UserList />} />
          <Route path="/map" element={<Map />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
