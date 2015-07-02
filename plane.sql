-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 02, 2015 at 02:47 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `plane`
--
CREATE DATABASE IF NOT EXISTS `plane` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `plane`;

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE IF NOT EXISTS `tracks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(250) NOT NULL,
  `alt` varchar(250) NOT NULL,
  `bearing` varchar(250) NOT NULL,
  `callsign` varchar(250) NOT NULL,
  `lat` varchar(250) NOT NULL,
  `lon` varchar(250) NOT NULL,
  `sensorId` varchar(250) NOT NULL,
  `squawk` varchar(250) NOT NULL,
  `vertSpeed` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `address` (`address`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tracks`
--

INSERT INTO `tracks` (`id`, `address`, `alt`, `bearing`, `callsign`, `lat`, `lon`, `sensorId`, `squawk`, `vertSpeed`) VALUES
(1, 'iranair', 'sdf', '80', 'sdf', '38.580000', '55.43000', '10', '5844784', '200'),
(2, 'mahan', 'sdf', '240', 'sdf', '37.440000', '52.400000', '10', '45778', '253'),
(3, 'test', 'sdf', '60', 'sdf', '38.650000', '51.900000', '10', '7689', '2002'),
(4, 'testg', 'sdf', '40', 'sdf', '35.840000', '57.600000', '10', '7689', '2002'),
(5, 'testg2', 'sdf', '10', 'sdf', '36.840000', '53.600000', '10', '7689', '2002'),
(6, 'testg23', 'sdf', '10', 'sdf', '37.840000', '51.600000', '85', '7689', '2002'),
(7, 'testg23234', 'sdf', '72', 'sdf', '38.840000', '55.600000', '85', '7689', '2002'),
(8, 'teswef', 'sdf', '72', 'sdf', '35.840000', '54.600000', '45', '7689', '2002');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
