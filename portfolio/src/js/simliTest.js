export default {
    name: "SimliTest",
    data(){
        return {
            question: {
                mainTitle: '저를 찾아준 당신은 어떤 개발자인가요?',
                soTitle: '저에게 당신을 알려주시겠어요?',
                options: ['네', '아니요', ''],
            },
            userSum : [],
            isLoading : false
        }
    },
    methods:{
        sendInfo(param, answer){
            if(answer == '아니요'){
                alert('아쉽지만 다음에..')
                window.history.back();
            } else {
                this.userSum.push(param)
                if (this.userSum.length == 1) {
                    this.question = {
                        soTitle: '당신은 어떤 디바이스를 사용하는 것이 더 편한가요?',
                        options: ['컴퓨터', '스마트폰', '둘 다']
                    }
                } else if (this.userSum.length == 2) {
                    this.question = {
                        soTitle: '개발하고 싶은 앱이 있다면 어떤 플랫폼에서 만들고 싶나요?',
                        options: ['iOS', '안드로이드', '']
                    }
                } else if (this.userSum.length == 3) {
                    this.question = {
                        soTitle: '웹 개발에 가장 관심이 있는 분야는 무엇인가요?',
                        options: ['프론트엔드 개발', '백엔드 개발', '서버 관리']
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
                        soTitle: '만들고 싶은 앱의 주요 기능은 무엇인가요?',
                        options: ['데이터 처리와 관리', '사용자 경험 개선', '보안 강화']
                    }
                } else if (this.userSum.length == 8) {
                    this.question = {
                        soTitle: '앱 개발에 가장 관심이 있는 분야는 무엇인가요?',
                        options: ['UI/UX 디자인', '네이티브 앱 개발', '크로스 플랫폼 앱 개발']
                    }
                } else if (this.userSum.length == 9) {
                    this.question = {
                        soTitle: '어떤 디자인 스타일을 더 선호하시나요?',
                        options: ['머티리얼 디자인', '플랫 디자인', '둘 다']
                    }
                } else {
                    this.isLoading = true
                    this.question = {
                        mainTitle: '제가 직접 분석중입니다. 잠시만요!',
                        options: ['', '', '']
                    }

                    setTimeout(() => {
                        this.isLoading = false
                        if (this.userSum.length > 0) {
                            if (this.userSum[0] == 'A') {
                                // 웹 개발
                                switch (this.userSum[2]){
                                    case 'A':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '아주 좋아요! 당신은 프론트 엔드 웹 개발자이시군요. UI와 UX, 그리고 데이터 바인딩에 대해 관심이 많으시다는군요. 이는 매우 중요한 부분이며, 사용자가 쉽게 상호작용하고 정보를 이해할 수 있도록 도와주는 역할을 합니다. 따라서, 이러한 부분에 대한 전문 지식을 가지고 있다면 프론트 엔드 개발자로서 성공할 가능성이 높아질 것입니다.'
                                        }
                                        break;
                                    case 'B':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '멋져요! 당신은 백엔드 웹 개발자이시군요. 백엔드는 서버 측의 로직 개발과 데이터 관리 등을 담당합니다. 이는 웹 서비스를 운영하는 데 매우 중요한 역할을 합니다. 따라서 백엔드 개발자는 안정적인 서비스를 제공하기 위해 다양한 기술과 지식을 습득해야 합니다. 또한, 백엔드 개발자가 선보이는 웹 서비스는 프론트 엔드 개발자와 함께 작동하여 사용자에게 최상의 경험을 제공합니다.'
                                        }
                                        break;
                                    case 'c':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '대단해요! 당신은 서버 개발자이시군요. 서버 개발자는 서버 측의 로직 개발과 데이터베이스 관리 등을 담당합니다. 이는 클라이언트 측에서 사용자의 요청에 대한 응답을 제공하는 데 매우 중요합니다. 따라서, 서버 개발자는 다양한 기술과 지식을 활용하여 안정적이고 신뢰성 높은 서비스를 제공해야 합니다. 또한, 프론트 엔드 개발자와 백엔드 개발자와 함께 웹 서비스를 구축하는 것이 최상의 결과를 얻는 데 중요합니다.'
                                        }
                                        break;
                                }
                            } else if (this.userSum[0] == 'B') {
                                // 앱 개발
                                switch (this.userSum[2]){
                                    case 'A':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '좋아요! 제 추측에 따르면, 당신은 iOS 개발자이시군요.  UI/UX 디자인 및 개발, 데이터 저장 및 관리, 네트워킹 등 다양한 분야에서 전문 지식을 가지고 있으신 개발자 인듯 합니다.'
                                        }
                                        break;
                                    case 'B':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '좋아요! 제 추측에 따르면, 당신은 AOS 개발자이시군요.'
                                        }
                                        break;
                                    case 'c':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '좋아요! 제 추측에 따르면, 당신은 Full Stack 개발자이시군요.'
                                        }
                                        break;
                                }
                            } else {
                                // 하이브리드 개발
                                switch (this.userSum[4]){
                                    case 'A':
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '좋아요! 제 추측에 따르면, 당신은 Full Stack 개발자이시면서 프론트를 좋아하시는 개발자군요.'
                                        }
                                        break;
                                    default:
                                        this.question = {
                                            mainTitle: '',
                                            options: ['', '', ''],
                                            soTitle: '좋아요! 제 추측에 따르면, 당신은 Full Stack 개발자이시면서 백단을 좋아하시는 개발자군요.'
                                        }
                                        break;
                                }
                            }
                        }
                    }, 1500)
                }
            }
        }
    }
}