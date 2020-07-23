import events from '../../static/events.json';
import connectDb from '../../utils/connectDb';

connectDb();

export default (req, res) => {
  res.status(200).send(events);
};
