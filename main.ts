function revealResult () {
    playerBlock = agent.inspect(AgentInspection.Block, DOWN)
    agentBlock = agent.inspect(AgentInspection.Block, UP)
    if (playerBlock == agentBlock) {
        gameplay.title(mobs.target(NEAREST_PLAYER), "It's a Draw!", "Play Again?")
    } else if (playerBlock == STONE2) {
        if (agentBlock == MAGMA) {
            gameplay.title(mobs.target(NEAREST_PLAYER), "The Agent Wins!", "Play Again?")
        } else {
            gameplay.title(mobs.target(NEAREST_PLAYER), "You Win!", "Play Again?")
        }
    } else if (playerBlock == MAGMA) {
        if (agentBlock == ICE2) {
            gameplay.title(mobs.target(NEAREST_PLAYER), "The Agent Wins!", "Play Again?")
        } else {
            gameplay.title(mobs.target(NEAREST_PLAYER), "You Win!", "Play Again?")
        }
    } else {
        if (agentBlock == STONE2) {
            gameplay.title(mobs.target(NEAREST_PLAYER), "The Agent Wins!", "Play Again?")
        } else {
            gameplay.title(mobs.target(NEAREST_PLAYER), "You Win!", "Play Again?")
        }
    }
}
function equipPlayer () {
    player.execute(
    "clear"
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    STONE2,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    MAGMA,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    ICE2,
    1
    )
}
player.onChat("play", function () {
    equipPlayer()
    equipAgent()
    agentChoose()
    revealResult()
    reset()
})
function equipAgent () {
    agent.setItem(STONE2, 1, 1)
    agent.setItem(MAGMA, 1, 2)
    agent.setItem(ICE2, 1, 3)
}
function reset () {
    loops.pause(2000)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.move(DOWN, 1)
}
function agentChoose () {
    agent.move(UP, 1)
    agent.setSlot(randint(1, 3))
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.turn(LEFT_TURN)
    }
    agent.place(UP)
}
let agentBlock = 0
let playerBlock = 0
let ICE2 = 0
let MAGMA = 0
let STONE2 = 0
// Rock
STONE2 = STONE
// Paper
MAGMA = MAGMA_BLOCK
// Scissors
ICE2 = ICE
