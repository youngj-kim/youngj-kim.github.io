# Safety Zone Change Monitoring System

경찰청 보호구역 Open API의 원본·정제 스냅샷을 보존하고 신규·삭제·속성·공간 변경을 감지해 알림과 지도 대시보드로 검토하는 데이터 운영 프로젝트입니다.

- 기술: Python / Supabase / PostGIS / GitHub Actions
- 상태: MVP 구현 · 운영 확장 중
- 확인일: 2026-10-17

## 구현 범위

- Polygon·시설 Point·통합 보호구역 그룹과 변경 이력 관리
- Supabase PostgreSQL/PostGIS와 GitHub-hosted runner, 09:00~10:40 KST 20분 간격 6개 청크 수집 일정
- 시도별 GeoJSON 분할·지연 로드, 전국 검색, 반복 변경 타임라인 및 KR/EN 전환
- OSM/Kakao 지도·Roadview, 변경 시 Slack/Telegram 알림과 실행 이력
- 성공 실행 전체 데이터 갱신, 실패 실행 이력 갱신, fetch/rebase 후 push 재시도 및 모니터 종료 후 Pages 배포

## 검증 범위와 남은 작업

표준노드링크·NGII 도로중심선 후보 비교는 로컬 PostGIS와 QGIS에서 검토 중입니다. 도로 링크 자동 확정 매칭과 실제 운영 실행의 성공 여부는 별도 검증 대상입니다.

## 링크

- [GitHub Repository](https://github.com/youngj-kim/safetyzone_automation)
- [근거 README](https://github.com/youngj-kim/safetyzone_automation/blob/main/README.md)
- [웹사이트](https://safetyzone.yjkim.dev)
