CREATE DATABASE  IF NOT EXISTS `alkemy` 
USE `alkemy`;

CREATE TABLE `movements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `category` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);