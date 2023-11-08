const post = require('./models/post');
const user = require('./models/user');

//관계 정의
user.hasMany(post, { foreignKey: 'userId' });
post.belongsTo(user, { foreignKey: 'userId' });

module.exports = {
  user,
  post,
};
