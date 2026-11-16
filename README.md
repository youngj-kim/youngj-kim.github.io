# Young Jun Kim — Portfolio

한국어 / English 포트폴리오. GitHub Pages에 배포할 수 있는 의존성 없는 정적 사이트입니다.

## 로컬 미리보기

Node.js 20 이상에서 `node scripts/serve.mjs`를 실행한 뒤 http://127.0.0.1:8080 을 엽니다.
추가 패키지 설치는 필요하지 않습니다.

## 수정

- `scripts/build.mjs`: 한국어·영어 문구, 프로젝트, 링크, SVG 개념도
- `assets/style.css`: 반응형 레이아웃과 라이트·다크 테마
- `assets/app.js`: 프로젝트 필터, 테마 저장, 이메일 복사
- `content/`: 기존 콘텐츠 원본 보존

문구를 수정한 뒤 `node scripts/build.mjs`로 `index.html`과 `en.html`을 함께 생성합니다.
`node --check assets/app.js`로 브라우저 JavaScript 문법을 확인합니다.
`npm`이 설치된 환경에서는 `npm start`, `npm run build`, `npm run check`도 사용할 수 있습니다.
생성된 HTML은 JavaScript 없이도 본문과 링크·상세 내용을 제공합니다.

## GitHub Pages

`index.html`, `en.html`, `assets/`, `CNAME`, `.nojekyll`을 저장소 루트에 유지합니다.
기존의 브랜치 루트 배포를 그대로 사용할 수 있으며 서버나 API 키가 필요하지 않습니다.
`CNAME`의 `yjkim.dev`는 유지했습니다. 이 로컬 폴더는 다운로드한 소스이며 `.git`이 없으므로,
변경 파일을 Git 저장소에 반영하거나 GitHub 웹에서 업로드한 뒤 기존 Pages 배포 상태를 확인합니다.

## 콘텐츠 근거

공개 저장소 README를 2026-11-16에 확인했습니다.
비공개 저장소는 포트폴리오에 포함하지 않습니다.

- [Kakao QGIS Bridge](https://github.com/youngj-kim/kakao_qgis-bridge/blob/main/README.md): 1.3 및 경로·요금 비교
- [Naver Map QGIS Bridge](https://github.com/youngj-kim/navermap_qgis-bridge/blob/main/README.md): 1.0 표기와 배포·검증 제한
- [Safety Zone Monitoring](https://github.com/youngj-kim/safetyzone_automation/blob/main/README.md): 수집·변경 감지·대시보드
- [병역명문가 예우지도](https://github.com/youngj-kim/military-family-benefit-map/blob/main/README.md): 새 도메인과 PWA·검색 기능

소개 경력과 연락처는 기존 홈페이지에서 유지했습니다.
프로젝트 그래픽은 실제 스크린샷이나 운영 데이터가 아닌 자체 제작한 개념도이며 화면에 이를 표시합니다.
Field Notes는 발행 전 기획 주제입니다.
