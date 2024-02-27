pipeline {
    agent any

    environment {
        // Define the Docker image tag with the correct syntax
        DOCKER_IMAGE_TAG = "adapa34444/pootharekulu-frontend:${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest changes from the GitHub repository
                script {
                    git branch: 'master', credentialsId: '27bb0141-ff55-4ca5-8bec-958b59c0ca5e', url: 'https://github.com/adapa34444/pootharekulu-frontend.git'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    sh "docker build -t $DOCKER_IMAGE_TAG ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Push Docker image to Docker Hub
                script {
                    withCredentials([usernamePassword(credentialsId: 'f6f8336b-ffe6-42c1-811b-cb877302d5df', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                        sh "docker push $DOCKER_IMAGE_TAG"
                    }
                }
            }
        }
    }
}
