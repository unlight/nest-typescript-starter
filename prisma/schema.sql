--
-- File generated with SQLiteStudio v3.2.1 on Sat Feb 29 20:12:47 2020
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: User
CREATE TABLE User (
    createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    email     TEXT NOT NULL DEFAULT '',
    id        TEXT NOT NULL,
    name      TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE Post (
    author    TEXT NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id        TEXT NOT NULL,
    title     TEXT NOT NULL DEFAULT '',
    updatedAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (author)
    REFERENCES User (id) ON DELETE CASCADE
                         ON UPDATE CASCADE
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
