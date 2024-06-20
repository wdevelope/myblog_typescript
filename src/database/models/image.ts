import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

class Image extends Model {
  public id!: number;
  public imageUrl!: string;
  public postId!: number;
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
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'image',
    tableName: 'Images',
  }
);

export default Image;
