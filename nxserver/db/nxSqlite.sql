--
-- 由SQLiteStudio v3.2.0 产生的文件 周二 2月 19 17:56:07 2019
--
-- 文本编码：UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- 表：user
CREATE TABLE user (userid INTEGER PRIMARY KEY NOT NULL UNIQUE, name CHAR (255) UNIQUE NOT NULL, pw CHAR (255) NOT NULL, descx CHAR (255) DEFAULT "未填写");
INSERT INTO user (userid, name, pw, descx) VALUES (1, 'wenter', 'wener', NULL);
INSERT INTO user (userid, name, pw, descx) VALUES (2, 'sfsd', 'sdfsfsd', 'werwr');
INSERT INTO user (userid, name, pw, descx) VALUES (3, 'fdsf', 'sdfsfd', 'sdfsdf');

CREATE TABLE record (recordid INTEGER PRIMARY KEY auto_increment, content text(8192), createtime TimeStamp NOT NULL, contenttype INTEGER, contenttoken text(255) );
COMMIT TRANSACTION;
PRAGMA foreign_keys = on;

-- mysql 创建数据库
CREATE SCHEMA `nx` DEFAULT CHARACTER SET utf8 ;

