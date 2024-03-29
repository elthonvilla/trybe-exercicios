# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def higher(a, b):
    if a > b:
        return a
    return b


# higher(3, 5)


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def media(a):
    size = len(a)
    sum = 0
    for x in a:
        sum = sum + x
    med = sum / size
    return med


# media([1, 2, 4, 3, 7, 10, 2, 12, 45, 32, 5, 67])


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' = blablabla.
# Isso se aplica a listas também, caso você precise.
def square(n):
    i = 0
    while i < n:
        print(n * "*")
        i = i + 1


# square(2)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".
def maior_nome(lista):
    nome = ""
    for e in lista:
        if len(e) > len(nome):
            nome = e
    return nome


# maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que
# custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede (em m²).
def tinta(area):
    latas = 0
    if area % 54:
        latas = (area // 54) + 1
    else:
        latas = area // 54
    preco = latas * 80
    return (latas, preco)


# tinta(432)

# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.

# Três lados formam um triângulo quando a soma de quaisquer dois lados
# for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.
def triangulo(a, b, c):
    if (a + b <= c or a + c <= b or b + c <= a):
        print("nao e um triangulo")
    elif (a == b == c):
        print("triangulo equilatero")
    elif (a == b or a == c or b == c):
        print("triangulo isoceles")
    else:
        print("triangulo escaleno")


triangulo(3, 4, 5)
