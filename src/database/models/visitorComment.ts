import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

interface VisitorCommentAttributes {
  id: number;
  name: string;
  comment: string;
}

class VisitorComment extends Model<VisitorCommentAttributes> implements VisitorCommentAttributes {
  public id!: number;
  public name!: string;
  public comment!: string;

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
  },
  {
    sequelize,
    modelName: 'visitorComment',
  }
);

export default VisitorComment;
