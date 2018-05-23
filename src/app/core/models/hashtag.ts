class Account {
  id: number;
  fullname: string;
  href: string;
}

export class Hashtag {
  account: Account;
  date: string;
  hashtags: Array<string>;
  text: string;
  likes: number;
  replies: number;
  retweets: number;
}
