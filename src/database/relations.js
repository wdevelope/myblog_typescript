const lifePost = require('./models/lifePost');
const user = require('./models/user');

//관계 정의
user.hasMany(lifePost, { foreignKey: 'userId' });
lifePost.belongsTo(user, { foreignKey: 'userId' });

module.exports = {
  user,
  lifePost,
};
