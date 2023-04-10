export default {
    name: "SimliTest",
    data(){
        return {
            question: {
                soTitle: '당신은 어떤 디바이스를 사용하는 것이 더 편한가요?',
                options: ['컴퓨터', '스마트폰', ''],
            },
            userSum : []
        }
    },
    methods:{
        sendInfo(param){
            this.userSum.push(param)
            if (this.userSum.length == 1) {
                this.question = {
                    soTitle: '개발하고 싶은 앱이 있다면 어떤 플랫폼에서 만들고 싶나요?',
                    options: ['iOS', '안드로이드', '둘 다']
                }
            } else if (this.userSum.length == 2) {
                this.question = {
                    soTitle: '어떤 디자인 스타일을 더 선호하시나요?',
                    options: ['머티리얼 디자인', '플랫 디자인', '둘 다']
                }
            } else if (this.userSum.length == 3) {
                this.question = {
                    soTitle: '만들고 싶은 앱의 주요 기능은 무엇인가요?',
                    options: ['데이터 처리와 관리', '사용자 경험 개선', '보안 강화']
                }
            } else if (this.userSum.length == 4) {
                this.question = {
                    soTitle: '만들고 싶은 웹 사이트의 주요 기능은 무엇인가요?',
                    options: ['컨텐츠 관리 및 배포', '검색 엔진 최적화', '모바일 반응형 디자인']
                }
            } else if (this.userSum.length == 5) {
                this.question = {
                    soTitle: '프로그래밍 언어 중에서 어떤 것을 더 선호하나요?',
                    options: ['자바스크립트', '파이썬', '자바']
                }
            } else if (this.userSum.length == 6) {
                this.question = {
                    soTitle: '어떤 개발 방법론을 선호하나요?',
                    options: ['워터폴 방법론', '애자일 방법론', '스파이럴 방법론']
                }
            } else if (this.userSum.length == 7) {
                this.question = {
                    soTitle: '웹 개발에 가장 관심이 있는 분야는 무엇인가요?',
                    options: ['프론트엔드 개발', '백엔드 개발', '서버 관리']
                }
            } else if (this.userSum.length == 8) {
                this.question = {
                    soTitle: '앱 개발에 가장 관심이 있는 분야는 무엇인가요?',
                    options: ['UI/UX 디자인', '네이티브 앱 개발', '크로스 플랫폼 앱 개발']
                }
            } else if (this.userSum.length == 9) {
                this.question = {
                    soTitle: '개발(프로젝트)를 시작할 때 어떤 용도로 하시나요?',
                    options: ['취미', '새로운 기술과 도전', '취업']
                }
            } else {
                alert('질문이 끝났습니다. 하지만 아직 결과는 준비되어있지 않네요. ')
            }
        }
    }
}