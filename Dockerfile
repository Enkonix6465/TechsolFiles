FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && \
    apt-get install -y build-essential libpq-dev postgresql-client && \
    apt-get clean

WORKDIR /techsol

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "techsolglobal.wsgi:application", "--bind", "0.0.0.0:8000"]