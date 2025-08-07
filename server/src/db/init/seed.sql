-- Clear existing data
TRUNCATE book_authors, books, authors, categories RESTART IDENTITY CASCADE;

-- Insert Categories
INSERT INTO categories (name, description) VALUES
('Fiction', 'Fictional and narrative books'),
('Non-fiction', 'Based on real facts and events'),
('Science Fiction', 'Books about futuristic concepts and science-based themes');

-- Insert Authors
INSERT INTO authors (name, bio) VALUES
('George Orwell', 'British writer, author of 1984 and Animal Farm.'),
('Isaac Asimov', 'American writer and professor of biochemistry, known for science fiction.'),
('J.K. Rowling', 'British author, best known for the Harry Potter series.'),
('Stephen Hawking', 'Physicist and cosmologist, author of A Brief History of Time.'),
('Yuval Noah Harari', 'Historian and author of Sapiens and Homo Deus.');

-- Insert Books
INSERT INTO books (title, description, status, category_id) VALUES
('1984', 'Dystopian novel about totalitarian regime', 'read', 1),
('Animal Farm', 'Political satire about animals rebelling', 'read', 1),
('Foundation', 'Sci-fi epic about the collapse of the Galactic Empire', 'reading', 3),
('Harry Potter and the Sorcerer''s Stone', 'First book in the Harry Potter series', 'read', 1),
('A Brief History of Time', 'Explains cosmology in layman terms', 'unread', 2),
('Sapiens', 'History of humankind from stone age to modern day', 'read', 2);

-- Insert Book-Author relationships
-- 1984
INSERT INTO book_authors (book_id, author_id) VALUES (1, 1);
-- Animal Farm
INSERT INTO book_authors (book_id, author_id) VALUES (2, 1);
-- Foundation
INSERT INTO book_authors (book_id, author_id) VALUES (3, 2);
-- Harry Potter
INSERT INTO book_authors (book_id, author_id) VALUES (4, 3);
-- A Brief History of Time
INSERT INTO book_authors (book_id, author_id) VALUES (5, 4);
-- Sapiens
INSERT INTO book_authors (book_id, author_id) VALUES (6, 5);
