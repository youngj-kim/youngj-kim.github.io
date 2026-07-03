\# QGIS Kakao Roadview Bridge



QGIS Kakao Roadview Bridge는 자동차 내비게이션 지도 데이터 QA 업무를 지원하기 위해 개발 중인 QGIS Python 플러그인입니다.



지도 데이터 검수 과정에서는 도로 형상, 회전 제한, 차선 정보, 진출입 구조, 경로 안내 품질 등을 파악하기 위해 외부 지도 확인, 로드뷰 확인, 장소 검색, 경로 맥락 확인, 턴바이턴 안내 지점 검토를 반복적으로 수행해야 합니다.



이 프로젝트는 이러한 작업들을 하나의 QGIS 환경 안에서 수행할 수 있도록 Kakao Map, Roadview, Local Search, Kakao Mobility Route를 연동한 기능형 프로토타입입니다.



\## Project Goal



이 프로젝트의 목표는 QGIS 기반 지도 데이터 QA 업무에서 반복적으로 발생하는 외부 지도 확인, 로드뷰 확인, 장소 검색, 경로 탐색, 안내 지점 검토 흐름을 하나의 작업 환경 안에서 연결하는 것입니다.



단순히 Kakao 지도를 표시하는 것이 아니라, 외부 지도와 로드뷰, 경로 탐색 결과를 QGIS 레이어와 연결하여 지도 데이터 검토자가 위치와 경로 맥락을 더 빠르게 확인할 수 있도록 돕는 것을 목표로 합니다.



\## Current Implementation



\### QGIS and Kakao Map / Roadview Integration



QGIS 캔버스의 중심 좌표를 EPSG:4326으로 변환하여 Kakao Map과 Roadview에 전달합니다.



반대로 Kakao 지도 또는 Roadview에서 위치를 이동하면 QGIS 캔버스도 해당 위치로 이동합니다.



이를 통해 QGIS에서 검토 중인 위치와 외부 지도 / 로드뷰 위치를 상호 동기화할 수 있습니다.



\### Kakao Local Search



Kakao Local Search를 활용해 장소명과 주소를 검색할 수 있습니다.



검색 결과를 선택하면 QGIS 캔버스, Kakao Map, Roadview가 함께 해당 위치로 이동합니다.



이 기능은 특정 POI, 도로명, 주소 주변의 도로 구조를 빠르게 확인해야 하는 지도 데이터 QA 업무에 활용할 수 있습니다.



\### Roadview Position Layer



Roadview의 현재 위치, 방향, 기울기, 확대 정보를 QGIS 메모리 레이어로 표시합니다.



이를 통해 로드뷰가 실제 어느 위치를 바라보고 있는지 QGIS 지도 위에서 함께 확인할 수 있습니다.



\### Kakao Mobility Route



Kakao Mobility REST API를 활용해 자동차 경로를 탐색하고, 결과를 QGIS LineString 레이어로 표시합니다.



출발지, 도착지, 최대 5개 경유지를 입력할 수 있으며, 추천 경로, 최단 시간, 최단 거리 경로 유형과 회피 옵션, 차량 옵션을 설정할 수 있습니다.



\### Turn-by-turn Guidance Layer



경로 안내 정보를 QGIS Point 레이어와 Dock 목록으로 표시합니다.



직진, 좌회전, 우회전, 유턴, 회전교차로, 진출입, 출발, 도착, 경유지 등 안내 유형을 분류하고, 안내 지점을 지도 위에서 확인할 수 있습니다.



이 기능은 내비게이션 안내 품질 검토와 유사한 업무 흐름을 포트폴리오 프로젝트로 재현한 부분입니다.



\### GeoPackage / GeoJSON Export



성공한 경로 검색과 턴바이턴 안내 결과를 세션 이력으로 누적하고, GeoPackage 또는 GeoJSON으로 저장할 수 있습니다.



GeoPackage 저장 시 경로선과 안내 SVG 스타일을 함께 저장하여 QGIS에서 다시 불러왔을 때 스타일이 복원되도록 구성했습니다.



\## Why This Project Matters



이 도구는 단순한 소프트웨어 개발 과제가 아닙니다.



약 9년간 자동차 내비게이션 데이터 운영과 도로 네트워크 검증 업무를 수행하며 체감한 반복적인 검수 흐름을 바탕으로 설계한 프로젝트입니다.



외부 지도, 로드뷰, 주소 검색, 경로 탐색, 안내 지점 검토를 하나의 QGIS 환경 안에서 연결함으로써, 지도 데이터 QA 업무에서 위치와 경로 맥락을 더 빠르게 확인할 수 있는 가능성을 보여주는 프로젝트입니다.



\## Notes



본 프로젝트는 Kakao 공식 플러그인이 아니며, Kakao가 인증하거나 배포한 도구가 아닙니다.



또한 상용 내비게이션 시스템을 대체하기 위한 프로젝트가 아니며, Kakao 지도 타일을 QGIS XYZ/TMS 배경지도로 가져오지 않습니다.



Kakao Map은 QGIS Dock Widget 내부의 QWebEngineView에서 표시되며, QGIS 레이어로는 경로, 안내 지점, Roadview 위치 정보 등 QA 검토에 필요한 결과를 변환하여 표시합니다.



\## Repository



\[GitHub Repository](https://github.com/youngj-kim/kakao\_qgis-bridge)



\## Future Plans



\* SHP 내보내기

\* GPX 경로 / 트랙 / 경유지 매핑

\* 설치 ZIP 패키지 정리

\* GitHub Release 구성

\* 데모 GIF 제작

\* 포트폴리오용 스크린샷 정리

\* 예외 처리 및 UI 개선

\* QGIS 4.0 최종 릴리스 환경에서의 호환성 확인



