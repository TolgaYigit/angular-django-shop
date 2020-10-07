# Shop App with Angular and Django Rest Framework

A Dockerized e-commerce app with Angular and Djanog Rest Framework.

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

Use Docker Compose to install dependencies and build the containers.

```
$ docker-compose build
```

Run the project with the following command:

```
$ docker-compose up
```

To migrate the initial data, open a new terminal and run:

```
$ docker exec -it dj bash
$ python manage.py migrate
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
