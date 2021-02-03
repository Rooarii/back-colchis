/* Replace with your SQL commands */

INSERT INTO social_class
	(social_class_id, social_class) 
VALUES 
	("1", "Bellatores"),
	(2, "Oratores"),
	("3", "Laboratores");

INSERT INTO social_rank
	(social_rank_id, social_rank)
Values
	("1", "King"),
  ("1", "Queen"),
  ("2", "Pope"),
  ("3", "Prince"),
  ("3", "Princess"),
  ("4", "Bishop"),
  ("5", "Cardinal"),
  ("6", "Duke"),
  ("6", "Duchess"),
  ("7", "Marquis"),
  ("7", "Marquess"),
  ("8", "Count"),
  ("8", "Countess"),
  ("9", "Priest");
    
INSERT INTO county
	(name)
VALUES
  ("Arnor"),
  ("Eriador"),
  ("Fangorn"),
  ("Gondor"),
  ("Harad"),
  ("Lindon"),
  ("Mordor");

INSERT INTO user 
	(
		firstname,
		lastname,
		mail,
		user_image,
		social_class_id,
		social_rank_id
   )
VALUES
	("Rooarii", "MANUEL", "rooarii.manuel@gmail.com", "https://avatars.githubusercontent.com/u/49068774?s=60&v=4", 1,1);

INSERT INTO admin (user_id) VALUES (1);
