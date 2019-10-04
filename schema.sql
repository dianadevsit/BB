DROP DATABASE IF EXISTS BookBKdb;
CREATE DATABASE BookBKdb;
USE BookBKdb;

Insert into skills (id, skill, createdAt, updatedAt) values (1, "HTML", current_time(), current_time());
Insert into skills (id, skill, createdAt, updatedAt) values (2, "CSS", current_time(), current_time());
Insert into skills (id, skill, createdAt, updatedAt) values (3, "Bootstrap", current_time(), current_time());
Insert into skills (id, skill, createdAt, updatedAt) values (4, "Javascript", current_time(), current_time());

Insert into ratings (id, ratingID, ratingDesc, createdAt, updatedAt) values (1,1, "1 months experience", current_time(), current_time());
Insert into ratings (id, ratingID, ratingDesc, createdAt, updatedAt) values (2,2, "2 months experience", current_time(), current_time());
Insert into ratings (id, ratingID, ratingDesc, createdAt, updatedAt) values (3,3, "3 months experience", current_time(), current_time());
Insert into ratings (id, ratingID, ratingDesc, createdAt, updatedAt) values (4,4, "4 months experience", current_time(), current_time());