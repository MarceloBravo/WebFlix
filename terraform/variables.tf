variable "aws_region" {
  description = "Región de AWS"
  type        = string
  default     = "us-east-2"
}

variable "vpc_cidr" {
  description = "CIDR para la VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "subnet_cidr" {
  description = "CIDR para la subred pública"
  type        = string
  default     = "10.0.1.0/24"
}

variable "availability_zone" {
  description = "Zona de disponibilidad para la subred"
  type        = string
  default     = "us-east-2a"
}

variable "ami_id" {
  description = "AMI para la instancia EC2"
  type        = string
  default     = "ami-0eb9d6fc9fab44d24"
}

variable "instance_type" {
  description = "Tipo de instancia EC2"
  type        = string
  default     = "t2.micro"
}

variable "key_name" {
  description = "final-proyect-mod6"
  type        = string
} 