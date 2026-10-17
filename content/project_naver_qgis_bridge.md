# Naver Map QGIS Bridge

QGIS 캔버스와 NAVER 지도·로드뷰를 양방향으로 연결하고, 장소·주소 검색과 Directions 5 경로를 GIS 레이어 및 이력 파일로 활용하는 플러그인입니다.

- 기술: QGIS / Python / NAVER APIs
- 상태: 실험적 개발 버전 0.2.0
- 확인일: 2026-10-17

## 구현 범위

- QGIS 3 외부 브라우저 모드와 QGIS 4 내장 웹 뷰
- 지도 위치·줌 동기화, 로드뷰 방향과 API 제공 촬영일 표시
- NAVER API HUB 지역 검색, Geocoding 주소 검색, 좌표 직접 입력
- 경로·안내 포인트, 최대 5개 경유지, 이력 저장/불러오기 및 GPKG·GeoJSON·SHP·GPX 내보내기

## 검증 범위와 남은 작업

README에 2026-10-15 사용자 확인과 QGIS 3.44.14·4.2.2 오프라인 검증이 기록되어 있습니다. 정확한 3.34 런타임과 환경별 실제 API 전체 시나리오는 추가 확인이 필요합니다.

## 링크

- [GitHub Repository](https://github.com/youngj-kim/navermap_qgis-bridge)
- [근거 README](https://github.com/youngj-kim/navermap_qgis-bridge/blob/main/README.md)
