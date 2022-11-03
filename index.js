const containerArr = Array.from(document.querySelectorAll('div.cards-container'));
// console.log(containerArr.length)
// console.log(containerArr[0].getAttribute('status'))


// // window.onload = () => {
//     for (const container of containerArr) {
//         if (container.getAttribute('status') === 'hidden') {
//             container.style.transform = 'scale(0)';
//         }
//     }
// // }

// const like = param => {
//     for (let i in containerArr) {
//         let status = containerArr[i].getAttribute('status');
//         let index;
//         if (status === 'visible') {
//             if (i == containerArr.length - 1) {
//                 index = 0;
//             } else {
//                 i = Number(i)
//                 index = i + 1;
//             }
//             console.log(containerArr)
//             if (param === 'favorite') {
//                 console.log('shrinking animation')
//                 containerArr[index].animate(shrinkingRight, shrinkTiming)
//                 console.log('Expanding animation')
//                 containerArr[i].animate(expandingRight, expandTiming)
//             } else {
//                 containerArr[index].animate(shrinkingLeft, shrinkTiming)
//                 containerArr[i].animate(expandingLeft, expandTiming)
//             }
//             console.log('is visible')
//             containerArr[index].setAttribute('status', 'visible');
//             containerArr[index].style.display = 'block';
//             containerArr[i].setAttribute('status', 'hidden');
//             containerArr[i].style.display = 'none';
//             break;
//         }
//     }
// }


// document.querySelector('like').animate()
const swipe = param => {
    const visibleContainer = containerArr.find(item => item.getAttribute('status') === 'visible');
    // console.log(`visibleContainer ${visibleContainer.getAttribute('status')}`);
    const indexOfVisibleContainer = containerArr.indexOf(visibleContainer);
    // console.log(`indexOfVisibleContainer ${indexOfVisibleContainer}`);
    let nextIndexOfVisibleContainer, nextVisibleContainer;
    switch (param) {
        case 'right':
            nextIndexOfVisibleContainer = indexOfVisibleContainer === containerArr.length - 1 ? 0 : indexOfVisibleContainer + 1;
            // console.log(`nextIndexOfVisibleContainer ${nextIndexOfVisibleContainer}`);
            nextVisibleContainer = containerArr[nextIndexOfVisibleContainer];
            visibleContainer.setAttribute('status', 'hidden');
            nextVisibleContainer.setAttribute('status', 'visible');
            visibleContainer.animate(shrinkingRight, shrinkTiming);
            // console.log(visibleContainer.getAttribute('status'))
            // console.log(nextVisibleContainer.getAttribute('status'))
            nextVisibleContainer.animate(expandingRight, expandTiming);
            break;
        case 'left':
            nextIndexOfVisibleContainer = indexOfVisibleContainer === 0 ? containerArr.length - 1 : indexOfVisibleContainer - 1;
            // console.log(`nextIndexOfVisibleContainer ${nextIndexOfVisibleContainer}`);
            nextVisibleContainer = containerArr[nextIndexOfVisibleContainer];
            visibleContainer.animate(shrinkingLeft, shrinkTiming);
            nextVisibleContainer.animate(expandingLeft, expandTiming);
            visibleContainer.setAttribute('status', 'hidden');
            nextVisibleContainer.setAttribute('status', 'visible');
            break;
        default:
            visibleContainer.animate('');
            nextVisibleContainer.animate('');
    }
}

document.querySelector('.favorite').addEventListener('click', () => swipe('right'));
// document.querySelector('.dislike').addEventListener('click', () => swipe('left'));

const shrinkingRight = [
    { transform: 'translate(0) scale(1)'},
    { transform: 'translate(80%, 0) scale(0)' },
];

const shrinkingLeft = [
    { transform: 'translate(0) scale(1)'},
    { transform: 'translate(-80%, 0) scale(0)' },
];

const expandingRight = [
    { transform: 'translate(-80%, 0) scale(0)' },
    { transform: 'translate(0, 0) scale(1)' },
]

const expandingLeft = [
    { transform: 'translate(80%, 0) scale(0)' },
    { transform: 'translate(0px, 0) scale(1)' },
]

const shrinkTiming = {
    duration: 500,
    iterations: 1
}

const expandTiming = {
    duration: 500,
    iterations: 1,
}
