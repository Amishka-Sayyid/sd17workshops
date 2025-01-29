-- Categories
INSERT INTO categories(name) VALUES('Technology');
INSERT INTO categories(name) VALUES('Lifestyle');
INSERT INTO categories(name) VALUES('Education');

-- Posts
INSERT INTO posts(title, content, category_id) VALUES('Introduction to Node.js', 'Node.js is a JavaScript runtime...', 1);
INSERT INTO posts(title, content, category_id) VALUES('Daily Yoga Practices', 'Yoga is beneficial for health...', 2);
INSERT INTO posts(title, content, category_id) VALUES('Learning SQL Basics', 'SQL is a standard language for...', 3);

-- Tags
INSERT INTO tags(name) VALUES('Programming');
INSERT INTO tags(name) VALUES('Health');
INSERT INTO tags(name) VALUES('Education');

-- Posts Tags
INSERT INTO posts_tags(post_id, tag_id) VALUES(1, 1);
INSERT INTO posts_tags(post_id, tag_id) VALUES(2, 2);
INSERT INTO posts_tags(post_id, tag_id) VALUES(3, 3);

INSERT INTO posts_tags(post_id, tag_id) VALUES(1, 2);