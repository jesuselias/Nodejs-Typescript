import mogoose from 'mongoose';

import { mongodb } from './keys';

mogoose.connect(mongodb.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then( db =>  console.log('Db is connected'))
    .catch(err => console.log(err));
