# Install Docker

- [See](https://docs.docker.com/get-docker/)

# Start AZ in docker

```
docker run -it --rm -v ${PWD}:/work -w /work --entrypoint /bin/sh mcr.microsoft.com/azure-cli:2.6.0
```

# Login to Azure

```
az login
```

# Create a Resource Group

```
az group create --name myAKSResourceGroup --location uksouth
```

# Create Cluster

```
az aks create \
--resource-group myAKSResourceGroup \
--name myAKSCluster \
--load-balancer-sku standard \
--node-count 1 \
--enable-addons monitoring,http_application_routing \
--node-vm-size Standard_B2s  \
--generate-ssh-keys
```

# Get kubectl

```
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
chmod +x ./kubectl
mv ./kubectl /usr/local/bin/kubectl

```

# Connect to cluster

```
az aks get-credentials --resource-group myAKSResourceGroup --name myAKSCluster


kubectl config current-context
```

# Install Helm

```
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh

helm
```

# Create Namespace

```
kubectl create namespace ingress-basic
```

# Create Ingress controller

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm install nginx-ingress ingress-nginx/ingress-nginx \
    --namespace ingress-basic \
    --set controller.replicaCount=1 \
    --set controller.nodeSelector."beta\.kubernetes\.io/os"=linux \
    --set defaultBackend.nodeSelector."beta\.kubernetes\.io/os"=linux \
    --set controller.admissionWebhooks.patch.nodeSelector."beta\.kubernetes\.io/os"=linux
```

# Get external IP

```
kubectl --namespace ingress-basic get services -o wide nginx-ingress-ingress-nginx-controller

e.g. 51.11.169.9
```

# Create DNS Zone

```
az network dns zone create -g myAKSResourceGroup -n devt.info
```

# Add an A record

```
az network dns record-set a add-record \
    --resource-group myAKSResourceGroup \
    --zone-name devt.info \
    --record-set-name '*' \
    --ipv4-address EXTERNAL_IP
```

# Buy a Domain

- BlueHost/GoDaddy
- (TXT)[https://jeanpaul.cloud/2020/04/01/how-to-verify-custom-domain-from-godaddy-com-in-azure-portal/]
-

# Install cert-manager

```
kubectl label namespace ingress-basic cert-manager.io/disable-validation=true

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install cert-manager jetstack/cert-manager \
  --namespace ingress-basic \
  --version v0.16.1 \
  --set installCRDs=true \
  --set nodeSelector."kubernetes\.io/os"=linux \
  --set webhook.nodeSelector."kubernetes\.io/os"=linux \
  --set cainjector.nodeSelector."kubernetes\.io/os"=linux
```

# Create Cluster Issuer

- Takes some time

```
kubectl apply -f cluster-issuer.yaml
```

# Run apps

```
kubectl apply -f aks-helloworld-one.yaml --namespace ingress-basic
kubectl apply -f aks-helloworld-two.yaml --namespace ingress-basic
```

# Create Ingress Route

```
kubectl apply -f hello-world-ingress.yaml --namespace ingress-basic
```

# Verify Certificate

```
kubectl get certificate --namespace ingress-basic
```

# Test

# Clean Up

```
kubectl delete namespace ingress-basic
```
