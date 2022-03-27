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
                withCredentials([file(credentialsId: 'T12_ENV', variable: 'ENV_FILE')]) {
                    sh "echo 'check = $ENV_FILE'"
                }
            }
        }
        stage('Download dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit testing with coverage') {
            steps {
                sh 'npm run test-unit'
            }
        }
        stage('Integration testing with coverage') {
            steps {
                sh 'npm run test-integration'
            }
        }
        stage('E2E testing with coverage') {
            steps {
                sh 'npm run test-e2e'
            }
        }
    }
}

