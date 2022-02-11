import { nanoid } from '@reduxjs/toolkit';

export const INITIAL_STATE = [
  {
    messageId: nanoid(),
    userId: 'cinlain',
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
    userId: 'dslnballl',
    userName: 'Seoysauce',
    profileImage: 'https://picsum.photos/id/58/200/300',
    content: '환영합니다!',
    date: '2022-02-10 16:31:48',
  },
  {
    messageId: nanoid(),
    userId: 'bslnballl',
    userName: '김재원',
    profileImage: 'https://picsum.photos/id/94/200/300',
    content: '메시지 오른쪽에 마우스를 올리시면',
    date: '2022-02-10 16:32:55',
  },
  {
    messageId: nanoid(),
    userId: 'iwuslnballl',
    userName: 'Nate Yeum',
    profileImage: 'https://picsum.photos/id/30/200/300',
    content: '답장을 달거나 메시지를 삭제할 수 있습니다!',
    date: '2022-02-10 16:33:01',
  },
];
