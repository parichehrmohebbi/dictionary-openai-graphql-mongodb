import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql", //'./src/graphql/schema.graphql',
  documents: ["./components/**/*.ts*", "./pages/**/*.ts*"],
  hooks: {
    afterAllFileWrite: "prettier --write",
  },
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: ["typescript"],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        dbTypeSuffix: "DBType",
        dbInterfaceSuffix: "DBInterface",
        objectIdType: "string",
        namingConvention: "change-case-all#pascalCase",
      },
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
};

export default config;
