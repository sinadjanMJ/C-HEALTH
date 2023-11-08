-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2023 at 05:36 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinic`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminaccount`
--

CREATE TABLE `adminaccount` (
  `id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mobilenumber` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminaccount`
--

INSERT INTO `adminaccount` (`id`, `fullname`, `address`, `email`, `mobilenumber`, `password`) VALUES
(1, 'asd', 'asd', 'asd', 'asd', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `categoryname` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `categoryname`) VALUES
(43, 'Paracetamol'),
(44, 'Amoxilin');

-- --------------------------------------------------------

--
-- Table structure for table `coursestrandyear`
--

CREATE TABLE `coursestrandyear` (
  `CourseStrandYearId` int(11) NOT NULL,
  `CourseStrandYearName` varchar(250) NOT NULL,
  `departmentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coursestrandyear`
--

INSERT INTO `coursestrandyear` (`CourseStrandYearId`, `CourseStrandYearName`, `departmentId`) VALUES
(1, 'BSIT', 4),
(2, 'STEM', 5),
(3, 'GRADE-9', 3),
(4, 'GRADE-7', 5),
(5, 'GRADE-10', 6);

-- --------------------------------------------------------

--
-- Table structure for table `date`
--

CREATE TABLE `date` (
  `dateID` int(11) NOT NULL,
  `avadate` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `date`
--

INSERT INTO `date` (`dateID`, `avadate`) VALUES
(3, '2023-10-28'),
(4, '2023-10-30');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `departmentId` int(11) NOT NULL,
  `departmentName` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`departmentId`, `departmentName`) VALUES
(2, 'Commerce'),
(3, 'CTE'),
(4, 'CCS'),
(5, 'SHS'),
(6, 'HS');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctorId` int(11) NOT NULL,
  `doctorFirstName` varchar(250) NOT NULL,
  `doctorLastName` varchar(250) NOT NULL,
  `doctorAddress` varchar(250) NOT NULL,
  `doctorGmailAcc` varchar(250) NOT NULL,
  `status` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctorId`, `doctorFirstName`, `doctorLastName`, `doctorAddress`, `doctorGmailAcc`, `status`) VALUES
(4, 'mj', 'sinadjan', 'zcc', 'sinadjan@gmail.com', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `employeepersonalinformation`
--

CREATE TABLE `employeepersonalinformation` (
  `EPI_ID` int(11) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `middlename` varchar(250) NOT NULL,
  `birthdate` varchar(250) NOT NULL,
  `gender` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(250) NOT NULL,
  `gmailaddress` varchar(250) NOT NULL,
  `EPI_CODE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employeepersonalinformation`
--

INSERT INTO `employeepersonalinformation` (`EPI_ID`, `firstname`, `lastname`, `middlename`, `birthdate`, `gender`, `age`, `address`, `gmailaddress`, `EPI_CODE`) VALUES
(13, 'Michael Jay', 'Sinadjan', 'Damas', '2001-09-21', 'Male', 22, 'Malingin Bogo City Cebu', 'as@gmail.com', 0),
(14, 'Kristie', 'Sala', 'Andrino', '1999-12-26', 'Female', 24, 'San Antonio Binabag', 'kristiesala@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipmentId` int(11) NOT NULL,
  `equipmentName` varchar(250) NOT NULL,
  `equipmentStock` varchar(11) NOT NULL,
  `status` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipmentId`, `equipmentName`, `equipmentStock`, `status`) VALUES
(1, 'charls', '35', 'Active'),
(21, 'mjs', '1', 'Inactive'),
(23, 'mj', '1', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `medicineId` int(11) NOT NULL,
  `medicineName` varchar(250) NOT NULL,
  `medicineStock` int(11) NOT NULL,
  `units` varchar(250) NOT NULL,
  `category` int(11) NOT NULL,
  `status` varchar(250) NOT NULL,
  `datepurchased` varchar(250) NOT NULL,
  `expirydate` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `dosage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`medicineId`, `medicineName`, `medicineStock`, `units`, `category`, `status`, `datepurchased`, `expirydate`, `description`, `dosage`) VALUES
(36, 'dfffff', 1, '1', 43, 'Active', '2023-10-10', '2023-10-28', 'zccz', 'g'),
(37, 'paracetamol for kids', 1, '5', 43, 'Expired', '2023-10-06', '2023-10-17', 'zccz', '');

-- --------------------------------------------------------

--
-- Table structure for table `medicinestockhistory`
--

CREATE TABLE `medicinestockhistory` (
  `medicineStockId` int(11) NOT NULL,
  `medicineId` int(11) NOT NULL,
  `addedStock` int(11) NOT NULL,
  `date` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicinestockhistory`
--

INSERT INTO `medicinestockhistory` (`medicineStockId`, `medicineId`, `addedStock`, `date`) VALUES
(20, 15, 1, '9/11/2023, 3:24:36 PM'),
(21, 15, 1, '9/11/2023, 3:24:36 PM'),
(22, 18, 1, '9/11/2023, 3:50:07 PM'),
(23, 18, 2, '9/11/2023, 3:50:23 PM'),
(24, 18, 2, '9/11/2023, 3:50:23 PM'),
(25, 18, 3, '9/11/2023, 3:50:34 PM'),
(26, 18, 3, '9/11/2023, 3:50:34 PM'),
(27, 18, 3, '9/11/2023, 3:50:34 PM'),
(28, 18, 5, '9/11/2023, 3:57:39 PM'),
(29, 18, 5, '9/11/2023, 3:57:39 PM'),
(30, 18, 5, '9/11/2023, 3:57:39 PM'),
(31, 19, 5, '9/11/2023, 3:58:34 PM'),
(32, 19, 5, '9/11/2023, 3:58:34 PM'),
(33, 19, 5, '9/11/2023, 3:58:34 PM'),
(34, 19, 5, '9/11/2023, 3:58:34 PM'),
(35, 19, 5, '9/11/2023, 3:58:34 PM'),
(36, 20, 2, '9/11/2023, 4:03:31 PM'),
(37, 20, 2, '9/11/2023, 4:03:31 PM'),
(38, 20, 2, '9/11/2023, 4:03:31 PM'),
(39, 20, 2, '9/11/2023, 4:03:31 PM'),
(40, 20, 3, '9/11/2023, 4:03:56 PM'),
(41, 20, 3, '9/11/2023, 4:03:56 PM'),
(42, 20, 3, '9/11/2023, 4:03:56 PM'),
(43, 20, 3, '9/11/2023, 4:03:56 PM'),
(44, 20, 3, '9/11/2023, 4:03:56 PM'),
(45, 20, 3, '9/11/2023, 4:03:56 PM'),
(46, 20, 3, '9/11/2023, 4:03:56 PM'),
(47, 20, 3, '9/11/2023, 4:03:56 PM'),
(48, 20, 1, '9/12/2023, 8:24:49 PM'),
(49, 20, 1, '9/12/2023, 8:25:10 PM'),
(50, 20, 1, '9/12/2023, 8:25:17 PM'),
(51, 20, 1, '9/12/2023, 8:25:17 PM'),
(52, 20, 2, '9/12/2023, 8:25:32 PM'),
(53, 20, 3, '9/12/2023, 8:25:44 PM'),
(54, 20, 3, '9/12/2023, 8:25:44 PM'),
(55, 20, 1, '9/12/2023, 8:26:04 PM'),
(56, 20, 1, '9/12/2023, 8:26:04 PM'),
(57, 20, 55, '9/12/2023, 8:26:18 PM'),
(58, 20, 55, '9/12/2023, 8:26:18 PM'),
(59, 20, 4, '9/12/2023, 8:26:53 PM'),
(60, 20, 5, '9/12/2023, 8:27:03 PM'),
(61, 20, 5, '9/12/2023, 8:27:03 PM'),
(62, 20, 3, '9/12/2023, 8:27:15 PM'),
(63, 20, 3, '9/12/2023, 8:27:15 PM'),
(64, 20, 3, '9/12/2023, 8:27:15 PM'),
(65, 20, 3, '9/12/2023, 8:27:15 PM'),
(66, 20, 3, '9/12/2023, 8:27:25 PM'),
(67, 20, 3, '9/12/2023, 8:27:25 PM'),
(68, 20, 3, '9/12/2023, 8:27:25 PM'),
(69, 20, 3, '9/12/2023, 8:27:25 PM'),
(70, 20, 3, '9/12/2023, 8:27:25 PM'),
(71, 20, 3, '9/12/2023, 8:27:35 PM'),
(72, 20, 3, '9/12/2023, 8:27:35 PM'),
(73, 20, 3, '9/12/2023, 8:27:35 PM'),
(74, 20, 3, '9/12/2023, 8:27:35 PM'),
(75, 20, 3, '9/12/2023, 8:27:35 PM'),
(76, 20, 3, '9/12/2023, 8:27:35 PM'),
(77, 20, 1, '9/12/2023, 8:30:17 PM'),
(78, 22, 1, '9/12/2023, 8:35:07 PM'),
(79, 22, 2, '9/12/2023, 8:35:24 PM'),
(80, 22, 3, '9/12/2023, 8:35:34 PM'),
(81, 22, 5, '9/12/2023, 8:35:41 PM'),
(82, 22, 3, '9/12/2023, 8:42:22 PM'),
(83, 22, 5, '9/12/2023, 8:44:37 PM'),
(84, 22, 5, '9/12/2023, 8:46:29 PM'),
(85, 22, 5, '9/12/2023, 8:47:51 PM'),
(86, 24, 1, '9/22/2023, 11:08:06 PM'),
(87, 24, 5, '9/22/2023, 11:08:16 PM'),
(88, 24, 1, '9/22/2023, 11:10:25 PM'),
(89, 24, 1, '9/22/2023, 11:10:25 PM'),
(90, 24, 2, '9/22/2023, 11:10:58 PM'),
(91, 25, 100, '9/22/2023, 11:30:06 PM'),
(92, 25, 99, '9/22/2023, 11:30:17 PM'),
(93, 26, 1, '9/27/2023, 11:32:29 AM'),
(94, 26, 1, '9/27/2023, 11:32:42 AM'),
(95, 27, 5, '9/27/2023, 11:44:12 AM'),
(96, 28, 7, '10/18/2023, 11:46:28 AM');

-- --------------------------------------------------------

--
-- Table structure for table `nurse`
--

CREATE TABLE `nurse` (
  `nurseId` int(11) NOT NULL,
  `nurseFirstName` varchar(250) NOT NULL,
  `nurseLastName` varchar(250) NOT NULL,
  `nurseAddress` varchar(250) NOT NULL,
  `nurseGmail` varchar(250) NOT NULL,
  `status` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `fullname`, `email`, `address`, `password`) VALUES
(1, 'asdasdsd', 'silvestermj1973@gmail.com', 'fga@gmail.com', 'asdasd'),
(2, 'jjjjjjjjj', 'sdgsdgdgdfg1973@gmail.com', 'fgdfgdgd@dgmail.com', 'dfg'),
(3, 'asdasdsd', 'silvestermj1973@gmail.com', 'fga@gmail.com', 'asd'),
(4, 'asd', 'asd@gmail.com', 'fga@gmail.com', 'asd'),
(5, 'mj damas sinadjan', 'silvestermj1973@gmail.com', 'nnn@gmail.com', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `studentpersonalinformation`
--

CREATE TABLE `studentpersonalinformation` (
  `SPI_ID` int(11) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `middlename` varchar(250) NOT NULL,
  `birthdate` varchar(250) NOT NULL,
  `gmailaddress` varchar(250) NOT NULL,
  `addressProvince` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `SPI_CODE` int(11) NOT NULL,
  `gender` varchar(250) NOT NULL,
  `addressMunicipality` varchar(250) NOT NULL,
  `addressBarangay` varchar(250) NOT NULL,
  `addressPurok` varchar(250) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `courseStrandYearId` int(11) NOT NULL,
  `address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentpersonalinformation`
--

INSERT INTO `studentpersonalinformation` (`SPI_ID`, `firstname`, `lastname`, `middlename`, `birthdate`, `gmailaddress`, `addressProvince`, `age`, `SPI_CODE`, `gender`, `addressMunicipality`, `addressBarangay`, `addressPurok`, `departmentId`, `courseStrandYearId`, `address`) VALUES
(9, 'MicKaile', 'Arcillas', 'Sinadjan', '2017-12-12', 'sss@gmail.com', 'Cebu', 6, 12345678, 'Male', 'City of Bogo', 'Gairan', 'Saint Paul', 4, 1, 'Purok Saint Paul, Gairan, City of Bogo, Cebu'),
(10, 'mj', 'sinadjan', 'damas', '2001-09-15', 'zcc@gmail.com', 'Cebu', 22, 52633195, 'Male', 'City of Bogo', 'Malingin', 'Tugas', 3, 3, 'Purok Tugas, Malingin, City of Bogo, Cebu');

-- --------------------------------------------------------

--
-- Table structure for table `time`
--

CREATE TABLE `time` (
  `timeID` int(11) NOT NULL,
  `dateId` int(11) NOT NULL,
  `avatime` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `time`
--

INSERT INTO `time` (`timeID`, `dateId`, `avatime`) VALUES
(1, 3, '14:55'),
(2, 3, '11:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminaccount`
--
ALTER TABLE `adminaccount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coursestrandyear`
--
ALTER TABLE `coursestrandyear`
  ADD PRIMARY KEY (`CourseStrandYearId`);

--
-- Indexes for table `date`
--
ALTER TABLE `date`
  ADD PRIMARY KEY (`dateID`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`departmentId`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctorId`);

--
-- Indexes for table `employeepersonalinformation`
--
ALTER TABLE `employeepersonalinformation`
  ADD PRIMARY KEY (`EPI_ID`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipmentId`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`medicineId`);

--
-- Indexes for table `medicinestockhistory`
--
ALTER TABLE `medicinestockhistory`
  ADD PRIMARY KEY (`medicineStockId`);

--
-- Indexes for table `nurse`
--
ALTER TABLE `nurse`
  ADD PRIMARY KEY (`nurseId`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentpersonalinformation`
--
ALTER TABLE `studentpersonalinformation`
  ADD PRIMARY KEY (`SPI_ID`);

--
-- Indexes for table `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`timeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminaccount`
--
ALTER TABLE `adminaccount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `coursestrandyear`
--
ALTER TABLE `coursestrandyear`
  MODIFY `CourseStrandYearId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `date`
--
ALTER TABLE `date`
  MODIFY `dateID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `departmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employeepersonalinformation`
--
ALTER TABLE `employeepersonalinformation`
  MODIFY `EPI_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `medicineId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `medicinestockhistory`
--
ALTER TABLE `medicinestockhistory`
  MODIFY `medicineStockId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `nurse`
--
ALTER TABLE `nurse`
  MODIFY `nurseId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `studentpersonalinformation`
--
ALTER TABLE `studentpersonalinformation`
  MODIFY `SPI_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `time`
--
ALTER TABLE `time`
  MODIFY `timeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
