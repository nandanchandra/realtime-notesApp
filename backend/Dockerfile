FROM python:3.8.3

WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip 

COPY ./requirements.txt /backend

RUN pip install -r requirements.txt

COPY . /backend

EXPOSE 8000

RUN python manage.py migrate

CMD ["python", "manage.py", "runserver", "127.0.0.1:8000"]