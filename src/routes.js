import Home from './pages/Home';
import Events from './pages/Events';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import Community from './pages/Community';

export const routes = [
  { path: '/', Component: Home },
  { path: '/events', Component: Events },
  { path: '/messages', Component: Messages },
  { path: '/profile', Component: Profile },
  { path: '/blog', Component: Blog },
  { path: '/login', Component: Login },
  { path: '/signup', Component: SignUp },
  { path: '/settings', Component: Settings },
  { path: '/community', Component: Community },
];