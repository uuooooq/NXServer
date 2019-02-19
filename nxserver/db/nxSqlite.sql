--
-- 由SQLiteStudio v3.2.0 产生的文件 周二 2月 19 17:56:07 2019
--
-- 文本编码：UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- 表：user
CREATE TABLE user (userid INTEGER PRIMARY KEY NOT NULL UNIQUE, name CHAR (255) UNIQUE NOT NULL, pw CHAR (255) NOT NULL, "desc" CHAR (255) DEFAULT 未填写);
INSERT INTO user (userid, name, pw, "desc") VALUES (1, 'wenter', 'wener', NULL);
INSERT INTO user (userid, name, pw, "desc") VALUES (2, 'sfsd', 'sdfsfsd', 'werwr');
INSERT INTO user (userid, name, pw, "desc") VALUES (3, 'fdsf', 'sdfsfd', 'sdfsdf');

CREATE TABLE record (recordid INTEGER PRIMARY KEY AUTOINCREMENT, content CHAR(8192), createtime TimeStamp NOT NULL DEFAULT (datetime('now','localtime')),contenttype INTEGER,contenttoken char(255) )

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;


temp 
/*
CREATE TABLE record ([recordid] INTEGER PRIMARY KEY AUTOINCREMENT,
　　　　[content] NVARCHAR(8192),
       [createtime] TimeStamp NOT NULL DEFAULT (datetime('now','localtime')),
       [contenttype] integer not null,/* 0 文本，1 图片，2视频*/
       [contenttoken] NVARCHAR(256), /* 图片和视频的token*/)
*/