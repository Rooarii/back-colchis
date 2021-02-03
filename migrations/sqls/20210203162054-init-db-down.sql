/* Replace with your SQL commands */

SET FOREIGN_KEY_CHECKS = 0;

-- delete all tables
DROP TABLE IF EXISTS social_class;
DROP TABLE IF EXISTS social_rank;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS county;
DROP TABLE IF EXISTS user_has_county;

SET FOREIGN_KEY_CHECKS = 1;