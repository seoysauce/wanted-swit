import { ali, gongyoo, ilnam, saebyuk, sangwoo, squidteam } from 'assets';

export const CHAT_ROOM_LIST = [
  {
    title: '조상우, 오일남, 알리, 강새벽',
    imageUrl: squidteam,
    unread: 3,
    lastMessage: '그만해 나 너무 무서워',
    lastTimestamp: '08:05',
    status: 'online',
  },
  {
    title: '조상우',
    imageUrl: sangwoo,
    unread: 1,
    lastMessage: '기훈이 형!!!',
    lastTimestamp: '07:21',
    status: 'online',
  },
  {
    title: '오일남',
    imageUrl: ilnam,
    unread: 0,
    lastMessage: '우린 깐부잖어',
    lastTimestamp: '22-02-11',
    status: 'away',
  },
  {
    title: '외부 진행 요원',
    imageUrl: gongyoo,
    unread: 0,
    lastMessage: '선생님, 저랑 게임 하나 하시겠습니까?',
    lastTimestamp: '22-02-11',
    status: 'offline',
  },
  {
    title: '강새벽',
    imageUrl: saebyuk,
    unread: 0,
    lastMessage: '사람은 믿고 싶어서 믿는 게 아니야',
    lastTimestamp: '22-02-11',
    status: 'away',
  },
  {
    title: '알리',
    imageUrl: ali,
    unread: 0,
    lastMessage: '살아서 다행입니다',
    lastTimestamp: '22-02-10',
    status: 'offline',
  },
];
