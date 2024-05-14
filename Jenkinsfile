pipeline {
    agent any

    stages {
        stage('Start') {
            steps {
                echo '$TOKEN Lab_3: started by GitHub'
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
                        sh "curl -s -X POST https://api.telegram.org/bot$TOKEN/sendMessage -d chat_id=$CHAT_ID -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC  *Branch*: ${env.GIT_BRANCH} *Build* : `not OK` *Published* = `no`' "
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
                        sh "curl -s -X POST https://api.telegram.org/bot$TOKEN/sendMessage -d chat_id=$CHAT_ID -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC  *Branch*: ${env.GIT_BRANCH} *Build* : `not OK` *Published* = `no`' "
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
                sh "docker run -d -p 80:80 romanshmidt/prikm"
            }
            post{
                failure {
                    script {
                        // Send Telegram notification on success
                        sh " curl -s -X POST https://api.telegram.org/bot$TOKEN/sendMessage -d chat_id=$CHAT_ID -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC  *Branch*: ${env.GIT_BRANCH} *Build* : `not OK` *Published* = `no`' "
                    }
                }
            }
        }
    }   
    post{
        success {
            script {
                // Send Telegram notification on success
                withCredentials([string(credentialsId: 'telegram_token', variable: 'TOKEN'), string(credentialsId: 'telegram_chatid', variable: 'CHAT_ID')]) {
                    sh  ("""
                        curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage -d chat_id=${CHAT_ID} -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC *Branch*: ${env.GIT_BRANCH} *Build* : OK *Published* = YES'
                    """)
                }
            }
        }
    }
}
