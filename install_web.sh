sudo apt install docker
sudo apt install docker.io
sudo apt install python3-pip

echo "REACT_APP_API = http://localhost:8000" > .env
sudo docker build --tag frontend .
sudo docker run -d --restart=always -p 80:80 frontend

