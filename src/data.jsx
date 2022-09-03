import React from 'react';
import myLogo from '/logo.png';

import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
  } from 'react-icons/fa';

export const logo  = myLogo;

export const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: <FaHome />,
    },
    {
      id: 2,
      url: '/team',
      text: 'team',
      icon: <FaUserFriends />,
    },
    {
      id: 3,
      url: '/projects',
      text: 'projects',
      icon: <FaFolderOpen />,
    },
    {
      id: 4,
      url: '/calendar',
      text: 'calendar',
      icon: <FaCalendarAlt />,
    },
    {
      id: 5,
      url: '/documents',
      text: 'documents',
      icon: <FaWpforms />,
    },
  ];
  
  export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: <FaSketch />,
    },
  ];
  

export  const data = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
  ];
  
  