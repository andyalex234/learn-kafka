
const { Kafka } = require('kafkajs');

run();
 
async function run() {
    try {
       const kafka = new Kafka({
        'clientId': 'myapp',
        'brokers': ['andenet-HP:9092']
       })
       const consumer = kafka.consumer({'groupId': "test"});
       console.log('connecting...')

       await consumer.connect()
       console.log('Connected!')

       await consumer.subscribe({
        'topic': 'Users',
        'fromBeginning': true,
       });
    
       await consumer.run({
        "eachMessage": async result => {
            console.log(`Received Msg ${result.message.value} on partition ${result.partition }`)
        }
       });

    } catch (error) {
        console.error(`Something bad happened ${error}`)
    }
    finally {
    }
}