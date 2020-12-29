pipeline {
    agent any
    tools {nodejs "Node 14 LTS"}

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
                withSonarQubeEnv(credentialsId: '63787dfd065722c4cc35672de13f0ffbf4b17f6e', installationName: 'SonarQube Server') {
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