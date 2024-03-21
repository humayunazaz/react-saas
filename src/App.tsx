import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgot-Password';
import ResetPassword from './pages/Reset-Password';
import CompanyProfilePage from './pages/Company-Profile';
import CompanyInformationPage from './pages/Company-Information';
import QuestionnairePage from './pages/Questionnaire';
import DocumentsPage from './pages/Documents';
import MyTeamPage from './pages/My-Team';
import MessagesPage from './pages/Messages';
import RootPage from './pages/Root';
import { tokenLoader } from './utils/auth';

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      loader: tokenLoader,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'company-profile', element: <CompanyProfilePage /> },
        { path: 'company-information', element: <CompanyInformationPage /> },
        { path: 'questionnaire', element: <QuestionnairePage /> },
        { path: 'Documents', element: <DocumentsPage /> },
        { path: 'my-team', element: <MyTeamPage /> },
        { path: 'messages', element: <MessagesPage /> },
      ],
    },
    { path: 'login', element: <Login /> },
    { path: 'forgot-password', element: <ForgotPassword /> },
    { path: 'reset-password', element: <ResetPassword /> },
  ]);
  return (
    <main>
      <RouterProvider router={BrowserRouter} />
    </main>
  );
}

export default App;
