import { nanoid } from '@reduxjs/toolkit';

export const INITIAL_STATE = [
  {
    messageId: nanoid(),
    userId: '1',
    userName: 'Nate Yeum',
    profileImage: 'https://picsum.photos/id/30/200/300',
    content: '안녕하세요',
    date: '2022-02-10 16:30:30',
  },
  {
    messageId: nanoid(),
    userId: 'agnobinqn',
    userName: '김재원',
    profileImage: 'https://picsum.photos/id/94/200/300',
    content: '티라노 팀입니다!',
    date: '2022-02-10 16:30:32',
  },
  {
    messageId: nanoid(),
    userId: 'aslnballl',
    userName: 'Seoysauce',
    profileImage: 'https://picsum.photos/id/58/200/300',
    content: '환영합니다!',
    date: '2022-02-10 16:30:32',
  },
];
