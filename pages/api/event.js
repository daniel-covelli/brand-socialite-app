import Event from '../../models/Event';

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'DELETE':
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not  allowed`);
      break;
  }
};

// find event by _id in database and return event to 'event.js' page
async function handleGetRequest(req, res) {
  const { _id } = req.query;
  const event = await Event.findOne({ _id });
  res.status(200).json(event);
}

async function handleDeleteRequest(req, res) {
  const { _id } = req.query;
  await Event.findByIdAndDelete({ _id });
  res.status(204).json({});
}
