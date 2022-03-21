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
                withEnv(['SECRET=RLAB', 'MONGODB_URI=mongodb+srv://it-kmitl-book-service:rlYoI93uugf5H4sJ@book-service-east.zgdyk.mongodb.net/plt-book-service?retryWrites=true&w=majority']) {
                    // some block
                }
            }
        }
        stage('Download dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit testing') {
            steps {
                sh 'npm run test-unit'
            }
        }
        stage('Integration testing') {
            steps {
                sh 'npm run test-int'
            }
        }
        stage('E2E testing') {
            steps {
                sh 'npm run test-e2e'
            }
        }
    }
}
