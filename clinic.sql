-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 04:50 PM
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
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `accountId` int(11) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `middlename` varchar(250) DEFAULT NULL,
  `gmail` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `fullname` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accountId`, `firstname`, `lastname`, `middlename`, `gmail`, `password`, `fullname`) VALUES
(1, 'Michael Jay', 'Sinadjan', 'Damas', 'sinadjanmichaeljay@gmail.com', '123', 'Michael Jay Damas Sinadjan'),
(2, 'Bridget', 'Mendoza', NULL, 'bridgetclairemendoza@gmail.com', 'cuteko', 'Bridget Mendoza'),
(3, 'arjay', 'alarde', 'mapula', 'arjay@gmail.com', '123', 'fhdhmd'),
(4, 'asd', 'asd', 'asd', 'mj', '123', 'asdasd');

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
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointmentId` int(11) NOT NULL,
  `dateApp` varchar(250) NOT NULL,
  `timeApp` varchar(250) NOT NULL,
  `studentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(56, 'paracetamol'),
(64, 'mj'),
(66, 'Jems');

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
(5, 'GRADE-10', 6),
(6, 'nursing', 8),
(7, 'pt', 8),
(8, '4th year', 4),
(9, 'kautugan', 10),
(10, 'GRADE-10', 2);

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
(14, '2023-12-23'),
(15, '2023-11-05'),
(16, '2023-12-30'),
(17, '2023-12-19');

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
(5, 'SHS');

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
-- Table structure for table `employeehealthinformation`
--

CREATE TABLE `employeehealthinformation` (
  `ephiId` int(11) NOT NULL,
  `EPI_ID` int(11) NOT NULL,
  `hospitalnumber` varchar(250) NOT NULL,
  `cbcphysician` varchar(250) NOT NULL,
  `cbcdatetimerequested` varchar(250) NOT NULL,
  `cbcdrawdatetime` varchar(250) NOT NULL,
  `wbc` float NOT NULL,
  `wbcunits` varchar(250) NOT NULL,
  `neutrophils` float NOT NULL,
  `neutrophilsunits` varchar(250) NOT NULL,
  `lymphocyte` float NOT NULL,
  `lymphocyteunits` varchar(250) NOT NULL,
  `monocyte` float NOT NULL,
  `monocyteunits` varchar(250) NOT NULL,
  `eosinophil` decimal(10,0) NOT NULL,
  `eosinophilunits` varchar(250) NOT NULL,
  `basophil` float NOT NULL,
  `basophilunits` varchar(250) NOT NULL,
  `hemoglobin` float NOT NULL,
  `hemoglobinunits` varchar(250) NOT NULL,
  `hematocrit` float NOT NULL,
  `hematocritunits` varchar(250) NOT NULL,
  `rbc` float NOT NULL,
  `rbcunits` varchar(250) NOT NULL,
  `mcv` float NOT NULL,
  `mcvunits` varchar(250) NOT NULL,
  `mch` float NOT NULL,
  `mchunits` varchar(250) NOT NULL,
  `mchc` float NOT NULL,
  `mchcunits` varchar(250) NOT NULL,
  `rcdw` float NOT NULL,
  `rcdwunits` varchar(250) NOT NULL,
  `plateletcount` float NOT NULL,
  `plateletcountunits` varchar(250) NOT NULL,
  `mpv` float NOT NULL,
  `mpvunits` varchar(250) NOT NULL,
  `datet` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employeehealthinformation`
--

INSERT INTO `employeehealthinformation` (`ephiId`, `EPI_ID`, `hospitalnumber`, `cbcphysician`, `cbcdatetimerequested`, `cbcdrawdatetime`, `wbc`, `wbcunits`, `neutrophils`, `neutrophilsunits`, `lymphocyte`, `lymphocyteunits`, `monocyte`, `monocyteunits`, `eosinophil`, `eosinophilunits`, `basophil`, `basophilunits`, `hemoglobin`, `hemoglobinunits`, `hematocrit`, `hematocritunits`, `rbc`, `rbcunits`, `mcv`, `mcvunits`, `mch`, `mchunits`, `mchc`, `mchcunits`, `rcdw`, `rcdwunits`, `plateletcount`, `plateletcountunits`, `mpv`, `mpvunits`, `datet`) VALUES
(21, 20, '09701530736', ' mj damas sinadjan,  ALEX romero DAMAS', '12/6/2023, 3:17 PM', '12/6/2023, 3:20 PM', 122, 'x(10^22)/L', 122, '%', 122, '%', 122, '%', '122', '%', 122, '%', 122, 'mg/dl', 1222, 'mg/dl', 1222, '10^12/L', 1222, 'fL', 122, 'pg', 1222, 'g/dL', 1222, '%', 122, 'x(10^9)/L', 1222, 'fL', '2023-12-6');

-- --------------------------------------------------------

--
-- Table structure for table `employeepersonalinformation`
--

CREATE TABLE `employeepersonalinformation` (
  `EPI_ID` int(11) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `middlename` varchar(250) DEFAULT NULL,
  `birthdate` varchar(250) NOT NULL,
  `gender` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(250) NOT NULL,
  `gmailaddress` varchar(250) NOT NULL,
  `EPI_CODE` int(11) NOT NULL,
  `addressProvince` varchar(250) NOT NULL,
  `addressMunicipality` varchar(250) NOT NULL,
  `addressBarangay` varchar(250) NOT NULL,
  `addressPurok` varchar(250) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `courseStrandYearId` int(11) NOT NULL,
  `departmentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employeepersonalinformation`
--

INSERT INTO `employeepersonalinformation` (`EPI_ID`, `firstname`, `lastname`, `middlename`, `birthdate`, `gender`, `age`, `address`, `gmailaddress`, `EPI_CODE`, `addressProvince`, `addressMunicipality`, `addressBarangay`, `addressPurok`, `fullname`, `courseStrandYearId`, `departmentId`) VALUES
(20, 'ALEX', 'DAMAS', 'xzcx', '1992-02-29', 'Male', 31, 'Purok zxc, Cabadiangan, Alcantara, Cebu', 'Purok Tugas, Malingin Bogo', 40299649, 'Cebu', 'Alcantara', 'Cabadiangan', 'zxc', ' ALEX  xzcx  DAMAS', 2, 5),
(21, 'mj', 'sinadjan', 'damas', '1999-02-06', 'Male', 24, 'Purok asdss, Cabadiangan, Alcantara, Cebu', 'zcc', 84441082, 'Cebu', 'Alcantara', 'Cabadiangan', 'asdss', ' mj  damas  sinadjan', 5, 6),
(22, 'arjhay', 'alarde', 'mapula', '2023-12-07', 'Male', 0, 'Purok chanel, Cayang, City of Bogo, Cebu', 'arjhayalarde06@gmail.com', 90558632, 'Cebu', 'City of Bogo', 'Cayang', 'chanel', ' arjhay  mapula  alarde', 2, 5);

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
(39, 'biogesic', 210, '11', 43, 'Active', '2023-12-21', '2023-12-30', 'A trusted brand of paracetamol, Paracetamol (Biogesic) is a medication that is typically used to relieve mild to moderate pain such as headache, backache, menstrual cramps, muscular strain, minor arthritis pain, toothache, and reduce fevers caused by', ''),
(41, 'paracetamol for kids', 13, '1', 43, 'Expired', '2023-12-25', '2023-11-29', 'para sa gihilantan nga bata', ''),
(42, 'paracetamol for kids', 1, '1', 56, 'Active', '2023-12-25', '2023-12-30', 'adasd', 'tsp');

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
(96, 28, 7, '10/18/2023, 11:46:28 AM'),
(97, 38, 5, '12/7/2023, 12:28:30 PM');

-- --------------------------------------------------------

--
-- Table structure for table `normalrange`
--

CREATE TABLE `normalrange` (
  `normalrangeId` int(11) NOT NULL,
  `test` varchar(250) NOT NULL,
  `MinRange` float NOT NULL,
  `MaxRange` float NOT NULL,
  `UnitId` int(11) NOT NULL,
  `MinAge` int(11) DEFAULT NULL,
  `MaxAge` int(11) DEFAULT NULL,
  `Gender` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `normalrange`
--

INSERT INTO `normalrange` (`normalrangeId`, `test`, `MinRange`, `MaxRange`, `UnitId`, `MinAge`, `MaxAge`, `Gender`) VALUES
(3, 'Neutrophils', 47, 80, 7, NULL, NULL, NULL),
(5, 'WBC', 4.1, 10.9, 6, NULL, NULL, NULL),
(6, 'Lymphocyte', 13, 40, 7, NULL, NULL, NULL),
(7, 'Monocyte', 2, 11, 7, NULL, NULL, NULL),
(8, 'Eosinophil', 0, 5, 7, NULL, NULL, NULL),
(9, 'Basophil', 0, 2, 7, NULL, NULL, NULL),
(10, 'Hemoglobin', 12, 16, 1, NULL, NULL, NULL),
(11, 'Hematocrit', 36, 46, 1, NULL, NULL, NULL),
(12, 'RBC', 4.5, 9.5, 13, NULL, NULL, NULL),
(13, 'MCV', 80, 100, 14, NULL, NULL, NULL),
(14, 'MCH', 26, 34, 15, NULL, NULL, NULL),
(15, 'MCHC', 31, 36, 12, NULL, NULL, NULL),
(16, 'RCDW', 11.6, 14.8, 7, NULL, NULL, NULL),
(17, 'Platelet Count', 140, 440, 6, NULL, NULL, NULL),
(18, 'MPV', 6.9, 11, 14, NULL, NULL, NULL);

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
-- Table structure for table `physician`
--

CREATE TABLE `physician` (
  `physicianId` int(11) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `middlename` varchar(250) DEFAULT NULL,
  `fullname` varchar(250) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `gender` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `physician`
--

INSERT INTO `physician` (`physicianId`, `lastname`, `middlename`, `fullname`, `firstname`, `gender`) VALUES
(1, 'sinadjan', 'damas', ' mj damas sinadjan', 'mj', 'Male'),
(2, 'DAMAS', 'romero', ' ALEX romero DAMAS', 'ALEX', 'Male'),
(4, 'he', 'hi', ' ha hi he', 'ha', 'Male'),
(5, 'alarde', 'mapula', ' arhay mapula alarde', 'arhay', 'Male'),
(6, 'alarde', 'mapula', ' arhaysfsdf mapula alarde', 'arhaysfsdf', 'Male');

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
-- Table structure for table `studenthealthinformation`
--

CREATE TABLE `studenthealthinformation` (
  `shiId` int(11) NOT NULL,
  `SPI_ID` int(11) NOT NULL,
  `hospitalnumber` varchar(250) NOT NULL,
  `cbcphysician` varchar(250) NOT NULL,
  `cbcdatetimerequested` varchar(250) NOT NULL,
  `cbcdrawdatetime` varchar(250) NOT NULL,
  `wbc` float NOT NULL,
  `wbcunits` varchar(250) NOT NULL,
  `neutrophils` float NOT NULL,
  `neutrophilsunits` varchar(250) NOT NULL,
  `lymphocyte` float NOT NULL,
  `lymphocyteunits` varchar(250) NOT NULL,
  `monocyte` float NOT NULL,
  `monocyteunits` varchar(250) NOT NULL,
  `eosinophil` decimal(10,0) NOT NULL,
  `eosinophilunits` varchar(250) NOT NULL,
  `basophil` float NOT NULL,
  `basophilunits` varchar(250) NOT NULL,
  `hemoglobin` float NOT NULL,
  `hemoglobinunits` varchar(250) NOT NULL,
  `hematocrit` float NOT NULL,
  `hematocritunits` varchar(250) NOT NULL,
  `rbc` float NOT NULL,
  `rbcunits` varchar(250) NOT NULL,
  `mcv` float NOT NULL,
  `mcvunits` varchar(250) NOT NULL,
  `mch` float NOT NULL,
  `mchunits` varchar(250) NOT NULL,
  `mchc` float NOT NULL,
  `mchcunits` varchar(250) NOT NULL,
  `rcdw` float NOT NULL,
  `rcdwunits` varchar(250) NOT NULL,
  `plateletcount` float NOT NULL,
  `plateletcountunits` varchar(250) NOT NULL,
  `mpv` float NOT NULL,
  `mpvunits` varchar(250) NOT NULL,
  `datet` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studenthealthinformation`
--

INSERT INTO `studenthealthinformation` (`shiId`, `SPI_ID`, `hospitalnumber`, `cbcphysician`, `cbcdatetimerequested`, `cbcdrawdatetime`, `wbc`, `wbcunits`, `neutrophils`, `neutrophilsunits`, `lymphocyte`, `lymphocyteunits`, `monocyte`, `monocyteunits`, `eosinophil`, `eosinophilunits`, `basophil`, `basophilunits`, `hemoglobin`, `hemoglobinunits`, `hematocrit`, `hematocritunits`, `rbc`, `rbcunits`, `mcv`, `mcvunits`, `mch`, `mchunits`, `mchc`, `mchcunits`, `rcdw`, `rcdwunits`, `plateletcount`, `plateletcountunits`, `mpv`, `mpvunits`, `datet`) VALUES
(24, 9, '081501312323', ' mj damas sinadjan,  ALEX romero DAMAS,  arhay mapula alarde', '12/23/2023, 10:18 PM', '12/13/2023, 10:18 PM', 12, 'x(10^9)/L', 5, '%', 12, '%', 22, '%', '22', '%', 25, '%', 35, 'mg/dl', 4, 'mg/dl', 33, '10^12/L', 2, 'fL', 22, 'pg', 42, 'g/dL', 2, '%', 143, 'x(10^9)/L', 32, 'fL', '2023-12-23'),
(25, 10, '131231', ' mj damas sinadjan,  arhay mapula alarde', '12/30/2023, 9:35 AM', '12/26/2023, 9:35 AM', 22, 'x(10^9)/L', 2, '%', 22, '%', 2, '%', '22', '%', 2, '%', 22, 'mg/dl', 2, 'mg/dl', 22, '10^12/L', 2, 'fL', 22, 'pg', 2, 'g/dL', 22, '%', 2, 'x(10^9)/L', 22, 'fL', '2023-12-25');

-- --------------------------------------------------------

--
-- Table structure for table `studentpersonalinformation`
--

CREATE TABLE `studentpersonalinformation` (
  `SPI_ID` int(11) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `middlename` varchar(250) DEFAULT NULL,
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
  `address` varchar(250) NOT NULL,
  `fullname` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentpersonalinformation`
--

INSERT INTO `studentpersonalinformation` (`SPI_ID`, `firstname`, `lastname`, `middlename`, `birthdate`, `gmailaddress`, `addressProvince`, `age`, `SPI_CODE`, `gender`, `addressMunicipality`, `addressBarangay`, `addressPurok`, `departmentId`, `courseStrandYearId`, `address`, `fullname`) VALUES
(9, 'MICHELLE', 'Arcillas', 'Sinadjan', '2017-12-12', 'sss@gmail.com', 'Cebu', 6, 12345678, 'Female', 'City of Bogo', 'Gairan', 'aagustin', 4, 1, 'Purok aagustin, Gairan, City of Bogo, Cebu', ' MICHELLE  Sinadjan  Arcillas'),
(10, 'mj', 'sinadjan', 'damas', '2001-09-15', 'zcc@gmail.com', 'Cebu', 22, 52633195, 'Male', 'City of Bogo', 'Malingin', 'Tugas', 3, 3, 'Purok Tugas, Malingin, City of Bogo, Cebu', ' mj  damas  sinadjan'),
(15, 'markel', 'sinadjan', 'damas', '2004-01-01', 'zcc', 'Cebu', 19, 22997760, 'Male', 'Alcantara', 'Cabadiangan', 'Tugas', 5, 2, 'Purok Tugas, Cabadiangan, Alcantara, Cebu', ' markel  damas  sinadjan'),
(16, 'bridget', 'mendoza', 'abacial', '2001-08-21', 'bridgetclairemendoza@gmail.com', 'Cebu', 22, 31733203, 'Female', 'City of Bogo', 'Cayang', 'mh del pilar', 8, 6, 'Purok mh del pilar, Cayang, City of Bogo, Cebu', ' bridget  abacial  mendoza'),
(17, 'arjhay', 'alarde', 'mapula', '2023-12-07', 'arjhayalarde06@gmail.com', 'Cebu', 0, 77479345, 'Male', 'City of Bogo', 'San Vicente (Pob.)', 'chanel', 8, 7, 'Purok chanel, San Vicente (Pob.), City of Bogo, Cebu', ' arjhay  mapula  alarde'),
(18, 'jade', 'alarde', 'mapula', '2023-12-07', 'jadeaaaaalarde06@gmail.com', 'Cebu', 0, 93439652, 'Male', 'City of Bogo', 'Malingin', 'chanel', 3, 3, 'Purok chanel, Malingin, City of Bogo, Cebu', ' jade  mapula  alarde'),
(19, 'jupiter', 'balbero', 'sumanting', '2001-02-19', 'jupiter06@gmail.com', 'Cebu', 22, 25257610, 'Male', 'City of Bogo', 'Banban', 'LPC', 10, 9, 'Purok LPC, Banban, City of Bogo, Cebu', ' jupiter  sumanting  balbero'),
(25, 'sfsfds', 'asd', 'asd', '2023-12-30', 'asd', 'Cebu', 0, 43743219, 'Male', 'City of Bogo', 'Cogon (Pob.)', 'Tugas', 5, 2, 'Purok Tugas, Cogon (Pob.), City of Bogo, Cebu', ' sfsfds  asd  asd');

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
(2, 3, '11:56'),
(6, 8, '09:02'),
(8, 10, '12:53'),
(9, 10, '13:04'),
(13, 13, '9:29 PM'),
(16, 13, '6:10 PM'),
(17, 13, '1:05 PM'),
(18, 13, '2:22 AM'),
(20, 14, '3:32 AM'),
(21, 14, '11:48 PM'),
(22, 17, '1:17 PM'),
(39, 14, '8:35 PM'),
(41, 14, '8:18 PM');

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `unitId` int(11) NOT NULL,
  `unitname` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`unitId`, `unitname`) VALUES
(1, 'mg/dl'),
(3, 'S.I. Unit'),
(4, 'pmol/L'),
(5, 'x(10^22)/L'),
(6, 'x(10^9)/L'),
(7, '%'),
(12, 'g/dL'),
(13, '10^12/L'),
(14, 'fL'),
(15, 'pg'),
(16, 'palautog');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `adminaccount`
--
ALTER TABLE `adminaccount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointmentId`);

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
-- Indexes for table `employeehealthinformation`
--
ALTER TABLE `employeehealthinformation`
  ADD PRIMARY KEY (`ephiId`);

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
-- Indexes for table `normalrange`
--
ALTER TABLE `normalrange`
  ADD PRIMARY KEY (`normalrangeId`);

--
-- Indexes for table `nurse`
--
ALTER TABLE `nurse`
  ADD PRIMARY KEY (`nurseId`);

--
-- Indexes for table `physician`
--
ALTER TABLE `physician`
  ADD PRIMARY KEY (`physicianId`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studenthealthinformation`
--
ALTER TABLE `studenthealthinformation`
  ADD PRIMARY KEY (`shiId`);

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
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`unitId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `accountId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `adminaccount`
--
ALTER TABLE `adminaccount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `coursestrandyear`
--
ALTER TABLE `coursestrandyear`
  MODIFY `CourseStrandYearId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `date`
--
ALTER TABLE `date`
  MODIFY `dateID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `departmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employeehealthinformation`
--
ALTER TABLE `employeehealthinformation`
  MODIFY `ephiId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `employeepersonalinformation`
--
ALTER TABLE `employeepersonalinformation`
  MODIFY `EPI_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `medicineId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `medicinestockhistory`
--
ALTER TABLE `medicinestockhistory`
  MODIFY `medicineStockId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `normalrange`
--
ALTER TABLE `normalrange`
  MODIFY `normalrangeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `nurse`
--
ALTER TABLE `nurse`
  MODIFY `nurseId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `physician`
--
ALTER TABLE `physician`
  MODIFY `physicianId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `studenthealthinformation`
--
ALTER TABLE `studenthealthinformation`
  MODIFY `shiId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `studentpersonalinformation`
--
ALTER TABLE `studentpersonalinformation`
  MODIFY `SPI_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `time`
--
ALTER TABLE `time`
  MODIFY `timeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `unit`
--
ALTER TABLE `unit`
  MODIFY `unitId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
