# Young Jun Kim — Portfolio

한국어 / English 포트폴리오와 GitHub 웹에서 작성하는 Field Notes입니다. 포트폴리오는 정적 HTML이며, 블로그는 GitHub Pages의 Jekyll로 생성합니다.

## 로컬 미리보기

Node.js 20 이상에서 `node scripts/serve.mjs`를 실행한 뒤 http://127.0.0.1:8080 을 엽니다.
포트폴리오 미리보기에는 추가 패키지가 필요하지 않습니다. 이 서버는 Jekyll 템플릿을 변환하지 않으므로 `/notes/`와 글 피드는 정식 Pages 배포에서 확인하거나 아래 Jekyll 미리보기를 사용합니다.

블로그까지 로컬에서 확인하려면 Ruby와 Bundler가 있는 환경에서 `bundle install` 후 `bundle exec jekyll serve`를 실행합니다. 브라우저에서 표시된 로컬 주소를 엽니다.

## 수정

- `scripts/build.mjs`: 한국어·영어 문구, 프로젝트, 링크, SVG 개념도
- `assets/style.css`: 반응형 레이아웃과 라이트·다크 테마
- `assets/app.js`: 프로젝트 필터, 테마 저장, 이메일 복사
- `_posts/`: Markdown 글. 이 폴더의 글만 발행 대상입니다.
- `_layouts/`, `notes/`: 글 상세·전체 목록·작성 안내·자동 JSON 피드
- `assets/notes.js`, `assets/notes.css`: 새 글 템플릿 링크와 블로그 스타일
- `content/`: 기존 콘텐츠 원본 보존

문구를 수정한 뒤 `node scripts/build.mjs`로 `index.html`과 `en.html`을 함께 생성합니다.
`node --check assets/app.js`로 브라우저 JavaScript 문법을 확인합니다.
`npm`이 설치된 환경에서는 `npm start`, `npm run build`, `npm run check`도 사용할 수 있습니다.
포트폴리오 본문, 블로그 전체 목록과 글 상세는 JavaScript 없이도 읽을 수 있습니다. 홈페이지의 최신 글 세 개는 같은 도메인의 `/notes/feed.json`을 읽어 표시하며, 실패하면 전체 목록 링크가 유지됩니다.

## GitHub 웹에서 글 쓰기

1. [새 글 작성](https://yjkim.dev/notes/new/)에서 GitHub 편집 화면을 엽니다.
2. 날짜로 시작하는 파일 이름의 `new-note`를 주제에 맞게 바꾸고 제목·분류·요약·본문을 작성합니다.
3. `main`에 Commit하거나 PR을 `main`에 병합하면 GitHub Pages가 자동 배포합니다. 글을 쓸 때 `node scripts/build.mjs`를 실행할 필요가 없습니다.
4. 기존 글은 제목 아래 **GitHub에서 수정** 링크로 수정합니다.

자세한 사용법: [Field Notes 글 작성과 수정 안내](https://yjkim.dev/notes/2026/11/16/writing-field-notes/).
`published: false`는 사이트에서만 숨깁니다. 공개 저장소에 저장한 초안·삭제 이력은 비공개가 아닙니다. 미래 날짜 글은 해당 날짜 이후 다음 빌드에서 공개되며 별도 예약 실행은 없습니다.

## GitHub Pages

`index.html`, `en.html`, `assets/`, `CNAME`, `_config.yml`, `_layouts/`, `_posts/`, `notes/`를 저장소 루트에 유지합니다.
기존 `main` 브랜치 루트 배포를 사용합니다. Jekyll을 활성화하기 위해 `.nojekyll`은 제거했으며 다시 추가하지 않습니다. 별도 서버·API 키·자동화 토큰이 필요하지 않습니다.
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
예우지도는 사용자가 제공한 실제 운영 화면을 사용합니다. 나머지 프로젝트 그래픽은 자체 제작한 개념도이며 화면에 이를 표시합니다.
Field Notes에는 작성 안내를 첫 글로 넣었습니다. 기존 발행 예정 주제는 실제 글처럼 게시하지 않았습니다.
