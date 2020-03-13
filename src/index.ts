import * as express from 'express';
import * as bodyParser from 'body-parser';

import { sum } from './calc';

const app = express();
app.use(bodyParser.json());


function getNumbers(req: express.Request) {
  return {
    x: Number(req.body.x || req.query.x),
    y: Number(req.body.y || req.query.y)
  }
}

function handleSum(req: express.Request, res: express.Response) {
  const { x, y } = getNumbers(req);

  res.json({
    res: sum(x, y)
  });
}

app.get('/sum', handleSum);
app.post('/sum', handleSum);

app.listen(3000);
