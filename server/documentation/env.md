# setting up the environment for the code compilers
# presently installing 3 languages

go to the root directory
run the following
`git clone https://github.com/engineer-man/piston`
`docker-compose up -d api`
`cd cli && npm i && cd -`
expected behaviour: a docker image runs and servers on port:2000 and answers to the first GET request mentioned in env.md

`piston/cli/index.js ppman install python=3.10.0`
`piston/cli/index.js ppman install java=15.0.2`
`piston/cli/index.js ppman install node=16.3.0`
expected behaviour: creates a directory packages and installs the requirement environments of the above 3 languages.

after all required lnaguges are installed, use the piston.rest file again to hit the GET api to get the available environemnts in your piston docker.

references: https://github.com/engineer-man/piston#All-In-One