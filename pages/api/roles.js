import Role from '../../models/Role';
import connectDb from '../../utils/connectDb';
import { rolesValidator } from '../apiUtils/rolesValidator';

connectDb();

// route GET, PUT, and DELETE to proper handler
export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'PUT':
      await handlePutRequest(req, res);
      break;
    case 'POST':
      await handlePostRequest(req, res);
      break;
    case 'DELETE':
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not  allowed`);
      break;
  }
};

async function handlePostRequest(req, res) {
  var {
    event_id,
    roletype,
    shiftStart,
    shiftEnd,
    instructions,
    uniformInstructions,
    wage,
    overtime,
    tip
  } = req.body;
  try {
    rolesValidator(
      res,
      event_id,
      roletype,
      shiftEnd,
      shiftStart,
      instructions,
      uniformInstructions,
      wage
    );
    const role = await new Role({
      event_id,
      roletype,
      shiftStart,
      shiftEnd,
      instructions,
      uniformInstructions,
      wage,
      overtime,
      tip
    }).save();
    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error Creating Event');
  }
}

async function handlePutRequest(req, res) {
  var {
    _id,
    event_id,
    roletype,
    shiftStart,
    shiftEnd,
    instructions,
    uniformInstructions,
    wage,
    overtime,
    tip
  } = req.body;
  try {
    rolesValidator(
      res,
      event_id,
      roletype,
      shiftEnd,
      shiftStart,
      instructions,
      uniformInstructions,
      wage
    );
    const role = await Role.findByIdAndUpdate(
      { _id },
      {
        event_id,
        roletype,
        shiftStart,
        shiftEnd,
        instructions,
        uniformInstructions,
        wage,
        overtime,
        tip
      }
    );
    return res.status(201).json(role);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error Creating Event');
  }
}

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
