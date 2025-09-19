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
import NotFound from './pages/NotFound';
<<<<<<< HEAD
// Icons for navigation (mobile bottom nav)
import { FiHome, FiUsers, FiCalendar, FiMessageSquare, FiUser } from 'react-icons/fi';
=======
>>>>>>> bcbbecc (chore: clean root assets, add NotFound route, fix base paths; lint+build pass)

export const routes = [
  { path: '/', Component: Home, nav: true, label: 'Home', Icon: FiHome },
  { path: '/community', Component: Community, nav: true, label: 'Community', Icon: FiUsers },
  { path: '/events', Component: Events, nav: true, label: 'Events', Icon: FiCalendar },
  { path: '/messages', Component: Messages, nav: true, label: 'Messages', Icon: FiMessageSquare },
  { path: '/profile', Component: Profile, nav: true, label: 'Profile', Icon: FiUser },
  { path: '/blog', Component: Blog },
  { path: '/login', Component: Login },
  { path: '/signup', Component: SignUp },
  { path: '/settings', Component: Settings },
  { path: '/connections', Component: Connections },
  { path: '/groups', Component: Groups },
  { path: '/leaderboard', Component: Leaderboard },
  { path: '/create-post', Component: CreatePost },
  { path: '/post/:id', Component: PostDetail },
  { path: '/event/:id', Component: EventDetail },
  { path: '/badges', Component: Badges },
  { path: '*', Component: NotFound },
<<<<<<< HEAD
];
=======
];
>>>>>>> bcbbecc (chore: clean root assets, add NotFound route, fix base paths; lint+build pass)
