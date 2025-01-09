FROM python:3.11

WORKDIR /

COPY . /MLinhA-Frontend

RUN pip install  python-dotenv flask requests

WORKDIR  /MLinhA-Frontend

EXPOSE 5000

CMD ["python", "app.py"]
