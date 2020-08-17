import Event from '../../models/Event';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'POST':
      handlePostRequest(req, res);
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
    brand_id,
    eventName,
    hostName,
    eventType,
    estAttendance,
    venue,
    address1,
    address2,
    city,
    state,
    zip,
    parking,
    parkingInstructions,
    uniforms,
    uniformsInstructions,
    eventDescription,
    eventMediaUrl,
    adminMediaUrl,
    date,
    setupStart,
    setupEnd,
    eventStart,
    eventEnd,
    breakdownStart,
    breakdownEnd,
    parkingvenue,
    parkingaddress1,
    parkingaddress2,
    parkingcity,
    parkingstate,
    parkingzip
  } = req.body;
  try {
    if (
      !brand_id ||
      !eventName ||
      !hostName ||
      !eventType ||
      !estAttendance ||
      !address1 ||
      !address2 ||
      !city ||
      !state ||
      !zip ||
      !parking ||
      !parkingInstructions ||
      !uniforms ||
      !uniformsInstructions ||
      !eventDescription ||
      !date ||
      !setupStart ||
      !setupEnd ||
      !eventStart ||
      !eventEnd ||
      !breakdownStart ||
      !breakdownEnd
    ) {
      return res.status(422).send('Missing one or more fields');
    } else if (
      zip.match(/^[0-9]+$/) == null ||
      estAttendance.match(/^[0-9]+$/) == null ||
      parkingzip
        ? parkingzip.match(/^[0-9]+$/) == null
        : false
    ) {
      return res
        .status(422)
        .send('Incorect value type for Zip or Estimated Attendance');
    }
    // zip = parseInt(zip);
    // estAttendance = parseInt(estAttendance);
    // if (parkingzip) {
    //   parkingzip = parseInt(parkingzip);
    // }
    console.log('in Handle post request', setupStart);
    const event = await new Event({
      brand_id,
      eventName,
      hostName,
      eventType,
      estAttendance,
      venue,
      address1,
      address2,
      city,
      state,
      zip,
      parking,
      parkingInstructions,
      uniforms,
      uniformsInstructions,
      eventDescription,
      eventMediaUrl,
      adminMediaUrl,
      date,
      setupStart,
      setupEnd,
      eventStart,
      eventEnd,
      breakdownStart,
      breakdownEnd,
      parkingvenue,
      parkingaddress1,
      parkingaddress2,
      parkingcity,
      parkingstate,
      parkingzip
    }).save();
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error Creating Event');
  }
}

// find event by _id in database and return event to 'event.js' page
async function handleGetRequest(req, res) {
  const { _id } = req.query;
  try {
    const event = await Event.findOne({ _id });
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error Getting Event');
  }
}

async function handleDeleteRequest(req, res) {
  const { _id } = req.query;
  await Event.findByIdAndDelete({ _id });
  res.status(204).json({});
}
