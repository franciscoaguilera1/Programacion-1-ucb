#Ejercicio 1
def binario(hola):
   bin = ""
   while hola > 0: 
       bin = str(hola % 2) + bin 
       hola = hola // 2
   print("El resultado es: ", bin)

def octal(hola):
    octi = ""
    while hola > 0:
        octi = str(hola % 8) + octi
        hola = hola // 8 
    print("El resultado es:", octi)

def hexadecimal(hola):
    digitos = "0123456789ABCDEF"
    hexa = ""
    while hola > 0:
        resto = hola % 16
        hexa = digitos[resto] + hexa
        hola = hola // 16
    print("El resultado es:", hexa)

num = int(input("Ingrese el número que desea convertir: "))
print ("A que sistema númerico desea convertir: \n 1.binario \n 2.Octal \n 3.Hexadecimal ")
sis = int(input())
if sis == 1:
    binario(num)

if sis == 2:
    octal(num)

if sis == 3:
    hexadecimal(num)
#Ejercicio 2
num1 = str(input("Ingrese el primer número: "))
num2 = str(input("Ingrese el segundo número: "))

dec1 = int(num1,2)
dec2 = int(num2,2)

resultado = dec1 + dec2
resultadobin = bin(resultado)
print("El resultado es:", resultadobin)
#Ejercicio 3
def binario(hola):
      hola = int(hola, 2)
      hola = hex(hola)
      print("La conversion es: ",hola)

def hexadecimal(hola):
      hola = int(hola, 16)
      hola = bin(hola)
      print("La conversion es: ", hola)
num = str(input("ingrese el número que desea convertir: "))
sis = int(input("A que sistema desea convertir: \n 1°Binario \n 2°Hexadecimal \n :"))
if sis == 1:
      hexadecimal(num)
elif sis == 2:
      binario(num)
#Ejercicio 4
def suma(hola, num):
    hola = int(hola, 2)
    num = int (num, 2)
    resultado = hola + num 
    resultado = bin(resultado)
    print(resultado)
def resta(hola, num):
    hola = int(hola, 2)
    num = int(hola, 2)
    resultado = hola - num 
    resultado = bin(resultado)
    print(resultado)
def multiplicación(hola, num):
    hola = int(hola, 2)
    num = int(num, 2)
    resultado = hola * num 
    resultado = bin(resultado)
    print(resultado)
def division(hola, num):
    hola = int(hola, 2)
    num = int(num, 2)
    resultado = hola // num 
    resultado = bin(resultado)
    print(resultado)
numA = str(input("Ingrese la primera cantidad: "))
numB = str(input("Ingrese la segunda cantidad: "))
sis = int(input("Que operacion desea realizar: \n 1.Sumar \n 2.Restar \n 3.Multiplicar \n 4.Dividir \n . "))
if sis == 1:
    suma(numA, numB)
elif sis == 2:
    resta(numA, numB)
elif sis == 3:
    multiplicación(numA, numB)
elif sis == 4:
    division(numA, numB)
#Ejercicio 5
pares = []
for i in range (51):
    if i % 2 == 0:
        pares.append(i)
suma = sum(pares)
print(suma)
#Ejercicio 6
