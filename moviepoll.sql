-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2017 at 01:48 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviepoll`
--

-- --------------------------------------------------------

--
-- Table structure for table `poll_answers`
--

CREATE TABLE `poll_answers` (
  `ID` int(11) NOT NULL,
  `movie_name` varchar(127) NOT NULL,
  `question_ID` int(11) NOT NULL,
  `votes` int(11) NOT NULL DEFAULT '0',
  `created` date NOT NULL,
  `updated` date NOT NULL,
  `movie_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `poll_answers`
--

INSERT INTO `poll_answers` (`ID`, `movie_name`, `question_ID`, `votes`, `created`, `updated`, `movie_order`) VALUES
(1, 'The Terminator', 6, 0, '2017-03-29', '0000-00-00', 0),
(2, '42', 6, 0, '2017-03-29', '0000-00-00', 0),
(3, 'Transformers', 6, 0, '2017-03-29', '0000-00-00', 0),
(4, '', 7, 0, '2017-03-29', '0000-00-00', 1),
(5, '', 7, 0, '2017-03-29', '0000-00-00', 1),
(6, '', 7, 0, '2017-03-29', '0000-00-00', 1),
(7, 'The Terminator', 8, 0, '2017-03-29', '0000-00-00', 1),
(8, '42', 8, 0, '2017-03-29', '0000-00-00', 2),
(9, 'Transformers', 8, 0, '2017-03-29', '0000-00-00', 3),
(10, 'The Terminator', 9, 0, '2017-03-30', '0000-00-00', 1),
(11, 'Ema', 9, 0, '2017-03-30', '0000-00-00', 2),
(12, 'Transformers', 9, 0, '2017-03-30', '0000-00-00', 3),
(13, 'The Terminator', 10, 0, '2017-04-06', '0000-00-00', 1),
(14, 'Ema', 10, 0, '2017-04-06', '0000-00-00', 2),
(15, 'Transformers', 10, 0, '2017-04-06', '0000-00-00', 3),
(16, 'The Terminator', 11, 0, '2017-04-06', '0000-00-00', 1),
(17, 'Ema', 11, 0, '2017-04-06', '0000-00-00', 2),
(18, 'Transformers', 11, 0, '2017-04-06', '0000-00-00', 3),
(19, 'The Terminator', 12, 0, '2017-04-06', '0000-00-00', 1),
(20, 'Ema', 12, 0, '2017-04-06', '0000-00-00', 2),
(21, 'Transformers', 12, 0, '2017-04-06', '0000-00-00', 3),
(22, '42', 13, 0, '2017-04-06', '0000-00-00', 1),
(23, '41', 13, 0, '2017-04-06', '0000-00-00', 2),
(24, '40', 13, 0, '2017-04-06', '0000-00-00', 3),
(25, '42', 14, 0, '2017-04-06', '0000-00-00', 1),
(26, '42', 14, 0, '2017-04-06', '0000-00-00', 2),
(27, '42', 14, 0, '2017-04-06', '0000-00-00', 3);

-- --------------------------------------------------------

--
-- Table structure for table `poll_questions`
--

CREATE TABLE `poll_questions` (
  `ID` int(11) NOT NULL,
  `start_time` date NOT NULL,
  `end_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `poll_questions`
--

INSERT INTO `poll_questions` (`ID`, `start_time`, `end_time`) VALUES
(1, '0000-00-00', '0000-00-00'),
(2, '2016-10-20', '0000-00-00'),
(3, '2017-03-29', '2017-04-08'),
(6, '2017-03-29', '2017-04-08'),
(7, '2017-03-29', '2017-04-08'),
(8, '2017-03-29', '2017-04-08'),
(9, '2017-03-30', '2017-04-09'),
(10, '2017-04-06', '2017-04-16'),
(11, '2017-04-06', '2017-04-16'),
(12, '2017-04-06', '2017-04-16'),
(13, '2017-04-06', '2017-04-16'),
(14, '2017-04-06', '2017-04-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `poll_answers`
--
ALTER TABLE `poll_answers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `question_ID` (`question_ID`);

--
-- Indexes for table `poll_questions`
--
ALTER TABLE `poll_questions`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `poll_answers`
--
ALTER TABLE `poll_answers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `poll_questions`
--
ALTER TABLE `poll_questions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `poll_answers`
--
ALTER TABLE `poll_answers`
  ADD CONSTRAINT `poll_answers_ibfk_1` FOREIGN KEY (`question_ID`) REFERENCES `poll_questions` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
