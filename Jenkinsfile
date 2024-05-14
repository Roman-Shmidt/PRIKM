pipeline {
    agent any

    stages {
        stage('Start') {
            steps {
                echo 'Lab_3: started by build periodity'
            }
        }

        stage('Image build') {
            steps {
                sh "docker build -t prikm:latest ."
                sh "docker tag prikm romanshmidt/prikm:latest"
                sh "docker tag prikm romanshmidt/prikm:$BUILD_NUMBER"
            }
            post{
                failure {
                    script {
                        // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\nBranch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\nFailure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }

        stage('Push to registry') {
            steps {
                withDockerRegistry([ credentialsId: "dockerhub_token", url: "" ])
                {
                    sh "docker push romanshmidt/prikm:latest"
                    sh "docker push romanshmidt/prikm:$BUILD_NUMBER"
                }
            }
            post{
                failure {
                    script {
                        // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\nBranch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\nFailure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }

        stage('Deploy image'){
            steps{
                sh "docker stop \$(docker ps -q) || true"
                sh "docker container prune --force"
                sh "docker image prune --force"
                //sh "docker rmi \$(docker images -q) || true"
                sh "docker run -d -p 80:80 romanshmidt"
            }
            post{
                failure {
                    script {
                        // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\nBranch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\nFailure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }
    }   
    post{
        success {
            script {
                // Send Telegram notification on success
                telegramSend message: "Job Name: ${env.JOB_NAME}\n Branch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}"
            }
        }
    }
}
