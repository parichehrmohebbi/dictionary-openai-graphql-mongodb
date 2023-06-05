export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  createWord: Word;
  updateWord?: Maybe<Word>;
};

export type MutationCreateWordArgs = {
  author: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  relatedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTopics?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title: Scalars["String"]["input"];
};

export type MutationUpdateWordArgs = {
  data: UpdateWordInput;
  wordId: Scalars["ID"]["input"];
};

export type Query = {
  allWords: Array<Word>;
  word?: Maybe<Word>;
};

export type QueryWordArgs = {
  wordId: Scalars["ID"]["input"];
};

export type UpdateWordInput = {
  author: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  relatedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTopics?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title: Scalars["String"]["input"];
};

export type Word = {
  author: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  relatedLinks?: Maybe<Array<Scalars["String"]["output"]>>;
  relatedTopics?: Maybe<Array<Scalars["String"]["output"]>>;
  title: Scalars["String"]["output"];
  wordId: Scalars["ID"]["output"];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

import { ObjectId } from "mongodb";
export type WordDbObject = {
  author: string;
  description: string;
  relatedLinks?: Maybe<Array<string>>;
  relatedTopics?: Maybe<Array<string>>;
  title: string;
  _id: ObjectId;
};
