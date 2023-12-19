-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: p8-fantasy-football
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `all_player_stats`
--

DROP TABLE IF EXISTS `all_player_stats`;
/*!50001 DROP VIEW IF EXISTS `all_player_stats`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `all_player_stats` AS SELECT 
 1 AS `stat_id`,
 1 AS `player_id`,
 1 AS `NAME`,
 1 AS `position`,
 1 AS `team`,
 1 AS `year`,
 1 AS `week_number`,
 1 AS `pass_yds`,
 1 AS `pass_tds`,
 1 AS `interceptions`,
 1 AS `fumbles`,
 1 AS `rush_att`,
 1 AS `rush_yds`,
 1 AS `rush_tds`,
 1 AS `receptions`,
 1 AS `targets`,
 1 AS `rec_yds`,
 1 AS `rec_tds`,
 1 AS `fgm`,
 1 AS `fga`,
 1 AS `xpm`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `kicking_stats`
--

DROP TABLE IF EXISTS `kicking_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kicking_stats` (
  `kicking_id` int NOT NULL AUTO_INCREMENT,
  `stat_id` int NOT NULL,
  `fgm` int NOT NULL,
  `fga` int NOT NULL,
  `xpm` int NOT NULL,
  PRIMARY KEY (`kicking_id`),
  KEY `fk_kicking_stats_stat_lines1_idx` (`stat_id`),
  CONSTRAINT `fk_kicking_stats_stat_lines1` FOREIGN KEY (`stat_id`) REFERENCES `stat_lines` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kicking_stats`
--

LOCK TABLES `kicking_stats` WRITE;
/*!40000 ALTER TABLE `kicking_stats` DISABLE KEYS */;
INSERT INTO `kicking_stats` VALUES (10,19,0,0,0),(11,20,0,0,0),(12,21,0,0,0),(13,22,0,0,0),(14,23,0,0,0),(15,24,0,0,0),(16,25,0,0,0),(17,26,0,0,0),(18,27,0,0,0);
/*!40000 ALTER TABLE `kicking_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passing_stats`
--

DROP TABLE IF EXISTS `passing_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passing_stats` (
  `passing_id` int NOT NULL AUTO_INCREMENT,
  `stat_id` int NOT NULL,
  `pass_yds` int NOT NULL,
  `pass_tds` int NOT NULL,
  `interceptions` int NOT NULL,
  `fumbles` int NOT NULL,
  PRIMARY KEY (`passing_id`),
  KEY `fk_passing_stats_stat_lines1_idx` (`stat_id`),
  CONSTRAINT `fk_passing_stats_stat_lines1` FOREIGN KEY (`stat_id`) REFERENCES `stat_lines` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passing_stats`
--

LOCK TABLES `passing_stats` WRITE;
/*!40000 ALTER TABLE `passing_stats` DISABLE KEYS */;
INSERT INTO `passing_stats` VALUES (28,19,229,1,0,0),(29,20,305,2,0,0),(30,21,405,3,0,0),(31,22,0,0,0,0),(32,23,0,0,0,0),(33,24,0,0,0,0),(34,25,0,0,0,0),(35,26,0,0,0,0),(36,27,0,0,0,0);
/*!40000 ALTER TABLE `passing_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `player_id` int NOT NULL AUTO_INCREMENT,
  `last_name` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `position` varchar(3) NOT NULL,
  `jersey_number` int NOT NULL,
  `age` int NOT NULL,
  `team` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (4,'Herbert','Justin','QB',10,25,'Chargers'),(5,'McCaffrey','Christian','RB',23,27,'49ers'),(6,'Hill','Tyreek','WR',10,29,'Dolphins');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receiving_stats`
--

DROP TABLE IF EXISTS `receiving_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receiving_stats` (
  `receiving_id` int NOT NULL AUTO_INCREMENT,
  `stat_id` int NOT NULL,
  `receptions` int NOT NULL,
  `targets` int NOT NULL,
  `rec_yds` int NOT NULL,
  `rec_tds` int NOT NULL,
  PRIMARY KEY (`receiving_id`),
  KEY `fk_receiving_stats_stat_lines1_idx` (`stat_id`),
  CONSTRAINT `fk_receiving_stats_stat_lines1` FOREIGN KEY (`stat_id`) REFERENCES `stat_lines` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receiving_stats`
--

LOCK TABLES `receiving_stats` WRITE;
/*!40000 ALTER TABLE `receiving_stats` DISABLE KEYS */;
INSERT INTO `receiving_stats` VALUES (12,19,0,0,0,0),(13,20,1,1,10,0),(14,21,0,0,0,0),(15,22,3,5,17,0),(16,23,3,3,19,0),(17,24,5,5,34,0),(18,25,11,15,215,2),(19,26,5,9,40,1),(20,27,9,11,157,1);
/*!40000 ALTER TABLE `receiving_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rushing_stats`
--

DROP TABLE IF EXISTS `rushing_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rushing_stats` (
  `rushing_id` int NOT NULL AUTO_INCREMENT,
  `stat_id` int NOT NULL,
  `rush_att` int NOT NULL,
  `rush_yds` int NOT NULL,
  `rush_tds` int NOT NULL,
  PRIMARY KEY (`rushing_id`),
  KEY `fk_rushing_stats_stat_lines1_idx` (`stat_id`),
  CONSTRAINT `fk_rushing_stats_stat_lines1` FOREIGN KEY (`stat_id`) REFERENCES `stat_lines` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rushing_stats`
--

LOCK TABLES `rushing_stats` WRITE;
/*!40000 ALTER TABLE `rushing_stats` DISABLE KEYS */;
INSERT INTO `rushing_stats` VALUES (12,19,5,17,1),(13,20,1,0,0),(14,21,2,11,0),(15,22,22,152,1),(16,23,20,116,1),(17,24,18,85,1),(18,25,0,0,0),(19,26,0,0,0),(20,27,0,0,0);
/*!40000 ALTER TABLE `rushing_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat_lines`
--

DROP TABLE IF EXISTS `stat_lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat_lines` (
  `stat_id` int NOT NULL AUTO_INCREMENT,
  `players_player_id` int NOT NULL,
  `week_id` int NOT NULL,
  PRIMARY KEY (`stat_id`),
  KEY `fk_player_stats_players_idx` (`players_player_id`),
  KEY `fk_player_stats_year_week1_idx` (`week_id`),
  CONSTRAINT `fk_player_stats_players` FOREIGN KEY (`players_player_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `fk_player_stats_year_week1` FOREIGN KEY (`week_id`) REFERENCES `year_week` (`week_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat_lines`
--

LOCK TABLES `stat_lines` WRITE;
/*!40000 ALTER TABLE `stat_lines` DISABLE KEYS */;
INSERT INTO `stat_lines` VALUES (19,4,4),(20,4,5),(21,4,6),(22,5,4),(23,5,5),(24,5,6),(25,6,4),(26,6,5),(27,6,6);
/*!40000 ALTER TABLE `stat_lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `year_week`
--

DROP TABLE IF EXISTS `year_week`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `year_week` (
  `week_id` int NOT NULL AUTO_INCREMENT,
  `year` int NOT NULL,
  `week_number` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`week_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `year_week`
--

LOCK TABLES `year_week` WRITE;
/*!40000 ALTER TABLE `year_week` DISABLE KEYS */;
INSERT INTO `year_week` VALUES (4,2023,1,'2023-09-07','2023-09-11'),(5,2023,2,'2023-09-14','2023-09-18'),(6,2023,3,'2023-09-21','2023-09-25');
/*!40000 ALTER TABLE `year_week` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'p8-fantasy-football'
--
/*!50003 DROP FUNCTION IF EXISTS `avg_pts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `avg_pts`(points FLOAT, weeks INT) RETURNS float
    NO SQL
BEGIN
    RETURN (points / weeks);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `calculate_avg_points` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `calculate_avg_points`(IN id INT, IN season INT)
BEGIN
DECLARE total_points FLOAT;
DECLARE games_played INT;
DECLARE average_points FLOAT;

SELECT COUNT(week_number) INTO games_played
FROM all_player_stats
WHERE player_id = id AND year = season;

SELECT (SUM((pass_yds * 0.04)  + (pass_tds * 4) + (interceptions * -2) + (fumbles * -2) +
(rush_yds * 0.1) + (rush_tds * 6) +
(receptions) + (rec_yds * 0.1) + (rec_tds * 6) +
(xpm) + (fgm * 4))) INTO total_points
FROM all_player_stats
WHERE player_id = id AND year = season;

SET average_points = avg_pts(total_points, games_played);

SELECT total_points, games_played, average_points;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Calculate_Avg_Pts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Calculate_Avg_Pts`(IN id INT, IN season INT)
BEGIN 
SELECT (
SUM((pass_yds * 0.04)  + (pass_tds * 4) + (interceptions * -2) + (fumbles * -2) +
(rush_yds * 0.1) + (rush_tds * 6) +
(receptions) + (rec_yds * 0.1) + (rec_tds * 6) +
(xpm) + (fgm * 4))) AS 'Total Fantasy Points', COUNT(week_number) AS 'Games Played'
FROM all_player_stats
WHERE player_id = id AND year = season;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ppr_fantasy_points` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ppr_fantasy_points`(IN id INT, IN season INT, IN week INT)
BEGIN
SELECT (
(pass_yds * 0.04)  + (pass_tds * 4) + (interceptions * -2) + (fumbles * -2) +
(rush_yds * 0.1) + (rush_tds * 6) +
(receptions) + (rec_yds * 0.1) + (rec_tds * 6) +
(xpm) + (fgm * 4)) AS 'Fantasy Points'
FROM all_player_stats
WHERE player_id = id AND year = season AND week_number = week;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `all_player_stats`
--

/*!50001 DROP VIEW IF EXISTS `all_player_stats`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `all_player_stats` AS select `s`.`stat_id` AS `stat_id`,`p`.`player_id` AS `player_id`,concat(`p`.`first_name`,' ',`p`.`last_name`) AS `NAME`,`p`.`position` AS `position`,`p`.`team` AS `team`,`y`.`year` AS `year`,`y`.`week_number` AS `week_number`,`ps`.`pass_yds` AS `pass_yds`,`ps`.`pass_tds` AS `pass_tds`,`ps`.`interceptions` AS `interceptions`,`ps`.`fumbles` AS `fumbles`,`rs`.`rush_att` AS `rush_att`,`rs`.`rush_yds` AS `rush_yds`,`rs`.`rush_tds` AS `rush_tds`,`rec`.`receptions` AS `receptions`,`rec`.`targets` AS `targets`,`rec`.`rec_yds` AS `rec_yds`,`rec`.`rec_tds` AS `rec_tds`,`ks`.`fgm` AS `fgm`,`ks`.`fga` AS `fga`,`ks`.`xpm` AS `xpm` from ((((((`stat_lines` `s` join `players` `p` on((`s`.`players_player_id` = `p`.`player_id`))) join `year_week` `y` on((`s`.`week_id` = `y`.`week_id`))) join `passing_stats` `ps` on((`ps`.`stat_id` = `s`.`stat_id`))) join `rushing_stats` `rs` on((`rs`.`stat_id` = `s`.`stat_id`))) join `receiving_stats` `rec` on((`rec`.`stat_id` = `s`.`stat_id`))) join `kicking_stats` `ks` on((`ks`.`stat_id` = `s`.`stat_id`))) order by `y`.`year`,`y`.`week_number` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 21:25:39
