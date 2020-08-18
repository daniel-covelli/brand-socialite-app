// import events from '../../static/events.json';
import Event from '../../models/Event';
import jwt from 'jsonwebtoken';
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
    console.log('INSIDE EVENTS API ENDPOINT', userId);
    // try {
    const events = await Event.find({ brand_id: userId })
      .sort([['date', 1]])
      .limit(3);
    res.status(200).json(events);
    // } catch (error) {
    //   console.log('DIS IS ERRR', error);
    //   res.status(200).json('');
    // }

    // console.log('INSIDE EVENTS API ENDPOINT', events);
  } catch (error) {
    console.error('this is error', error);
    res.status(403).send('Please login again.');
  }
};
