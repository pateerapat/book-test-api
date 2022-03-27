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
                withCredentials([string(credentialsId: 'T12_01_SECRET', variable: 'SECRET'), string(credentialsId: 'T12_02_SECRET', variable: 'MONGODB_URI')]) {
                    // some block
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

