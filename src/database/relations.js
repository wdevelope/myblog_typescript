const post = require('./models/post');
const user = require('./models/user');
const image = require('./models/image');
const view = require('./models/view');
const category = require('./models/category');

//관계 정의
user.hasMany(post, { foreignKey: 'userId' });
post.belongsTo(user, { foreignKey: 'userId' });

post.hasMany(image, { foreignKey: 'postId' });
image.belongsTo(post, { foreignKey: 'postId' });

post.hasMany(view, { foreignKey: 'postId' });
view.belongsTo(post, { foreignKey: 'postId' });

category.hasMany(post, { foreignKey: 'categoryId' });
post.belongsTo(category, { foreignKey: 'categoryId' });

category.hasMany(category, { as: 'SubCategories', foreignKey: 'parentId' });
category.belongsTo(category, { as: 'Parent', foreignKey: 'parentId' });

module.exports = {
  user,
  post,
  image,
  view,
  category,
};
