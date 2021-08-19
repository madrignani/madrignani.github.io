// GIOVANNI DE OLIVEIRA MADRIGNANI - 1911818GSIS
// PROGRAMAÇÃO ESTRUTURADA - CEFET NOVA FRIBURGO
// 26/03/2021
// REFERENTE A QUESTÃO 01 DA PROVA 1

#include <stdio.h>

void parImpar (int n2){
      if (n2%2==0)
        printf (" e o segundo numero escolhido (%d) eh PAR.\n\n", n2);
    else
        printf(" e o segundo numero escolhido (%d) eh IMPAR.\n\n", n2);
    printf("---------------------------------------------");
}

void verifica (int n1, int n2){
    if (n1%2==0)
        printf ("\n\nO primeiro numero escolhido (%d) eh PAR", n1);
    else
        printf("\n\nO primeiro numero escolhido (%d) eh IMPAR", n1);
    parImpar (n2);
}

void iguais (int n1, int n2){
    if (n1==n2)
        printf("\n\nOs numeros escolhidos (%d e %d)SAO iguais.\n\n", n1, n2);
    else
        printf("\n\nOs numeros escolhidos (%d e %d) NAO sao iguais.\n\n", n1, n2);
    printf("---------------------------------------------");
}

void multiplos (int n1, int n2){
    if (n1%n2==0 || n2%n1==0)
        printf("\n\nOs numeros escolhidos, (%d e %d) SAO multiplos.\n\n", n1, n2);
    else
        printf("\n\nOs numeros escolhidos, (%d e %d) NAO sao multiplos.\n\n", n1, n2);
    printf("---------------------------------------------");
}

int main(){
    int num1, num2;
    char opera;
    printf("Informe a seguir o tipo de operacao que deseja.\n");
    printf("M para verificar se os numeros sao multiplos\nP para verificar se os numeros sao pares ou impares\nI para verificar se os numeros sao iguais: \n");
    scanf("%c", &opera);
    printf("\nInforme a seguir o primeiro numero desejado: ");
    scanf("%d", &num1);
    printf("Informe a seguir o segundo numero desejado: ");
    scanf("%d", &num2);
        if (num1>0 && num2>0 && opera == 'M' || opera == 'm')
            multiplos (num1, num2);
        else
             if (num1>0 && num2>0 && opera == 'I' || opera == 'i')
             iguais (num1, num2);
        else
            if (num1>0 && num2>0 && opera == 'P' || opera == 'p')
            verifica (num1, num2);
        else
            printf("Ocorreu um erro: digite um valor valido.");
        return 0;
}
