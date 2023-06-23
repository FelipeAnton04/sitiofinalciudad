-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-06-2023 a las 12:14:47
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sitiobcociudad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrevistas`
--

DROP TABLE IF EXISTS `entrevistas`;
CREATE TABLE IF NOT EXISTS `entrevistas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jugador` varchar(250) NOT NULL,
  `pregunta` text NOT NULL,
  `respuesta` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `entrevistas`
--

INSERT INTO `entrevistas` (`id`, `jugador`, `pregunta`, `respuesta`) VALUES
(1, 'Felipe Anton', '¿Que se siente jugar siendo tan joven?', 'Para muchos aficionados, el fútbol despierta una gran emoción, ya sea cuando están jugando en un equipo o animando desde las gradas. La competencia, la camaradería y la adrenalina son algunos de los elementos que contribuyen a esta emoción. La alegría de marcar un gol, la euforia de ganar un partido importante o la tensión de una tanda de penaltis son solo algunas de las emociones intensas que se pueden experimentar en el fútbol.\r\n\r\nAdemás, el fútbol tiene la capacidad de unir a personas de diferentes culturas y países, generando un sentido de comunidad y pertenencia. Los aficionados pueden sentir una profunda pasión por su equipo, llegando incluso a vivir los partidos con gran intensidad emocional.'),
(6, 'Agustin Dhers', '¿Siempre te desempeñaste de extremo?', 'Es importante destacar que la posición puede variar según el sistema táctico del equipo y las instrucciones del entrenador. Algunos entrenadores pueden pedirle al extremo derecho que realice tareas adicionales, como seguir las instrucciones defensivas más estrictas o participar en la creación de juego.'),
(7, 'Pedro Osado ', '¿Que se siente jugar siendo tan joven?', ' El fútbol en una edad temprana proporciona una plataforma para el desarrollo físico, técnico y táctico. Los jóvenes jugadores pueden mejorar sus habilidades, aprender nuevas técnicas y comprender los conceptos básicos del juego.'),
(3, 'Bruno Landi ', '¿Cuál es tu mejor cualidad deportiva?', '\r\nUn centrocampista en el fútbol requiere una combinación de habilidades técnicas, tácticas y mentales para desempeñar su papel eficazmente en el equipo.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
