# democicd
Demo for CI CD pipeline

--To Install into Kubernetes GKE run the following commands
Create a cluster

-- Enable the API's from ther GCP Console

--CREATE a Service Principal in the GCP Console
Download the JSON file that it creates and create a secret for the environment


--Also create the nessasary secrects from the Deployment cluster

-- Create the kubectl install on cloud shell
gcloud components install kubectl
gcloud components install gke-gcloud-auth-plugin
gcloud container clusters get-credentials CLUSTER_NAME
