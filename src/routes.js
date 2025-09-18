import Home from './pages/Home';
import Events from './pages/Events';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import Community from './pages/Community';
import Connections from './pages/Connections';
import Groups from './pages/Groups';
import Leaderboard from './pages/Leaderboard';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import EventDetail from './pages/EventDetail';
import Badges from './pages/Badges';

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
  { path: '/connections', Component: Connections },
  { path: '/groups', Component: Groups },
  { path: '/leaderboard', Component: Leaderboard },
  { path: '/create-post', Component: CreatePost },
  { path: '/post/:id', Component: PostDetail },
  { path: '/event/:id', Component: EventDetail },
  { path: '/badges', Component: Badges },
];