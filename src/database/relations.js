const post = require('./models/post');
const user = require('./models/user');
const image = require('./models/image');

//관계 정의
user.hasMany(post, { foreignKey: 'userId' });
post.belongsTo(user, { foreignKey: 'userId' });

post.hasMany(image, { foreignKey: 'postId' });
image.belongsTo(post, { foreignKey: 'postId' });

module.exports = {
  user,
  post,
  image,
};
