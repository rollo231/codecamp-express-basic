# 1. 운영체제 및 프로그램 설치
#FROM ubuntu:22.04
#
#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn
FROM node

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커안에서 index.js 실행시키기 (RUN -> 이미지 저장 시 실행 / CMD -> 이미지 실행 시 실행)
CMD node index.js