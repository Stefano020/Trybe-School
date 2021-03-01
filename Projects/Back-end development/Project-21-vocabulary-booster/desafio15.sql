DELIMITER $$
CREATE PROCEDURE buscar_media_por_cargo(IN nome_cargo VARCHAR(40))
BEGIN
SELECT ROUND(AVG(em.SALARY), 2) AS "Média salarial"
FROM hr.employees AS em
INNER JOIN hr.jobs AS j ON em.JOB_ID = j.JOB_ID
WHERE j.JOB_TITLE = nome_cargo;
END $$ 
DELIMITER ;
