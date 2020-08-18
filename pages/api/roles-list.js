import jwt from 'jsonwebtoken';
import Role from '../../models/Role';
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

    const roles = await Role.find({ brand_id: userId });
    console.log('IN ROLES-LIS roles', roles);
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(403).send('Please login again.');
  }
};
