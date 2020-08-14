import connectDb from '../../utils/connectDb';
import BrandLogin from '../../models/BrandLogin';
import TalentLogin from '../../models/TalentLogin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

connectDb();

export default async (req, res) => {
  const { region, firstName, lastName, email, password } = req.body;
  try {
    // validate name, email, and password vals
    if (!isLength(firstName, { min: 2, max: 20 })) {
      return res
        .status(422)
        .send(
          'First name must be either 2 - 20 characters long, please try again.'
        );
    } else if (!isLength(lastName, { min: 2, max: 20 })) {
      return res
        .status(422)
        .send(
          'Last name must be either 2 - 20 characters long, please try again.'
        );
    } else if (!isLength(password, { min: 5 })) {
      return res
        .status(422)
        .send('Password must be at least 5 characters long, please try again.');
    } else if (!isEmail(email)) {
      return res
        .status(422)
        .send('Email supplied not valid, please try again.');
    }
    // check if email already exists
    const talent = await TalentLogin.findOne({ email });
    const brand = await BrandLogin.findOne({ email });
    if (talent || brand) {
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
