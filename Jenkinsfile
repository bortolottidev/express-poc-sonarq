pipeline {
    agent any
    stages {
        stage('Clone sources') {
            steps {
                git branch: 'master', url: 'https://github.com/ifritzord/express-poc-sonarq'
            }
        }
        stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
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