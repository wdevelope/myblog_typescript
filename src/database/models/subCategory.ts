import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

interface SubCategoryAttributes {
  id: number;
  name: string;
  position: number;
}

class SubCategory extends Model<SubCategoryAttributes> implements SubCategoryAttributes {
  public id!: number;
  public name!: string;
  public position!: number;
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
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'subCategory',
  }
);

export default SubCategory;
