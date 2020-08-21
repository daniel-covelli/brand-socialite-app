import BrandProfile from '../../models/BrandProfile';
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

    const brand = await BrandProfile.findOne({ brand_id: userId });

    res.status(200).json(brand);
  } catch (error) {
    console.error('this is error', error);
    res.status(403).send('Please login again.');
  }
};
