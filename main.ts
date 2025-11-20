player.onChat("back", function () {
    agent.teleportToPlayer()
})
player.onChat("down", function () {
    for (let index = 0; index < 30; index++) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    agent.move(UP, 1)
    for (let index = 0; index < 30; index++) {
        agent.destroy(BACK)
        agent.move(BACK, 1)
        agent.destroy(UP)
        agent.move(UP, 1)
    }
})
player.onChat("mine slave", function () {
    for (let index = 0; index < 150; index++) {
        agent.destroy(FORWARD)
        agent.destroy(UP)
        agent.collectAll()
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 18; index++) {
        agent.move(FORWARD, 8)
        blocks.place(TORCH, pos(0, 0, 0))
    }
})
