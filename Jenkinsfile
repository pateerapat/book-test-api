pipeline {
    agent any

    stages {
        stage('Pull code') {
            steps {
                git branch: 'development', url: 'https://github.com/pateerapat/read-like-a-book.git'
            }
        }
        stage('Setup environment') {
            steps {
                withEnv(['cookieKey=RLABWEBAPPLICATION']) {
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
                sh 'npx cypress run --spec "cypress/integration/unit-testing.js"'
            }
        }
        stage('Integration testing') {
            steps {
                sh 'npx cypress run --spec "cypress/integration/integration-testing.js"'
            }
        }
        stage('Component testing') {
            steps {
                sh 'npx cypress run --spec "cypress/integration/component-testing.js"'
            }
        }
        stage('E2E testing') {
            steps {
                sh 'npx cypress run --spec "cypress/integration/e2e-testing.js"'
            }
        }
    }
}