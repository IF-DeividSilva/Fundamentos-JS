# Códigos úteis Github

## Comandos

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