import EventInstance from '../../models/EventInstance';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  const eventInstances = await EventInstance.find();
  console.log('event api', eventInstances);
  res.status(200).json(eventInstances);
};
