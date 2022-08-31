import { Route, Routes } from 'react-router-dom';
import SplitLayout from './SplitLayout';
import Login from './pages/login/login';
import Questions from './pages/questions/Questions';
import Signup from './pages/signup/Signup';
import Tags from './pages/tags/Tags';
import Users from './pages/users/Users';
import Ask from './pages/questions/Ask';
import Home from './pages/home/Home';
import QuestionDetail from './pages/questions/QuestionDetail';

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<SplitLayout />}>
        <Route index element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/questions/ask" element={<Ask />} />
      <Route path="/questions/:questionId" element={<QuestionDetail />} />
    </Routes>
  );
};

export default RoutesTree;
