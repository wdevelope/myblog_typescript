import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

class SubCategory extends Model {
  public id!: number;
  public name!: string;
  public position!: number;
  public categoryId!: number;
}

SubCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'subCategory',
  }
);

export default SubCategory;
