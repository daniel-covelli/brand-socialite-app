import connectDb from '../../utils/connectDb';
import TalentLogin from '../../models/TalentLogin';
import BrandLogin from '../../models/BrandLogin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    // check if email already exists
    const brand = await BrandLogin.findOne({ email }).select('+password');
    const talent = await TalentLogin.findOne({ email }).select('+password');
    if (!brand && !talent) {
      return res
        .status(404)
        .send(
          `Email doesn't exist. Please try again or create an new account.`
        );
    }
    if (brand) {
      const passwordsMatch = await bcrypt.compare(password, brand.password);
      if (passwordsMatch) {
        const token = jwt.sign({ userId: brand.id }, process.env.JWT_SECRET, {
          expiresIn: '7d'
        });
        res.status(200).json({ token, role: 'brand' });
      } else {
        res.status(401).send('Passwords do not match. Please try again.');
      }
    } else {
      const passwordsMatch = await bcrypt.compare(password, talent.password);
      if (passwordsMatch) {
        const token = jwt.sign({ userId: talent._id }, process.env.JWT_SECRET, {
          expiresIn: '7d'
        });
        res.status(200).json({ token, role: 'talent' });
      } else {
        res.status(401).send('Passwords do not match. Please try again.');
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured, please try again later.');
  }
};
