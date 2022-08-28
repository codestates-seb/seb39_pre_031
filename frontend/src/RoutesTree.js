import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Questions from './pages/questions/Questions';
import Signup from './pages/signup/Signup';
import Tags from './pages/tags/Tags';
import Users from './pages/users/Users';
import Ask from './pages/questions/Ask';

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/questions" element={<Questions />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/questions/ask" element={<Ask />} />
    </Routes>
  );
};

export default RoutesTree;
