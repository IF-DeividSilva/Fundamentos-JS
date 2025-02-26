# Códigos úteis Github

## Comandos

### Configurar um repositorio como Git
```bash
git init
```

### Ajustar nome e Emai padrão
```bash
git config --global user.email "endereco email"
git config --global user.name "Seu nome"
```

### Verificar estado atual do repositorio
```bash
git status
```

### Mostrar detalhes do último commit
```bash
git show
```

### Clonar repositório
```bash
git clone https://github.com/
```
### Ignorar pasta
```bash
Criar um arquivo .gitignore
Escrever a pasta a ser ignorada nele

git add .gitignore
git commit -m "commit"
```	

### Preparar o commit
```bash
git add "Nome_arquivo"
git commit -m "commit" 
```
### Enviar o commit
```bash
git push
```
### Sincronizar com reposidorio remoto
```bash
git pull
```
### Ver historico
```bash
git hist
```
### Branch
```bash
Basicamente é uma ramificação de um projeto
--> Eh um ponteiro para um commit
--> A branch master ve tudo que as outras branches commitaram mais as outras branches não veem o que a master fez.
```
![img](https://github.com/IF-DeividSilva/Fundamentos-JS/blob/main/Aulas/Aula_10/node/image.png)
#### Criar uma nova Branch
```bash
git branch "Nome_da_Branch"
```
#### Trocar de Branch
```bash
git switch "Nome_Branch"
```

#### Excluir Branch
```bash
git branch -d "Nome_Branch"
* Não é possivel remover a branch corrente
```

### Tags
```bash
As tags são etiquetas, geralmente usadas para marcar lançamentos estáveis ou marcos importantes
--> tags são imutáveis 
```

#### Tags Anotadas
```bash
git tag -a "number-vesion" -m "nome-version"
```
#### Listar Tags
```bash
git tag
```

#### Enviar Tags para o repositorio
```bash
git push --tags
```
### Descartar Alterações (Area de Trabalho ('Antes do git add'))
```bash
git restore nome_Arquivo
```
### Descartar Alterações (Area de Preparo ('Depois do git add'))
```bash
git restore --staged nome_Arquivo 
ou 
git restore --staged . (todos)
```
### Descartar Alterações (Já commitadas)
```bash
git revert head
```

### Descartar Alterações (Com Reset) 

#### Soft
```bash
git reset --soft head~
```
#### Mixed (Padrão)
```bash
git reset head~
```

#### Hard (Não Preseva em nenhum lugar)
```bash
git reset --hard head~
```

### Submodulos
#### Usado para add repositorios dentro do seu repositorio
```bash
git submodule add <"URL_REPO">
```
##### Inicializar os submodules
```bash
 git submodule ini
```
##### Realizar o download dos arquivos dos submodules
```bash
 git submodule update
```

### Stash
#### Quando é necessário alternar brenches sem que as alterações da brench atual tenham sido terminadas e comitadas. Nesse caso as alterações são salvas em um pilha para não ficarem conflitantes e não serem perdidas.
##### Manda para pilha
```bash
 git stash
```
##### Lista a pilha
```bash
 git stash list
```
##### Aplica as alterações da primeira entrada da pilha 
```bash
 git stash apply stash@{1}
```
##### Retornar as alterações da pilha para área de trabalho
```bash
 git stash pop
```

##### Limpar as entradas da pilha
```bash
 git stash clean
```