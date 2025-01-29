-- One to Many: Retrieve all the posts, including a column for their assigned category
-- to view the posts with their accompanying category:
-- AS keyword allows you to rename the column for the category,

SELECT posts.title, posts.content, categories.name AS category
FROM posts
JOIN categories ON posts.category_id = categories.id;

-- One to Many: Get all posts associated with a category
-- using a WHERE clause to filter the results by the category.
-- if category id is known:

SELECT posts.title, posts.content, categories.name AS category
FROM posts
JOIN categories ON posts.category_id = categories.id
WHERE categories.id = 1;


-- if only  category name is known:
SELECT posts.title, posts.content, categories.name AS category
FROM posts
JOIN categories ON posts.category_id = categories.id
WHERE categories.name = 'Technology';