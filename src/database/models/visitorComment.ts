import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

class VisitorComment extends Model {
  public id!: number;
  public name!: string;
  public comment!: string;
  public visitorId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

VisitorComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'w-life',
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    visitorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'visitorComment',
    tableName: 'VisitorComments',
  }
);

export default VisitorComment;
