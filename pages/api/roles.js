import Role from '../../models/Role';

// find event by _id in database and return event to 'event.js' page
export default async (req, res) => {
  const { _id } = req.query;
  const roles = await Role.find({ event_id: _id });
  res.status(200).json(roles);
};
