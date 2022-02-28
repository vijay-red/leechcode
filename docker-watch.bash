!!!!!! INCOMPLETE !!!!!!!
Trying to wun a watcher like script which stops and runs hot reload on a new terminal
#!/bin/bash

function dockerRestart() {
        # cleaning
        docker network prune | echo "Y" # default to Y to remove all "unused" network : not assigned to a container
        docker volume prune | echo "Y" # default to Y to remove all "unused" volume : not assigned to a container
        docker image prune --all | echo "Y"  # default to Y to remove all "unused" images : not assigned to a container

        # building and runnning
        docker compose build
        docker compose up
}

function startDocker() {

        # calling other script
        osascript -e 'tell app "Terminal"
                do script '$dockerRestart'
        end tell'

}

fswatch server | "$startDocker"