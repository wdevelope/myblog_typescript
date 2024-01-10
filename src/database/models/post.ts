import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;
  public subCategoryId!: number;
  public accessLevel!: number;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    accessLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // 기본적으로 모든 사용자가 접근 가능
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    subCategoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'post',
  }
);

export default Post;
