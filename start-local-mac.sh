export $(grep -v '^#' .env | sed -E 's/(.*)=(.*)/\1="\2"/' | xargs)

yarn start:dev;
