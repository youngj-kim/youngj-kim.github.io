# Multi-Provider Navigation Route QA

카카오 플러그인의 GPKG 경로 비교 기능으로 카카오·네이버 경로 이력을 A/B로 열어 지도와 비교표에서 검토합니다. 기존 계획에서 파일 기반 비교가 구현된 단계로 진행했습니다.

- 기술: QGIS / GeoPackage / Route Comparison
- 상태: GPKG 비교 구현 · 확장 중
- 확인일: 2026-10-17

## 구현 범위

- kakao_route_history 또는 naver_route_history가 있는 EPSG:4326 GPKG 지원
- 거리·소요 시간·조회 시점과 B−A 차이 표시
- 출발·도착점 20m 초과 차이 또는 경유지 차이 안내
- A 파랑 실선·B 주황 점선 지도 표시와 비교 표시 제거

## 검증 범위와 남은 작업

개발 후보 1.2.2는 통행료·예상 택시요금 비교를 추가합니다. 소요 시간과 요금은 조회 당시 예측값이며, 안내 누락·비정상 우회 자동 판정과 웹 비교 대시보드는 향후 확장 범위입니다.

## 링크

- [GitHub Repository](https://github.com/youngj-kim/kakao_qgis-bridge)
- [근거 README](https://github.com/youngj-kim/kakao_qgis-bridge/blob/main/README.md)
