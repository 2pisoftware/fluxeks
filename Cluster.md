# Steps to connect to the cluster

## Start a Codespace for this repo

Create/start a codespace in GitHub

## Log in to AWS

```sh
aws configure sso
export AWS_PROFILE=AWSAdministratorAccess-148970616441
```

## Connect to the cluster

```sh
aws eks list-clusters 
aws eks update-kubeconfig --name Cluster9EE0221C-24bc91a1c449490dbacf84d7be76e8ac
```

## Verify the connection

```sh
kubectl get nodes
```

## Browse the cluster

```sh
k9s
```