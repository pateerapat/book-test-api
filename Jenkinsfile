pipeline {
    agent any

    stages {
        stage('Pull code') {
            steps {
                checkout scm
            }
        }
        stage('Setup environment') {
            steps {
                echo 'setup environment'
            }
        }
        stage('Download dependencies') {
            steps {
                dir('Backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Unit testing with coverage') {
            steps {
                dir('Backend') {
                    sh 'npm run test-unit'
                }
            }
        }
        stage('Integration testing with coverage') {
            steps {
                dir('Backend') {
                    sh 'npm run test-integration'
                }
            }
        }
        stage('E2E testing with coverage') {
            steps {
                dir('Backend') {
                    sh 'npm run test-e2e'
                }
            }
        }
        stage('Deploy development branch') {
            steps {
                echo 'automatic deploy development branch to heroku'
            }
        }
        stage('Deploy main branch') {
            steps {
                echo 'automatic deploy main branch to heroku and docker'
                withCredentials([string(credentialsId: 'T12_ROOTPASS_SECRET', variable: 'rootpass')]) {
                    script {
                        def remote = [:]
                        remote.name = 'T12'
                        remote.host = '159.223.45.216'
                        remote.user = 'root'
                        remote.password = "${rootpass}"
                        remote.allowAnyHosts = true
                        sshCommand remote: remote, command: 'git clone https://github.com/bambam4334/Project-SW-Dev.git'
                        sshCommand remote: remote, command: 'docker-compose -f Project-SW-Dev/Backend/docker-compose.yml up -d'
                        sshCommand remote: remote, command: 'rm -r Project-SW-Dev'
                    }
                }
            }
        }
        stage('Versioning') {
            steps {
                withCredentials([gitUsernamePassword(credentialsId: 'T12_GIT_SECRET', gitToolName: 'Default')]) {
                    sh 'git tag ' + 'v1.0.' + BUILD_NUMBER
                    sh 'git tag'
                    sh 'git push origin ' + 'v1.0.' + BUILD_NUMBER
                }
            }
        }
    }
}
