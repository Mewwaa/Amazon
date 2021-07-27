create database amazonshop;
CREATE TABLE `cart` (
  `name` varchar(20) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `inStock` tinyint(1) DEFAULT NULL,
  `login` varchar(20) DEFAULT NULL
);
CREATE TABLE `product` (
  `name` varchar(20) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `inStock` tinyint(1) DEFAULT NULL
);
CREATE TABLE `user` (
  `login` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
);

insert into product(name,price,inStock) Values ("Aaa", 30, 1), ("Bbb", 25, 1), ("Ccc", 20, 1),("Ddd", 40, 1);