
const { Kafka } = require('kafkajs');

//argv[2] sub 2  is the first argument
//eg. node producer.js test ----> sub2 will be test
const msg = process.argv[2];
run();
 
async function run() {
    try {
       const kafka = new Kafka({
        'clientId': 'myapp',
        'brokers': ['andenet-HP:9092']
       })
       const producer = kafka.producer();
       console.log('connecting...')

       await producer.connect()
       console.log('Connected!')

       //A-M 0, N-Z 1
       const partition = msg[0] < "N" ? 0 : 1;
       const result = await producer.send({
        'topic': 'Users',
        'messages': [
            {
                "value": msg,
                'partition': partition
            }
        ]
       })
       console.log(`Created Successfuly! ${JSON.stringify(result)}`)
    } catch (error) {
        console.error(`Something bad happened ${error}`)
    }
    finally {
        process.exit()
    }
}