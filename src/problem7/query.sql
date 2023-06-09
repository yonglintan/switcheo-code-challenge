SELECT address 
FROM balances 
GROUP BY address 
HAVING sum(CASE
    WHEN denom = 'usdc' THEN amount * 0.000001
    WHEN denom = 'swth' THEN amount * 0.00000005
    WHEN denom = 'tmz' THEN amount * 0.003
END) >= 500 
AND address IN (
    SELECT DISTINCT address 
    FROM trades 
    WHERE block_height > 730000
);
