#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.raw(`
UPDATE User
SET countPosts = (SELECT COUNT() FROM Post WHERE Post.author = User.id)
`);

prisma.raw(`
CREATE TRIGGER updateUserPostCount AFTER INSERT ON Post FOR EACH ROW
BEGIN
UPDATE User
SET postCount = (SELECT COUNT() FROM Post WHERE Post.author = new.author)
WHERE User.id = new.author;
END;
`);
