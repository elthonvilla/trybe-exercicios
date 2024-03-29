# Exercício de fixação 1

# Além do liquidificador, podemos modelar inúmeros eletrodomésticos,
# tais como: ventilador, batedeira, secador, máquina de lavar e etc.

# 1.1 - Para fixar crie uma objeto da classe Ventilador,
# semelhante ao exemplo do liquidificador.

# 1.2 - Em seguida faça com que a pessoa tenha um ventilador como atributo
# através da composição.

# 1.3 - Crie também um método comprar_ventilador.

# 1.4 - Faça com que o print (__str__) de Pessoa informe se sua instância
# possui ou não um ventilador.

# 1.1
class Ventilador:
    def __init__(self, cor, potencia, preco,  tensao):
        self.cor = cor
        self.potencia = potencia
        self.tensao = tensao
        self.preco = preco

    def cor(self):
        return self.cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None  # 1.2

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):  # 1.3
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):  # 1.4
        if self.ventilador is None:
            return f"{self.nome} possui {self.saldo_na_conta} reais."
        else:
            return f"{self.nome} possui {self.saldo_na_conta}\
 reais e um ventilador."


ventilador_arno = Ventilador("preto", potencia=160, tensao=120, preco=150)
pessoa = Pessoa("Jorgin", saldo_na_conta=1000)
pessoa.comprar_ventilador(ventilador_arno)

print(pessoa)
