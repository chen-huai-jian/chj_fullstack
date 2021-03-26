import mysql from 'mysql2'; // mqsql  配置

import {
   MYSQL_HOST,
   MYSQL_PORT,
   MYSQL_USER,
   MYSQL_DATABASE,
   MYSQL_PASSWORD
} from '../app.config';

export const connection = mysql.createConnection({
   host: MYSQL_HOST,
   port: parseInt(MYSQL_PORT), // port是字符串，转一下
   user: MYSQL_USER,
   password: MYSQL_PASSWORD,
   database: MYSQL_DATABASE
})
