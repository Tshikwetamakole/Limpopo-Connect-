import Home from './pages/Home';
import Events from './pages/Events';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Blog from './pages/Blog';

export const routes = [
  { path: '/', Component: Home },
  { path: '/events', Component: Events },
  { path: '/messages', Component: Messages },
  { path: '/profile', Component: Profile },
  { path: '/blog', Component: Blog },
];