# journet-of-oneclick

## To create docker images
docker build -t sagardev/books:1.0 .
docker build -t sagardev/publishers:1.0 .

## To push docker images to remote registry
docker push sagardev/books:1.0
docker push sagardev/publishers:1.0

## apply the yaml files to bring upt the service.
kubectl apply -f file_names

