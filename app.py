import tkinter as tk
from tkinter import ttk

class OrganizadorAlimentos:
    def __init__(self, root):
        self.root = root
        self.root.title("Organizador de Alimentos")

        self.dados_alimentos = {dia: {} for dia in ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']}

        self.criar_interface()

    def criar_interface(self):
        # Rótulo e entrada para o nome do alimento
        self.label_alimento = tk.Label(self.root, text="Nome do Alimento:")
        self.label_alimento.grid(row=0, column=0, padx=5, pady=5)
        self.entry_alimento = tk.Entry(self.root)
        self.entry_alimento.grid(row=0, column=1, padx=5, pady=5)

        # Rótulo e entrada para a quantidade
        self.label_quantidade = tk.Label(self.root, text="Quantidade:")
        self.label_quantidade.grid(row=1, column=0, padx=5, pady=5)
        self.entry_quantidade = tk.Entry(self.root)
        self.entry_quantidade.grid(row=1, column=1, padx=5, pady=5)

        # Rótulo e combobox para o dia da semana
        self.label_dia = tk.Label(self.root, text="Dia da Semana:")
        self.label_dia.grid(row=2, column=0, padx=5, pady=5)
        self.combobox_dia = ttk.Combobox(self.root, values=['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'])
        self.combobox_dia.grid(row=2, column=1, padx=5, pady=5)
        self.combobox_dia.set('Segunda')

        # Botão para adicionar alimento
        self.botao_adicionar = tk.Button(self.root, text="Adicionar Alimento", command=self.adicionar_alimento)
        self.botao_adicionar.grid(row=3, column=0, columnspan=2, pady=10)

        # Botão para gerar tabela
        self.botao_gerar_tabela = tk.Button(self.root, text="Gerar Tabela", command=self.gerar_tabela)
        self.botao_gerar_tabela.grid(row=4, column=0, columnspan=2, pady=10)

    def adicionar_alimento(self):
        alimento = self.entry_alimento.get()
        quantidade = self.entry_quantidade.get()
        dia = self.combobox_dia.get()

        if alimento and quantidade:
            self.dados_alimentos[dia][alimento] = quantidade
            print(f"Alimento '{alimento}' adicionado para {dia}.")

            # Limpar campos de entrada
            self.entry_alimento.delete(0, tk.END)
            self.entry_quantidade.delete(0, tk.END)

    def gerar_tabela(self):
        # Criar uma nova janela para exibir a tabela
        tabela_window = tk.Toplevel(self.root)
        tabela_window.title("Tabela de Alimentos")

        # Criar e preencher a tabela
        tabela = ttk.Treeview(tabela_window, columns=['Alimento', 'Quantidade'], show='headings')
        tabela.heading('Alimento', text='Alimento')
        tabela.heading('Quantidade', text='Quantidade')

        for dia, alimentos in self.dados_alimentos.items():
            for alimento, quantidade in alimentos.items():
                tabela.insert('', tk.END, values=(alimento, quantidade, dia))

        tabela.pack()


if __name__ == "__main__":
    root = tk.Tk()
    app = OrganizadorAlimentos(root)
    root.mainloop()
