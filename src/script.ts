const params = new URLSearchParams(window.location.search)

let shouldReturn = false

for (const i of ['channel']) {
    if (!params.get(i)) {
        alert(`Param ${i} is required.`)
    }
}

if (!shouldReturn) {
    (async () => {
        const tmi = await import('tmi.js')

        const client = tmi.Client({
            channels: [params.get('channel')!]
        })

        client.connect()

        client.on('chat', (channel, tags, msg, self) => {
            if (tags['custom-reward-id']) {
                console.log(tags['custom-reward-id'])
            }
            if (tags['custom-reward-id'] === params.get('reward_id')) {
            }
        })
    })()
}
