import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

class Visitor extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public password!: string;
  public isPrivate!: boolean;
  public views!: number;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Visitor.init(
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
    password: {
      type: DataTypes.STRING,
      allowNull: true, // 비밀번호는 선택적
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // 기본값은 공개 게시글로 설정
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'visitor',
  }
);

export default Visitor;
