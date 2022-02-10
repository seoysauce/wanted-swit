export interface IUser {
  userId: string;
  userName: string;
  profileImage: string;
}

export interface IMessage {
  messageId: string;
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
}
