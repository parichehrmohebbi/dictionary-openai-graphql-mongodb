export enum PromptType {
  IS_RELATED_PROMPT = "give my answer with yes or no. do not write any explanation or comment. Just write yes or no.  is {0} related to web development or computer science or software technologies?",
  DEFINITION_PROMPT = "What is {0}? give me an extensive definition. do not write any explanations or comment. just the definition.I need verbosity to be high ",
  RELATED_LINKS_PROMPT = "give me the list of top 10 related links to {0} in JSON . do not write any explanations or comment. just the list including title and link. ",
  RELATED_TOPICS_PROMPT = "give me the list of top 10 related topics to {0} in JSON . do not write any explanations or comment. just the list including title .",
  WORD_OBJECT_PROMPT = "I need a json object about {0} including these properties: definition:a detailed comprehensive  definition of {0}, relatedLinks: maximum 10 related links array including title and url , relatedTopics: top 10 related topics as an string array . do not write any explanations or comment. just return the object in json.",
}
