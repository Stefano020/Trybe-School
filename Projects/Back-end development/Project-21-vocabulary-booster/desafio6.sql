SELECT CONCAT(em.FIRST_NAME, " ", em.LAST_NAME) AS "Nome completo",
jo.JOB_TITLE AS Cargo,
jh.START_DATE AS "Data de início do cargo",
de.DEPARTMENT_NAME AS "Departamento"
FROM hr.job_history AS jh
INNER JOIN hr.employees AS em ON jh.EMPLOYEE_ID = em.EMPLOYEE_ID
INNER JOIN hr.jobs AS jo ON jh.JOB_ID = jo.JOB_ID
INNER JOIN hr.departments AS de ON jh.DEPARTMENT_ID = de.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, Cargo;
