import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Community from './pages/Community';
import EventDetail from './pages/EventDetail';
import Groups from './pages/Groups';
import Hookups from './pages/Hookups';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import Messaging from './pages/Messaging';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Badges from './pages/Badges';
import Leaderboard from './pages/Leaderboard';
import { IoHomeOutline, IoCalendarOutline, IoLocationOutline, IoChatbubbleEllipsesOutline, IoPersonOutline } from 'react-icons/io5';

export const routes = [
  { path: '/', Component: Home, label: 'Home', icon: <IoHomeOutline size={24} />, nav: true },
  { path: '/signup', Component: SignUp, nav: false },
  { path: '/login', Component: Login, nav: false },
  { path: '/community', Component: Community, label: 'Community', nav: false },
  { path: '/events', Component: EventDetail, label: 'Events', icon: <IoCalendarOutline size={24} />, nav: true },
  { path: '/groups', Component: Groups, nav: false },
  { path: '/hookups', Component: Hookups, nav: false },
  { path: '/create-post', Component: CreatePost, nav: false },
  { path: '/post/:id', Component: PostDetail, nav: false },
  { path: '/messages', Component: Messaging, label: 'Messages', icon: <IoChatbubbleEllipsesOutline size={24} />, nav: true },
  { path: '/profile', Component: Profile, label: 'Profile', icon: <IoPersonOutline size={24} />, nav: true },
  { path: '/settings', Component: Settings, nav: false },
  { path: '/badges', Component: Badges, nav: false },
  { path: '/leaderboard', Component: Leaderboard, nav: false },
  { path: '/locations', Component: Home, label: 'Locations', icon: <IoLocationOutline size={24} />, nav: true }, // Assuming locations is not yet implemented and redirects to home
];
