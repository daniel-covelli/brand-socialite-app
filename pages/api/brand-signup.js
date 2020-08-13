import connectDb from '../../utils/connectDb';
import BrandLogin from '../../models/BrandLogin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { region, companyName, email, password } = req.body;
  try {
    // check if email already exists
    const brand = await BrandLogin.findOne({ email });
    if (brand) {
      return res
        .status(422)
        .send(`User already exists with email ${email}. Try logging in.`);
    }
    // hash pasword
    const hash = await bcrypt.hash(password, 10);
    // create new user
    await new newBrandLogin({
      region,
      companyName,
      email,
      password: hash
    }).save();
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
  } catch (error) {}
};
