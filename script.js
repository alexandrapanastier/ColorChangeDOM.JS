// const body = document.querySelector('body')
const btn = document.getElementById('poulet')
const sentence = document.getElementById('change')
const hex = document.getElementById('color')

// const colors = ['yellow', 'violet','orange', 'green','red', 'purple', 'cyan', 'blue','grey']

// const superSentence = ["I'm beautiful", "I'm queen of Tokyo, is back","I don't think so", "Just do it", "i want to die", " i love chicken"]

// btn.addEventListener('click', () => {
//     const randomColor =  Math.floor(Math.random() * colors.length );
//     console.log(randomColor);
//     const randomSentence =  Math.floor(Math.random() * superSentence.length );
//     console.log("sentence :", randomSentence, superSentence[randomSentence])

//     body.style.backgroundColor = colors[randomColor]
//     sentence.innerHTML = superSentence[randomSentence]
// })


const randomColor = () => {
    let color = "#"
    let letters = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const randomSentence = () => {
    const superSentence = ["I'm beautiful", "I'm queen of Tokyo, is back","I don't think so", "Just do it", "i want to die", " i love chicken"] 

    return superSentence[Math.floor(Math.random() * superSentence.length)]

}

btn.addEventListener('click', () => {
    let radomazer = randomColor();
    document.body.style.backgroundColor = radomazer
    sentence.innerHTML = randomSentence()
    hex.innerHTML = radomazer

})