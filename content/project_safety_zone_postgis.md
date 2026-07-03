\# Safety Zone Matching \& Navigation Data QA Dashboard



Safety Zone Matching \& Navigation Data QA Dashboard는 공공 보호구역 데이터를 한국 표준노드링크 도로 네트워크와 공간 매칭하여, 내비게이션 데이터 업데이트 검토 및 QA 확인이 필요한 후보 링크를 추출하는 PostGIS 기반 프로젝트입니다.



현재는 초기 구축 및 개발 진행 단계입니다.



\## Project Goal



어린이보호구역, 노인보호구역 등 안전 관련 구역 정보는 도로 링크의 제한속도, 안전안내, 경로안내 품질과 연결될 수 있습니다.



보호구역 데이터가 새로 생기거나 변경되었을 때, 해당 구역이 어떤 도로 링크에 영향을 주는지 빠르게 파악할 수 있다면 지도 데이터 QA 및 업데이트 검토 업무를 더 체계적으로 수행할 수 있습니다.



이 프로젝트는 그런 흐름을 PostGIS 기반으로 구현하는 것을 목표로 합니다.



\## Data and Workflow



\### Standard Node-Link Data



한국 표준노드링크 데이터를 도로 네트워크 기반 데이터로 사용합니다.



이 프로젝트에서는 표준노드링크를 상용 내비게이션 DB가 아니라, 도로 링크 기반 QA 흐름을 모사하기 위한 공개 도로 네트워크 데이터로 활용합니다.



\### Public Safety Zone Data



어린이보호구역, 노인보호구역 등 공공 보호구역 데이터를 수집하고 PostGIS에 적재합니다.



보호구역 polygon 또는 위치 데이터를 도로 링크와 공간적으로 매칭하여 영향을 받을 가능성이 있는 도로 구간을 찾습니다.



\### Spatial Matching with PostGIS



PostGIS 공간 함수를 활용해 보호구역 polygon과 도로 link를 매칭합니다.



예상 매칭 기준은 다음과 같습니다.



\* 직접 교차: High Confidence / 우선 검토 후보

\* 20m 이내 근접: Medium Confidence / 수동 검토 필요 후보

\* 50m 이내 참고: Low Confidence / 참고 후보

\* 미매칭: 위치 확인 또는 도로 링크 누락 점검 후보



\## Expected Output



이 프로젝트의 결과물은 자동 업데이트가 아니라, QA 담당자가 우선 검토해야 할 후보를 추출하는 것입니다.



예상 결과 컬럼은 다음과 같습니다.



\* zone\_id

\* zone\_name

\* zone\_type

\* link\_id

\* road\_name

\* match\_type

\* distance\_m

\* overlap\_length\_m

\* confidence

\* qa\_action



\## Why This Project Matters



이 프로젝트는 상용 내비게이션 DB를 구축하거나 법적 검증이 완료된 완성형 자동화 시스템을 만드는 것이 아닙니다.



핵심은 “어떤 보호구역과 도로 링크를 우선적으로 검토해야 하는가”라는 QA 문제를 정의하고, 이를 PostGIS 공간 분석과 QGIS 시각화로 풀어보는 것입니다.



자동차 내비게이션 데이터 운영 경험을 바탕으로, 공공 데이터와 도로 네트워크 데이터를 연결해 지도 데이터 QA 후보를 추출하는 실무형 프로토타입입니다.



\## Future Plans



\* 보호구역 API 자동 수집

\* 신규 / 변경 / 삭제 보호구역 탐지

\* 표준노드링크와 보호구역 polygon 공간 매칭

\* 매칭 신뢰도 분류

\* QGIS 시각화

\* Streamlit 또는 웹 대시보드 구성

\* CSV / Excel QA 리포트 출력

\* 월별 변경 이력 관리



