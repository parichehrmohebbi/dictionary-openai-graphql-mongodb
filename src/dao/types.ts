export type Maybe<T> = T | null;

export type Query = {
  allWords: Word[];
  word?: Word | null;
};

export type Word = {
  _id: String;
  title: String;
  author: String;
  definition: String;
  relatedLinks?: Maybe<Link[]>;
  relatedTopics?: Maybe<String[]>;
};

export type Link = {
  title: String;
  url: String;
};
