// import events from '../../static/events.json';
import Event from '../../models/Event';
import EventInstance from '../..//models/EventInstance.js';
import connectDb from '../../utils/connectDb';
import mongoose from 'mongoose';

connectDb();

export default async (req, res) => {
  const ids = [
    '5f1a04d6c02b490092f3ba9f',
    '5f1a04d6c02b490092f3baa0',
    '5f1a04d6c02b490092f3baa1'
  ];
  const events = await Event.find();
  console.log('event api', events);

  res.status(200).json(events);
};
