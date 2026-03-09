// 역할을 클릭했을 때 반응하는 함수
function selectRole(role) {
    const messageElement = document.getElementById('role-message');
    let message = "";

    switch(role) {
        case '환자':
            message = "🏥 '환자'를 선택하셨군요. 보살핌 속에서 피어나는 로맨스를 기대해 보세요!";
            break;
        case '의사':
            message = "🥼 '의사'를 선택하셨군요. 실력과 매력으로 병원 사람들의 마음을 훔쳐보세요!";
            break;
        case '원무과':
            message = "💻 '원무과 직원'을 선택하셨군요. 얽히고설킨 비밀스러운 사내 연애가 시작됩니다!";
            break;
    }

    messageElement.innerText = message;
    
    messageElement.style.opacity = 0;
    setTimeout(() => {
        messageElement.style.opacity = 1;
        messageElement.style.transition = "opacity 0.5s ease-in-out";
    }, 50);
}

// 💥 캐릭터 아이콘을 클릭했을 때 일러스트를 나타나게 하는 함수
function revealHeroine(element) {
    // 클릭된 상자에 'revealed' 클래스를 추가하여 CSS 애니메이션을 작동시킵니다.
    element.classList.add('revealed');
}