### git config 
git config --global user.name "Meu nome"
git config --global user.email "exemplo@seuemail.com.br"

### git clone
git clone "url-do-repositorio-HTTPS"

### comandos básicos no git
1. git status (git status exibe as condições do diretório de trabalho e da área de staging)
2. git add
3. git commit -m "comentario_das_alteracao"
4. git push
5. git log

### branchs
git branch - Listar todas as ramificações no seu repositório. Isso é sinônimo de git branch --list.

git branch <nome-branch> - Criar uma nova ramificação chamada .

git branch -d <nome-branch> - Excluir a ramificação especificada. Esta é uma operação “segura” em que o Git impede que você exclua a ramificação se tiver mudanças não mescladas.

git branch -D <branch> - Forçar a exclusão da ramificação especificada, mesmo que ela tenha mudanças não mescladas.

git branch -m <branch> - Renomear a ramificação atual para .
