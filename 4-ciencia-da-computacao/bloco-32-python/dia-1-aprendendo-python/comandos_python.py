# RESUMO COMANDOS PYTHON

# SOBRE LISTAS

fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas


# SOBRE TUPLAS (tuple)
# São similares a listas, porém não podem ser modificados durante a execução do programa.

user = ("Will", "Marcondes", 42)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices


# SOBRE CONJUNTOS (set)
# Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras.

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


# SOBRE CONJUNTOS IMUTÁVEIS (frozenset)
# É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.

permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


# SOBRE DICIONÁRIOS (dict)
# Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.

people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

# SOBRE RANGE
# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo (step) definido. 

# Pode ser declarado como range( [start], stop, [step] ), em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.
# O stop não é incluído na sequência, portanto, caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
# Seus valores são criados à medida que esta sequência é percorrida.

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# EXEMPLOS ESTRUTURAS DE REPETIÇÃO
# FOR

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# utilizando range em um for
for index in range(5):
    print(index)

# LIST COMPREHENSION (Compreensão de listas)
# A compreensão de listas em Python possui uma sintaxe fácil e compacta para criação de listas, seja a partir de uma string ou de outra lista. É uma maneira concisa de criação que executa uma operação em cada item da lista já existente.
min_rating = 3.0
filtered_restaurants = [restaurant
# filtered_restaurants = [restaurant["name"]  # trocando a linha anterior por essa estariamos pedindo somente o nome do restaurante
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating] # 'if' nas comprehensions funciona como se fosse um filter das hofs em JavaScript
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# LIST COMPREHENSION COM STRINGS
names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']

# WHILE - ex: fibonacci
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# ENUMERATE
languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# DEFININDO FUNÇÕES
def soma(x, y):
    return x + y

soma(2, 2)  # os parâmetros aqui são posicionais

soma(x=2, y=2)  # aqui estamos nomeando os parâmetros

# Os parâmetros também podem ser variádicos, ou seja, variam em sua quantidade.
# Parâmetros posicionais variádicos são acessados como uma tupla no interior de uma função, e parâmetros nomeados variádicos como um dicionário.
def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

# pode ser chamado com 2 parâmetros
concat("Carlos", "Cristina")  # saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "Cristina", "Maria")  # saída: "Carlos, Cristina, Maria"

# dict é uma função que já vem embutida no python
dict(nome="Felipe", sobrenome="Silva", idade=25)  # cria um dicionário utilizando as chaves passadas

dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)  # o número de parâmetros passados para a função pode variar

# As variáveis definidas dentro das funções tem escopo local. Porém, quando uma função não encontra um nome no escopo local, ela irá procurar no espaço de nomes global.
# Em alguns casos, podemos querer limitar um parâmetro em nomeado ou posicional para evitar ambiguidades e/ou aumentar legibilidade.
len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Coin", "Rodrigo", ", ")  # imprime Coin Rodrigo ,

print("Coin", "Rodrigo", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Coin, Rodrigo