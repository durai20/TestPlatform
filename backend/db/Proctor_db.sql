-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 21, 2024 at 07:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Proctor_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `CodingQuestionBanks`
--

CREATE TABLE `CodingQuestionBanks` (
  `CodingQuestionBankID` int(11) NOT NULL,
  `BankName` varchar(255) NOT NULL,
  `BankType` varchar(255) DEFAULT NULL,
  `BankDifficulty` varchar(50) DEFAULT NULL,
  `CreatedDate` varchar(255) DEFAULT NULL,
  `staff_mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `CodingQuestionBanks`
--

INSERT INTO `CodingQuestionBanks` (`CodingQuestionBankID`, `BankName`, `BankType`, `BankDifficulty`, `CreatedDate`, `staff_mail`) VALUES
(12, 'code jegii', 'Technical MCQ', 'Easy', '2024-03-21 11:53:14', 'jegan');

-- --------------------------------------------------------

--
-- Table structure for table `CodingQuestions`
--

CREATE TABLE `CodingQuestions` (
  `CodingQuestionID` int(11) NOT NULL,
  `CodingQuestionBankID` int(11) DEFAULT NULL,
  `QuestionText` text NOT NULL,
  `SampleInput` varchar(255) DEFAULT NULL,
  `SampleOutput` varchar(255) DEFAULT NULL,
  `HiddenInputTestCaseI` varchar(255) DEFAULT NULL,
  `HiddenOutputTestCaseI` varchar(255) DEFAULT NULL,
  `HiddenInputTestCaseII` varchar(255) DEFAULT NULL,
  `HiddenOutputTestCaseII` varchar(255) DEFAULT NULL,
  `HiddenInputTestCaseIII` varchar(255) DEFAULT NULL,
  `HiddenOutputTestCaseIII` varchar(255) DEFAULT NULL,
  `Constraints` varchar(255) DEFAULT NULL,
  `TimeLimit` varchar(255) DEFAULT NULL,
  `StorageLimit` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `CodingQuestions`
--

INSERT INTO `CodingQuestions` (`CodingQuestionID`, `CodingQuestionBankID`, `QuestionText`, `SampleInput`, `SampleOutput`, `HiddenInputTestCaseI`, `HiddenOutputTestCaseI`, `HiddenInputTestCaseII`, `HiddenOutputTestCaseII`, `HiddenInputTestCaseIII`, `HiddenOutputTestCaseIII`, `Constraints`, `TimeLimit`, `StorageLimit`) VALUES
(8, 12, '', 'fasdfasdf', 'asdfasdf', 'asdfasd', 'fasdfa', 'sdfasdf', 'sdfasdfa', 'asdfasd', 'fasdfasdasd', 'asdfasdf', 'asdfasdf', 'asdfasdf'),
(9, 12, '', 'asdfasdf', 'asdfasd', 'asdfasd', 'asdfasdf', 'asdfasdf', 'asdfasdf', 'asdfasdf', 'asdfasdf', 'asdfasdf', 'asdfasfd', 'asdfasdfasd');

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
(1, 'jegan', '12');

-- --------------------------------------------------------

--
-- Table structure for table `login_student`
--

CREATE TABLE `login_student` (
  `student_ID` int(11) NOT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `student_pass` varchar(255) DEFAULT NULL,
  `staff_mail` varchar(255) DEFAULT NULL,
  `RegNo` varchar(255) DEFAULT NULL,
  `Batch` varchar(255) DEFAULT NULL,
  `Department` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_student`
--

INSERT INTO `login_student` (`student_ID`, `student_name`, `student_pass`, `staff_mail`, `RegNo`, `Batch`, `Department`) VALUES
(3, '123', '678', 'jegan', '678', 'adasdf', 'adsfasd'),
(4, '4554', '24443', 'jegan', '24443', NULL, NULL),
(5, '2131', '324323', 'jegan', '324323', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `MCQBanks`
--

CREATE TABLE `MCQBanks` (
  `BankID` int(11) NOT NULL,
  `BankName` varchar(255) NOT NULL,
  `Difficulty` varchar(255) NOT NULL,
  `BankType` varchar(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `staff_mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `QuestionID` int(11) NOT NULL,
  `QuestionBankID` int(11) DEFAULT NULL,
  `QuestionText` text NOT NULL,
  `Coption` varchar(255) NOT NULL,
  `Woption1` varchar(255) NOT NULL,
  `Woption2` varchar(255) NOT NULL,
  `Woption3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `testName` varchar(255) DEFAULT NULL,
  `started` time DEFAULT NULL,
  `finished` time DEFAULT NULL,
  `created` date DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `testName`, `started`, `finished`, `created`, `duration`, `score`) VALUES
(1, 'zoho-test', '10:00:00', '11:00:00', '2024-03-01', '01:00:00', 70),
(2, 'Test1', '09:30:00', '10:30:00', '2024-03-02', '01:00:00', 80),
(3, 'Test2', '11:45:00', '12:45:00', '2024-03-03', '01:00:00', 75),
(4, 'Test3', '14:15:00', '15:15:00', '2024-03-04', '01:00:00', 90),
(5, 'Test4', '08:00:00', '09:30:00', '2024-03-05', '01:30:00', 85),
(6, 'Test5', '13:00:00', '14:30:00', '2024-03-06', '01:30:00', 95),
(7, 'Test6', '10:45:00', '11:45:00', '2024-03-08', '01:00:00', 78),
(8, 'Test7', '12:30:00', '13:30:00', NULL, '01:00:00', 88),
(9, 'Test8', '15:00:00', '16:00:00', NULL, '01:00:00', 82),
(10, 'Test9', '09:00:00', '10:00:00', NULL, '01:00:00', 87),
(11, 'Test10', '11:00:00', '12:30:00', NULL, '01:30:00', 92),
(12, 'Test12', '10:45:00', '11:45:00', '2024-03-07', '01:00:00', 78);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `SI.NO` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `profileImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`SI.NO`, `username`, `password`, `profileImage`) VALUES
(1, 'Durai', 'Durai123', '');

-- --------------------------------------------------------

--
-- Table structure for table `TestBanks`
--

CREATE TABLE `TestBanks` (
  `TestBankID` int(11) NOT NULL,
  `TestName` varchar(255) DEFAULT NULL,
  `TestDuration` int(11) DEFAULT NULL,
  `TestDate` date DEFAULT NULL,
  `QuestionBankID` int(11) NOT NULL,
  `startTime` varchar(255) NOT NULL,
  `questionCount` varchar(255) NOT NULL,
  `TestType` varchar(255) NOT NULL,
  `CodingQuestionBankID` varchar(255) DEFAULT NULL,
  `staff_mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TestBanks`
--

INSERT INTO `TestBanks` (`TestBankID`, `TestName`, `TestDuration`, `TestDate`, `QuestionBankID`, `startTime`, `questionCount`, `TestType`, `CodingQuestionBankID`, `staff_mail`) VALUES
(16, '55', 2, '2024-03-16', 37, '12:14', '8', 'MCQ', NULL, ''),
(17, 'jeag', 56, '2024-03-23', 37, '11:34', '45', 'MCQ', NULL, 'jegan'),
(18, '22', 5, '2024-03-17', 7, '11:43', '56', 'CODING', NULL, 'jegan'),
(19, '12', 67, '2024-03-10', 37, '11:49', '89', 'CODING AND MCQ', '7', 'jegan'),
(20, '232', 4, '2024-03-07', 37, '15:25', '3', 'MCQ', NULL, 'jegan');

-- --------------------------------------------------------

--
-- Table structure for table `TestQuestions`
--

CREATE TABLE `TestQuestions` (
  `TestQuestionID` int(11) NOT NULL,
  `TestBankID` int(11) DEFAULT NULL,
  `QuestionID` int(11) DEFAULT NULL,
  `Coption` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TestQuestions`
--

INSERT INTO `TestQuestions` (`TestQuestionID`, `TestBankID`, `QuestionID`, `Coption`) VALUES
(24, 16, 69, 'Female'),
(25, 16, 70, 'male and female'),
(26, 16, 71, 'king'),
(27, 17, 69, 'Female'),
(28, 17, 70, 'male and female'),
(29, 17, 71, 'king'),
(30, 18, 3, NULL),
(31, 19, 69, 'Female'),
(32, 19, 70, 'male and female'),
(33, 19, 71, 'king'),
(34, 19, 3, NULL),
(35, 20, 69, 'Female'),
(36, 20, 70, 'male and female'),
(37, 20, 71, 'king');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CodingQuestionBanks`
--
ALTER TABLE `CodingQuestionBanks`
  ADD PRIMARY KEY (`CodingQuestionBankID`);

--
-- Indexes for table `CodingQuestions`
--
ALTER TABLE `CodingQuestions`
  ADD PRIMARY KEY (`CodingQuestionID`),
  ADD KEY `CodingQuestionBankID` (`CodingQuestionBankID`);

--
-- Indexes for table `login_staff`
--
ALTER TABLE `login_staff`
  ADD PRIMARY KEY (`staff_ID`,`staff_mail`),
  ADD KEY `idx_staff_mail` (`staff_mail`);

--
-- Indexes for table `login_student`
--
ALTER TABLE `login_student`
  ADD PRIMARY KEY (`student_ID`),
  ADD KEY `staff_mail` (`staff_mail`);

--
-- Indexes for table `MCQBanks`
--
ALTER TABLE `MCQBanks`
  ADD PRIMARY KEY (`BankID`),
  ADD KEY `BankID` (`BankID`);

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`QuestionID`),
  ADD KEY `QuestionBankID` (`QuestionBankID`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`SI.NO`);

--
-- Indexes for table `TestBanks`
--
ALTER TABLE `TestBanks`
  ADD PRIMARY KEY (`TestBankID`);

--
-- Indexes for table `TestQuestions`
--
ALTER TABLE `TestQuestions`
  ADD PRIMARY KEY (`TestQuestionID`),
  ADD KEY `TestBankID` (`TestBankID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `CodingQuestionBanks`
--
ALTER TABLE `CodingQuestionBanks`
  MODIFY `CodingQuestionBankID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `CodingQuestions`
--
ALTER TABLE `CodingQuestions`
  MODIFY `CodingQuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `login_staff`
--
ALTER TABLE `login_staff`
  MODIFY `staff_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `login_student`
--
ALTER TABLE `login_student`
  MODIFY `student_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `MCQBanks`
--
ALTER TABLE `MCQBanks`
  MODIFY `BankID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `QuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `SI.NO` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `TestBanks`
--
ALTER TABLE `TestBanks`
  MODIFY `TestBankID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `TestQuestions`
--
ALTER TABLE `TestQuestions`
  MODIFY `TestQuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CodingQuestions`
--
ALTER TABLE `CodingQuestions`
  ADD CONSTRAINT `CodingQuestions_ibfk_1` FOREIGN KEY (`CodingQuestionBankID`) REFERENCES `CodingQuestionBanks` (`CodingQuestionBankID`);

--
-- Constraints for table `login_student`
--
ALTER TABLE `login_student`
  ADD CONSTRAINT `login_student_ibfk_1` FOREIGN KEY (`staff_mail`) REFERENCES `login_staff` (`staff_mail`);

--
-- Constraints for table `Questions`
--
ALTER TABLE `Questions`
  ADD CONSTRAINT `Questions_ibfk_1` FOREIGN KEY (`QuestionBankID`) REFERENCES `MCQBanks` (`BankID`);

--
-- Constraints for table `TestQuestions`
--
ALTER TABLE `TestQuestions`
  ADD CONSTRAINT `TestQuestions_ibfk_1` FOREIGN KEY (`TestBankID`) REFERENCES `TestBanks` (`TestBankID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
