import { PostModel } from './post.model';
import {connection} from '../app/database/mysql'
/**
 * 新增文章
 */

export const createPost = async (post: PostModel) => {
   const statement = `
      INSERT INTO post
      SET ? 
   `;
   // 每次用户来访问  走数据库？  
   // 保存  
   // list select  redis 内存里的数据库 
   const [data] = await connection.promise().query(statement, post);
   return data;
};
