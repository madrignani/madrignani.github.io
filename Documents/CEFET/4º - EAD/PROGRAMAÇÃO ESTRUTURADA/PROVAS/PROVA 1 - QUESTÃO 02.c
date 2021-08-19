// GIOVANNI DE OLIVEIRA MADRIGNANI - 1911818GSIS
// PROGRAMAÇÃO ESTRUTURADA - CEFET NOVA FRIBURGO
// 26/03/2021
// REFERENTE A QUESTÃO 02 DA PROVA 1

#include <stdio.h>

float converte (float real, float dolar, float euro, float cD, float cE){
    float resultado_geral, convertido_euro, convertido_dolar;
    convertido_dolar = (dolar*cD);
    convertido_euro = (euro*cE);
    resultado_geral = (real + convertido_dolar + convertido_euro);
    return resultado_geral;
}

int main(){
    float real, dolar, euro, cotaEURO, cotaDOLAR, result;
    printf("Digite o valor da compra em REAIS, digite 0 se nao fez uma compra nessa moeda: ");
    scanf("%f", &real);
    printf("Digite o valor da compra em DOLARES, digite 0 se nao fez uma compra nessa moeda: ");
    scanf("%f", &dolar);
    printf("Digite o valor da compra em EUROS, digite 0 se nao fez uma compra nessa moeda: ");
    scanf("%f", &euro);
        if (dolar>0){
            printf("\nInforme a cotacao do Dolar: ");
            scanf("%f", &cotaDOLAR);
        }
        else
            cotaDOLAR = 0;
        if (euro>0){
            printf("\nInforme a cotacao do Euro: ");
            scanf("%f", &cotaEURO);
        }
        else
            cotaEURO = 0;
    result = converte(real, dolar, euro, cotaDOLAR, cotaEURO);
    printf("\n\nVoce gastou no total, em reais, o valor de %.2fR$\n\n", result);
    printf("\n\n--------------------------------------------------------------------\n\n");
    return 0;
}

