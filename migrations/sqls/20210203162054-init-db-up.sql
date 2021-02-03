/* Replace with your SQL commands */
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Table `social_class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_class` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `social_class` VARCHAR(45) NOT NULL,
  `social_class_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `social_rank`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_rank` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `social_rank` VARCHAR(45) NULL,
  `social_rank_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  `user_image` VARCHAR(200),
  `social_class_id` INT NOT NULL,
  `social_rank_id` INT NOT NULL,
  PRIMARY KEY (`id`, `social_class_id`, `social_rank_id`),
  INDEX `fk_user_social_class1_idx` (`social_class_id` ASC),
  INDEX `fk_user_social_rank1_idx` (`social_rank_id` ASC),
  CONSTRAINT `fk_user_social_class1`
    FOREIGN KEY (`social_class_id`)
    REFERENCES `social_class` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_social_rank1`
    FOREIGN KEY (`social_rank_id`)
    REFERENCES `social_rank` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_admin_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_admin_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `county`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `county` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_county`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_has_county` (
  `user_id` INT NOT NULL,
  `user_social_class_id` INT NOT NULL,
  `user_social_rank_id` INT NOT NULL,
  `county_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `user_social_class_id`, `user_social_rank_id`, `county_id`),
  INDEX `fk_user_has_county_county1_idx` (`county_id` ASC),
  INDEX `fk_user_has_county_user1_idx` (`user_id` ASC, `user_social_class_id` ASC, `user_social_rank_id` ASC),
  CONSTRAINT `fk_user_has_county_user1`
    FOREIGN KEY (`user_id` , `user_social_class_id` , `user_social_rank_id`)
    REFERENCES `user` (`id` , `social_class_id` , `social_rank_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_county_county1`
    FOREIGN KEY (`county_id`)
    REFERENCES `county` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
