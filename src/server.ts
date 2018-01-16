import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { printSchema } from 'graphql';

import schema from './schema';

const app = express();

app.get('/graphql/schema', (req, res) => {
  res.type('text/plain').send(printSchema(schema));
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
