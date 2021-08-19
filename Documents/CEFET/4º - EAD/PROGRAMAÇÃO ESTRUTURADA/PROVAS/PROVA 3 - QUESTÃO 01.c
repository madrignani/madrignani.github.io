// PROVA 03 - Programação Estruturada
// CEFET-RJ Nova Friburgo
// 29/04/2021
// Giovanni de Oliveira Madrignani (1911818GSIS)

#include <stdio.h>
#define MAX 5000

void calculaParcela (float total, int *parcelas, float *valor_parcela){
    int cnt;
        for (cnt=60 ; *valor_parcela<100.0 ; cnt--){
            *parcelas = cnt;
            *valor_parcela = (total/cnt);
        }
}

int main(){
    int contribuinte, cnt, qtd_parcelas;
    float valor_tot, valor_parcela;
        for(cnt=0 ; cnt<MAX  ; cnt++){
            valor_parcela = qtd_parcelas = 0;
            printf("A seguir, informe o seu numero de contribuinte: ");
            scanf("%d", &contribuinte);
            printf("A seguir, informe o valor total de sua divida: ");
            scanf("%f", &valor_tot);
                if(valor_tot<=100.0 || valor_tot>100000.0)
                    printf("Parcelamento nao permitido. \n\n");
                else{
                    calculaParcela (valor_tot, &qtd_parcelas, &valor_parcela);
                    printf("NUMERO DO CONTRIBUINTE: %d", contribuinte);
                    printf("\nVOCE DEVE %.2fR$ NO TOTAL", valor_tot);
                    printf("\nSUA DIVIDA FOI PARCELADA EM %d VEZES, CADA PARCELA NO VALOR DE %.2fR$\n\n", qtd_parcelas, valor_parcela);
                }
        }
    printf("\n------------------------------------------------\n");
    return 0;
}
