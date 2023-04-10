export default {
    name: "MoBackCompo",
    data() {
        return {
            currentTime: "",
            currentDate: "",
        }
    },
    mounted() {
        // 1초마다 현재 시간 갱신
        setInterval(() => {
            const date = new Date();
            // 시간 포맷팅
            const time = `${this.padZero(date.getHours())}:${this.padZero(
                date.getMinutes()
            )}`;
            // 날짜 포맷팅
            const month = this.padZero(date.getMonth() + 1);
            const day = this.padZero(date.getDate());
            const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
            const dateStr = `${month}월 ${day}일 ${dayOfWeek}요일`;
            // 데이터 업데이트
            this.currentTime = time;
            this.currentDate = dateStr;
        }, 100);
    },
    methods: {
        // 숫자를 2자리 문자열로 변환 (앞에 0 붙임)
        padZero(num) {
            return num.toString().padStart(2, "0");
        },
        mainicon(param) {
            alert('당신이 누른 영역은 : ' + param)
        }
    },
}