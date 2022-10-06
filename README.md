# Kafkajs Example
kafka simple producer + consumer example using kafkajs library

## installation

```Bash
git clone https://github.com/andyalex234/learn-kafka.git
cd learn-kafka
npm install
#or
yarn
#run kafka using docker
docker-compose up -d
docker ps #to see all running containers
```
## Getting started
The way the partions designed is based on the alphabet of the argument you provided when you create your message in the Users topics.

There are two files you can interact with `consumer.js` and `producer.js` to run and see the result you can use this example commands:

```Bash
node producer.js Andenet
node producer.js Samuel
node producer.js Daniel
node producer.js Jenefer

#on another terminal run
node consumer.js
```

## Learning Resources

[Apache Kafka Crash Course by Hussein Nasser](https://www.youtube.com/watch?v=R873BlNVUB4&t=163s)
