import connectDb from '../../utils/connectDb';
import TalentLogin from '../../models/TalentLogin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { region, firstName, lastName, email, password } = req.body;
  try {
    // check if email already exists
    const talent = await TalentLogin.findOne({ email });
    if (talent) {
      return res
        .status(422)
        .send(`User already exists with email ${email}. Try logging in.`);
    }
    // hash pasword
    const hash = await bcrypt.hash(password, 10);
    // create new user
    const newTalentLogin = await new TalentLogin({
      region,
      firstName,
      lastName,
      email,
      password: hash
    }).save();
    console.log({ newTalentLogin });
    // create token for the new user
    const token = jwt.sign(
      { userId: newTalentLogin._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    );
    // send token to client
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing up user, please try again later');
  }
};
