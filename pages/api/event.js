import Event from '../../models/Event';

// find event by _id in database and return event to 'event.js' page
export default async (req, res) => {
  const { _id } = req.query;
  const event = await Event.findOne({ _id });
  console.log('event success');
  res.status(200).json(event);
};
