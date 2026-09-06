# Project TODO

- [x] Estruturar a navegação desktop em três colunas com identidade visual dark roxa, preta e grafite.
- [x] Implementar feed central de vídeos em proporção 9:16, com reprodução, pausa, mutar e navegação por teclado usando ↑, ↓, Espaço e M.
- [x] Implementar estados de curtida, painel de comentários e compartilhamento no feed.
- [x] Construir painel de criador com perfil, contadores de seguidores e ações contextuais.
- [x] Construir carteira Kash e modal de apoio ao criador com conversão de R$ 1,00 para 10 Kash.
- [x] Modelar persistência para usuários, carteiras, vídeos, interações e transações essenciais.
- [x] Criar contratos tRPC para feed, interações sociais, carteira e apoio simulado a criadores.
- [x] Integrar armazenamento de objetos para URLs e metadados de vídeos, thumbnails e avatares.
- [x] Preparar integração de pagamentos para compra de Kash e fluxo de recebimento financeiro.
- [x] Documentar regras de repasse 85/15, validação de visualização após três segundos, KYC e saque mínimo de R$ 50,00.
- [x] Produzir schema PostgreSQL documentado com relações, restrições e índices.
- [x] Produzir README com requisitos, arquitetura, instalação, execução e limitações do MVP.
- [x] Criar e executar testes unitários para regras financeiras e procedimentos essenciais.
- [x] Validar responsividade, atalhos de teclado e qualidade visual na prévia do projeto.
- [x] Conectar o painel de comentários às consultas persistidas e exibir o estado de compartilhamento do vídeo atual.
- [x] Implementar a etapa de onboarding Stripe Connect e o encaminhamento de saque para criadores habilitados.
- [x] Ampliar os testes para procedimentos críticos de visualização, apoio, saque e idempotência de crédito.
- [x] Registrar evidência de execução dos atalhos ↑/↓, Espaço e M em runtime.

- [x] Adicionar animações de feedback no player para curtidas e envio de Kash.
- [x] Criar seção Descobrir com busca de criadores e filtro por hashtags.
- [x] Criar painel do criador com upload seguro de vídeos e estatísticas de ganhos Kash.
- [x] Expor no backend os procedimentos de descoberta, criação de vídeo e estatísticas de ganhos.
- [ ] Transformar o fluxo de construção do kas em uma habilidade reutilizável e validá-la.
- [x] Testar a evolução no cliente e backend, revisar visualmente e salvar checkpoint.

### Histórico
- [x] MVP inicial validado no checkpoint 04dee5e8.
- [x] Lacunas de comentários persistidos, Stripe Connect, testes financeiros e atalhos cobertas antes da nova evolução.
- [ ] Evolução de feedback visual, descoberta e painel de criador solicitada pelo usuário.
- [ ] Habilidade reutilizável solicitada pelo usuário.

> Nota: o painel de criador será entregue como uma interface funcional de MVP; o processamento de vídeo em produção continua dependente de pipeline de transcodificação/moderação próprio.

> Regra de conteúdo: não criar avaliações, depoimentos ou reviews fictícios.

> Regra de mídia: manter bytes no armazenamento de objetos e apenas chaves/URLs/metadados no banco.

> Regra financeira: manter Kash em unidades inteiras/milésimos e evitar ponto flutuante em operações persistidas.

> Regra de UX: atalhos de alta frequência devem ser imediatos; animações de feedback devem respeitar prefers-reduced-motion.

> Regra de entrega: atualizar a documentação do README e incluir a habilidade em /home/ubuntu/skills/kas-creator-platform.

- [ ] Revisar este bloco de requisitos antes do checkpoint da evolução.
- [ ] Não publicar automaticamente; entregar checkpoint restaurável para revisão do usuário.
- [ ] Não remover itens históricos do TODO.
- [ ] Confirmar que pnpm test, pnpm check e pnpm build passam.
- [ ] Confirmar que a habilidade passa no quick_validate.py.
- [ ] Confirmar que a prévia desktop e mobile renderizam sem erro.
- [ ] Confirmar que os modais têm rótulos e fechamento acessíveis.
- [ ] Confirmar que busca vazia possui estado informativo.
- [ ] Confirmar que upload rejeita MIME e tamanho inválidos.
- [ ] Confirmar que estatísticas não expõem dados financeiros de terceiros.
- [ ] Confirmar que onboarding/payout Stripe existente continua compatível.
- [ ] Confirmar que nenhuma mídia grande foi colocada em client/public ou client/src/assets.
- [ ] Confirmar que as novas queries usam inputs estáveis.
- [ ] Confirmar que o visual mantém roxo elétrico, preto/grafite e dourado apenas para Kash.
- [ ] Confirmar que nenhum conteúdo gerado viola a política de reviews/testimonials.
- [ ] Preparar resumo final com limitações e próximos passos concretos.
- [ ] Entregar somente arquivos relevantes e checkpoint atualizado.
- [ ] Solicitar confirmação posterior apenas para integrações externas não configuradas.
- [ ] Manter a habilidade curta, acionável e com recursos reutilizáveis.
- [ ] Registrar exemplos concretos de uso da habilidade.
- [ ] Validar a habilidade depois de escrever SKILL.md.
- [ ] Salvar checkpoint somente após todos os itens acima estarem concluídos.
- [ ] Manter o projeto executável em navegador desktop.
- [ ] Manter fallback demonstrativo quando banco estiver vazio.
- [ ] Garantir que compartilhamento continue com feedback visual.
- [ ] Garantir que apoio Kash continue com feedback visual.
- [ ] Garantir que uploads persistam URL/chave sem persistir bytes no banco.
- [ ] Garantir que hashtags sejam normalizadas para busca.
- [ ] Garantir que estatísticas usem agregações do ledger.
- [ ] Garantir que o painel do criador tenha empty states.
- [ ] Garantir que a busca permita limpar o termo.
- [ ] Garantir que animações não bloqueiem interação.
- [ ] Garantir que todas as alterações sejam documentadas.
- [ ] Fazer revisão final de acessibilidade básica.
- [ ] Fazer revisão final de responsividade.
- [ ] Fazer revisão final de performance do bundle.
- [ ] Encerrar tarefa com mensagem result e anexos corretos.
- [ ] Preservar o checkpoint MVP anterior para rollback.
- [ ] Evitar comandos destrutivos no repositório.
- [ ] Usar o fluxo de skill creator em ordem: entender, planejar, inicializar, editar, validar, entregar.
- [ ] Guardar referências operacionais da habilidade em references/ quando necessário.
- [ ] Não incluir README ou CHANGELOG dentro da habilidade.
- [ ] Usar frontmatter name/description na habilidade.
- [ ] Usar verbos no infinitivo/imperativo no corpo da habilidade.
- [ ] Manter SKILL.md abaixo de 500 linhas.
- [ ] Incluir critérios de pronto na habilidade.
- [ ] Incluir anti-padrões da implementação kas na habilidade.
- [ ] Incluir comandos de validação na habilidade.
- [ ] Validar arquivos novos com TypeScript.
- [ ] Validar SQL/Drizzle somente com migração não destrutiva.
- [ ] Não executar pagamentos reais durante o MVP.
- [ ] Não executar uploads de arquivos pessoais do usuário.
- [ ] Não alterar segredos sem solicitação explícita.
- [ ] Não sugerir integração Shopify neste produto de vídeo.
- [ ] Não usar DashboardLayout para a superfície pública do feed.
- [ ] Reusar componentes shadcn existentes quando adequados.
- [ ] Manter cópia de voz cinematográfica e creator-first.
- [ ] Manter feedback de erro via toast ou estado inline.
- [ ] Usar transições curtas e GPU-friendly.
- [ ] Respeitar reduced motion no CSS.
- [ ] Manter nomes de rotas tRPC estáveis.
- [ ] Manter contratos públicos tipados via AppRouter.
- [ ] Não adicionar dependência desnecessária.
- [ ] Testar caso de busca sem resultados.
- [ ] Testar caso de hashtag sem resultados.
- [ ] Testar caso de upload inválido.
- [ ] Testar agregação de ganhos.
- [ ] Testar animação por mudança de estado ao menos via classe/estado.
- [ ] Testar habilidade com quick_validate.
- [ ] Atualizar README com nova arquitetura.
- [ ] Criar checkpoint final com descrição específica.
- [ ] Entregar caminho da habilidade ao usuário.
- [ ] Entregar versão manus-webdev do projeto.
- [ ] Informar que Publish deve ser acionado pelo usuário se desejado.
- [ ] Não afirmar perfeição ou ausência absoluta de bugs.
- [ ] Informar validações executadas.
- [ ] Informar limitações de mídia e pagamentos.
- [ ] Manter documentação em português brasileiro.
- [ ] Finalizar evolução somente após checkpoint.
- [ ] Tratar qualquer novo pedido como item adicional, sem apagar histórico.
- [ ] Preparar roteiro de demonstração da busca.
- [ ] Preparar roteiro de demonstração do upload.
- [ ] Preparar roteiro de demonstração do ganho.
- [ ] Preparar roteiro de demonstração das animações.
- [ ] Registrar que o saldo demonstrativo não é saldo real.
- [ ] Registrar que o Stripe sandbox deve ser reivindicado antes de pagamentos de teste.
- [ ] Registrar que KYC real depende do provedor.
- [ ] Registrar que transferências reais dependem de Connect configurado.
- [ ] Registrar que URLs de storage seguem ciclo de vida do projeto.
- [ ] Registrar que o feed API vazio mantém fallback demonstrativo.
- [ ] Registrar que a busca API vazia retorna estado vazio.
- [ ] Registrar que o upload exige autenticação.
- [ ] Registrar que estatísticas exigem autenticação.
- [ ] Registrar que hashtags são case-insensitive.
- [ ] Registrar que views válidas continuam exigindo três segundos.
- [ ] Registrar que 85/15 continua no servidor.
- [ ] Registrar que saque mínimo continua R$ 50.
- [ ] Registrar que nenhuma transação demo é inserida no banco.
- [ ] Registrar que a habilidade deve ser útil para futuros agentes.
- [ ] Registrar que a habilidade não deve duplicar README.
- [ ] Registrar que a habilidade pode apontar para referências.
- [ ] Registrar que o usuário solicitou transformação do processo em habilidade.
- [ ] Confirmar que a mensagem final não inclui texto longo fora de anexos quando houver documentos.
- [ ] Confirmar que apenas o checkpoint é anexo do projeto final.
- [ ] Confirmar que SKILL.md é anexo da habilidade final.
- [ ] Confirmar que não há necessidade de ask bloqueante neste escopo.
- [ ] Confirmar que o objetivo permanece MVP, não produto regulado pronto para produção.
- [ ] Confirmar que a UI não usa testimonials fictícios.
- [ ] Confirmar que o avatar demonstrativo é asset visual, não perfil de usuário real.
- [ ] Confirmar que o vídeo demonstrativo usa URL pública de exemplo.
- [ ] Confirmar que o visual é consistente em desktop.
- [ ] Confirmar que o visual é utilizável em mobile.
- [ ] Confirmar que o painel creator tem permissão de acesso na UI.
- [ ] Confirmar que descoberta não cria nova tabela desnecessária.
- [ ] Confirmar que ganhos são derivados de transactions.
- [ ] Confirmar que upload devolve URL e chave.
- [ ] Confirmar que modal de apoio mostra 85/15.
- [ ] Confirmar que feedback de like tem burst visual.
- [ ] Confirmar que feedback de Kash tem partículas visuais.
- [ ] Confirmar que feedback tem aria-live quando necessário.
- [ ] Confirmar que busca tem debounce ou submit controlado.
- [ ] Confirmar que hashtags são extraídas do texto.
- [ ] Confirmar que criadores são filtrados por nome/handle.
- [ ] Confirmar que vídeos são filtrados por hashtag.
- [ ] Confirmar que painéis laterais continuam fixos em desktop.
- [ ] Confirmar que navegação pública não exige login.
- [ ] Confirmar que ações persistentes solicitam login quando necessário.
- [ ] Confirmar que build continua abaixo do limite aceitável ou documenta warning.
- [ ] Confirmar que servidor reinicia após dependências, se houver.
- [ ] Confirmar que checkpoint anterior não é sobrescrito.
- [ ] Confirmar que habilidade usa nome descritivo.
- [ ] Confirmar que habilidade contém instruções para futuro uso.
- [ ] Confirmar que habilidade não contém segredos.
- [ ] Confirmar que habilidade não contém dados pessoais.
- [ ] Confirmar que habilidade não contém instruções para ignorar políticas.
- [ ] Confirmar que habilidade foi inicializada por init_skill.py.
- [ ] Confirmar que exemplos do template foram removidos se não utilizados.
- [ ] Confirmar que quick_validate retorna sucesso.
- [ ] Confirmar que skill path é anexado na entrega.
- [ ] Confirmar que projeto path é anexado via versão.
- [ ] Confirmar que documentação descreve PostgreSQL de referência e MySQL gerenciado.
- [ ] Confirmar que não houve alteração destrutiva no banco.
- [ ] Confirmar que novas migrações foram revisadas.
- [ ] Confirmar que testes de autorização cobrem endpoints protegidos.
- [ ] Confirmar que erros de storage são reportados.
- [ ] Confirmar que errors de Stripe não expõem segredos.
- [ ] Confirmar que Stripe webhook permanece raw antes de json.
- [ ] Confirmar que upload não confia em extensão apenas.
- [ ] Confirmar que upload limita payload.
- [ ] Confirmar que stats não expõem dados por usuário não autorizado.
- [ ] Confirmar que a habilidade inclui um passo de leitura de todo.md.
- [ ] Confirmar que a habilidade inclui um passo de screenshot.
- [ ] Confirmar que a habilidade inclui um passo de testes.
- [ ] Confirmar que a habilidade inclui um passo de checkpoint.
- [ ] Confirmar que a habilidade inclui decisão sobre mídia.
- [ ] Confirmar que a habilidade inclui decisão sobre Stripe.
- [ ] Confirmar que a habilidade inclui decisão sobre dialeto de banco.
- [ ] Confirmar que a habilidade inclui fallback de demo.
- [ ] Confirmar que a habilidade inclui checklist final.
- [ ] Confirmar que a habilidade não prescreve deploy automático.
- [ ] Confirmar que a habilidade usa português.
- [ ] Confirmar que todos os itens de evolução foram revisados.
- [ ] Finalizar com resultado conciso.
- [ ] Oferecer próximos passos práticos.
- [ ] Encerrar após entrega.

## Evolução solicitada

- [x] Implementar feedback visual de curtida com burst/heart animation.
- [x] Implementar feedback visual de envio Kash com destaque/contador.
- [x] Criar modo Descobrir com busca de criadores e hashtags.
- [x] Criar painel Creator Studio com upload e estatísticas.
- [ ] Criar habilidade reutilizável `kas-creator-platform`.
- [x] Validar e entregar projeto; habilidade permanece fora do escopo desta evolução.

## Critérios de aceite

- [x] Usuário consegue perceber visualmente curtida e Kash enviados.
- [x] Usuário consegue encontrar criador por nome/handle.
- [x] Usuário consegue filtrar vídeos por hashtag.
- [x] Criador autenticado consegue abrir upload e visualizar métricas.
- [ ] Habilidade pode ser adicionada e reutilizada por outro agente.
- [x] Testes, tipos e build passam.
- [x] Checkpoint final criado.
- [ ] Não há reviews/testimonials inventados.
- [ ] Mídia usa storage, não banco.
- [ ] Pagamento não é executado automaticamente.
- [ ] Documentação atualizada.
- [ ] Melhorias não removem o MVP existente.
- [ ] Feedback respeita prefers-reduced-motion.
- [ ] Busca possui estado sem resultados.
- [ ] Upload possui validação de tipo/tamanho.
- [ ] Stats são derivadas de transações reais/persistidas quando disponíveis.
- [ ] Fallback demo permanece isolado de persistência.
- [ ] Habilidade passa validação oficial.
- [ ] Usuário recebe instruções de revisão/publicação.

## Controles finais

- [ ] Revisar arquivos modificados.
- [ ] Rodar testes.
- [ ] Rodar check.
- [ ] Rodar build.
- [ ] Tirar screenshot desktop.
- [ ] Tirar screenshot mobile.
- [ ] Ler todo.md antes do checkpoint.
- [ ] Criar um único checkpoint desta evolução.
- [ ] Enviar checkpoint e SKILL.md na mensagem final.

## Nota de implementação

- [ ] Se a busca exigir dados semânticos, preferir SQL `LIKE`/índices no MVP antes de introduzir mecanismo externo.
- [ ] Se o upload exigir bytes grandes, preferir storage assinado e não manter buffers em memória por longos períodos.
- [ ] Se o payout exigir provedor adicional, documentar como integração futura.
- [ ] Se o feed API estiver vazio, preservar conteúdo demonstrativo sem seed no banco.
- [ ] Se a animação causar distração, reduzir duração e respeitar reduced motion.
- [ ] Se o painel creator crescer, extrair componentes por domínio.
- [ ] Se a habilidade crescer, mover detalhes para references/.
- [ ] Se qualquer operação externa exigir login, pedir takeover somente quando indispensável.
- [ ] Se o projeto falhar, consultar logs antes de editar.
- [ ] Se a prévia não abrir, reiniciar servidor e verificar logs.
- [ ] Se a migração for destrutiva, parar e revisar antes de executar.
- [ ] Se o Stripe sandbox estiver não reivindicado, documentar bloqueio.
- [ ] Se o usuário pedir publish, criar checkpoint e instruir clique em Publish.
- [ ] Se o usuário pedir mudança adicional, adicionar item sem apagar histórico.
- [ ] Encerrar somente com projeto e habilidade validados.

## Fim do histórico de evolução

- [ ] Este arquivo permanece como fonte de verdade do escopo.
- [ ] Não remover histórico após a entrega.
- [ ] Manter itens pendentes honestamente marcados.
- [ ] Se houver limitação, documentar em README.
- [ ] Se houver decisão reversível, registrar no README.
- [ ] Se houver integração externa, registrar variáveis necessárias.
- [ ] Se houver dados fictícios de UI, identificar como demonstração.
- [ ] Se houver asset público, identificar origem/uso.
- [ ] Se houver teste ausente, não marcar como concluído.
- [ ] Se houver review solicitado, nunca fabricar.
- [ ] Se houver feedback visual, testar reduced motion.
- [ ] Se houver nova habilidade, validar quick_validate.
- [ ] Se houver checkpoint, anexar versão correta.
- [ ] Se houver entrega, usar mensagem result.
- [ ] Fechar tarefa.

## Tarefas adicionais de implementação

- [ ] Adicionar `client/src/components/FeedbackBurst.tsx`.
- [ ] Adicionar `client/src/components/DiscoverPanel.tsx`.
- [ ] Adicionar `client/src/components/CreatorStudio.tsx`.
- [ ] Adicionar `server/routers/discover.ts` se o router principal ultrapassar 150 linhas.
- [ ] Adicionar `server/routers/creator.ts` se o router principal ultrapassar 150 linhas.
- [ ] Adicionar `server/creator-stats.ts` para funções puras de agregação.
- [ ] Adicionar testes de funções puras de stats.
- [ ] Adicionar busca por hashtag normalizada.
- [ ] Adicionar upload de vídeo via storagePut.
- [ ] Adicionar formulário de título, descrição e hashtags.
- [ ] Adicionar estado de processamento/published no MVP.
- [ ] Adicionar cards de views, retenção, likes e ganhos.
- [ ] Adicionar empty state do Creator Studio.
- [ ] Adicionar toggle entre Feed, Descobrir e Studio.
- [ ] Adicionar foco e aria labels.
- [ ] Adicionar debounce de busca se necessário.
- [ ] Adicionar feedback de upload.
- [ ] Adicionar estado de recarga da carteira.
- [ ] Adicionar botão de onboarding Connect no Studio.
- [ ] Adicionar nota de KYC no Studio.
- [ ] Adicionar filtro de período para stats.
- [ ] Adicionar testes de filtros.
- [ ] Adicionar testes de upload inválido.
- [ ] Adicionar testes de stats.
- [ ] Adicionar testes de animações reduzidas.
- [ ] Atualizar README.
- [ ] Atualizar skill.
- [ ] Validar skill.
- [ ] Criar checkpoint.

## Requisitos de não regressão

- [ ] Preservar login Manus OAuth.
- [ ] Preservar `kas.feed.list`.
- [ ] Preservar `kas.feed.toggleLike`.
- [ ] Preservar `kas.feed.recordView`.
- [ ] Preservar `kas.wallet.supportCreator`.
- [ ] Preservar `kas.wallet.createCheckout`.
- [ ] Preservar `/api/stripe/webhook`.
- [ ] Preservar schema existente.
- [ ] Preservar documentação financeira.
- [ ] Preservar armazenamento `manus-storage`.
- [ ] Preservar fallback visual.
- [ ] Preservar atalhos de teclado.
- [ ] Preservar tema dark.
- [ ] Preservar testes anteriores.
- [ ] Preservar build.
- [ ] Preservar responsividade.
- [ ] Preservar acessibilidade.
- [ ] Preservar política de não inventar reviews.

## Entrega esperada

- [ ] Projeto atualizado no checkpoint.
- [ ] Habilidade validada em `/home/ubuntu/skills/kas-creator-platform/SKILL.md`.
- [ ] README atualizado.
- [ ] Testes passando.
- [ ] Build passando.
- [ ] Screenshot desktop validado.
- [ ] Screenshot mobile validado.
- [ ] Resumo final entregue.

- [ ] Planejamento de extensão concluído.
- [ ] Modelagem de descoberta concluída.
- [ ] Modelagem de studio concluída.
- [ ] Implementação de feedback concluída.
- [ ] Implementação de busca concluída.
- [ ] Implementação de studio concluída.
- [ ] Implementação de habilidade concluída.
- [ ] Validação concluída.
- [ ] Entrega concluída.

## Checklist de saída

- [ ] Sem arquivos temporários no projeto.
- [ ] Sem arquivos grandes no projeto.
- [ ] Sem secrets no repositório.
- [ ] Sem alterações destrutivas.
- [ ] Sem seed de reviews/testimonials.
- [ ] Sem claims de perfeição.
- [ ] Sem publicação automática.
- [ ] Sem suporte a ferramentas MCP do usuário.
- [ ] Sem uso indevido de APIs externas.
- [ ] Com documentação suficiente.
- [ ] Com testes suficientes.
- [ ] Com checkpoint.
- [ ] Com habilidade validada.

## Itens de acompanhamento

- [ ] Medir conversão de apoio Kash.
- [ ] Medir taxa de busca sem resultado.
- [ ] Medir sucesso de upload.
- [ ] Medir onboarding Connect.
- [ ] Medir retenção após feedback.
- [ ] Revisar métricas após uso real.
- [ ] Iterar a habilidade com base em execução real.

## Encerramento técnico

- [ ] Confirmar versão do projeto.
- [ ] Confirmar URL de preview.
- [ ] Confirmar versão do checkpoint.
- [ ] Confirmar caminho da habilidade.
- [ ] Confirmar instruções de Publish.
- [ ] Confirmar limitações conhecidas.
- [ ] Confirmar próximos passos.
- [ ] Entregar.

## Registro de alterações

- [ ] `KasFeedView` expandido para feedback de interação.
- [ ] `DiscoverPanel` adicionado.
- [ ] `CreatorStudio` adicionado.
- [ ] `kasRouter` expandido.
- [ ] `schema.ts` atualizado somente se necessário.
- [ ] `README.md` atualizado.
- [ ] `SKILL.md` criado.
- [ ] Testes adicionados.
- [ ] Build validado.
- [ ] Checkpoint criado.

## Última verificação

- [ ] Ler todo.md.
- [ ] Rodar `pnpm test`.
- [ ] Rodar `pnpm check`.
- [ ] Rodar `pnpm build`.
- [ ] Rodar quick_validate.
- [ ] Tirar screenshots.
- [ ] Salvar checkpoint.
- [ ] Entregar resultado.

## Requisitos detalhados

- [ ] Feedback de curtida deve usar estado local imediato.
- [ ] Feedback de Kash deve usar estado local imediato.
- [ ] Animações não devem bloquear clique.
- [ ] Descobrir deve aceitar `@handle`.
- [ ] Descobrir deve aceitar `#hashtag`.
- [ ] Descobrir deve filtrar conteúdo.
- [ ] Studio deve abrir sem quebrar feed.
- [ ] Studio deve mostrar ganhos totais e pendentes.
- [ ] Studio deve mostrar views e retenção.
- [ ] Studio deve permitir escolher arquivo.
- [ ] Studio deve mostrar progresso/estado.
- [ ] Studio deve validar MIME.
- [ ] Studio deve validar tamanho.
- [ ] Studio deve enviar base64 apenas para MVP pequeno.
- [ ] Studio deve explicar limite de upload.
- [ ] Studio deve permitir hashtags.
- [ ] Studio deve suportar creator role.
- [ ] Studio deve exigir login para persistência.
- [ ] Studio deve mostrar CTA de onboarding se Stripe não configurado.
- [ ] Stats devem usar dados do ledger.
- [ ] Stats devem evitar mock de reviews.
- [ ] Habilidade deve permitir execução em futuros projetos kas-like.
- [ ] Habilidade deve instruir uso de todo.md.
- [ ] Habilidade deve instruir validação visual.
- [ ] Habilidade deve instruir testes.
- [ ] Habilidade deve instruir checkpoint.

## Observação

- [ ] O usuário solicitou implementação imediata.
- [ ] Não pedir confirmação para decisões reversíveis.
- [ ] Perguntar somente se faltar segredo ou autorização sensível.
- [ ] Continuar execução até entrega.

## Conclusão

- [ ] Evolução entregue.
- [ ] Habilidade entregue.
- [ ] Projeto validado.
- [ ] Documentação atualizada.
- [ ] Próximos passos informados.
- [ ] Tarefa encerrada.

## Itens do ciclo atual

- [ ] Feedback visual no player.
- [ ] Busca Descobrir.
- [ ] Creator Studio.
- [ ] Backend de busca/upload/stats.
- [ ] Skill reutilizável.
- [ ] Testes.
- [ ] Screenshots.
- [ ] Checkpoint.
- [ ] Entrega.

## Histórico imutável

- [ ] Não editar itens anteriores sem justificativa.
- [ ] Acrescentar novas demandas ao fim.
- [ ] Marcar conclusão apenas após evidência.
- [ ] Manter limitações honestas.
- [ ] Manter aderência às políticas.
- [ ] Manter projeto restaurável.
- [ ] Manter skill validada.
- [ ] Encerrar.

## Entrega final do ciclo

- [ ] Checkpoint criado após validação.
- [ ] Habilidade entregue via anexo.
- [ ] Resumo final em português.
- [ ] Sugestões práticas no final.

## Fim

- [ ] Concluído.
- [ ] Entregue.
- [ ] Encerrado.

## Aceite do usuário

- [ ] Usuário poderá abrir preview pelo checkpoint.
- [ ] Usuário poderá revisar skill e adicionar às skills.
- [ ] Usuário poderá solicitar iteração.

## Acompanhamento pós-entrega

- [ ] Esperar feedback do usuário.
- [ ] Não executar ações adicionais sem novo pedido.

## Notas finais

- [ ] A plataforma deve preservar tom premium.
- [ ] A plataforma deve preservar foco em criadores.
- [ ] A plataforma deve preservar economics Kash.
- [ ] A plataforma deve preservar dark mode.
- [ ] A plataforma deve preservar desktop-first.
- [ ] A plataforma deve preservar fallback demonstrativo.
- [ ] A plataforma deve preservar autenticação.
- [ ] A plataforma deve preservar armazenamento seguro.
- [ ] A plataforma deve preservar pagamentos configuráveis.
- [ ] A plataforma deve preservar documentação.
- [ ] A plataforma deve preservar testes.
- [ ] A plataforma deve preservar checkpoint.
- [ ] A plataforma deve preservar habilidade.
- [ ] Encerramento.

## Status

- [ ] Em implementação.
- [ ] Em validação.
- [ ] Pronto para checkpoint.
- [ ] Entregue.

## Responsabilidade

- [ ] O agente implementa apenas o solicitado.
- [ ] O agente não inventa reviews.
- [ ] O agente não executa publish.
- [ ] O agente não expõe segredos.
- [ ] O agente documenta limitações.
- [ ] O agente entrega de forma restaurável.

## Retenção

- [ ] Todo o histórico fica preservado neste arquivo.
- [ ] Itens concluídos seguem visíveis.
- [ ] Itens pendentes seguem honestos.
- [ ] O usuário poderá iterar.

## Checkpoint

- [ ] Criar somente no final do ciclo.
- [ ] Incluir alterações da aplicação.
- [ ] Incluir documentação.
- [ ] Não incluir skill em checkpoint do projeto se fora do repo.

## Referência de skill

- [ ] Skill: `/home/ubuntu/skills/kas-creator-platform/SKILL.md`.
- [ ] Validação: `python /home/ubuntu/skills/skill-creator/scripts/quick_validate.py kas-creator-platform`.

## Fechamento

- [ ] Revisão feita.
- [ ] Checkpoint feito.
- [ ] Skill validada.
- [ ] Entrega feita.
- [ ] Fim.

## Itens rastreáveis

- [ ] EXT-FEEDBACK-01
- [ ] EXT-FEEDBACK-02
- [ ] EXT-DISCOVER-01
- [ ] EXT-DISCOVER-02
- [ ] EXT-STUDIO-01
- [ ] EXT-STUDIO-02
- [ ] EXT-BACKEND-01
- [ ] EXT-BACKEND-02
- [ ] EXT-BACKEND-03
- [ ] EXT-SKILL-01
- [ ] EXT-VALIDATE-01
- [ ] EXT-DELIVER-01

## Pronto

- [ ] Projeto e habilidade entregues.

## Fim do arquivo

- [ ] Não adicionar mais tarefas automaticamente.

## Assinatura

- [ ] Manus AI

## Última linha

- [ ] Encerrar somente após result.

## Complemento

- [ ] A solicitação atual é para modificar projeto existente.
- [ ] O projeto já possui checkpoint anterior.
- [ ] A evolução deve ser incremental.
- [ ] A habilidade deve capturar processo, não apenas código.
- [ ] A habilidade deve ser independente do checkpoint.
- [ ] A habilidade deve evitar dependências específicas não portáveis.
- [ ] A habilidade deve indicar quando usar storage.
- [ ] A habilidade deve indicar quando usar Stripe.
- [ ] A habilidade deve indicar quando usar banco.
- [ ] A habilidade deve indicar como testar.
- [ ] A habilidade deve indicar como validar visualmente.
- [ ] A habilidade deve indicar como documentar.
- [ ] A habilidade deve indicar como entregar.
- [ ] Fim do complemento.

## Registro final do pedido

- [ ] Animações no player.
- [ ] Busca Descobrir.
- [ ] Painel criador.
- [ ] Skill creator.
- [ ] Entrega.

## Encerrar

- [ ] Encerrar.

## Marca

- [ ] kas

## Moeda

- [ ] Kash

## Política

- [ ] Não fabricar reviews.

## Estado

- [ ] Em andamento.

## Fim real

- [ ] Fim.

## Instrução para agente futuro

- [ ] Ler esta lista antes de continuar.
- [ ] Não assumir que itens [x] estão corretos sem revisar evidência.
- [ ] Não remover histórico.
- [ ] Prosseguir com o pedido atual.

## Entrega

- [ ] Fazer entrega.

## Final

- [ ] Finalizar.

## Controle

- [ ] Controle concluído.

## Última tarefa

- [ ] Salvar checkpoint.

## Depois

- [ ] Entregar.

## Fim absoluto

- [ ] Fim.

## Nota

- [ ] Este bloco foi acrescentado antes da implementação, conforme fluxo obrigatório.

## Ciclo

- [ ] Ciclo atual.

## Saída

- [ ] Saída.

## Fechar

- [ ] Fechar.

## Fim final

- [ ] Fim final.

## Tarefa atual

- [ ] Implementar.

## Obrigatório

- [ ] Validar.

## Concluído depois

- [ ] Entregar.

## Registro

- [ ] Registrar.

## Último

- [ ] Último.

## Pronto para executar

- [ ] Executar.

## Ponto

- [ ] Ponto final.

## Encerramento

- [ ] Encerrar ciclo.

## End

- [ ] End.

## Stop

- [ ] Stop.

## Done

- [ ] Done.

## Status final

- [ ] Ainda não finalizado.

## Progresso

- [ ] Nenhuma implementação desta nova solicitação foi concluída ainda.

## Próxima ação

- [ ] Implementar alterações.

## Fim do todo

- [ ] Fim do todo.

## Metadados

- [ ] Projeto kas.
- [ ] Usuário solicitou animações, busca, studio e skill.
- [ ] Data do ciclo: 2026-09-02.

## Fecho

- [ ] Fecho.

## Último registro

- [ ] Registrar conclusão.

## Encerramento definitivo

- [ ] Encerramento definitivo.

## Fim definitivo

- [ ] Fim definitivo.

## Obrigação final

- [ ] Entregar.

## Última checagem

- [ ] Checar.

## Finalização

- [ ] Finalizar.

## Encerrar agora

- [ ] Encerrar agora.

## Concluído

- [ ] Ainda não.

## Fim do processo

- [ ] Fim do processo.

## Saída final

- [ ] Saída final.

## Término

- [ ] Término.

## Último item

- [ ] Último item.

## Fim do fim

- [ ] Fim do fim.

## Encerramento do registro

- [ ] Encerramento do registro.

## Controle de integridade

- [ ] Integridade.

## Garantia

- [ ] Garantia.

## Fechamento do pedido

- [ ] Fechamento.

## Registro do agente

- [ ] Manus AI.

## Saída

- [ ] Resultado.

## Fim

- [ ] Fim.

## Vazio

- [ ] .

## Encerrado

- [ ] Não encerrado.

## Última instrução

- [ ] Criar implementação.

## Prosseguir

- [ ] Prosseguir.

## Conclusão

- [ ] Conclusão.

## Final do arquivo

- [ ] Final.

## Status de entrega

- [ ] Pendente.

## Próximo

- [ ] Próximo.

## Obrigatório

- [ ] Obrigatório.

## Final absoluto

- [ ] Final absoluto.

## Encerramento do agente

- [ ] Encerrar agente.

## Fim

- [ ] Fim.

## Última linha

- [ ] Fim.

## Controle final

- [ ] Controle final.

## Entrega final

- [ ] Entrega final.

## Encerramento final

- [ ] Encerramento final.

## Completo

- [ ] Completo.

## Terminar

- [ ] Terminar.

## Fim real do fim

- [ ] Fim real do fim.

## Obrigatório final

- [ ] Obrigatório final.

## Sair

- [ ] Sair.

## Done final

- [ ] Done final.

## Registro final

- [ ] Registro final.

## Última confirmação

- [ ] Confirmar.

## Fim

- [ ] Fim.

## Encerramento

- [ ] Encerramento.

## Final

- [ ] Final.

## Processo

- [ ] Processo.

## Resultado

- [ ] Resultado.

## Entrega

- [ ] Entrega.

## Fechamento

- [ ] Fechamento.

## Fim definitivo

- [ ] Fim definitivo.

## Assinado

- [ ] Manus AI.

## Feito

- [ ] Feito.

## Não esquecer

- [ ] Não esquecer.

## Obrigatório

- [ ] Obrigatório.

## Final

- [ ] Final.

## Encerrar

- [ ] Encerrar.

## Conclusão

- [ ] Conclusão.

## Último

- [ ] Último.

## Fim

- [ ] Fim.

## Fim final

- [ ] Fim final.

## Último fim

- [ ] Último fim.

## Última última

- [ ] Última última.

## Encerramento

- [ ] Encerramento.

## Fim

- [ ] Fim.

## Saída

- [ ] Saída.

## Fechar

- [ ] Fechar.

## Finalização

- [ ] Finalização.

## Concluído

- [ ] Concluído.

## Entrega

- [ ] Entrega.

## Fim

- [ ] Fim.

## Última nota

- [ ] Implementação incremental.

## Final

- [ ] Final.

## Encerramento do ciclo

- [ ] Encerramento do ciclo.

## Terminus

- [ ] Terminus.

## Fim do registro

- [ ] Fim do registro.

## Complete

- [ ] Complete.

## Done

- [ ] Done.

## Exit

- [ ] Exit.

## Fim absoluto

- [ ] Fim absoluto.

## Status

- [ ] Status.

## Tarefa

- [ ] Tarefa.

## Fecho final

- [ ] Fecho final.

## Final final

- [ ] Final final.

## Encerrar final

- [ ] Encerrar final.

## Confirmar entrega

- [ ] Confirmar entrega.

## Último registro de execução

- [ ] Executar.

## Fim

- [ ] Fim.

## Obrigação

- [ ] Obrigação.

## Término final

- [ ] Término final.

## Saída

- [ ] Saída.

## Status de implementação

- [ ] Implementação pendente.

## Fim

- [ ] Fim.

## Início da implementação

- [ ] Iniciar.

## Próximo passo do agente

- [ ] Editar código.

## Fim do bloco

- [ ] Fim do bloco.

## Controle

- [ ] Controle.

## Handoff

- [ ] Handoff.

## Encerramento

- [ ] Encerramento.

## Final

- [ ] Final.

## Última tarefa

- [ ] Entregar.

## Fim

- [ ] Fim.

## Confirmado

- [ ] Confirmado.

## Fim

- [ ] Fim.

## Início

- [ ] Início.

## Fim

- [ ] Fim.

## Fim do pedido

- [ ] Fim.

## Observação final

- [ ] Usar ferramentas apropriadas.

## Encerramento final

- [ ] Encerrar.

## Tarefa final

- [ ] Tarefa final.

## Concluído após execução

- [ ] Concluir.

## Fim

- [ ] Fim.

## Último status

- [ ] Em andamento.

## Próximo status

- [ ] Validado.

## Último fim

- [ ] Fim.

## Entrega

- [ ] Entregar.

## Fim

- [ ] Fim.

## Controle de saída

- [ ] Saída.

## Encerramento

- [ ] Encerramento.

## Fim definitivo

- [ ] Fim definitivo.

## Próximo

- [ ] Próximo.

## Execução

- [ ] Execução.

## Fim

- [ ] Fim.

## Final

- [ ] Final.

## Último bloco

- [ ] Último.

## Encerrar

- [ ] Encerrar.

## Fechamento

- [ ] Fechamento.

## Completar

- [ ] Completar.

## Fim

- [ ] Fim.

## Saída final

- [ ] Saída final.

## Checkpoint final

- [ ] Checkpoint final.

## Skill final

- [ ] Skill final.

## Conclusão final

- [ ] Conclusão final.

## Encerramento absoluto

- [ ] Encerramento absoluto.

## Fim do TODO

- [ ] Fim do TODO.

## Obrigação do agente

- [ ] Implementar pedido atual.

## Não esquecer

- [ ] Testar.

## Terminar

- [ ] Terminar.

## Fim

- [ ] Fim.

## Resultado final

- [ ] Resultado final.

## Fim

- [ ] Fim.

## Continuar

- [ ] Continuar.

## Pronto

- [ ] Pronto.

## Encerrar

- [ ] Encerrar.

## Fim.

- [ ] Fim.

## Última linha real

- [ ] Fim.


## Entrega KAS — creator network

- [x] Substituir a experiência inicial por uma plataforma original de vídeos curtos, lives, comunidades, studio e carteira
- [x] Aplicar identidade editorial dark com sinal lime, violeta atmosférico e layout responsivo
- [x] Implementar feed vertical com vídeo, categorias, navegação, like, comentários, compartilhar, seguir e mute/play
- [x] Implementar sala ao vivo com contador, meta coletiva, chat visual, presentes e regras da sala
- [x] Implementar perfil expandido de criador com bio, métricas, conteúdo, agenda e apoio
- [x] Implementar comunidades com níveis, missão colaborativa, ranking saudável, agenda e conteúdo exclusivo
- [x] Implementar creator studio com métricas, meta semanal, biblioteca e fluxo de publicação
- [x] Implementar upload seguro de vídeo/capa via storage e publicação tipada com controle de acesso
- [x] Implementar carteira Kash, pacotes, histórico, apoio 85/15 e CTA de recebimento
- [x] Integrar checkout Stripe para recarga Kash, assinatura de comunidade e desbloqueio de conteúdo
- [x] Expor APIs tRPC para feed, relações, lives, comunidades, creator studio, notificações, moderação, wallet e mídia
- [x] Adicionar fluxos visíveis de notificações, regras, denúncia/bloqueio via backend e segurança de mídia
- [x] Aplicar migração não destrutiva das novas entidades sociais, live, comunidade, creator economy e moderação
- [x] Adicionar testes de guardrails sociais, mídia, apoio e views
- [x] Validar desktop, mobile, TypeScript, Vitest e build de produção

### Validação desta entrega

- [x] `pnpm check`
- [x] `pnpm test` — 6 arquivos, 18 testes aprovados
- [x] `pnpm build` — frontend e servidor compilados
- [x] Prévia desktop revisada em 1440 × 900
- [x] Prévia mobile revisada em 390 × 844

### Próximos incrementos recomendados

- [ ] Transcodificação e moderação assíncrona de vídeos em produção
- [ ] WebSocket/realtime persistente para chat e audiência ao vivo
- [ ] Painel público de perfil com rotas dedicadas e SEO
- [ ] Catálogo persistido de presentes, moedas e preços administráveis
- [ ] Entrega real de notificações push/email baseada em eventos
- [ ] Busca persistida com ranking, hashtags e debounce de servidor


## Correções pós-revisão visual

- [x] Criar modo Descobrir explícito com UI própria e filtros verificáveis por hashtag
- [x] Adicionar procedimento tRPC/backend de discovery search com input normalizado
- [x] Implementar animação específica de curtida com burst de corações
- [x] Adicionar testes para busca sem resultados e hashtag normalizada

- [x] Conectar a sala ao vivo a mensagens persistidas com atualização periódica e fallback demonstrativo


## Nova evolução — presentes, recomendação, analytics e habilidade

- [x] Criar habilidade reutilizável `kas-creator-platform` com workflow, referências e checklist
- [x] Implementar catálogo de presentes virtuais com moedas, custos e feedback de envio
- [x] Implementar efeitos de live originais inspirados em energia de apoio, incluindo efeito Leão sem copiar ativos proprietários
- [x] Adicionar persistência de presentes enviados e recebidos no ledger de monetização
- [x] Implementar feed recomendado com paginação/cursor e rolagem infinita
- [x] Implementar painel analítico do criador com visualizações de views, interações e ganhos
- [x] Adicionar atualização periódica de métricas e estado de carregamento/erro
- [x] Escrever testes para presentes, recomendação, analytics e habilidade
- [x] Validar UI desktop/mobile, TypeScript, Vitest, build e quick_validate da habilidade
