pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "adapa34444/pootharekulu-frontend:${BUILD_NUMBER}"
        DOCKER_CONTAINER_NAME = "pootharekulu-container"
        PORT_MAPPING = "3001:3001"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    git branch: 'master', credentialsId: '27bb0141-ff55-4ca5-8bec-958b59c0ca5e', url: 'https://github.com/adapa34444/pootharekulu-frontend.git'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE_TAG ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'f6f8336b-ffe6-42c1-811b-cb877302d5df', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                        sh "docker push $DOCKER_IMAGE_TAG"
                    }
                }
            }
        }

        stage('Clean Previous Container') {
            steps {
                script {
                    // Stop and remove the previous container if it exists
                    sh "docker stop $DOCKER_CONTAINER_NAME || true"
                    sh "docker rm $DOCKER_CONTAINER_NAME || true"
                }
            }
        }

        stage('Run New Container') {
            steps {
                script {
                    // Run a new container from the newly built image
                    sh "docker run -d -p $PORT_MAPPING --name $DOCKER_CONTAINER_NAME $DOCKER_IMAGE_TAG"
                }
            }
        }
    }
}
