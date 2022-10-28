import {
  home,
  playlist,
  radio,
  videos,
  profile,
  logout,
} from './index';

export const navLinks = [
  {
    name: 'Home',
    to: '/',
    icon: home,
  },
  {
    name: 'My Collection',
    to: '/playlist',
    icon: playlist,
  },
  {
    name: 'Radio',
    to: '/radio',
    icon: radio,
  },
  {
    name: 'Music Videos',
    to: '/music-videos',
    icon: videos,
  },
];

const profileLinks = [
  {
    name: 'Profile;',
    to: '/profile',
    icon: profile,
  },
  {
    name: 'Logout',
    to: '/logout',
    icon: logout,
  },
];

export default profileLinks;
