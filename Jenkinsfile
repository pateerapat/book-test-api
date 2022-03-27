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
                withCredentials([file(credentialsId: 'T12_ENV', variable: '.env')]) {
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
                sh 'npm run test-integration'
            }
        }
        stage('E2E testing') {
            steps {
                sh 'npm run test-e2e'
            }
        }
    }
}

