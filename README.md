# journet-of-oneclick

## To create docker images
docker build -t sagardev/books:1.0 .
docker build -t sagardev/publishers:1.0 .

## To push docker images to remote registry
docker push sagardev/books:1.0
docker push sagardev/publishers:1.0

## apply the yaml files to bring upt the service.
kubectl apply -f file_names

## Minikube debug issues on EC2
Make sure minimum 2 core cpu instance is available (t2.medium)
sudo minikube start --force to start the minikube

If some JUJU_PERMISSION error run
sudo sysctl fs.protected_regular=0

Edit the permission of docker
sudo chmod 666 /var/run/docker.sock

and then run minikube start
To install kubectl 
sudo snap install kubectl --classic


Update the pem file permission
chmod 400 oneclick.pem


To enable ingress 
minikube addons enable ingress
