const post = require('./models/post');
const user = require('./models/user');
const image = require('./models/image');
const category = require('./models/category');
const subCategory = require('./models/subCategory');
const visitor = require('./models/visitor');

//관계 정의
user.hasMany(post, { foreignKey: 'userId' });
post.belongsTo(user, { foreignKey: 'userId' });

user.hasMany(visitor, { foreignKey: 'userId' });
visitor.belongsTo(user, { foreignKey: 'userId' });

post.hasMany(image, { foreignKey: 'postId' });
image.belongsTo(post, { foreignKey: 'postId' });

category.hasMany(subCategory, { foreignKey: 'categoryId' });
subCategory.belongsTo(category, { foreignKey: 'categoryId' });

subCategory.hasMany(post, { foreignKey: 'subCategoryId' });
post.belongsTo(subCategory, { foreignKey: 'subCategoryId' });

module.exports = {
  user,
  post,
  image,
  category,
  subCategory,
  visitor,
};
