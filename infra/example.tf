provider "azurerm" {
  features {}
}

  

# azurerm_kubernetes_cluster.example:
resource "azurerm_kubernetes_cluster" "example" {
    dns_prefix                 = "myAKSClust-myAKSResourceGro-d8f4f2"
    enable_pod_security_policy = false
    kubernetes_version         = "1.18.14"
    location                   = "uksouth"
    name                       = "myAKSCluster"
    node_resource_group        = "MC_myAKSResourceGroup_myAKSCluster_uksouth"
    resource_group_name        = "myAKSResourceGroup"
    sku_tier                   = "Free"
    tags                       = {}

    addon_profile {

        http_application_routing {
            enabled                            = true
        }

        kube_dashboard {
            enabled = false
        }

        oms_agent {
            enabled                    = true
            log_analytics_workspace_id = "/subscriptions/d8f4f20f-bfd2-468f-84ed-34e6fcbc1b05/resourceGroups/defaultresourcegroup-suk/providers/Microsoft.OperationalInsights/workspaces/defaultworkspace-d8f4f20f-bfd2-468f-84ed-34e6fcbc1b05-suk"
        }
    }

    default_node_pool {
        availability_zones           = []
        enable_auto_scaling          = false
        enable_host_encryption       = false
        enable_node_public_ip        = false
        max_pods                     = 110
        name                         = "nodepool1"
        node_count                   = 1
        node_labels                  = {}
        node_taints                  = []
        only_critical_addons_enabled = false
        orchestrator_version         = "1.18.14"
        os_disk_size_gb              = 128
        os_disk_type                 = "Managed"
        tags                         = {}
        type                         = "VirtualMachineScaleSets"
        vm_size                      = "Standard_B2s"
    }

    identity {
        type         = "SystemAssigned"
    }


    network_profile {
        dns_service_ip     = "10.0.0.10"
        docker_bridge_cidr = "172.17.0.1/16"
        load_balancer_sku  = "Standard"
        network_plugin     = "kubenet"
        outbound_type      = "loadBalancer"
        pod_cidr           = "10.244.0.0/16"
        service_cidr       = "10.0.0.0/16"

        load_balancer_profile {
            outbound_ports_allocated  = 0
        }
    }

    role_based_access_control {
        enabled = true
    }

    timeouts {}
}