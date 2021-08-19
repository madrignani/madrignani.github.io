//GIOVANNI DE OLIVEIRA MADRIGNANI - 1911818GSIS
//NOVA FRIBURGO, 25 DE MAIO DE 2021
//PROGRAMAÇÃO ESTRUTURADA > CEFET-RJ
//EXERCÍCIO 04 VALENDO NOTA

#include <stdio.h>
#include <string.h>
#define CHAR_MAX 30
#define PROD_MAX 100
#define MES_MAX 13

void leNomes(char nome[][CHAR_MAX]){
    int a;
        for(a=0; a<PROD_MAX; a++){
            printf("A seguir, digite o nome do produto: ");
            scanf(" %[^\n]", &nome[a]);
        }
}

void inicializa (int venda[][MES_MAX]){
    int b, c;
        for (b=0; b<PROD_MAX; b++){
                for (c=0; c<MES_MAX; c++){
                        venda[b][c] = 0;
                }
        }
}

void exibe (int venda[][MES_MAX], char nome[][CHAR_MAX]){
    int g, h;
        for (g=0; g<PROD_MAX; g++){
            printf("\n\nVENDAS DO PRODUTO %d = %s", g+1, nome[g]);
            printf("\n");
            for (h=1; h<MES_MAX; h++){
                    printf("MES %d: %d\n" , h, venda[g][h]);
            }
        }
}

int busca(char nome[][CHAR_MAX]){
    int i;
        for(i=0; i<PROD_MAX; i++){
            if(strcmp(nome[i], nome[i]) == 0)
                return i;
        }
    return -1;
}

int main(){
    char produtos_nome[PROD_MAX][CHAR_MAX];
    int venda[PROD_MAX][MES_MAX];
    int d, f, mes_venda, qtd_unidades, e, qtd_vendas, posicao_nome;
    leNomes(produtos_nome);
    printf("\n");
    inicializa(venda);
        for(d=0; d<PROD_MAX; d++){
            qtd_vendas = 0;
            printf("Produto %d: ", d+1);
            printf("\nA seguir, informe a quantidade total de vendas realizadas deste produto: ");
            scanf("%d", &qtd_vendas);
            posicao_nome = busca(produtos_nome);
                for(f=0; f<qtd_vendas; f++){
                    mes_venda = 0;
                    qtd_unidades=0;
                    printf("A seguir, informe o mes da venda %d do produto: ", f+1);
                    scanf("%d", &mes_venda);
                    printf("A seguir, informe a quantidade vendida desse produto nesse mes: ");
                    scanf("%d", &qtd_unidades);
                    venda[d][mes_venda] = (venda[d][mes_venda] + qtd_unidades);
                }
            printf("\n");
        }
    exibe(venda, produtos_nome);
    printf("\n\n--------------------------------------------------------------------------------------\n\n");
    return 0;
}
