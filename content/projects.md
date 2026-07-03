\# Projects



\## QGIS Kakao Roadview Bridge



QGIS Kakao Roadview Bridge는 QGIS 캔버스와 Kakao Map, Roadview, Local Search, Kakao Mobility Route를 연동하는 QGIS Python 플러그인입니다.



지도 데이터 QA 과정에서 외부 지도, 로드뷰, 장소 검색, 경로 탐색, 턴바이턴 안내 지점을 하나의 QGIS 환경에서 확인하고, 경로와 안내 이력을 GeoPackage / GeoJSON으로 저장할 수 있도록 설계했습니다.



이 프로젝트는 단순한 웹 지도 연동이 아니라, 자동차 내비게이션 지도 데이터 검수 과정에서 반복적으로 발생하는 위치 확인, 로드뷰 확인, 경로 맥락 검토, 안내 지점 확인 업무를 QGIS 안에서 연결하려는 기능형 프로토타입입니다.



\### 주요 기능



\- QGIS 캔버스와 Kakao Map / Roadview 상호 동기화

\- Kakao Local 장소 / 주소 검색

\- Kakao Mobility 자동차 경로 탐색

\- 출발지 / 도착지 / 경유지 입력 및 경로 옵션 설정

\- 경로 결과를 QGIS LineString 레이어로 표시

\- 턴바이턴 안내를 QGIS Point 레이어와 Dock 목록으로 표시

\- 경로 및 안내 이력을 GeoPackage / GeoJSON으로 저장

\- Roadview 위치와 방향을 QGIS 메모리 레이어로 시각화



\### Repository



\[GitHub Repository](https://github.com/youngj-kim/kakao\_qgis-bridge)



\---



\## Safety Zone Matching \& Navigation Data QA Dashboard



Safety Zone Matching \& Navigation Data QA Dashboard는 공공 보호구역 데이터를 한국 표준노드링크 도로 네트워크와 공간 매칭하는 PostGIS 기반 프로젝트입니다.



어린이보호구역, 노인보호구역 등 안전 관련 구역이 어떤 도로 링크에 영향을 주는지 분석하고, 내비게이션 데이터 업데이트 검토 또는 QA 확인이 필요한 후보 링크를 추출하는 것을 목표로 합니다.



이 프로젝트는 아직 초기 구축 및 개발 진행 단계이며, 상용 내비게이션 DB를 구축하는 프로젝트가 아니라 실제 내비게이션 데이터 운영 경험을 바탕으로 QA 후보 추출 흐름을 프로토타입으로 구현하는 프로젝트입니다.



\### 주요 기능 및 계획



\- 한국 표준노드링크 기반 도로 네트워크 데이터 활용

\- 공공 보호구역 polygon 데이터 수집 및 적재

\- PostGIS 공간 함수를 활용한 보호구역과 도로 link 매칭

\- 직접 교차 / 20m 이내 근접 / 50m 이내 참고 / 미매칭 후보 분류

\- 내비게이션 데이터 업데이트 검토 및 QA 확인 후보 추출

\- QGIS 또는 대시보드 기반 시각화 계획

