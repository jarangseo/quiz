// You can just run solution.js with node
// node solution.js

function solution(participant, completion) {
    let copiedParticipant = participant.slice()

    completion.forEach(function(item,index,arr){
        copiedParticipant.splice(copiedParticipant.indexOf(item),1)
    })

    return copiedParticipant.toString()
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']))