// import events from '../../static/events.json';
import jwt from 'jsonwebtoken';
import Event from '../../models/Event';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('No authorization token');
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const events = await Event.find({ brand_id: userId }).sort([['date', 1]]);
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(403).send('Please login again.');
  }
};
