pipeline {
    agent any
    tools { nodejs "Node 14 LTS" }

    stages {
        stage('Clone sources') {
            steps {
                git branch: 'master', url: 'https://github.com/ifritzord/express-poc-sonarq'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv(installationName: 'SonarQube Server') {
                    sh "npm run quality"
                }
            }
        }
        stage('Quality gate') {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}