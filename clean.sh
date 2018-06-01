sudo docker stop $(docker ps -a -q)
sudo docker rm $(docker ps --no-trunc -aq)
#docker rmi $(docker images -q)