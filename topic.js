const { Kafka } = require('kafkajs');

run();
 
async function run() {
    try {
       const kafka = new Kafka({
        'clientId': 'myapp',
        'brokers': ['andenet-HP:9092']
       })

       const admin = kafka.admin()
       console.log('connecting...')

       await admin.connect()
       console.log('Connected!')

    // A-M, N-Z
       await admin.createTopics({
        'topics': [{
            'topic': 'Users',
            'numPartitions': 2
        }]
       });
       console.log('Created Successfuly!')
    } catch (error) {
        console.error(`Something bad happened ${error}`)
    }
    finally {
        process.exit()
    }
}