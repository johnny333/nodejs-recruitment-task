docker-compose up -d --build
cd ./backend/ && yarn && yarn run start &
cd ./client/ && yarn && yarn run start &
