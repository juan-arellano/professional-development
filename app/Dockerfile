FROM python:alpine3.7

# Make a directory for application

WORKDIR /app

#Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /app

CMD ["python", "index.py"]
