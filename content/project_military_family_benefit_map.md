# 병역명문가 혜택 지도

병무청 공식 예우시설과 국방부 영외마트를 지도와 목록에서 검색하는 웹사이트입니다. 공공 데이터를 사용자 검색·길찾기 흐름과 변경 검토 절차로 연결했습니다.

- 기술: HTML / CSS / JavaScript / Kakao Maps
- 상태: 정적 웹 지도 · 변경 검토 자동화
- 확인일: 2026-10-17

## 구현 범위

- 지역·22개 업종·면제/할인/기타 필터, 마커 군집화와 지도 영역 검색
- 시설 혜택·연락처·원문, 카카오·네이버 길찾기 및 모바일 지도/목록
- 공식 영외마트 목록과 주소 기반 보강 좌표를 분리해 출처 보존
- 매월 1일 09:00 KST 공식 데이터 비교, 변경 보고서·후보 브랜치·초안 PR 및 Telegram 알림
- 빈 응답·중복 ID·25% 초과 급감 검증 후 검토 PR을 통한 데이터 반영

## 검증 범위와 남은 작업

병무청 시설 스냅샷은 2026-10-16 수집 기준입니다. 국방부 목록 기준일은 2026-04-28이며, 보강 좌표는 공식 좌표와 구분합니다. 실제 혜택·운영 여부는 원문과 시설 확인이 필요합니다.

## 링크

- [GitHub Repository](https://github.com/youngj-kim/military-family-benefit-map)
- [근거 README](https://github.com/youngj-kim/military-family-benefit-map/blob/main/README.md)
- [웹사이트](https://benefits.yjkim.dev)
