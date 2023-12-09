import post from './models/post';
import user from './models/user';
import image from './models/image';
import category from './models/category';
import subCategory from './models/subCategory';
import visitor from './models/visitor';
import visitorComment from './models/visitorComment';

// 관계 정의
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

visitor.hasMany(visitorComment, { foreignKey: 'visitorId' });
visitorComment.belongsTo(visitor, { foreignKey: 'visitorId' });

export { user, post, image, category, subCategory, visitor, visitorComment };
