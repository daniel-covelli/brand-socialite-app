import connectDb from '../../utils/connectDb';
import BrandLogin from '../../models/BrandLogin';
import TalentLogin from '../../models/TalentLogin';
import BrandProfile from '../../models/BrandProfile';
import BrandAdmin from '../../models/BrandAdmin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

connectDb();

export default async (req, res) => {
  const { region, companyName, email, password } = req.body;
  try {
    // validate name, email, and password vals
    if (!isLength(companyName, { max: 50 })) {
      return res
        .status(422)
        .send(
          'Company name must be less than 50 characters long, please try again.'
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
    const brand = await BrandLogin.findOne({ email });
    const talent = await TalentLogin.findOne({ email });

    if (brand || talent) {
      return res
        .status(422)
        .send(
          `User already exists with email ${email}, try using another email.`
        );
    }
    // hash pasword
    const hash = await bcrypt.hash(password, 10);

    // create new user
    const newBrandLogin = await new BrandLogin({
      region,
      companyName,
      email,
      password: hash
    }).save();

    // create a profile and admin for each new brand
    await new BrandProfile({ brand_id: newBrandLogin._id }).save();
    await new BrandAdmin({ brand_id: newBrandLogin._id }).save();

    // create token for the new user
    const token = jwt.sign(
      { userId: newBrandLogin._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    );
    // send token to client
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured, please try again later.');
  }
};
