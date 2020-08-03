import Role from '../../models/Role';

// route GET DELETE to proper handler
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

// find event by _id in database and return event to 'event.js' pag
async function handleGetRequest(req, res) {
  const { _id } = req.query;
  const roles = await Role.find({ event_id: _id });
  res.status(200).json(roles);
}

async function handleDeleteRequest(req, res) {
  const { _id } = req.query;
  await Role.findByIdAndDelete({ _id });
  res.status(204).json({});
}
