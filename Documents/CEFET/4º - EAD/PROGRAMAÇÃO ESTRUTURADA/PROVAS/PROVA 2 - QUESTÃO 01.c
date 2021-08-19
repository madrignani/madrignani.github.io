//GIOVANNI DE OLIVEIRA MADRIGNANI - 1911818GSIS
//PROGRAMAÇÃO ESTRUTURADA - CEFET (NOVA FRIBURGO)
//09/04/2021
//PROVA 02 - QUESTÃO 01

#include <stdio.h>

int  leValidaQuantidadeDisponivel (){
    int qtd;
    printf("Informe a seguir a quantidade de ingressos disponivel para este evento: ");
    scanf("%d", &qtd);
    while (qtd<=0){
        printf("Informe a seguir a quantidade de ingressos disponivel para este evento: ");
        scanf("%d", &qtd);
    }
    return qtd;
}

int processaVendaAceita (int qtd_ingresso, float preco_ingresso, int qtd_desejada){
    float valor_total, qtd_dispo;
    valor_total = (qtd_desejada * preco_ingresso);
    qtd_dispo = (qtd_ingresso - qtd_desejada);
    if(qtd_desejada<15)
        printf("\n\nO valor total dessa compra foi de %.2fR$ ", valor_total);
    else
        printf("\n\nO valor total dessa compra foi de 0,00R$ ");
    return qtd_dispo;
}

int main(){
    int qtd_ingresso, qtd_ingresso_atualizada, qtd_compradores, id, qtd_desejada, cnt=0;
    float preco_ingresso;
    qtd_ingresso = leValidaQuantidadeDisponivel ();
    printf("Informe a seguir o preco unitario do ingresso para este evento: ");
    scanf("%f", &preco_ingresso);
    printf("Informe a seguir a quantidade de pessoas que desejam comprar ingressos: ");
    scanf("%d", &qtd_compradores);
    printf("\n");
        while (cnt<qtd_compradores && qtd_ingresso>0){
            printf("Informe a seguir o seu codigo de identificacao: ");
            scanf("%d", &id);
            printf("Informe a seguir a quantidade de ingressos que deseja comprar: ");
            scanf("%d", &qtd_desejada);
                if (qtd_desejada>15){
                    printf("Quantidade desejada acima da permitida. ");
                    qtd_ingresso = (qtd_ingresso + qtd_desejada);
                }
                else
                if (qtd_desejada>qtd_ingresso){
                    printf("Quantidade desejada acima da disponivel. ");
                    qtd_ingresso = (qtd_ingresso + qtd_desejada);
                }
                else
                    printf("Quantidade de compra aprovada. ");
            qtd_ingresso_atualizada = processaVendaAceita (qtd_ingresso, preco_ingresso, qtd_desejada);
            qtd_ingresso = qtd_ingresso_atualizada;
            printf("\nExistem %d ingressos disponivel agora. \n\n", qtd_ingresso);
            printf("--------------------------------------------\n\n");
            cnt++;
    }
    return 0;
}
