const students = [
    "1", "6", "11", "16", "21",
    "2", "7", "12", "17", "22",
    "3", "8", "13", "18", "23",
    "4", "9", "14", "19", "24",
    "5", "10", "15", "20", "25",
    "26"
];

const seatingChart = document.getElementById("seatingChart");
const shuffleBtn = document.getElementById("shuffleBtn");

function createSeats(order) {
    seatingChart.innerHTML = ""; // 기존 자리 초기화

    for (let i = 0; i < 25; i++) {
        let seat = document.createElement("div");
        seat.classList.add("seat");
        seat.textContent = order[i];
        seatingChart.appendChild(seat);
    }

    // (5,5) 오른쪽에 추가할 div 박스 (남은 한 명 표시)
    let extraBox = document.createElement("div");
    extraBox.classList.add("seat");
    extraBox.textContent = order[25]; // 남은 한 명의 이름 추가
    seatingChart.appendChild(extraBox);
}




shuffleBtn.addEventListener("click", function() {
    let shuffledStudents = [...students].sort(() => Math.random() - 0.5);
    createSeats(shuffledStudents);
});

// 처음에는 정렬된 상태로 표시
createSeats(students);

