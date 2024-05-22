-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 22, 2024 at 12:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Proctor_dbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(20) NOT NULL,
  `empid` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` bigint(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `department` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `gender` varchar(50) NOT NULL,
  `martial` varchar(50) NOT NULL,
  `address` varchar(70) NOT NULL,
  `age` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `empid`, `name`, `email`, `phone`, `password`, `position`, `department`, `date`, `gender`, `martial`, `address`, `age`) VALUES
(4, 'CSE002', 'Sadf', 'dsaf@gmail.com', 6644894983, '1234', 'Assistant HOD', 'CSE', '0000-00-00', '', '', '', 0),
(5, 'EEE001', 'GURU ', 'guru@gmail.com', 9360527213, '123', 'Assistant Professor', 'EEE', '0000-00-00', '', '', '', 0),
(9, 'CSE036', 'HARI HARAN S', 'k7003hari@gmail.com', 8497973352, 'hari123', 'HOD', 'CSE', '0000-00-00', '', '', '', 0),
(10, 'PLA001', 'RAGUL M', 'ragul@gmail.com', 1234565432, '12', 'Assistant Professor', 'Placement', '2024-05-11', 'Male', 'Married', 'dsad', 0),
(11, 'HR001', 'RAVIKA L', 'ravika@gmail.com', 1234567891, '1234234', 'HOD', 'HR', '2024-05-22', 'Female', 'Married', 'sdfaasdfsd', 24);

-- --------------------------------------------------------

--
-- Table structure for table `login_staff`
--

CREATE TABLE `login_staff` (
  `staff_ID` int(11) NOT NULL,
  `staff_mail` varchar(255) NOT NULL,
  `staff_pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_staff`
--

INSERT INTO `login_staff` (`staff_ID`, `staff_mail`, `staff_pass`) VALUES
(1, 'jegan', '12'),
(2, 'jegan@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `empid` (`empid`);

--
-- Indexes for table `login_staff`
--
ALTER TABLE `login_staff`
  ADD PRIMARY KEY (`staff_ID`,`staff_mail`),
  ADD KEY `idx_staff_mail` (`staff_mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `login_staff`
--
ALTER TABLE `login_staff`
  MODIFY `staff_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
