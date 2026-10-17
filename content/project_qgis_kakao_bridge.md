# QGIS Kakao Roadview Bridge

QGIS와 Kakao Map·Roadview를 연결해 위치 확인, 장소 검색, 자동차 경로와 안내 지점 검토를 하나의 지도 QA 환경에서 수행하는 플러그인입니다.

- 기술: QGIS / Python / Kakao APIs
- 상태: 기능형 프로토타입 · 개발 중
- 확인일: 2026-10-17

## 구현 범위

- 지도 이동·확대·축소 양방향 동기화, 로드뷰 위치·방향 레이어
- Kakao Local 검색과 Kakao Mobility 경로, 최대 5개 경유지 및 회피·차량 옵션
- 경로·안내 이력 저장/불러오기와 GeoPackage, GeoJSON, Shapefile, GPX 내보내기
- QGIS 도크와 외부 브라우저 연동, 지도·로드뷰 배치 및 탐색창 조절

## 검증 범위와 남은 작업

QGIS 3.34 이상과 QGIS 4 / Qt 6을 대상으로 개발합니다. 정확한 3.34 환경은 미검증이며, 개발 후보 1.2.2의 요금 비교는 별도 검증 범위입니다.

## 링크

- [GitHub Repository](https://github.com/youngj-kim/kakao_qgis-bridge)
- [근거 README](https://github.com/youngj-kim/kakao_qgis-bridge/blob/main/README.md)
