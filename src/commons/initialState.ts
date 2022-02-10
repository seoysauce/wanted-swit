import { nanoid } from '@reduxjs/toolkit';

export const INITIAL_STATE = [
  {
    messageId: nanoid(),
    userId: '1',
    userName: 'Nate Yeum',
    profileImage: 'https://',
    content: '안녕하세요',
    date: '2022-02-10 16:30:30',
  },
  {
    messageId: nanoid(),
    userId: 'agnobinqn',
    userName: '김재원',
    profileImage: 'https://',
    content: '티라노 팀입니다!',
    date: '2022-02-10 16:30:32',
  },
  {
    messageId: nanoid(),
    userId: 'aslnballl',
    userName: 'Seoysauce',
    profileImage: 'https://',
    content: '환영합니다!',
    date: '2022-02-10 16:30:32',
  },
];
