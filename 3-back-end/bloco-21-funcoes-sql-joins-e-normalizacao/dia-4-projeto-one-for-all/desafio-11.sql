-- Desafio 11

-- Crie uma QUERY que altere o nome de algumas músicas e as ordene em ordem alfabética com as colunas abaixo se baseando nos seguintes critérios:
-- O nome da música em seu estado normal com o alias nome_musica
-- O nome da música atualizado com o alias novo_nome
-- Critérios
-- Trocar a palavra "Streets" no final do nome de uma música por "Code Review"
-- Trocar a palavra "Her Own" no final do nome de uma música por "Trybe"
-- Trocar a palavra "Inner Fire" no final do nome de uma música por "Project"
-- Trocar a palavra "Silly" no final do nome de uma música por "Nice"
-- Trocar a palavra "Circus" no final do nome de uma música por "Pull Request"

select 
	musica as nome_musica,
    (case
		when musica like '%Streets' then replace(musica,'Streets', 'Code Review')
		when musica like '%Her Own' then replace(musica,'Her Own', 'Trybe')
		when musica like '%Inner Fire' then replace(musica,'Inner Fire', 'Project')
		when musica like '%Silly' then replace(musica,'Silly', 'Nice')
		when musica like '%Circus' then replace(musica,'Circus', 'Pull Request')
        else musica
	end) as novo_nome
from musica
where 	musica like '%Streets' or
		musica like '%Her Own' or
        musica like '%Inner Fire' or
        musica like '%Silly' or
        musica like '%Circus'
order by musica;

