create database Amazon;
create table Users (`user_id` int AUTO_INCREMENT primary key , `name` varchar(45), `surname` varchar(45), `login` varchar(100), `password` int);
create table Books (`book_id` int AUTO_INCREMENT primary key, `title` varchar(45), `author` varchar(45), `quantity` int);
