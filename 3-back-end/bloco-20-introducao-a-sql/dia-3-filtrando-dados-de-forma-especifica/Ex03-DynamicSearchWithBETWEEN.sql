-- Exercício 03 - Dynamic Search With In and Between

-- 1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
	# use sakila;
    select first_name, last_name, email from customer
    where last_name in ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
    order by first_name;

-- 2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
	select email from customer
    where address_id between 172 and 176
    order by email;
    
-- 3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
	select count(*) as "Pagamentos de 01-05-2005 a 01-08-2005" from payment
    where payment_date between "2005-05-01" and "2005-08-01";

-- 4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
	select title, release_year, rental_duration from film
    where rental_duration between 3 and 6
    order by rental_duration desc, title;

-- 5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.
	select title, rating from film
    where rating in ('G', 'PG', 'PG-13')
    order by title
    limit 500;