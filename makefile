.DEFAULT_GOAL := start

cert:
	docker-compose exec -T node bash -ac "openssl req -newkey rsa:2048 -nodes -keyout docker/nginx/\"\$${DOMAIN}\".key -x509 -days 365 -out docker/nginx/\"\$${DOMAIN}\".crt"
start:
	docker-compose -f ./docker-compose.yaml up --build -d
stop:
	docker-compose -f ./docker-compose.yaml stop
restart:
	make stop && make start
