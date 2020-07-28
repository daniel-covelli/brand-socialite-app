import EventInstance from '../../models/EventInstance';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  console.log('event api', EventInstance[0]);
  const events = await EventInstance.find();

  res.status(200).json(events);
};
