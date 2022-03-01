#!/bin/bash

###
# Start the deamon docker
# run: bash docker-hot-repload.bash
###

# cleaning
docker network prune | echo "Y" # default to Y to remove all "unused" network : not assigned to a container
docker volume prune | echo "Y" # default to Y to remove all "unused" volume : not assigned to a container
docker image prune --all | echo "Y"  # default to Y to remove all "unused" images : not assigned to a container

# building and runnning
docker compose build
docker compose up