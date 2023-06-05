import { GraphQLResolveInfo } from "graphql";
import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UpdateWordInput: UpdateWordInput;
  Word: ResolverTypeWrapper<Word>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  UpdateWordInput: UpdateWordInput;
  Word: Word;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createWord?: Resolver<
    ResolversTypes["Word"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateWordArgs, "author" | "description" | "title">
  >;
  updateWord?: Resolver<
    Maybe<ResolversTypes["Word"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWordArgs, "data" | "wordId">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  allWords?: Resolver<Array<ResolversTypes["Word"]>, ParentType, ContextType>;
  word?: Resolver<
    Maybe<ResolversTypes["Word"]>,
    ParentType,
    ContextType,
    RequireFields<QueryWordArgs, "wordId">
  >;
};

export type WordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Word"] = ResolversParentTypes["Word"]
> = {
  author?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  relatedLinks?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  relatedTopics?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  wordId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Word?: WordResolvers<ContextType>;
};

export type WordQueryVariables = Exact<{
  wordId: Scalars["ID"]["input"];
}>;

export type WordQuery = {
  word?: {
    title: string;
    description: string;
    author: string;
    relatedLinks?: Array<string> | null;
    relatedTopics?: Array<string> | null;
  } | null;
};

export type IndexQueryVariables = Exact<{ [key: string]: never }>;

export type IndexQuery = { allWords: Array<{ wordId: string }> };

export const WordDocument = gql`
  query word($wordId: ID!) {
    word(wordId: $wordId) {
      title
      description
      author
      relatedLinks
      relatedTopics
    }
  }
`;

/**
 * __useWordQuery__
 *
 * To run a query within a React component, call `useWordQuery` and pass it any options that fit your needs.
 * When your component renders, `useWordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordQuery({
 *   variables: {
 *      wordId: // value for 'wordId'
 *   },
 * });
 */
export function useWordQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<WordQuery, WordQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<WordQuery, WordQueryVariables>(
    WordDocument,
    options
  );
}
export function useWordLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    WordQuery,
    WordQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<WordQuery, WordQueryVariables>(
    WordDocument,
    options
  );
}
export type WordQueryHookResult = ReturnType<typeof useWordQuery>;
export type WordLazyQueryHookResult = ReturnType<typeof useWordLazyQuery>;
export type WordQueryResult = ApolloReactCommon.QueryResult<
  WordQuery,
  WordQueryVariables
>;
export const IndexDocument = gql`
  query Index {
    allWords {
      wordId
    }
  }
`;

/**
 * __useIndexQuery__
 *
 * To run a query within a React component, call `useIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    options
  );
}
export function useIndexLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    options
  );
}
export type IndexQueryHookResult = ReturnType<typeof useIndexQuery>;
export type IndexLazyQueryHookResult = ReturnType<typeof useIndexLazyQuery>;
export type IndexQueryResult = ApolloReactCommon.QueryResult<
  IndexQuery,
  IndexQueryVariables
>;
