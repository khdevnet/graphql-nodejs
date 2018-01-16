# Warehouse GraphQL &nbsp;

Boilerplate and tooling for authoring **data API** backends with **[Node.js][node]** and
**[GraphQL][gql]**. It is best suited for developing a **GraphQL API** endpoint as a standalone
(micro)service, backing up web front-ends and/or mobile apps.

## Tech Stack

* [Docker][docker], [Node.js][node], [Yarn][yarn], [TypeScript][typescript] — core platform and dev tools
* [Express][express], [Passport.js][passport], [session][session], [cors][cors] etc. — common HTTP-server features
* [GraphQL.js][gqljs], [GraphQL.js Relay][gqlrelay], [DataLoader][loader], [validator][validator] — [GraphQL][gql] schema and API endpoint
* [Nodemailer][mailer], [Handlebars][hbs], [Juice][juice] — transactional email and email templates /w layout support

## Directory Layout

```bash
.
├── /dist/                      # The compiled output (via TypeScript)
├── /src/                       # Node.js application source files
│   ├── /schema/                # GraphQL schema type definitions
│   ├── /server.ts              # Node.js server (entry point)
├── /types/                       # TypeScript type definitions
├── package.json                # List of project dependencies
```


## Prerequisites

* [VS Code][code] editor (preferred) + [Project Snippets][vcsnippets],
  [EditorConfig][vceditconfig], TSLint, Typescript.
  plug-ins.

## Related Projects

* [GraphQL.js](https://github.com/graphql/graphql-js) — The JavaScript reference implementation for [GraphQL](http://graphql.org/)
* [DataLoader](https://github.com/facebook/dataloader) — Batching and caching for GraphQL data access layer
* [Membership Database](https://github.com/membership/membership.db) — SQL schema boilerplate for user accounts, profiles, roles, and auth claims

[node]: https://nodejs.org
[js]: https://developer.mozilla.org/docs/Web/JavaScript
[gql]: http://graphql.org/
[gqljs]: https://github.com/graphql/graphql-js
[gqlrelay]: https://github.com/graphql/graphql-relay-js
[yarn]: https://yarnpkg.com
[express]: http://expressjs.com/
[session]: https://github.com/expressjs/session
[flash]: https://github.com/expressjs/flash
[cors]: https://github.com/expressjs/cors
[do]: https://m.do.co/c/eef302dbae9f
[code]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[docker]: https://www.docker.com/community-edition
[compose]: https://docs.docker.com/compose/
[v8debug]: https://chromedevtools.github.io/debugger-protocol-viewer/v8/
[vsdebug]: https://code.visualstudio.com/Docs/editor/debugging
[passport]: http://passportjs.org/
[redis]: https://redis.io/
[loader]: https://github.com/facebook/dataloader
[validator]: https://github.com/chriso/validator.js
[mailer]: https://nodemailer.com/
[hbs]: http://handlebarsjs.com/
[typescript]: https://github.com/Microsoft/TypeScript
