SELECT CONCAT(em.FirstName, " ", em.LastName) AS "Nome completo",
COUNT(*) AS "Total de pedidos"
FROM w3schools.employees AS em
INNER JOIN w3schools.orders AS o
ON em.EmployeeID = o.EmployeeID
GROUP BY em.EmployeeID
ORDER BY `Total de pedidos`;
