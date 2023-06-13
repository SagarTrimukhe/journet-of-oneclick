# journey-of-a-click
A simple project which demonstrates end to end development and deployment of a microservice based application.

It is a monorepo that contains a react application, two simple backend services exposing APIs and kubernetes deployment files.

## Check individual service folders for more details.

## Steps to bring up the application locally.
Prerequisites
1. minikube or kubernetes. [Refer this page on how to bring up minikube](https://minikube.sigs.k8s.io/docs/start/)
2. docker. [Refer this page on how to install Docker](https://docs.docker.com/engine/install/)
3. nodejs runtime. [Refer this page on how to install node](https://nodejs.org/en/download)

1. Start the minikube
```
minikube start
```
Common errors:
Edit the permission of docker if minikube is not able to reach docker daemon
```
sudo chmod 666 /var/run/docker.sock
```

If JUJU_PERMISSION file error. Run below command
```
sudo sysctl fs.protected_regular=0
```


2. Bring up the backend microservices.
```
kubectl apply -f books-service/deployment-files/books-deployment.yaml
kubectl apply -f books-service/deployment-files/books-service.yaml
kubectl apply -f publishers-service/deployment-files/publisher-deployment.yaml
kubectl apply -f publishers-service/deployment-files/publisher-service.yaml
```

3. Setup the ingress
```
kubectl apply -f books-service/deployment-files/ingress.yaml
```
Run below command if ingress is not avaiable in minikube
```
minikube addons enable ingress
```

4. Install the UI dependencies and start application
```
npm install && npm start
```





