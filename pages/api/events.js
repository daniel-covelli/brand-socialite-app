// import events from '../../static/events.json';
import Event from '../../models/Event';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  const events = await Event.find()
    .sort([['date', 1]])
    .limit(3);
  res.status(200).json(events);
};
