import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import HomePage from './pages/public/HomePage';
import QuestionsPagePrivate from './pages/private/QuestionsPagePrivate';
import OneQuestionPagePrivate from './pages/private/OneQuestionPagePrivate';
import OneQuestionPagePublic from './pages/public/OneQuestionPagePublic';
import CreateQuestion from './pages/private/CreateQuestion';
import MyQuestions from './pages/private/MyQuestions';
import Logout from './pages/private/Logout';
import NotFound from './components/NotFound';
import Login from './pages/public/Login';
import Profile from './pages/private/Profile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="Question/:id" element={<OneQuestionPagePublic />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/private" element={<PrivateLayout />}>
            <Route path="QuestionsPage" element={<QuestionsPagePrivate />} />
            <Route path="question/:id" element={<OneQuestionPagePrivate />} />
            <Route path="CreateQuestion" element={<CreateQuestion />} />
            <Route path="MyQuestions" element={<MyQuestions />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="/private" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
