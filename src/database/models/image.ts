import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

interface imageAttributes {
  id: number;
  imageUrl: string;
}

class Image extends Model<imageAttributes> implements imageAttributes {
  public id!: number;
  public imageUrl!: string;
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'image',
  }
);

export default Image;
