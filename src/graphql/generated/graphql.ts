/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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

export type Link = {
  __typename?: "Link";
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  words?: Maybe<Array<Maybe<Word>>>;
  wordsByTitle?: Maybe<Array<Maybe<Word>>>;
};

export type QueryWordsByTitleArgs = {
  searchedText?: InputMaybe<Scalars["String"]["input"]>;
};

export type Word = {
  __typename?: "Word";
  _id?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  definition?: Maybe<Scalars["String"]["output"]>;
  relatedLinks?: Maybe<Array<Maybe<Link>>>;
  relatedTopics?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type WordsByTitleQueryVariables = Exact<{
  searchedText?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type WordsByTitleQuery = {
  __typename?: "Query";
  wordsByTitle?: Array<{
    __typename?: "Word";
    title?: string | null;
    relatedTopics?: Array<string | null> | null;
    definition?: string | null;
    author?: string | null;
    _id?: string | null;
    relatedLinks?: Array<{
      __typename?: "Link";
      url?: string | null;
      title?: string | null;
    } | null> | null;
  } | null> | null;
};

export const WordsByTitleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "WordsByTitle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "searchedText" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "wordsByTitle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "searchedText" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "searchedText" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relatedTopics" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relatedLinks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "definition" } },
                { kind: "Field", name: { kind: "Name", value: "author" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WordsByTitleQuery, WordsByTitleQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Link = {
  __typename?: "Link";
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  words?: Maybe<Array<Maybe<Word>>>;
  wordsByTitle?: Maybe<Array<Maybe<Word>>>;
};

export type QueryWordsByTitleArgs = {
  searchedText?: InputMaybe<Scalars["String"]["input"]>;
};

export type Word = {
  __typename?: "Word";
  _id?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  definition?: Maybe<Scalars["String"]["output"]>;
  relatedLinks?: Maybe<Array<Maybe<Link>>>;
  relatedTopics?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};
