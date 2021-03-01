DELIMITER $$

CREATE TRIGGER trigger_inserir_data_atual
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
SET NEW.OrderDate = NOW();

END$$ 

DELIMITER ;
