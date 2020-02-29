--
-- File generated with SQLiteStudio v3.2.1 on Sat Feb 29 20:12:47 2020
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: User
CREATE TABLE User (id CHAR (36) NOT NULL PRIMARY KEY, name VARCHAR (255), email VARCHAR (255) UNIQUE NOT NULL, createdAt DATETIME, updatedAt DATETIME);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
