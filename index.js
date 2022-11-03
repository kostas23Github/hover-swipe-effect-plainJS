const containerArr = Array.from(document.querySelectorAll('div.cards-container'));

const swipe = param => {
    const visibleContainer = containerArr.find(item => item.getAttribute('status') === 'visible');
    const indexOfVisibleContainer = containerArr.indexOf(visibleContainer);
    let nextIndexOfVisibleContainer, nextVisibleContainer;
    switch (param) {
        case 'right':
            nextIndexOfVisibleContainer = indexOfVisibleContainer === containerArr.length - 1 ? 0 : indexOfVisibleContainer + 1;
            nextVisibleContainer = containerArr[nextIndexOfVisibleContainer];
            visibleContainer.setAttribute('status', 'hidden');
            nextVisibleContainer.setAttribute('status', 'visible');
            visibleContainer.animate(shrinkingRight, shrinkTiming);
            nextVisibleContainer.animate(expandingRight, expandTiming);
            break;
        case 'left':
            nextIndexOfVisibleContainer = indexOfVisibleContainer === 0 ? containerArr.length - 1 : indexOfVisibleContainer - 1;
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
