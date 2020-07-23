// import events from '../../static/events.json';
import Event from '../../modesl/Event';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  const events = await Event.find();
  res.status(200).send(events);
};
