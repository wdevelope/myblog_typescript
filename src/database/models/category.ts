import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/mysql';

class Category extends Model {
  public id!: number;
  public name!: string;
  public position!: number;
}

Category.init(
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
    modelName: 'category',
    tableName: 'Categories',
  }
);

export default Category;
