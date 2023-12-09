import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

interface PostAttributes {
  id: number;
  title: string;
  content: string;
  accessLevel: number;
  views: number;
}

class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public accessLevel!: number;
  public views!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
  },
  {
    sequelize,
    modelName: 'post',
  }
);

export default Post;
