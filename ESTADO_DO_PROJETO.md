# Estado do Projeto — Cabeleireiro Gildão / Sharp Cuts Poá

> Última conferência: 20/11/2026.

## Identificação e branches
- Repositório: `Paulino-Univesp/sharp-cuts-poa` (público).
- Projeto Lovable: `8a63ef11-edd1-4672-962a-6aa17cccf3a4`.
- Aplicação: site profissional do Cabeleireiro Gildão em Poá/SP.
- Stack identificada: React, TypeScript, Vite, Tailwind, Supabase e Vitest.
- Branch padrão: `estavel`.
- Branches existentes na conferência: `estavel`, `main`, `preview/gildao-premium`.
- Este documento foi criado em `docs/continuity-state`, derivada de `estavel`. Nenhuma branch existente foi alterada.

## Estado verificado
- Não foram encontrados PRs abertos, issues abertas ou execuções recentes de GitHub Actions na consulta de 20/11/2026.
- O README contém uma especificação inicial do site premium e ainda lista serviços/elementos que o usuário posteriormente pediu para remover ou ajustar.
- Existe um arquivo `.env` na raiz. **Não abrir, copiar, exibir, editar ou incluir valores dele em documentos ou mensagens.** Tratar como arquivo sensível.
- Nenhum build, lint ou teste visual foi executado nesta etapa.

## Decisões e preferências aprovadas pelo usuário
- Marca exibida: **Cabeleireiro Gildão**, não “Gildão Barbershop”.
- Localização apresentada como **Poá/SP**.
- Visual premium, sofisticado e responsivo, com imagens de qualidade.
- Remover os serviços Progressiva Masculina, Pigmentação de Barba e Hidratação Capilar quando a versão aprovada estiver sendo aplicada.
- Preço aprovado: Corte + Barba R$ 60.
- Rodapé: horário Seg a Sáb: 9h - 17h.
- Texto de agradecimento: assinatura “— Família Gildão”, título “Nossa Gratidão” e mensagem sobre “nosso trabalho e cada pessoa que passa por aqui”.
- Remover placas/fundos cinza indesejados atrás dos títulos.
- WhatsApp deve funcionar; houve anteriormente erro `ERR_BLOCKED_BY_RESPONSE`, portanto o link precisa ser testado no navegador real.
- Manter a branch `preview/gildao-premium` como branch de prévia existente; não sobrescrever ou apagar.

## Regras de continuidade
1. Não alterar `main` nem `estavel` diretamente neste protocolo.
2. Usar branch de trabalho/prévia confirmada pelo usuário; comparar com a branch estável antes de mudanças.
3. Não tocar no arquivo `.env` nem divulgar credenciais.
4. Não afirmar que o WhatsApp, imagens, mapa ou site estão funcionando sem teste real.
5. Atualizar este documento após cada mudança confirmada.

## Pendências
- Comparar `preview/gildao-premium` com `estavel` e identificar qual versão contém as últimas alterações aprovadas.
- Revisar o conteúdo real das telas contra as decisões listadas acima.
- Testar links WhatsApp, mapa, responsividade e carregamento das imagens.
- Executar build, lint e testes automatizados sem alterar branches estáveis.
- Conferir publicação/preview Lovable antes de declarar o site pronto.

## Registro de alterações
| Data | Alteração | Branch/commit | Validação |
|---|---|---|---|
| 20/11/2026 | Criação do estado inicial de continuidade | `docs/continuity-state` | Documento conferido no GitHub |

**Próxima sessão:** conferir os HEADs de `estavel`, `main` e `preview/gildao-premium`; só então decidir qual branch contém o trabalho mais recente.
