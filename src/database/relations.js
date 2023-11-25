const life = require('./models/life');
const user = require('./models/user');
const image = require('./models/image');
const view = require('./models/view');
const category = require('./models/category');

//관계 정의
user.hasMany(life, { foreignKey: 'userId' });
life.belongsTo(user, { foreignKey: 'userId' });

life.hasMany(image, { foreignKey: 'postId' });
image.belongsTo(life, { foreignKey: 'postId' });

life.hasMany(view, { foreignKey: 'postId' });
view.belongsTo(life, { foreignKey: 'postId' });

category.hasMany(life, { foreignKey: 'categoryId' });
life.belongsTo(category, { foreignKey: 'categoryId' });

module.exports = {
  user,
  life,
  image,
  view,
  category,
};
