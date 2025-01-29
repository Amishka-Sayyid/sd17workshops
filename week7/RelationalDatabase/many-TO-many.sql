-- Many to Many: Retrieve all the posts with their assigned category and tags
-- where a post can have more than one tag associated with it - we have to join twice via our posts_tags junction table. 

-- to view the posts with their accompanying category and tags:
SELECT posts.title, posts.content, categories.name AS category, tags.name AS tag
FROM posts
JOIN categories ON posts.category_id = categories.id
JOIN posts_tags ON posts.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id;

-- Many to Many: Collect the tags together
-- Often for many to many relationships we want to collect the tags together into an array, and return only one row for each post title, plus a list of the tags associated with it. In Postgres we do this by using the ARRAY_AGG function in combination with the GROUP BY clause.
-- We can use the ARRAY_AGG function to collect the tags together into an array. This will collapse the results into one row for each post, with an array of tags.


-- to view the posts with their accompanying category and tags:
SELECT posts.title, ARRAY_AGG(tags.name) AS tags
FROM posts
JOIN posts_tags ON posts.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id
GROUP BY posts.title;