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
	("Geoffroy", "PERIOT", "geoffroy.periot@wildcodeschool.com", "https://cdn.glitch.com/774f67da-7f04-4bcb-b47f-3d6dc10bb0c7%2Fthumbnails%2FGP.png?1590947619654", 1,1),
  ("Audrey", "CASSAGNET", "audrey.cassagnet@wildcodeschool.com", "https://cdn.glitch.com/774f67da-7f04-4bcb-b47f-3d6dc10bb0c7%2Fthumbnails%2FAC.png?1590947628327", 1,2),
  ("Marylou", "MOULON", "marylou.moulon@wildcodeschool.com", "https://cdn.glitch.com/774f67da-7f04-4bcb-b47f-3d6dc10bb0c7%2Fthumbnails%2Fmm.png?1590947262623", 1,5),
  ("Colas", "DURCY", "colas.durcy@gmail.com", "https://media-exp1.licdn.com/dms/image/C4D03AQGUOhkufVo7LA/profile-displayphoto-shrink_200_200/0/1607251727070?e=1617840000&v=beta&t=ZmrnSgUmD3t3YH2wILLGRZKb4MIaikkIoVoz5cBnc0E", 1,8),
  ("Hervé", "Meste", "ou.moulon@wildcodeschool.com", "https://cdn.glitch.com/774f67da-7f04-4bcb-b47f-3d6dc10bb0c7%2Fthumbnails%2Fmm.png?1590947262623", 2,6);

INSERT INTO admin (user_id) VALUES (1);


