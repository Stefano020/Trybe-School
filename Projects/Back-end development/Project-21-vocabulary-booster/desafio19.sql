DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(hired_month INT, hired_year INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE totalHired INT;
SELECT COUNT(*) FROM hr.employees 
WHERE MONTH(HIRE_DATE) = hired_month AND YEAR(HIRE_DATE) = hired_year
INTO totalHired;

RETURN totalHired;
END$$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987);
