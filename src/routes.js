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
import Blog from './pages/Blog';
import { IoHomeOutline, IoCalendarOutline, IoLocationOutline, IoChatbubbleEllipsesOutline, IoPersonOutline, IoNewspaperOutline } from 'react-icons/io5';

/**
 * @typedef {object} Route
 * @property {string} path - The URL path for the route.
 * @property {React.ComponentType} Component - The React component to render for the route.
 * @property {string} [label] - The label for the route, used in navigation.
 * @property {React.ComponentType} [Icon] - The icon component for the route, used in navigation.
 * @property {boolean} nav - Whether to include the route in the main navigation.
 */

/**
 * An array of route objects that define the application's pages and navigation structure.
 *
 * @type {Route[]}
 */
export const routes = [
  { path: '/', Component: Home, label: 'Home', Icon: IoHomeOutline, nav: true },
  { path: '/signup', Component: SignUp, nav: false },
  { path: '/login', Component: Login, nav: false },
  { path: '/community', Component: Community, label: 'Community', nav: false },
  { path: '/events', Component: EventDetail, label: 'Events', Icon: IoCalendarOutline, nav: true },
  { path: '/groups', Component: Groups, nav: false },
  { path: '/hookups', Component: Hookups, nav: false },
  { path: '/create-post', Component: CreatePost, nav: false },
  { path: '/post/:id', Component: PostDetail, nav: false },
  { path: '/messages', Component: Messaging, label: 'Messages', Icon: IoChatbubbleEllipsesOutline, nav: true },
  { path: '/profile', Component: Profile, label: 'Profile', Icon: IoPersonOutline, nav: true },
  { path: '/settings', Component: Settings, nav: false },
  { path: '/badges', Component: Badges, nav: false },
  { path: '/leaderboard', Component: Leaderboard, nav: false },
  { path: '/blog', Component: Blog, label: 'Blog', Icon: IoNewspaperOutline, nav: true },
];
