import BrandLogin from '../../models/BrandLogin';
import TalentLogin from '../../models/TalentLogin';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('No authorization token');
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const brand = await BrandLogin.findOne({ _id: userId });
    const talent = await TalentLogin.findOne({ _id: userId });
    if (brand || talent) {
      if (brand) {
        res.status(200).json(brand);
      } else {
        res.status(200).json(talent);
      }
    } else {
      res.status(404).send('User not found.');
    }
  } catch (error) {
    res.status(403).send('Invlid token.');
  }
};
