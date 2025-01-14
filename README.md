Este é um frontend para a API MLinha-API, de Diego S. Lima.

Para executar existem duas possibilidades, usar docker ou usar instalar os pacotes python e rodar diretamente.

# Abordagem 1: Docker
Para isso precisa de um sistema com docker funcionando. Logo após pode clonar o código fonte deste repositório.
 - git clone https://github.com/valdeirprestes/MLinhA-Frontend.git

Antes de rodar o frontend deve ter uma imagem pronta do Mlinha-API
 - git clone https://github.com/diegodslima/MLinhA-API

Entre na pasta, faça build carregando o container e depois para o container
 - cd MLinha-API
 - docker-compose up -d
 - docker-compose down

Depois de clonar o código fonte frontend, entre na pasta execute o seguintes comandos
Copie a configura
 - cp env.example .env

O comando abaixo build a imagem docker e executa um container.
 - docker-compose up -d



# Abordagem 2:

1ª Se estiver usando Linux, crie um ambiente particular para baixar os pacotes do python.
Se for Debian/Ubuntu, instale o pacote venv. O nome do pacote venv pode mudar dependendo da versão da sua distribuição.
 - apt install python3.11-venv

#Agora crie o ambiente virtual.
 - python3 -m venv $HOME/ambientevirtualpython

#Agora entre dentro do ambiente, onde vai notar o nome da pasta entre parentes aparecendo antes do cursor do teclado.
- source $HOME/ambientevirtualpython/bin/activate


2ª Agora vamos instalar o pacotes necessários com pip (ferramenta de gestão de pacote do Python).

 Instalar o Flask
- pip install flask

 Instalar o python-dotenv
- pip install python-dotenv

 Instalar a biblioteca request para realizar requisições
- pip install requests



3ª Agora baixe o repositorio. Talvez você tenha que instalar o aplicativo git antes de baixar o repositório.
 - git clone https://github.com/valdeirprestes/MLinhA-Frontend.git

Antes de rodar o frontend é importante que baixe e rode em docker MLinhaApi (link abaixo para detalhes) para ter imagem deste sistema.
https://github.com/diegodslima/MLinhA-API



4ª entre dentro da pasta MLinhA-Frontend e rode o sistema
- cd camimho/MLinhA-Frontend


Atenção, copie o arquivo de configuração para env.example para .env e altere o dominios da API e Front-end ( porta também).


executando o servidor (tenha certeza de estar no ambient virtual do python - passo 2)

- python app.py



