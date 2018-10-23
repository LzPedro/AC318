create database postweb;


CREATE TABLE `usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`email` VARCHAR(50) NOT NULL UNIQUE,
	`password` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `historico` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`corpo` VARCHAR(500) NOT NULL,
	`data` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

insert into usuario values('4','c','c','c');
delete from usuario where id = 1;
select NOW();

INSERT INTO Historico(corpo,data) VALUES ('test',NOW());
select * from historico;
delete from historico where id=2;