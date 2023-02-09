import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const contentfulSchema = {
  [`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`]:
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
      }
    }
};

const tsPrepend = `// @ts-ignore`;

const config: CodegenConfig = {
  overwrite: true,
  config: {
    avoidOptionals: true
  },
  generates: {
    'src/graphql/contentful/generated/types.ts': {
      documents: 'src/graphql/contentful/operations/**/*.gql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node',
        {
          add: {
            content: tsPrepend
          }
        }
      ],
      schema: contentfulSchema
    },
    'src/graphql/contentful/generated/schema.graphql': {
      plugins: [
        'schema-ast',
        {
          add: {
            content:
              'directive @api(name: String) on QUERY | MUTATION | FRAGMENT_DEFINITION'
          }
        }
      ],
      schema: contentfulSchema
    }
  }
};
export default config;
