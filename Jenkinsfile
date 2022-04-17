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
                sh 'npm install'
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
                        remote.password = 'xitgmLwmp12q'
                        remote.allowAnyHosts = true
                        sshCommand remote: remote, command: 'git clone https://github.com/pateerapat/book-test-api.git'
                        sshCommand remote: remote, command: 'docker-compose -f book-test-api/docker-compose.yml up -d'
                        sshCommand remote: remote, command: 'rm -r book-test-api'
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
