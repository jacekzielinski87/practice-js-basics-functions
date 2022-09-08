function runTimer () {
    const event = new Date('September 9, 2022 07:18:30 GMT+00:00').toLocaleTimeString('UTC');;
    console.log(event);
}

setInterval(runTimer,5000)
