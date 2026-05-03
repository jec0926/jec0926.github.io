import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "./assets/hero.png";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  FolderOpen,
  FileText,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Workflow,
  Target,
  Sparkles,
} from "lucide-react";

const profile = {
  name: "Business-oriented PO/PM | Process & Productivity Design",
  title: "Jason EunChan Jang",
  subtitle:
    "업무 프로세스를 구조화하고, 데이터와 AI를 활용해 생산성 개선안을 설계하는 PO/PM",
  summary:
    "서비스 운영 현장에서 VOC, B2B 고객 이슈, 주문중개·정산 프로세스를 직접 경험했고, 경영기획 조직에서는 KPI, 관리회계, BI 성과관리, 마케팅 비용 대비 성과 분석을 수행했습니다. 이 경험을 바탕으로 제품 문제를 사용자 불편에만 머무르지 않고 업무 흐름, 병목, 매출 Driver, 비용 구조, 운영 효율 관점에서 해석합니다. 데이터와 AI 도구를 활용해 문제를 빠르게 구조화하고, 현업과 경영진이 판단할 수 있는 생산성 개선안과 실행 구조로 전환하는 PO/PM을 지향합니다.",
  email: "dmscks940926@naver.com",
  phone: "010-2595-1395",
  location: "Seoul, Korea",
  linkedin: "https://www.linkedin.com/in/eunchanjang/",
  github: "https://github.com/jec0926",
};

const workStyleImages = [
  {
    src: "/images/work-style/work-style-1.jpg",
    alt: "업무 자료를 정리하고 분석하는 모습",
  },
  {
    src: "/images/work-style/work-style-2.jpg",
    alt: "업무 회의와 협업 현장",
  },
];

const stats = [
  { label: "Service Operations", value: "3+ yrs", sub: "VOC, B2B 고객 대응, 주문중개·정산, 성과관리 경험" },
  { label: "Business Metrics", value: "KPI", sub: "전사 실적관리, BI, ROAS, Financial Model 기반 판단" },
  { label: "Data Capability", value: "SQL/Python", sub: "데이터 정제·통합, RPA, 대시보드, 분석 파이프라인 경험" },
  { label: "Product Direction", value: "PO/PM", sub: "운영 문제를 제품 요구사항과 실행 우선순위로 전환" },
];

const roleFit = [
  {
    title: "Customer & Business Problem",
    desc: "VOC, 앱스토어 리뷰, B2B 고객 이슈, 운영 데이터를 바탕으로 고객과 현업이 겪는 문제를 제품 개선 과제로 정의합니다.",
    tags: ["VOC", "Customer Issue", "Problem Framing"],
  },
  {
    title: "Metric-based Prioritization",
    desc: "제품 이슈를 매출 Driver, 비용 구조, KPI, 운영 효율 관점으로 해석해 왜 지금 해결해야 하는지와 우선순위를 설명합니다.",
    tags: ["KPI", "Financial Model", "Priority"],
  },
  {
    title: "Requirements & Execution",
    desc: "문제를 화면 흐름, 데이터 기준, QA 체크포인트, 운영 프로세스까지 연결해 실행 가능한 요구사항과 협업 기준으로 구체화합니다.",
    tags: ["Requirements", "QA", "Operation Flow"],
  },
  {
    title: "Data & AI Leverage",
    desc: "SQL, Python, BI와 AI 도구를 활용해 문제 탐색, 데이터 검증, 문서화, PoC 기획 속도를 높이고 더 빠르게 검증 가능한 형태로 만듭니다.",
    tags: ["SQL/Python", "BI", "AI PoC"],
  },
];

const projects = [
  {
    slug: "serveone-tamsam",
    section: "real-business",
    category: "단기 프로젝트 RA · Data Support / RPA",
    title: "Non-Captive 병원 TAM/SAM 데이터 구축",
    oneLiner:
      "Non-Captive 시장 확장을 위한 TAM/SAM 정의와 우선 영업 타겟 선정을 위해 병원 회계공시 데이터, 협력 네트워크, 지오코딩 데이터를 결합했습니다.",
    tags: ["TAM/SAM", "RPA", "Market Sizing", "Geocoding"],
    cover: "/projects/serveone-tamsam/cover.png",
    details: ["/projects/serveone-tamsam/detail-1.png"],
    summary: {
      problem:
        "병원 정보가 분산되어 있어 Non-Captive 시장 규모 산정과 우선 영업 타겟 선정이 어려운 비정형 데이터 환경이었습니다.",
      approach: [
        "Captive 병원 협력 네트워크를 기반으로 대상 병원 리스트를 정의했습니다.",
        "병원 회계공시 데이터를 RPA로 수집하고 Python 기반으로 정제했습니다.",
        "지오코딩 데이터를 결합해 병원 단위 통합 마스터 데이터를 구축했습니다.",
      ],
      impact:
        "분산된 병원 데이터를 통합해 영업 타겟 선정이 가능한 구조화된 TAM/SAM 데이터를 확보했고, 병원 특성 기반 세분화를 통해 데이터 기반 영업 전략 수립의 기반을 마련했습니다.",
    },
    downloads: [],
    links: [
      {
        label: "관련 링크",
        href: "https://www.medipana.com/news/articleView.html?idxno=314328",
      },
    ],
  },
  {
    slug: "serveone-topline-backup",
    section: "real-business",
    category: "단기 프로젝트 RA · Business Data Support",
    title: "Financial Model Top-line 산출 Back-up 데이터 구축",
    oneLiner:
      "Top-line 산출의 객관성을 확보하기 위해 거시지표, 의료기관 종별 통계, 병원 단위 데이터를 분리·구조화해 재사용 가능한 분석 기반을 구축했습니다.",
    tags: ["Top-line", "SQL Server", "Data Pipeline", "Revenue Estimate"],
    cover: "/projects/serveone-topline-backup/cover.png",
    details: ["/projects/serveone-topline-backup/detail-1.png"],
    summary: {
      problem:
        "Top-line 산출 근거가 일관되지 않아 재사용과 검증이 어려운 구조였습니다.",
      approach: [
        "거시지표 기반 성장 가정과 의료기관 종별 통계 분석을 수행했습니다.",
        "SQL Server 기반으로 보건의료 데이터를 적재하고 분석 파이프라인을 구축했습니다.",
        "병원 단위 데이터와 통계 데이터를 분리해 재사용 가능한 형태로 구조화했습니다.",
      ],
      impact:
        "Top-line 산출 근거를 데이터 기반으로 체계화해 의사결정 신뢰도를 높였고, 반복적인 데이터 수집·가공 업무를 줄일 수 있는 데이터 인프라를 구축했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "serveone-gp-estimation",
    section: "real-business",
    category: "단기 프로젝트 RA · Financial Model Support",
    title: "제품군별 GP 추정 로직 설계",
    oneLiner:
      "내부 제품 데이터와 심평원 치료재료 데이터를 연계하기 위해 제품명 정규화와 텍스트 유사도 기반 매핑 로직을 설계했습니다.",
    tags: ["GP", "Text Matching", "Data Standardization", "Profitability"],
    cover: "/projects/serveone-gp-estimation/cover.png",
    details: ["/projects/serveone-gp-estimation/detail-1.png"],
    summary: {
      problem:
        "내부 제품 데이터와 외부 의료 데이터 간 표준이 일치하지 않아 제품군 단위 수익성 분석이 어려운 구조였습니다.",
      approach: [
        "제품명 정규화와 텍스트 유사도 기반 매핑 로직을 설계했습니다.",
        "심평원 치료재료 데이터와 내부 데이터의 연계 구조를 구축했습니다.",
        "데이터 불일치와 표준 부재 이슈를 구조적으로 분석했습니다.",
      ],
      impact:
        "제품군 단위 GP 추정을 위한 데이터 연계 구조를 설계하고 적용 가능성을 검증했으며, 향후 수익성 분석과 영업 전략 고도화를 위한 데이터 표준화 필요 영역을 도출했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "serveone-logistics-rpa",
    section: "real-business",
    category: "단기 프로젝트 RA · RPA / Data Automation",
    title: "물류 경로 거리·통행료 산출 RPA 개발",
    oneLiner:
      "주소 정규화와 지오코딩 기반으로 물류 경로별 거리·통행료를 자동 산출하는 RPA를 개발하고 현업 적용 프로세스를 설계했습니다.",
    tags: ["RPA", "Logistics", "Geocoding", "Productivity"],
    cover: "/projects/serveone-logistics-rpa/cover.png",
    details: ["/projects/serveone-logistics-rpa/detail-1.png"],
    summary: {
      problem:
        "거리·통행료 산출이 수작업 기반으로 수행되어 시간 소요가 크고 정확도 저하가 발생했습니다.",
      approach: [
        "주소 정규화와 지오코딩 기반의 RPA를 개발했습니다.",
        "경로별 거리·통행료 자동 산출 로직을 구현했습니다.",
        "사용자 가이드를 제작하고 현업 적용 프로세스를 설계했습니다.",
      ],
      impact:
        "물류 비용 산출 자동화를 통해 업무 효율성과 데이터 정확도를 개선했고, 글로벌 경로 확장 및 VRP 기반 최적화 적용 가능성을 검토할 수 있는 기반을 확보했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "idhealthcare-bi-kpi",
    section: "real-business",
    category: "실무 사례 · KPI / Web-based Performance Management",
    title: "아이디헬스케어 웹 기반 KPI 성과관리 시스템 설계 지원",
    oneLiner:
      "전사 및 그룹사 성과 데이터를 통합 관리하기 위해 KPI 정의, 계산 로직, 화면 설계, 데이터 정합성 QA, 조회 권한 구조를 구체화했습니다.",
    tags: ["KPI", "Web System", "Performance Management", "QA"],
    cover: "/projects/idhealthcare-bi-kpi/cover.png",
    details: ["/projects/idhealthcare-bi-kpi/detail-1.png"],
    summary: {
      problem:
        "운영 데이터가 분산되어 있어 전사 성과를 통합적으로 확인하고, 조직별 실적을 같은 기준으로 관리하기 어려운 환경이었습니다.",
      approach: [
        "기존 기획 문서를 기반으로 확정률, CAPA, 고객만족도, 대기시간, 콜 완료율 등 주요 KPI 정의와 계산 로직을 구체화했습니다.",
        "성과관리 화면 설계서를 작성하고, 조직별 조회 권한과 데이터 반영 프로세스를 정리했습니다.",
        "소스 데이터와 지표 간 정합성을 검증하고, IT 팀과 협업해 대시보드 구성 및 운영 가능성을 점검했습니다.",
      ],
      impact:
        "성과 데이터를 통합적으로 관리할 수 있는 웹 기반 KPI 성과관리 시스템 구현을 지원했고, 지표 정의와 데이터 정합성 기준을 정립해 전사 성과관리의 운영 기반을 마련했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "idhealthcare-potential-revenue",
    section: "real-business",
    category: "실무 사례 · KPI / Growth Operations",
    title: "미전환 수술건 KPI 확장 및 잠재 매출 관리 프로세스 구축",
    oneLiner:
      "상담 이후 수술로 이어지지 않는 고객 흐름을 잠재 매출 관점의 KPI로 정의하고, 부서 협업 기반의 재컨택·취소·재예약 운영 프로세스로 연결했습니다.",
    tags: ["KPI", "Potential Revenue", "Operations", "Stakeholder Alignment"],
    cover: "/projects/idhealthcare-potential-revenue/cover.png",
    details: ["/projects/idhealthcare-potential-revenue/detail-1.png"],
    summary: {
      problem:
        "상담 후 확정 및 가예약금 납부 이후에도 수술로 이어지지 않는 고객에 대한 관리 기준과 대응 체계가 부족했습니다.",
      approach: [
        "BI 데이터를 기반으로 미전환 수술건을 식별할 수 있는 KPI를 정의하고, 병원장 보고를 통해 경영진 관심 지표로 확장했습니다.",
        "성형 관련 부서와 협업해 재컨택, 취소 확정, 재예약 등 후속 대응 프로세스를 수립했습니다.",
        "월간 정기 회의의 필수 보고 항목으로 편입해 지속적으로 모니터링할 수 있는 운영 체계를 만들었습니다.",
      ],
      impact:
        "잠재 매출을 구조적으로 관리할 수 있는 KPI와 조직 단위 실행 체계를 구축했고, 매출 회수와 상담 프로세스 개선을 논의할 수 있는 경영진 판단 기준을 마련했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "idhealthcare-business-plan",
    section: "real-business",
    category: "실무 사례 · Business Planning / Budget",
    title: "전사 및 그룹사 연간·중장기 사업계획 수립 지원",
    oneLiner:
      "전사와 자회사 단위의 사업계획 보고서 작성, 마케팅 예산 수립, 실적 기준 정리를 지원하며 경영진 의사결정에 필요한 사업 성과 구조를 정리했습니다.",
    tags: ["Business Planning", "Budget", "Management Report", "KPI"],
    cover: "/projects/idhealthcare-business-plan/cover.png",
    details: ["/projects/idhealthcare-business-plan/detail-1.png"],
    summary: {
      problem:
        "본부별 실적, 예산, 마케팅 비용과 성과가 분산되어 있어 연간·중장기 사업계획 수립 시 일관된 기준으로 정리할 필요가 있었습니다.",
      approach: [
        "전사 및 그룹사 연간·중장기 사업계획 보고서 작성 업무를 지원했습니다.",
        "마케팅본부 광고비 예산 수립과 효율성 평가 관리에 필요한 데이터를 정리했습니다.",
        "목표 대비, 전월·전년 대비 실적 증감 사유를 분석해 보고 자료에 반영했습니다.",
      ],
      impact:
        "사업계획 수립에 필요한 실적과 예산 데이터를 같은 기준으로 정리하고, 경영진이 판단할 수 있는 보고 자료 구성에 기여했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "idhealthcare-revenue-target-model",
    section: "real-business",
    category: "실무 사례 · Financial Model / Revenue Target",
    title: "전사 사업부별 매출목표 Financial Model 설계 지원",
    oneLiner:
      "전사 본부별 차기년도 월간 매출목표를 사업 구조와 성과 흐름에 맞춰 정리하고, 목표 설정을 위한 Financial Model 기반을 지원했습니다.",
    tags: ["Financial Model", "Revenue Target", "Performance Management", "Planning"],
    cover: "/projects/idhealthcare-revenue-target-model/cover.png",
    details: ["/projects/idhealthcare-revenue-target-model/detail-1.png"],
    summary: {
      problem:
        "차기년도 매출목표 수립 과정에서 본부별 목표를 사업 구조와 월별 성과 흐름에 맞게 나누고 검토할 수 있는 기준이 필요했습니다.",
      approach: [
        "본부별 실적 데이터를 기반으로 월간 매출목표 산정에 필요한 기준 데이터를 정리했습니다.",
        "전사 사업부별 목표를 비교·검토할 수 있도록 Financial Model 기반의 계산 구조를 지원했습니다.",
        "목표와 실적 차이를 추적할 수 있도록 성과관리 지표와 보고 기준을 함께 정리했습니다.",
      ],
      impact:
        "본부별 목표 설정과 실적 관리를 연결하는 기초 모델을 지원해, 사업계획과 성과관리의 기준을 보다 명확히 했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "idhealthcare-marketing-performance",
    section: "real-business",
    category: "실무 사례 · Marketing Performance / ROAS",
    title: "마케팅 채널별 비용 대비 성과관리",
    oneLiner:
      "마케팅 채널별 광고비와 실적 데이터를 연결해 비용 대비 성과를 점검하고, 예산 운영과 효율성 평가에 활용할 수 있는 관리 기준을 정리했습니다.",
    tags: ["ROAS", "Marketing", "Performance Analysis", "Budget"],
    cover: "/projects/idhealthcare-marketing-performance/cover.png",
    details: ["/projects/idhealthcare-marketing-performance/detail-1.png"],
    summary: {
      problem:
        "마케팅 비용과 채널별 성과를 함께 보지 않으면 예산 효율성과 사업 성과 기여도를 판단하기 어려운 구조였습니다.",
      approach: [
        "채널별 광고비와 실적 데이터를 정리해 비용 대비 성과를 확인할 수 있는 기준을 마련했습니다.",
        "마케팅 예산 수립과 효율성 평가에 필요한 관리 데이터를 업데이트했습니다.",
        "성과 데이터 요청과 질의에 대응하며 본부별 실적관리 흐름에 반영했습니다.",
      ],
      impact:
        "마케팅 비용을 단순 집행액이 아니라 사업 성과와 연결해 보는 관점을 확보했고, 예산 운영 판단에 필요한 데이터 기반을 정리했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "beyond-strategy-growth",
    section: "real-business",
    category: "성과 사례 · Product Metrics / Growth Strategy",
    title: "Driver 기반 프로덕트 실적 저조 원인 분석 및 개선 전략 제안",
    oneLiner:
      "운영 현장에서 파악한 문제를 주문량, 수행률, 점포 수, 제휴사 확장 등 핵심 Driver로 구조화하고 실적 저조 원인과 개선 전략을 제안했습니다.",
    tags: ["Product Metrics", "Financial Model", "Growth", "Platform Operations"],
    cover: "/projects/beyond-strategy-growth/cover.png",
    details: [
      "/projects/beyond-strategy-growth/detail-1.png",
      "/projects/beyond-strategy-growth/detail-2.png",
      "/projects/beyond-strategy-growth/detail-3.png",
    ],
    summary: {
      problem:
        "우리동네 딜리버리-우친 및 주문중개 운영 과정에서 B2B 제휴 물량 수행 저조와 일정 지연으로 실적 부진이 지속됐지만, 원인을 설명하고 개선 우선순위를 판단할 수 있는 정량적 구조가 부족했습니다.",
      approach: [
        "앱 VOC, 앱스토어 리뷰, B2B 고객 문의, 정산·주문중개 운영 이슈를 통해 서비스 운영의 주요 마찰 지점을 파악했습니다.",
        "주문량, 수행률, 점포 수, 제휴사 확장, 비용 구조 등 실적을 설명하는 핵심 Driver를 정의하고 Financial Model 구조로 연결했습니다.",
        "Driver별 계획 대비 실적을 비교해 실적 저조 원인을 구조적으로 진단하고, 수행률과 매출 간 영향 관계를 분석했습니다.",
        "기존 계획만으로는 목표 달성이 어렵다고 판단해 운영 개선과 전략적 제휴 확대를 포함한 매출 회복 시나리오를 제안했습니다.",
      ],
      impact:
        "프로덕트 실적 저조 원인을 데이터 기반으로 설명할 수 있는 구조를 만들고, 개선 의견과 성장 전략을 제안했습니다. 이후 관련 제휴 전략 실행을 통해 매출이 약 20% 이상 성장한 사례로 이어진 것으로 확인했습니다.",
    },
    downloads: [],
    links: [
      {
        label: "관련 링크",
        href: "https://dealsitetv.com/articles/118022",
      },
    ],
  },
  {
    slug: "beyond-ops-monitoring",
    section: "real-business",
    category: "실무 사례 · Service Operations / Metrics",
    title: "데이터 기반 운영 모니터링 및 수행 효율 개선 대응",
    oneLiner:
      "지역별 주문량, 수행률, 라이더 수 데이터를 지속적으로 모니터링하며 수행률 저하 구간과 운영 병목을 식별하고 개선 방향을 제안했습니다.",
    tags: ["Service Operations", "Metrics", "Monitoring", "Issue Tracking"],
    cover: "/projects/beyond-ops-monitoring/cover.png",
    details: ["/projects/beyond-ops-monitoring/detail-1.png"],
    summary: {
      problem:
        "성과관리 과정에서 지역별 수행률 불균형과 라이더 수급 문제로 운영 비효율이 발생했고, 문제 지역을 빠르게 식별할 기준이 필요했습니다.",
      approach: [
        "지역별 주문량, 수행률, 라이더 수 데이터를 기반으로 운영 현황을 지속적으로 모니터링했습니다.",
        "수행률 저하 구간과 병목 지역을 식별하고, 수행률과 매출 간 영향 관계를 분석했습니다.",
        "저조 지역을 대상으로 라이더 수급과 운영 개선 방안을 제안했습니다.",
      ],
      impact:
        "운영 데이터 기반으로 문제 원인을 구조적으로 식별하고, 수행률 개선과 서비스 안정성 확보를 위한 운영 대응 체계를 지원했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "beyond-financial-model-structure",
    section: "real-business",
    category: "실무 사례 · Financial Model / Business Structure",
    title: "Driver 기반 Financial Model 설계 및 사업 구조 정의",
    oneLiner:
      "수행건수, 점포 수, 제휴사 확장 등 핵심 Driver를 정의하고 GS Retail·B2B 사업 구조를 반영한 매출 및 수익 구조 모델을 설계했습니다.",
    tags: ["Financial Model", "Business Structure", "Driver", "Strategy"],
    cover: "/projects/beyond-financial-model-structure/cover.png",
    details: ["/projects/beyond-financial-model-structure/detail-1.png"],
    summary: {
      problem:
        "사업 성장 전략과 매출 목표 설정을 위한 정량적 기준이 부족해, 성과관리와 전략 수립을 같은 구조로 설명하기 어려웠습니다.",
      approach: [
        "수행건수, 점포 수, 제휴사 확장 등 핵심 Driver를 정의했습니다.",
        "GS Retail 및 B2B 사업 구조를 반영해 매출과 수익 구조를 모델링했습니다.",
        "Driver 간 관계를 기반으로 매출 산출 구조를 설계했습니다.",
      ],
      impact:
        "사업 구조를 정량적으로 설명할 수 있는 Financial Model을 설계하고, 성과관리와 전략 수립의 기준 프레임을 구축했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "beyond-governance-ir",
    section: "real-business",
    category: "실무 사례 · IR / Governance Process",
    title: "이사회·주주총회 운영 프로세스 구축 및 Governance 체계 수립",
    oneLiner:
      "투자사 대응을 위한 이사회와 주주총회 운영 프로세스를 설계하고, 안건 구성부터 후속 관리까지 의사결정·보고 체계를 표준화했습니다.",
    tags: ["IR", "Governance", "Process Design", "Executive Communication"],
    cover: "/projects/beyond-governance-ir/cover.png",
    details: ["/projects/beyond-governance-ir/detail-1.png"],
    summary: {
      problem:
        "투자사 대응을 위한 이사회 및 주주총회 운영 프로세스가 정립되어 있지 않아 의사결정과 보고 체계를 표준화할 필요가 있었습니다.",
      approach: [
        "이사회 및 주주총회 운영 프로세스를 설계했습니다.",
        "안건 구성, 보고 체계, 운영 매뉴얼을 구축했습니다.",
        "회의 준비와 진행, 후속 관리까지 전체 프로세스 운영을 지원했습니다.",
      ],
      impact:
        "조직 최초의 Governance 체계를 구축해 의사결정 구조를 정립하고, 투자사 대응을 위한 의사결정 및 보고 프로세스를 표준화했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "traffic-info-bigdata",
    section: "real-business",
    category: "공공빅데이터 인턴십 · Public Data / System Planning",
    title: "도로교통공단 교통정보 빅데이터화 및 제보접수 시스템 구축",
    oneLiner:
      "도로교통공단 파견 프로젝트에서 텍스트 기반 교통 제보 데이터를 위치·유형 기준으로 구조화하고, 조회·수정·다운로드가 가능한 업무 시스템 방향을 설계했습니다.",
    tags: ["Public Data", "Traffic Data", "System Planning", "Data Structuring"],
    cover: "/projects/traffic-info-bigdata/cover.png",
    details: [
      "/projects/traffic-info-bigdata/detail-1.png",
      "/projects/traffic-info-bigdata/detail-2.png",
      "/projects/traffic-info-bigdata/detail-3.png",
    ],
    summary: {
      problem:
        "교통 제보와 방송 활용 정보가 텍스트·파일 중심으로 관리되어 위치 기반 검색, 이력 관리, 데이터 재사용, 실시간 업무 활용에 한계가 있었습니다.",
      approach: [
        "제보 접수 데이터의 주요 항목을 정의하고 교통정보 유형, 위치, 처리 상태 중심으로 구조화했습니다.",
        "업무 담당자가 제보 정보를 조회·수정하고 CSV로 다운로드할 수 있는 관리 화면 흐름을 설계했습니다.",
        "제보 데이터와 도로·위치 정보를 연결해 교통정보를 빅데이터화할 수 있는 데이터베이스 구조와 운영 프로세스를 정리했습니다.",
        "실시간 교통정보 제공과 내부 업무 효율화를 함께 고려해 시스템 활용 시나리오를 제안했습니다.",
      ],
      impact:
        "비정형 교통 제보를 검색·관리 가능한 데이터 자산으로 전환하는 방향을 제시했고, 공공기관 현장에서 데이터 구조화와 업무 시스템 기획을 경험한 대표 프로젝트로 정리할 수 있습니다.",
    },
    downloads: [
      {
        label: "교통정보빅데이터 결과보고서 PDF",
        href: "/projects/traffic-info-bigdata/교통정보빅데이터 결과보고서.pdf",
      },
    ],
    links: [],
  },
  {
    slug: "traffic-radio-map-prototype",
    section: "real-business",
    category: "공공빅데이터 인턴십 · Map Prototype / Spatial Data",
    title: "TBN FM 방송구역 전파지도 시각화 프로토타입 개발",
    oneLiner:
      "전국 TBN FM 송신소 및 중계소 KML 데이터를 수집·정제하고, 방송구역 내 전파 강도 분포를 지도 기반으로 시각화하는 웹 프로토타입을 설계했습니다.",
    tags: ["Spatial Data", "Map Prototype", "KML", "Visualization"],
    cover: "/projects/traffic-radio-map-prototype/cover.png",
    details: ["/projects/traffic-radio-map-prototype/detail-1.png"],
    summary: {
      problem:
        "방송구역 전파 데이터가 시각적으로 표현되지 않아 구역 분석과 의사결정 활용에 제약이 있었습니다.",
      approach: [
        "전국 TBN FM 송신소 및 중계소 KML 데이터를 수집하고 분석했습니다.",
        "KML 데이터를 CSV/XLS 형태로 변환하고 좌표 데이터를 정제했습니다.",
        "지도 기반 전파 강도 시각화 웹 프로토타입을 설계하고 구현했습니다.",
      ],
      impact:
        "방송 구역과 전파 강도 분석 효율을 높일 수 있는 시각화 구조를 제안했고, 위치 기반 데이터 처리와 공간 데이터 시각화 경험을 확보했습니다.",
    },
    downloads: [],
    links: [],
  },
  {
    slug: "beyond-homepage-renewal",
    section: "real-business",
    category: "실무 사례 · Web Renewal / Project Management",
    title: "비욘드아이앤씨 기업 홈페이지 리뉴얼 PM",
    oneLiner:
      "기업 홈페이지 리뉴얼 프로젝트의 PM으로 정보 구조, 콘텐츠 구성, 일정 및 협업 커뮤니케이션을 관리하며 대외 서비스 채널을 재정비했습니다.",
    tags: ["PM", "Web Renewal", "Information Architecture", "Stakeholder Management"],
    cover: "/projects/beyond-homepage-renewal/cover.png",
    details: [
      "/projects/beyond-homepage-renewal/detail-1.png",
      "/projects/beyond-homepage-renewal/detail-2.png",
      "/projects/beyond-homepage-renewal/detail-3.png",
    ],
    summary: {
      problem:
        "기업 홈페이지가 서비스 소개와 브랜드 메시지를 효과적으로 전달하기 어려운 구조였고, 대외 채널로서의 정보 구조와 콘텐츠 정비가 필요했습니다.",
      approach: [
        "홈페이지 리뉴얼 프로젝트 PM으로 전체 일정과 협업 커뮤니케이션을 관리했습니다.",
        "서비스 소개, 사업 영역, 회사 정보의 정보 구조와 콘텐츠 흐름을 재정리했습니다.",
        "내부 이해관계자와 개발·디자인 협업 과정에서 요구사항을 정리하고 반영 여부를 확인했습니다.",
        "오픈 전 주요 페이지 구성과 콘텐츠 품질을 점검했습니다.",
      ],
      impact:
        "대외 서비스 채널을 현재 사업 구조에 맞게 재정비했고, IT 서비스 기획에 필요한 요구사항 정리, 일정 관리, 콘텐츠 구조화, 품질 점검 경험을 쌓았습니다.",
    },
    downloads: [],
    links: [
      {
        label: "비욘드아이앤씨 홈페이지",
        href: "https://www.beyondinc.co.kr/index.html",
      },
    ],
  },
  {
    slug: "mychef-launch-qa",
    section: "real-business",
    category: "실무 사례 · SI Project QA / Service Validation",
    title: "마이셰프 SI 프로젝트 QA 수행",
    oneLiner:
      "SI 프로젝트에서 BO/FO 페이지와 Web/App 환경 전반을 대상으로 테스트 케이스를 작성하고, 주요 기능과 화면 흐름의 품질 리스크를 점검했습니다.",
    tags: ["SI Project", "QA", "Test Case", "Web/App"],
    cover: "/projects/mychef-launch-qa/cover.png",
    details: [
      "/projects/mychef-launch-qa/detail-1.png",
      "/projects/mychef-launch-qa/detail-2.png",
      "/projects/mychef-launch-qa/detail-3.png",
    ],
    summary: {
      problem:
        "SI 프로젝트에서 BO/FO 페이지와 Web/App 환경의 사용자·운영자 흐름이 요구사항대로 작동하는지 검증할 필요가 있었습니다.",
      approach: [
        "BO/FO 페이지별 주요 기능과 사용자·운영자 흐름을 기준으로 테스트 케이스를 작성했습니다.",
        "Web/App 환경에서 회원, 상품 탐색, 주문, 결제, 운영 관리 흐름을 반복 검증했습니다.",
        "발견된 버그를 정리해 보고하고, 수정 여부를 재확인했습니다.",
        "주요 기능과 화면 흐름의 품질 리스크를 점검했습니다.",
      ],
      impact:
        "SI 프로젝트 QA를 통해 사용자 경험과 운영자 기능의 품질 리스크를 점검했고, 요구사항 기반 검증과 이슈 리포팅 경험을 쌓았습니다.",
    },
    downloads: [],
    links: [
      {
        label: "마이셰프",
        href: "https://www.mychef.kr/",
      },
    ],
  },
  {
    slug: "personal-digital-content-business",
    section: "real-business",
    category: "개인 프로젝트 · Business Model / Automation",
    title: "디지털 콘텐츠 자동화 유통 시스템 구축",
    oneLiner:
      "콘텐츠 생성부터 전달까지 End-to-End 자동화 시스템을 설계하고, 실제 판매를 통해 비즈니스 모델의 수익화 가능성을 검증했습니다.",
    tags: ["Business Model", "Automation", "Revenue", "Platform"],
    cover: "/projects/personal-digital-content-business/cover.png",
    details: [
      "/projects/personal-digital-content-business/detail-1.png",
      "/projects/personal-digital-content-business/detail-2.png",
      "/projects/personal-digital-content-business/detail-3.png",
    ],
    summary: {
      problem:
        "디지털 콘텐츠는 주문별 수작업 처리와 불법 복제 문제로 인해 확장 가능한 유통 및 수익화 구조가 부재했습니다.",
      approach: [
        "주문 → 콘텐츠 생성 → 전달까지 End-to-End 자동화 유통 시스템을 설계했습니다.",
        "사용자별 워터마크 및 복사 방지 로직을 적용한 추적 구조를 구축했습니다.",
        "페이지 단위 워터마킹 및 예외 처리 로직을 설계했습니다.",
        "주문 이력 관리 및 재처리를 위한 CRUD 기반 운영 시스템을 구축했습니다.",
      ],
      impact:
        "수작업 기반 프로세스를 자동화 시스템으로 전환해 확장 가능한 디지털 콘텐츠 유통 구조를 구현했고, 실제 스마트스토어 판매를 통해 비즈니스 모델의 실행 가능성을 검증했습니다.",
    },
    downloads: [],
    links: [
      { label: "관련 링크",
        href: "https://smartstore.naver.com/groo_of_music" },
    ],
  },
  {
    slug: "beyond-settlement-automation",
    section: "real-business",
    category: "실무 사례 · Process Improvement / Data Preprocessing",
    title: "정산 업무 프로세스 구조화 및 전처리 효율화",
    oneLiner:
      "정산 업무 흐름을 분석해 반복 전처리 병목을 정의하고, Python 코드로 업무 보조 도구를 만들어 4시간 소요 작업을 약 40분 수준으로 단축했습니다.",
    tags: ["Process Improvement", "Data Preprocessing", "Python", "Productivity"],
    cover: "/projects/beyond-settlement-automation/cover.png",
    details: ["/projects/beyond-settlement-automation/detail-1.png"],
    summary: {
      problem:
        "주문중개 서비스 운영 과정에서 정산 프로세스가 수작업 중심으로 운영되어 시간 소요가 크고, 반복 업무 부담과 오류 리스크가 높은 구조였습니다.",
      approach: [
        "정산 담당자로서 기존 업무 흐름을 단계별로 파악하고, 시간 소요가 큰 반복 전처리 병목을 정의했습니다.",
        "Python 스크립트로 정산 데이터 정리, 변환, 검증에 필요한 전처리 과정을 효율화했습니다.",
        "정산 결과물을 운영 담당자가 사용할 수 있도록 정리하고, 반복 작업 시간을 줄이는 실무형 업무 보조 도구로 활용했습니다.",
      ],
      impact:
        "정산 데이터 전처리 시간을 4시간에서 약 40분 수준으로 단축해 반복 업무 부담을 줄였습니다. 핵심은 깊은 시스템 개발보다 업무 프로세스를 파악하고, 생산성 개선을 위한 구체적인 해결 구조를 설계했다는 점입니다.",
    },
    downloads: [],
    links: [
      {
        label: "관련 링크",
        href: "https://www.beyondinc.co.kr/html/service/order-brokerage-service.html",
      },
    ],
  },
  {
    slug: "lgcns-ai-agent",
    section: "ai-analytics",
    category: "산학협력 프로젝트 · AI Agent / Service PoC",
    title: "PI 컨설팅 업무 생산성 개선을 위한 AI Agent 서비스 PoC 기획",
    oneLiner:
      "PI 컨설턴트의 프로세스 탐색·비교 업무를 구조화하고, BPMN 기반 GraphDB와 RAG를 활용해 개선 의사결정을 지원하는 AI Agent 서비스 PoC를 기획했습니다.",
    tags: ["AI Agent", "Service PoC", "RAG", "Process Intelligence"],
    cover: "/projects/korea-univ-lgcns-ai-agent/cover.png",
    details: [
      "/projects/korea-univ-lgcns-ai-agent/detail-1.png",
      "/projects/korea-univ-lgcns-ai-agent/detail-2.png",
      "/projects/korea-univ-lgcns-ai-agent/detail-3.png",
    ],
    summary: {
      problem:
        "PI 컨설팅 업무에서 프로세스 문서 탐색과 유사 사례 비교가 키워드 검색 중심으로 이루어져, 컨설턴트가 전체 흐름을 빠르게 파악하고 개선 방향을 도출하기 어려운 구조였습니다.",
      approach: [
        "컨설턴트의 업무 흐름을 프로세스 탐색, 맥락 이해, 유사 사례 비교, 개선 방향 도출 단계로 구조화했습니다.",
        "BPMN XML을 GraphDB로 변환해 프로세스 관계와 흐름을 분석 가능한 구조로 재설계했습니다.",
        "Graph 기반 RAG 구조를 통해 자연어 질의로 프로세스 맥락을 탐색할 수 있는 AI Agent 구조를 설계했습니다.",
        "Best Practice 비교와 As-Is/To-Be 개선 방향 도출이 가능한 질의·응답 시나리오를 구체화했습니다.",
        "보고서 자동 생성 방향은 검토 후 프로젝트 범위에서 제외하고, 의사결정 지원 구조와 프로세스 개선 인사이트 도출에 집중했습니다.",
      ],
      impact:
        "AI 적용 가능 영역을 정의하고, 프로세스 이해와 개선 의사결정을 지원하는 서비스 PoC 구조로 전환했습니다. 컨설팅 업무의 반복 탐색 공수를 줄이고 개선 방향 도출을 보조할 수 있는 구체적인 기능 흐름을 제안했습니다.",
    },
    downloads: [
      {
        label: "LG CNS 캡스톤 발표자료 PDF",
        href: "/projects/korea-univ-lgcns-ai-agent/LG_CNS_캡스톤_발표자료.pdf",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jec0926/BPMN-RAG-AI-Agent",
      },
    ],
  },
  {
    slug: "card-segmentation-strategy",
    section: "ai-analytics",
    category: "학업 프로젝트 · Analytics / Strategy",
    title: "고객 세그먼트 재정의 및 데이터 기반 전략 설계",
    oneLiner:
      "불균형 데이터 환경에서 고객군을 재정의하고 행동 기반으로 해석해, 세그먼트별 실행 가능한 마케팅 전략으로 연결했습니다.",
    tags: ["Analytics", "Segmentation", "Strategy", "ML"],
    cover: "/projects/korea-univ-card-segmentation-strategy/cover.png",
    details: [
      "/projects/korea-univ-card-segmentation-strategy/detail-1.png",
      "/projects/korea-univ-card-segmentation-strategy/detail-2.png",
      "/projects/korea-univ-card-segmentation-strategy/detail-3.png",
    ],
    summary: {
      problem:
        "주어진 고객 세그먼트의 의미가 불명확해 실질적인 고객 전략 수립에 활용하기 어려운 구조였습니다.",
      approach: [
        "고차원 데이터 구조를 정제하고 주요 변수를 재구성했습니다.",
        "멀티 클래스 불균형 환경을 고려해 모델 구조를 재설계했습니다.",
        "세그먼트별 행동 특성을 기반으로 고객군을 해석했습니다.",
      ],
      impact:
        "세그먼트를 전략 단위로 재정의하고, KPI 중심 고객군 포지셔닝과 실행 가능한 리텐션·활성화 전략 수립으로 연결했습니다.",
    },
    downloads: [
      {
        label: "프로젝트 보고서 PDF",
        href: "/projects/korea-univ-card-segmentation-strategy/신용카드_고객세그먼트_분류_프로젝트.pdf",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jec0926/credit-card-customer-segmentation",
      },
    ],
  },
  {
    slug: "public-data-scoring-model",
    section: "ai-analytics",
    category: "공모전 프로젝트 · Public Data / Location Analytics",
    title: "법정동 단위 생활편의 입지 평가 스코어링 모델",
    oneLiner:
      "공공·통계 데이터를 법정동 단위로 결합하고, 카드 소비 기반 가중치를 적용해 생활편의 인프라와 소비 접근성을 평가하는 스코어링 모델을 설계했습니다.",
    tags: ["Public Data", "Scoring Model", "Location Analytics", "Policy Insight"],
    cover: "/projects/korea-univ-public-data-scoring-model/cover.png",
    details: [
      "/projects/korea-univ-public-data-scoring-model/detail-1.png",
      "/projects/korea-univ-public-data-scoring-model/detail-2.png",
      "/projects/korea-univ-public-data-scoring-model/detail-3.png",
    ],
    summary: {
      problem:
        "지역 불균형 문제는 시군구 단위로 논의되는 경우가 많아 실제 생활권 차이를 세밀하게 반영하기 어려웠고, 법정동 단위에서 생활편의 인프라와 소비 접근성을 평가할 수 있는 기준이 필요했습니다.",
      approach: [
        "공공·통계 데이터를 법정동 단위로 통합하고 분석 가능한 지표 구조로 정리했습니다.",
        "소비접근성, 서비스 인프라, 공공문화 인프라, 교육, 교통, 디지털 관련 지표를 구성했습니다.",
        "카드 소비 데이터를 기반으로 지표 가중치를 설계하고, 생활편의 입지 평가 점수를 산출했습니다.",
        "스코어링 결과를 기반으로 생활편의 접근성이 낮은 지역을 도출하고 정책·입지 관점의 해석을 제시했습니다.",
      ],
      impact:
        "공공데이터와 소비 데이터를 결합해 지역 단위 의사결정 기준을 설계했고, 정책·입지·서비스 전략 관점에서 활용 가능한 데이터 기반 스코어링 모델 경험으로 정리했습니다.",
    },
    downloads: [
      {
        label: "통계데이터 활용대회 보고서 PDF",
        href: "/projects/korea-univ-public-data-scoring-model/2025년 통계데이터 활용대회보고서.pdf",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jec0926/public-data-scoring",
      },
    ],
  },
  {
    slug: "jeonse-risk-dashboard",
    section: "ai-analytics",
    category: "공모전 프로젝트 · Public Data / Risk Analytics",
    title: "전세사기 조기 리스크 탐지 모델 및 대시보드 설계",
    oneLiner:
      "공공데이터를 결합해 지역 단위 전세사기 위험을 조기 탐지하고, B2G·B2C 활용이 가능한 리스크 평가 대시보드 구조를 설계했습니다.",
    tags: ["Risk Model", "Public Data", "Dashboard", "B2G", "Early Warning"],
    cover: "/projects/korea-univ-jeonse-risk-dashboard/cover.png",
    details: [
      "/projects/korea-univ-jeonse-risk-dashboard/detail-1.png",
      "/projects/korea-univ-jeonse-risk-dashboard/detail-2.png",
      "/projects/korea-univ-jeonse-risk-dashboard/detail-3.png",
    ],
    summary: {
      problem:
        "전세사기 대응은 사후 단속과 사고 이후 보상 중심으로 운영되어, 구조적 위험을 조기에 탐지하고 선제적으로 대응할 수 있는 지역 단위 관리 체계가 부족했습니다.",
      approach: [
        "국토교통부 실거래 데이터, 대법원 등기정보광장, 한국부동산원·HUG 데이터를 결합해 거래·등기·보증 단계를 연결한 통합 데이터 구조를 설계했습니다.",
        "전세가율, 거래량, 소형주택 비중, 근저당권 등기, 보증사고, 임차권등기, 강제경매 등 위험지표를 파생변수화하고 Z-score 기반으로 표준화했습니다.",
        "구조적 위험 점수와 발생경보 점수를 분리 설계한 뒤 종합 리스크 점수를 산출해 지역 단위 조기경보 체계를 구축했습니다.",
        "이상치 탐지 이후 실제 보증사고·임차권등기 증가 여부를 사후 검증해 신호의 유의미성을 점검했고, 대시보드 형태의 서비스 시나리오까지 설계했습니다.",
      ],
      impact:
        "경보 발생 전후 비교에서 사고율 +28%p, 사고건수 +34% 증가를 확인해 조기경보 신호의 유효성을 검증했습니다. 또한 B2G 관점에서 전체 사고의 최대 35%를 사전 차단하고 월 최대 약 210억 원 규모 피해를 예방할 수 있는 활용 가능성을 제시했습니다.",
    },
    downloads: [
      {
        label: "전 SAFE 발표자료 PDF",
        href: "/projects/korea-univ-jeonse-risk-dashboard/DAB FINAL 발표자료.pdf",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jec0926/Jeonsae-risk-detecting-dashboard",
      },
    ],
  },
  {
    slug: "work-system-empirical-analysis",
    section: "ai-analytics",
    category: "학업 프로젝트 · Empirical Analytics / Policy Strategy",
    title: "근무제도 변화에 대한 기업의 대응 전략 실증분석",
    oneLiner:
      "주 5일제 도입기 데이터를 준실험적 분석 틀로 재구성해, 향후 주 4일제 논의에서 기업의 보상·초과근로·고용 전략 대응 시사점을 도출했습니다.",
    tags: ["Empirical Analytics", "DID", "Policy Strategy", "Labor Data"],
    cover: "/projects/korea-univ-work-system-empirical-analysis/cover.png",
    details: ["/projects/korea-univ-work-system-empirical-analysis/detail-1.png"],
    summary: {
      problem:
        "주 4일제와 근로시간 단축 논의가 확대되는 상황에서, 기업이 실제로 어떤 방식으로 보상 구조와 고용 전략을 조정할지에 대한 실증적 근거가 부족했습니다.",
      approach: [
        "과거 주 5일제 도입기를 유사한 제도 충격 사례로 설정하고 분석 프레임을 구성했습니다.",
        "상대임금지수, 초과근무 시급, 시간당 정액급여 부담, 고용 안정성 등 기업 대응을 관찰할 지표를 정의했습니다.",
        "Difference-in-Differences 관점으로 제도 변화 전후의 기업 행동 변화를 검토했습니다.",
        "분석 결과를 바탕으로 향후 주 4일제 도입 시 기업의 대응 전략과 정책 설계 시사점을 정리했습니다.",
      ],
      impact:
        "노동제도 변화라는 거시 이슈를 기업의 비용 구조, 보상 체계, 고용 전략 관점으로 구조화했고, 데이터 기반 정책·기업 전략 시사점으로 연결한 학업 프로젝트입니다.",
    },
    downloads: [
      {
        label: "실증분석 보고서 PDF",
        href: "/projects/korea-univ-work-system-empirical-analysis/work-system-empirical-report.pdf",
      },
      {
        label: "발표자료 PDF",
        href: "/projects/korea-univ-work-system-empirical-analysis/work-system-empirical-slides.pdf",
      },
    ],
    links: [],
  },
];

const experiences = [
  {
    period: "2025.03 - 2026.08",
    company: "고려대학교 일반대학원",
    role: "MSBA | 경영학 Business Analytics 석사과정",
    headline: "데이터와 AI를 제품 문제 해결에 활용하는 역량 강화",
    description:
      "운영과 경영기획 경험을 바탕으로 Business Analytics 석사과정에 진학해 데이터 분석, 대시보드, 머신러닝, AI Agent 프로젝트를 수행했습니다. 특히 업무 프로세스 탐색과 생산성 개선을 AI Agent 서비스 PoC로 연결하는 경험을 쌓았습니다.",
    bullets: [
      "고객 세그먼트 재정의, 전세사기 리스크 스코어링, 공공데이터 입지 평가 프로젝트 수행",
      "BPMN/RAG 기반 AI Agent 서비스 PoC로 프로세스 탐색과 개선 의사결정 지원 구조 설계",
      "Python, SQL, 대시보드, 모델링을 제품·사업 판단 근거로 연결하는 훈련",
    ],
  },
  {
    period: "2024.05 - 2025.02",
    company: "아이디헬스케어그룹",
    role: "Business Analyst",
    headline: "전사 KPI·웹 성과관리·관리회계 기반 성과관리 핵심 실무",
    description:
      "전사 및 그룹사의 성과관리, 사업계획, KPI, 비용 구조를 데이터 기반으로 운영하며 경영 의사결정을 지원했습니다. PO/PM 관점에서 중요한 지표 정의, 웹 기반 성과관리 시스템 QA, 부서별 실행 프로세스, 경영진 보고 체계를 실제 업무로 경험한 핵심 경력입니다.",
    bullets: [
      "웹 기반 성과관리 시스템 설계 지원, KPI 계산 로직 구체화, 데이터 정합성 QA 수행",
      "미전환 수술건 KPI를 정의하고 잠재 매출 관리 프로세스를 월간 보고 체계로 편입",
      "ROAS 기반 마케팅 예산 통제 및 진료과·시술 단위 성과관리 체계 구축",
      "사업계획, 예산관리, 비용 코드 정비, 전사 실적 및 비용 데이터 질의 대응",
    ],
  },
  {
    period: "2022.04 - 2024.05",
    company: "비욘드아이앤씨",
    role: "Product Operations & Business Strategy",
    headline: "서비스 운영 현장에서 출발한 제품 문제 정의와 개선 전략",
    description:
      "첫 실무 경력으로 우리동네 딜리버리-우친 앱 VOC, 앱스토어 리뷰 대응, B2B 고객 트러블슈팅, 주문중개·정산 운영을 수행하며 제품 운영의 실제 문제를 가장 가까운 곳에서 경험했습니다. 이후 핵심 Driver 기반 Financial Model로 실적 저조 원인을 구조화하고 개선 전략을 제안하며 운영 경험을 사업성과 관점으로 확장했습니다.",
    bullets: [
      "구글 플레이스토어·애플 앱스토어 리뷰 대응 및 VOC 수집 후 주요 사용자 의견 개진",
      "B2B 고객 대응, 주문중개 시스템 트러블슈팅, 정산 운영 등 서비스운영 업무 수행",
      "주문량, 수행률, 점포 수, 제휴사 확장 등 Driver 기반 실적 저조 원인 분석 및 개선 전략 제안",
      "정산 업무 프로세스 구조화 및 Python 기반 전처리 효율화로 업무 처리 시간 4시간에서 약 40분 수준으로 단축",
      "홈페이지 리뉴얼 PM 및 SI 프로젝트 BO/FO·Web/App QA 수행",
    ],
  },
  {
    period: "2020.08 - 2020.12",
    company: "공공빅데이터 청년인턴십",
    role: "Project Manager",
    headline: "공공기관 데이터 구조화 및 교통정보 시스템 기획",
    description:
      "NIA 공공빅데이터 인턴십에서 빅데이터 분석 방법론 교육과 정책 분석 프로젝트를 수행한 뒤, 도로교통공단 방송본부 편성제작처에 파견되어 교통정보 빅데이터 프로젝트와 전파지도 프로젝트를 PM으로 이끌었습니다.",
    bullets: [
      "2020.08 - 2020.09: 빅데이터 분석 방법론 교육 이수 및 고령친화도시 지표 분석 프로젝트 수행",
      "2020.10 - 2020.12: 교통정보 빅데이터화 및 제보접수 시스템 구축 프로젝트 PM 수행",
      "2020.10 - 2020.12: TBN FM 방송구역 전파지도 프로젝트 PM 수행",
    ],
  },
];

const strengths = [
  {
    title: "운영과 고객 접점 이해",
    items: ["VOC", "앱 리뷰 대응", "B2B 고객 이슈", "주문중개 운영", "정산 프로세스"],
  },
  {
    title: "비즈니스 판단 기준",
    items: ["KPI", "Financial Model", "관리회계", "ROAS", "IR/M&A 지원"],
  },
  {
    title: "데이터 핸들링과 구조화",
    items: ["Python", "SQL", "BI", "RPA", "데이터 파이프라인"],
  },
  {
    title: "생산성 개선 설계",
    items: ["업무 프로세스 구조화", "병목 정의", "요구사항 구체화", "QA", "AI Agent PoC"],
  },
];

const additionalExperience = [
  {
    title: "Service Operations",
    desc: "우친 앱 VOC, 앱스토어 리뷰, B2B 고객 대응, 주문중개·정산 운영을 통해 제품이 실제로 사용되고 운영되는 접점을 경험",
    tags: ["VOC", "B2B Support", "Operations"],
  },
  {
    title: "Executive Reporting",
    desc: "전사 실적관리, 병원장 보고, 월간 회의 보고 항목 운영 등 경영진 판단에 필요한 지표와 메시지 정리 경험",
    tags: ["KPI", "Reporting", "Decision Support"],
  },
  {
    title: "Quality Assurance",
    desc: "SI 프로젝트에서 BO/FO 페이지와 Web/App 환경의 테스트 케이스를 작성하고, 버그 보고 및 수정 여부 확인까지 QA로 수행",
    tags: ["SI Project", "QA", "Test Case"],
  },
  {
    title: "Governance & Corporate Planning",
    desc: "이사회·주주총회 운영 프로세스, IR 대응, M&A 추진 지원, 사업계획 및 예산관리 등 비즈니스 판단 구조에 가까운 업무 경험",
    tags: ["IR", "M&A Support", "Governance"],
  },
];

const proofArtifacts = [
  {
    title: "LG CNS PI Consulting AI Agent",
    type: "Graduate Project",
    desc: "PI 컨설턴트의 반복적인 프로세스 탐색·비교 업무를 구조화하고, BPMN/RAG 기반으로 개선 의사결정을 지원하는 AI Agent 서비스 PoC입니다.",
    tags: ["AI Agent", "Service PoC", "BPMN", "Process Intelligence"],
    primaryLabel: "GitHub",
    primaryHref: profile.github,
    secondaryLabel: "발표자료 PDF",
    secondaryHref: "/projects/korea-univ-lgcns-ai-agent/LG_CNS_캡스톤_발표자료.pdf",
  },
  {
    title: "전세사기 리스크 탐지 모델",
    type: "Academic Project",
    desc: "공공데이터를 결합해 지역 단위 위험 신호를 설계하고, B2G/B2C 활용 가능한 리스크 대시보드 구조로 정리했습니다.",
    tags: ["Risk Analytics", "Public Data", "Dashboard"],
    primaryLabel: "GitHub",
    primaryHref: "https://github.com/jec0926/Jeonsae-risk-detecting-dashboard",
    secondaryLabel: "발표자료 PDF",
    secondaryHref: "/projects/korea-univ-jeonse-risk-dashboard/DAB FINAL 발표자료.pdf",
  },
  {
    title: "고객 세그먼트 전략 분석",
    type: "Academic Project",
    desc: "불균형 고객 데이터를 재해석해 세그먼트의 의미를 정의하고, 실행 가능한 마케팅 전략으로 연결한 분석 프로젝트입니다.",
    tags: ["Segmentation", "ML", "Strategy"],
    primaryLabel: "GitHub",
    primaryHref: "https://github.com/jec0926/credit-card-customer-segmentation",
    secondaryLabel: "보고서 PDF",
    secondaryHref: "/projects/korea-univ-card-segmentation-strategy/신용카드_고객세그먼트_분류_프로젝트.pdf",
  },
  {
    title: "법정동 단위 생활편의 입지 평가 스코어링 모델",
    type: "Public Data Project",
    desc: "공공·통계 데이터를 법정동 단위로 전처리·통합하고, 카드 소비 기반 가중치를 적용한 스코어링 모델로 생활편의 입지와 지역 불균형을 분석한 프로젝트입니다.",
    tags: ["Public Data", "Scoring Model", "Location Analytics"],
    primaryLabel: "GitHub",
    primaryHref: "https://github.com/jec0926/public-data-scoring",
    secondaryLabel: "보고서 PDF",
    secondaryHref: "/projects/korea-univ-public-data-scoring-model/2025년 통계데이터 활용대회보고서.pdf",
  },
];

const careerProfiles = [
  {
    id: "msba",
    title: "고려대학교 일반대학원",
    period: "2025.03 - 2026.08",
    role: "MSBA | 경영학 Business Analytics 석사과정",
    summary:
      "데이터 분석, 모델링, AI Agent 개발 역량을 강화하며 데이터와 AI를 비즈니스 문제 해결에 적용하는 역량을 강화했습니다.",
    bullets: [
      "LG CNS PI 컨설팅 의사결정 지원 AI Agent 서비스 PoC 기획",
      "전세사기 위험지역 식별 리스크 평가 모델 설계",
      "신용카드 고객 세그먼트 재정의 및 전략 설계",
      "공공·통계 데이터 기반 생활편의 입지 평가 스코어링 모델 설계",
    ],
    projects: [
      "lgcns-ai-agent",
      "jeonse-risk-dashboard",
      "card-segmentation-strategy",
      "public-data-scoring-model",
      "work-system-empirical-analysis",
    ],
  },
  {
    id: "idhealthcare",
    title: "아이디헬스케어그룹",
    period: "2024.05 - 2025.02",
    role: "Business Analyst",
    summary:
      "전사 KPI, 웹 기반 성과관리 시스템, 관리회계, 마케팅 성과관리 업무를 통해 제품과 사업 성과를 연결해 보는 관점을 쌓았습니다.",
    bullets: [
      "전사 및 그룹사 KPI 운영, 주간/월간 실적 모니터링",
      "전사 및 그룹사 연간·중장기 사업계획 보고서 작성 지원",
      "웹 기반 성과관리 시스템 설계 지원 및 데이터 정합성 QA",
      "미전환 수술건 KPI 정의 및 월간 보고 체계 운영",
      "ROAS 기반 마케팅 예산 대비 성과 분석",
      "전사 사업부별 차기년도 월간 매출목표 Financial Model 기반 설계 지원",
      "전사 실적 및 비용 데이터 질의 대응",
    ],
    projects: [
      "idhealthcare-bi-kpi",
      "idhealthcare-potential-revenue",
      "idhealthcare-business-plan",
      "idhealthcare-revenue-target-model",
      "idhealthcare-marketing-performance",
    ],
  },
  {
    id: "beyond",
    title: "비욘드아이앤씨",
    period: "2022.04 - 2024.05",
    role: "Product Operations & Business Strategy",
    summary:
      "서비스 운영 접점에서 VOC, B2B 고객 이슈, 주문중개·정산 업무를 수행하며 제품이 실제로 작동하는 방식을 경험했습니다.",
    bullets: [
      "우리동네 딜리버리-우친 앱 VOC 및 구글 플레이스토어·애플 앱스토어 리뷰 대응",
      "B2B 고객사 주문중개 시스템 문의 및 트러블슈팅 대응",
      "정산 운영 및 Python 기반 정산 데이터 전처리 효율화",
      "지역별 주문량, 수행률, 라이더 수 기반 운영 현황 모니터링",
      "주문량, 수행률, 매출, 비용 등 주요 운영 지표 모니터링",
      "Driver 기반 Financial Model을 활용한 실적 저조 원인 분석 및 개선안 제안",
      "이사회·주주총회 운영 프로세스 설계 및 Governance 체계 구축 지원",
      "홈페이지 리뉴얼 PM 및 SI 프로젝트 BO/FO·Web/App QA 수행",
    ],
    projects: [
      "beyond-ops-monitoring",
      "beyond-settlement-automation",
      "beyond-homepage-renewal",
      "mychef-launch-qa",
      "beyond-financial-model-structure",
      "beyond-strategy-growth",
      "beyond-governance-ir",
    ],
  },
  {
    id: "public-data",
    title: "공공빅데이터 청년인턴십",
    period: "2020.08 - 2020.12",
    role: "Project Manager",
    summary:
      "비정형 교통 제보 데이터를 구조화하고 웹 기반 시스템으로 활용할 수 있도록 설계·구현한 초기 데이터 프로젝트 경험입니다.",
    bullets: [
      "빅데이터 분석 방법론 교육 이수 및 고령친화도시 지표 분석 프로젝트 수행",
      "전국 지부 소속 인턴 약 30명 프로젝트 관리, 일정 관리, 성과 보고 및 트러블슈팅",
      "교통정보 빅데이터화 및 제보접수 시스템 구축 프로젝트 PM 수행",
      "비정형 교통 제보 데이터 정규화, 위치 기반 데이터 모델링 및 DB 구축",
      "검색, 조회, 편집 기능을 포함한 웹 기반 시스템 설계 및 구현",
      "TBN FM 송신소·중계소 KML 데이터 기반 전파지도 시각화 프로토타입 설계",
    ],
    projects: ["traffic-info-bigdata", "traffic-radio-map-prototype"],
  },
];

const hardSkills = [
  ["문제 정의", "VOC·운영·비즈니스 관점에서 문제를 정의"],
  ["KPI 설계", "성과관리 지표 정의, 계산 기준 구체화"],
  ["데이터 핸들링", "Python, SQL, Excel 기반 정제·통합·검증"],
  ["요구사항 구체화", "화면 흐름, 데이터 기준, QA 체크포인트 정리"],
  ["AI", "RAG, Agent, ML 모델을 업무 문제에 연결"],
];

const softSkills = [
  ["비즈니스 친화적 사고", "고객 문제를 매출, 비용, KPI, 우선순위로 번역"],
  ["운영 감각", "VOC, B2B 대응, 정산, 주문중개 등 실제 서비스 운영 이해"],
  ["구조화 커뮤니케이션", "경영진과 현업이 판단 가능한 언어로 정리"],
  ["검증 지향", "데이터 정합성, QA, 리포팅 기준을 꼼꼼히 확인"],
];

const toolCatalog = [
  {
    name: "Python",
    desc: "데이터 정제, API활용, 자동화, AI 개발",
  },
  {
    name: "SQL",
    desc: "데이터 추출, 조건별 쿼리 설계",
  },
  {
    name: "Excel",
    desc: "Financial Modeling, Test Scenario 설계",
  },
  {
    name: "RPA",
    desc: "업무 프로세스 자동화 설계",
  },
  {
    name: "Codex",
    desc: "AI 바이브 코딩, 프로토타입 구현",
  },
  {
    name: "GitHub",
    desc: "프로젝트 산출물 관리와 개발 협업 이해",
  },
  {
    name: "Figma",
    desc: "화면 흐름, IA, 서비스 와이어프레임 정리",
  },
];

const tools = toolCatalog.map((tool) => tool.name);

const projectPeriodPlaceholder = "수행기간 입력 예정";

function getProjectPeriod(project) {
  return project.period || project.duration || projectPeriodPlaceholder;
}

function getProjectNarrative(project) {
  const problem = project.summary?.problem || "";
  const approach = project.summary?.approach || [];
  const impact = project.summary?.impact || "";
  const primaryAction = approach[0] || project.oneLiner;
  const hypothesis = project.summary?.hypothesis ||
    `${project.tags?.slice(0, 2).join(" · ") || "핵심 지표"} 관점에서 문제를 다시 정의하면 실행 우선순위와 해결 방향을 더 선명하게 판단할 수 있다고 보았습니다.`;
  const lesson = project.summary?.lesson ||
    "이 프로젝트를 통해 문제를 빠르게 기능이나 산출물로 넘기기보다, 문제의 맥락과 판단 기준을 먼저 구조화해야 실행 품질이 높아진다는 점을 확인했습니다.";

  return {
    problem,
    hypothesis,
    solution: approach,
    result: impact,
    lesson,
    summaryCards: [
      ["Problem", problem],
      ["Hypothesis", hypothesis],
      ["Solution", primaryAction],
      ["Result", impact],
    ],
    diagram: {
      title: `${project.tags?.[0] || "PROJECT"} OPERATING STRUCTURE`,
      context: problem,
      stages: [
        ["STEP 1", "Input Define", approach[0] || project.oneLiner],
        ["STEP 2", "Criteria Build", approach[1] || "판단 기준과 데이터 구조를 정리했습니다."],
        ["STEP 3", "Process Design", approach[2] || "실행 가능한 업무 흐름과 협업 기준으로 구체화했습니다."],
        ["STEP 4", "Output Handoff", approach[3] || impact],
      ],
      outcome: impact,
      signals: project.tags?.slice(0, 3) || [],
    },
  };
}

function LinkedInLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  );
}

function GitHubLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A11.05 11.05 0 0 1 12 6.07c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.15c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

const howIWork = [
  {
    icon: "⚖",
    title: "균형점 탐색",
    desc: "회사에 이득이 되는 지점, 사용자의 만족도, 현실적인 리소스와 상황을 함께 놓고 최적의 의사결정 지점을 빠르게 찾아 소통합니다.",
  },
  {
    icon: "💡",
    title: "효율 추구",
    desc: "커뮤니케이션 방식과 업무 흐름을 관성적으로 두지 않고, 가장 효율적인 협업 방식과 실행 경로를 찾습니다.",
  },
  {
    icon: "📈",
    title: "성과 중심",
    desc: "제품과 사업은 반드시 잘되어야 한다고 생각합니다. 실패를 통해 얻는 경험도 중요하지만, 모든 실험과 시도는 성과를 향합니다.",
  },
  {
    icon: "🔢",
    title: "데이터 중심",
    desc: "비즈니스의 수익 구조와 성과 체계를 먼저 구조화한 뒤, 핵심 Driver를 찾아 어떤 요인이 성과를 움직이는지 데이터로 분석하고 해결방안을 찾습니다.",
  },
  {
    icon: "🧩",
    title: "동료와 함께",
    desc: "혼자 빠르게 가는 것보다 동료와 함께 더 좋은 판단을 만드는 것을 선호합니다. 팀으로 일할 때 더 큰 결과를 낼 수 있다고 믿습니다.",
  },
  {
    icon: "📑",
    title: "문서화하여",
    desc: "동료와 일하는 과정, 판단 기준, 결정 사항을 문서화해 누구나 맥락을 이어받을 수 있게 만드는 편입니다.",
  },
];

const aboutStrengths = [
  {
    title: "숫자와 운영을 함께 봅니다",
    desc: "VOC와 운영 이슈를 단순 불편으로 보지 않고, KPI와 비용 구조, 매출 Driver로 연결해 판단합니다.",
  },
  {
    title: "데이터를 직접 다룰 수 있습니다",
    desc: "PM/PO 관점에서 필요한 만큼 데이터를 정제하고 검증해 의사결정 근거로 전환할 수 있습니다.",
  },
  {
    title: "AI 활용을 제품 사고로 연결합니다",
    desc: "AI 도구 사용에 그치지 않고, 업무 생산성과 의사결정 지원을 위한 서비스 PoC로 확장해봅니다.",
  },
];

const etcExperiences = [
  {
    title: "서브원",
    role: "헬스케어사업총괄 | Project RA",
    period: "2026.02 - 2026.03",
    desc: "헬스케어 MRO 신사업 M&A 추진 검토에 필요한 병원·제품 데이터 수집 체계를 정리하고, 물류 좌표·통행료·거리 데이터 수집 RPA를 개발했습니다.",
    href: "#/career/serveone",
  },
  {
    title: "헤세드음악연구소",
    role: "Personal Business | Co-Founder",
    period: "2024.06 -",
    desc: "디지털 콘텐츠 생성부터 전달까지 자동화하는 유통 구조를 함께 설계하고, 실제 판매를 통해 수익화 가능성을 검증했습니다.",
    href: "#/career/hesed",
  },
];

const etcCareerProfiles = [
  {
    id: "serveone",
    title: "서브원",
    period: "2026.02 - 2026.03",
    role: "헬스케어사업총괄 | Project RA",
    summary:
      "헬스케어 MRO 신사업 M&A 추진 프로젝트의 Project RA로 병원·제품·물류 데이터를 구조화하고, Top-line·GP·물류비 산출에 필요한 분석 기반을 지원했습니다.",
    bullets: [
      "헬스케어 MRO 신사업 검토에 필요한 병원·제품·물류 데이터 수집 및 정리",
      "TAM/SAM, Top-line, GP 추정에 필요한 기초 데이터 구축 지원",
      "병원 회계공시, 제품군, 물류 거리·통행료 등 사업성 검토 데이터 정리",
      "반복 수집·계산 업무 일부를 RPA 방식으로 자동화 지원",
      "자동화 결과물 전달 및 현업 피드백 반영",
    ],
    projects: [
      "serveone-tamsam",
      "serveone-topline-backup",
      "serveone-gp-estimation",
      "serveone-logistics-rpa",
    ],
  },
  {
    id: "hesed",
    title: "헤세드음악연구소",
    period: "2024.06 -",
    role: "Personal Business | Co-Founder",
    summary:
      "디지털 악보 콘텐츠의 제작, 판매, 전달까지 이어지는 유통 구조를 설계하고 자동화 시스템을 구현해 실제 판매 가능성을 검증했습니다.",
    bullets: [
      "디지털 악보 콘텐츠의 제작, 판매, 전달까지 이어지는 End-to-End 유통 구조 설계",
      "네이버 스마트스토어 입점 및 상품 등록, 주문·고객 관리 운영",
      "사용자별 워터마크 적용, 이메일 자동 전달, 발송 이력 관리 구조 설계",
      "주문 이력 관리와 재처리를 위한 CRUD 기반 운영 시스템 구축",
      "Python 기반 반복 작업 자동화 로직 구현 및 운영 적용",
    ],
    projects: ["personal-digital-content-business"],
  },
];

const allCareerProfiles = [...careerProfiles, ...etcCareerProfiles];

const fallbackImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720">
    <rect width="100%" height="100%" fill="#111827"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="28" font-family="Arial">이미지 파일을 public/projects 경로에 넣어주세요</text>
  </svg>
`);

function useBreakpoint() {
  const [screen, setScreen] = useState({
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreen({
        isMobile: width <= 768,
        isTablet: width <= 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
}

function SiteHeader({ sectionStyle, isMobile }) {
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={{ ...sectionStyle, ...styles.headerInner(isMobile) }}>
        <nav style={styles.nav(isMobile)}>
          <a href="#" style={styles.navLink(isMobile)}>Home</a>
          <div
            style={styles.navDropdown(isMobile)}
            onMouseEnter={() => setIsProjectOpen(true)}
            onMouseLeave={() => setIsProjectOpen(false)}
            onFocus={() => setIsProjectOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsProjectOpen(false);
              }
            }}
          >
            <a href="#projects" style={styles.navDropdownSummary(isMobile)}>Project</a>
            {isProjectOpen && (
              <div style={styles.navDropdownMenu(isMobile)}>
              <a href="#/projects/company" style={styles.navDropdownLink}>Company</a>
              <a href="#/projects/academic" style={styles.navDropdownLink}>Academic Project</a>
              <a href="#/projects/personal" style={styles.navDropdownLink}>Personal Project</a>
              <a href="#/projects/internship" style={styles.navDropdownLink}>Internship</a>
              </div>
            )}
          </div>
          <a href="#skills" style={styles.navLink(isMobile)}>Skills</a>
          <a href="#about" style={styles.navLink(isMobile)}>About</a>
          <a href="#/resume" style={styles.navLink(isMobile)}>Resume</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.navLink(isMobile)}>LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" style={styles.navLink(isMobile)}>GitHub</a>
        </nav>
      </div>
    </header>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section style={styles.resumeSection}>
      <h2 style={styles.resumeSectionTitle}>{title}</h2>
      <div style={styles.resumeSectionBody}>{children}</div>
    </section>
  );
}

function SkillColumn({ title, items }) {
  return (
    <div style={styles.skillColumn}>
      <h3 style={styles.skillColumnTitle}>{title}</h3>
      <div style={styles.skillPillWrap}>
        {items.map((item) => (
          <span key={item} style={styles.tag}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectGroup({ title, desc, projects, isMobile, variant = "archive" }) {
  return (
    <div style={styles.projectGroup}>
      <div style={styles.projectGroupHeader}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div style={styles.projectGrid(isMobile, variant)}>
        {projects.map((project) => (
          <motion.div
            key={`${title}-${project.slug}`}
            role="link"
            tabIndex={0}
            onClick={() => {
              window.location.hash = `/project/${project.slug}`;
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                window.location.hash = `/project/${project.slug}`;
              }
            }}
            whileHover={isMobile ? undefined : { y: -5 }}
            style={styles.projectCard}
          >
            <div style={styles.projectCardImageWrap}>
              <img
                src={project.cover}
                alt={project.title}
                style={styles.projectCardImage}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
            </div>
            <div style={styles.projectCardBody(isMobile)}>
              <div style={styles.projectCategory}>{project.category}</div>
              <a
                href={`#/project/${project.slug}`}
                onClick={(event) => event.stopPropagation()}
                style={styles.projectPeriodLink}
              >
                {getProjectPeriod(project)}
              </a>
              <div style={styles.projectTitle(isMobile)}>{project.title}</div>
              <div style={styles.projectOneLiner(isMobile)}>{project.oneLiner}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function EunchanPortfolioRefined() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [route, setRoute] = useState(() => window.location.hash);
  const { isMobile, isTablet } = useBreakpoint();

  const sectionStyle = useMemo(
    () => ({
      maxWidth: 1180,
      margin: "0 auto",
      padding: isMobile ? "0 16px" : "0 24px",
    }),
    [isMobile]
  );

  const filteredProjects = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    const featuredOrder = [
      "idhealthcare-bi-kpi",
      "idhealthcare-potential-revenue",
      "idhealthcare-business-plan",
      "idhealthcare-revenue-target-model",
      "idhealthcare-marketing-performance",
      "beyond-ops-monitoring",
      "beyond-financial-model-structure",
      "beyond-strategy-growth",
      "beyond-governance-ir",
      "serveone-tamsam",
      "serveone-topline-backup",
      "serveone-gp-estimation",
      "serveone-logistics-rpa",
      "lgcns-ai-agent",
      "jeonse-risk-dashboard",
      "card-segmentation-strategy",
      "public-data-scoring-model",
      "work-system-empirical-analysis",
      "mychef-launch-qa",
      "beyond-settlement-automation",
      "beyond-homepage-renewal",
      "traffic-info-bigdata",
      "traffic-radio-map-prototype",
      "personal-digital-content-business",
    ];
    const rank = (slug) => {
      const index = featuredOrder.indexOf(slug);
      return index === -1 ? featuredOrder.length : index;
    };
    const matched = q
      ? projects.filter((project) =>
      [project.title, project.category, project.oneLiner, ...(project.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
      )
      : projects;
    return [...matched].sort((a, b) => rank(a.slug) - rank(b.slug));
  }, [keyword]);

  const activeProjectSlug = route.match(/^#\/project\/(.+)$/)?.[1];
  const activeProject = activeProjectSlug
    ? projects.find((project) => project.slug === decodeURIComponent(activeProjectSlug))
    : null;
  const activeCareerId = route.match(/^#\/career\/(.+)$/)?.[1];
  const activeCareer = activeCareerId
    ? allCareerProfiles.find((career) => career.id === decodeURIComponent(activeCareerId))
    : null;
  const activeProjectCategory = route.match(/^#\/projects\/(.+)$/)?.[1];
  const isResumePage = route === "#/resume";
  const getProjectGroup = (slugs) =>
    slugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
  const recentProjects = getProjectGroup([
    "lgcns-ai-agent",
    "serveone-tamsam",
    "jeonse-risk-dashboard",
  ]);
  const coreProjects = getProjectGroup([
    "idhealthcare-bi-kpi",
    "beyond-strategy-growth",
    "lgcns-ai-agent",
  ]);
  const companyProjects = getProjectGroup([
    "idhealthcare-bi-kpi",
    "idhealthcare-potential-revenue",
    "idhealthcare-business-plan",
    "idhealthcare-revenue-target-model",
    "idhealthcare-marketing-performance",
    "beyond-ops-monitoring",
    "beyond-financial-model-structure",
    "beyond-strategy-growth",
    "beyond-governance-ir",
    "beyond-settlement-automation",
    "beyond-homepage-renewal",
    "mychef-launch-qa",
  ]);
  const academicProjects = getProjectGroup([
    "lgcns-ai-agent",
    "jeonse-risk-dashboard",
    "card-segmentation-strategy",
    "public-data-scoring-model",
    "work-system-empirical-analysis",
  ]);
  const personalProjects = getProjectGroup(["personal-digital-content-business"]);
  const internshipProjects = getProjectGroup([
    "serveone-tamsam",
    "serveone-topline-backup",
    "serveone-gp-estimation",
    "serveone-logistics-rpa",
    "traffic-info-bigdata",
    "traffic-radio-map-prototype",
  ]);
  const projectCollections = {
    all: {
      eyebrow: "All Project",
      title: "전체 프로젝트",
      desc: "회사, 대학원, 개인 프로젝트, 인턴십에서 수행한 프로젝트를 한 페이지에서 확인할 수 있습니다.",
      projects: filteredProjects,
    },
    company: {
      eyebrow: "Company",
      title: "회사에서 수행한 업무와 성과 사례",
      desc: "수행한 업무를 모았습니다.",
      projects: companyProjects,
    },
    academic: {
      eyebrow: "Academic Project",
      title: "대학원에서 확장한 AI·데이터 프로젝트",
      desc: "고려대학교 MSBA 과정에서 수행한 AI Agent, 데이터 분석, 서비스 기획, 전략 설계 프로젝트입니다.",
      projects: academicProjects,
    },
    personal: {
      eyebrow: "Personal Project",
      title: "개인적으로 실험하고 확장한 프로젝트",
      desc: "개인 사업, 콘텐츠, 제품화 실험처럼 회사와 학교 밖에서 진행한 프로젝트를 이 영역에 쌓아갑니다.",
      projects: personalProjects,
    },
    internship: {
      eyebrow: "Internship",
      title: "인턴십 및 단기 프로젝트 기반 경험",
      desc: "서브원 단기 프로젝트 RA와 도로교통공단 파견 인턴 기간에 수행한 데이터 정리·분석 지원 프로젝트입니다.",
      projects: internshipProjects,
    },
  };
  const activeProjectCollection = activeProjectCategory
    ? projectCollections[decodeURIComponent(activeProjectCategory)]
    : null;
  const getProjectCollectionKey = (project) => {
    if (internshipProjects.some((item) => item.slug === project.slug)) return "internship";
    if (personalProjects.some((item) => item.slug === project.slug)) return "personal";
    if (academicProjects.some((item) => item.slug === project.slug)) return "academic";
    return "company";
  };
  const getProjectCollectionHref = (project) => {
    const key = getProjectCollectionKey(project);
    return `#/projects/${key}`;
  };
  const groupProjectsByCollection = (items) => {
    const grouped = items.reduce((acc, project) => {
      const key = getProjectCollectionKey(project);
      if (!acc[key]) acc[key] = [];
      acc[key].push(project);
      return acc;
    }, {});

    return ["company", "academic", "personal", "internship"]
      .filter((key) => grouped[key]?.length)
      .map((key) => ({
        key,
        ...projectCollections[key],
        projects: grouped[key],
      }));
  };

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      setActiveImageIndex(0);
      document.body.style.overflow = "";
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const moveImage = (direction) => {
    if (!activeProject?.details?.length) return;
    const total = activeProject.details.length;
    setActiveImageIndex((prev) => (prev + direction + total) % total);
  };

  if (activeProject) {
    const projectNarrative = getProjectNarrative(activeProject);
    const projectScope = allCareerProfiles.find((career) =>
      career.projects?.includes(activeProject.slug)
    );
    const relatedProjects = projectScope
      ? getProjectGroup(projectScope.projects).filter((project) => project.slug !== activeProject.slug)
      : projectCollections[getProjectCollectionKey(activeProject)]?.projects
        .filter((project) => project.slug !== activeProject.slug) || [];

    return (
      <div style={styles.page}>
        <SiteHeader sectionStyle={sectionStyle} isMobile={isMobile} />

        <main>
          <section style={{ ...sectionStyle, ...styles.detailHero(isMobile) }}>
            <a href={getProjectCollectionHref(activeProject)} style={styles.backLink}>
              <ChevronLeft size={16} /> 프로젝트 목록으로
            </a>
            <div style={styles.detailHeroGrid(isTablet)}>
              <div>
                <div style={styles.projectCategory}>{activeProject.category}</div>
                <h1 style={styles.detailTitle(isMobile)}>{activeProject.title}</h1>
                <p style={styles.detailLead}>{activeProject.oneLiner}</p>
                <div style={styles.tagWrap}>
                  {activeProject.tags.map((tag) => (
                    <span key={tag} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <aside style={styles.detailMetaCard}>
                <div style={styles.panelLabel}>CASE SUMMARY</div>
                <div style={styles.detailMetaRow}>
                  <span>Period</span>
                  <strong>{getProjectPeriod(activeProject)}</strong>
                </div>
                <div style={styles.detailMetaRow}>
                  <span>Role</span>
                  <strong>{activeProject.section === "real-business" ? "실무 경험" : "학업/개인 프로젝트"}</strong>
                </div>
                <div style={styles.detailMetaRow}>
                  <span>Focus</span>
                  <strong>{activeProject.tags.slice(0, 2).join(" · ")}</strong>
                </div>
                <div style={styles.detailMetaRow}>
                  <span>Output</span>
                  <strong>{activeProject.downloads?.length ? "PDF / Report" : activeProject.links?.length ? "Link / Case" : "Case Summary"}</strong>
                </div>
              </aside>
            </div>
          </section>

          <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
            <div style={styles.caseCoverWrap}>
              <img
                src={activeProject.cover}
                alt={activeProject.title}
                style={styles.caseCoverImage}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
            </div>
            <div style={styles.caseSummaryGridWide(isTablet)}>
              {projectNarrative.summaryCards.map(([label, text]) => (
                <div key={label} style={styles.caseSummaryCard}>
                  <span>{label}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div style={styles.workflowDiagramWrap}>
              <div style={styles.diagramTopline}>
                <span style={styles.diagramEyebrow}>PUBLIC CASE DIAGRAM</span>
                <strong style={styles.diagramTitle}>{projectNarrative.diagram.title}</strong>
              </div>

              <div style={styles.diagramContext}>
                <div style={styles.diagramLabel}>CONTEXT</div>
                <p style={styles.diagramText}>{projectNarrative.diagram.context}</p>
              </div>

              <div style={styles.diagramStageGrid(isTablet)}>
                {projectNarrative.diagram.stages.map(([label, title, desc], index) => (
                  <div key={label} style={styles.diagramStageCard}>
                    <span style={styles.diagramStepLabel}>{label}</span>
                    <strong style={styles.diagramStageTitle}>{title}</strong>
                    <p style={styles.diagramStageText}>{desc}</p>
                    {index < projectNarrative.diagram.stages.length - 1 && (
                      <i style={styles.diagramArrow(isTablet)}>{isTablet ? "↓" : "→"}</i>
                    )}
                  </div>
                ))}
              </div>

              <div style={styles.diagramBottom(isTablet)}>
                <div>
                  <span style={styles.diagramLabel}>OUTPUT STRUCTURE</span>
                  <p style={styles.diagramText}>{projectNarrative.diagram.outcome}</p>
                </div>
                <div style={styles.diagramSignalRow}>
                  {projectNarrative.diagram.signals.map((signal) => (
                    <strong key={signal}>{signal}</strong>
                  ))}
                </div>
              </div>
            </div>

            {(activeProject.links?.length > 0 || activeProject.downloads?.length > 0) && (
              <div style={{ ...styles.infoBlock, marginTop: 18 }}>
                <div style={styles.infoLabel}>자료</div>
                <div style={styles.linkList}>
                  {activeProject.links?.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" style={styles.linkButton}>
                      <span>{link.label}</span>
                      <ArrowRight size={15} />
                    </a>
                  ))}
                  {activeProject.downloads?.map((file) => (
                    <a key={file.href} href={file.href} target="_blank" rel="noreferrer" style={styles.linkButton}>
                      <FileText size={15} />
                      <span>{file.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
            <div style={styles.caseNarrative}>
              <div style={styles.caseChapter}>
                <div style={styles.caseChapterLabel}>문제 정의</div>
                <h2>왜 이 프로젝트가 필요했는가</h2>
                <p>{projectNarrative.problem}</p>
              </div>
              <div style={styles.caseChapter}>
                <div style={styles.caseChapterLabel}>가설 수립</div>
                <h2>어떤 기준으로 문제를 바라봤는가</h2>
                <p>{projectNarrative.hypothesis}</p>
              </div>
              <div style={styles.caseChapter}>
                <div style={styles.caseChapterLabel}>솔루션 도출</div>
                <h2>어떻게 실행 가능한 형태로 구체화했는가</h2>
                <ul style={styles.infoList}>
                  {projectNarrative.solution.map((item) => (
                    <li key={item} style={styles.infoListItem}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={styles.caseChapter}>
                <div style={styles.caseChapterLabel}>결과 & 배운 점</div>
                <h2>무엇을 남겼고 무엇을 배웠는가</h2>
                <p>{projectNarrative.result}</p>
                <p>{projectNarrative.lesson}</p>
              </div>
            </div>
          </section>

          <section style={{ ...sectionStyle, paddingBottom: isMobile ? 88 : 120 }}>
            <div style={styles.nextProjectBand(isTablet)}>
              <div>
                <div style={styles.sectionEyebrow}>NEXT CASES</div>
                <h2 style={styles.stripTitle}>다른 성과 사례도 이어서 확인할 수 있습니다.</h2>
              </div>
              <div style={styles.nextProjectLinks}>
                {relatedProjects
                  .slice(0, 3)
                  .map((project) => (
                    <a key={project.slug} href={`#/project/${project.slug}`} style={styles.nextProjectLink}>
                      {project.title}
                      <ArrowRight size={14} />
                    </a>
                  ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (activeCareer) {
    const careerProjects = activeCareer.projects
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter(Boolean);
    const careerProjectGroups = groupProjectsByCollection(careerProjects);

    return (
      <div style={styles.page}>
        <SiteHeader sectionStyle={sectionStyle} isMobile={isMobile} />
        <main>
          <section style={{ ...sectionStyle, ...styles.detailHero(isMobile) }}>
            <a href="#" style={styles.backLink}>
              <ChevronLeft size={16} /> Home
            </a>
            <div style={styles.detailHeroGrid(isTablet)}>
              <div>
                <div style={styles.projectCategory}>CAREER DETAIL</div>
                <h1 style={styles.detailTitle(isMobile)}>{activeCareer.title}</h1>
                <p style={styles.detailLead}>{activeCareer.summary}</p>
              </div>
              <aside style={styles.detailMetaCard}>
                <div style={styles.panelLabel}>PROFILE</div>
                <div style={styles.detailMetaRow}><span>Period</span><strong>{activeCareer.period}</strong></div>
                <div style={styles.detailMetaRow}><span>Role</span><strong>{activeCareer.role}</strong></div>
                <div style={styles.detailMetaRow}><span>Cases</span><strong>{careerProjects.length} projects</strong></div>
              </aside>
            </div>
          </section>

          {activeCareer.id === "msba" && (
            <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
              <div style={styles.sectionEyebrow}>Learning Focus</div>
              <h2 style={styles.sectionTitle}>무엇을 배우고, 무엇을 만들었는가</h2>
              <p style={styles.sectionDesc}>
                경영 현장에서 쌓은 운영·성과관리 경험을 바탕으로 데이터 분석, 머신러닝, 대시보드, AI Agent PoC를 학습하고 프로젝트로 연결했습니다.
                특히 문제를 분석 모델로 끝내지 않고, 서비스 의사결정과 업무 생산성 개선 시나리오로 전환하는 데 집중했습니다.
              </p>
              <div style={styles.learningGrid}>
                {[
                  ["Business Analytics", "KPI, 고객 세그먼트, 리스크 지표처럼 비즈니스 판단에 연결되는 분석 구조를 학습했습니다."],
                  ["AI / Data Product", "RAG, Agent, 스코어링 모델, 대시보드처럼 사용자가 판단할 수 있는 형태의 결과물을 설계했습니다."],
                  ["PM/PO Application", "문제 정의, 가설, 데이터 검증, 서비스 시나리오까지 연결해 프로젝트를 구조화했습니다."],
                ].map(([title, desc]) => (
                  <div key={title} style={styles.learningCard}>
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
            <div style={styles.infoBlock}>
              <div style={styles.infoLabel}>수행 업무</div>
              <ul style={styles.infoList}>
                {activeCareer.bullets.map((item) => (
                  <li key={item} style={styles.infoListItem}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={styles.careerProjectHistory}>
              <div style={styles.sectionEyebrow}>Project History</div>
              {careerProjectGroups.map((group) => (
                <ProjectGroup
                  key={group.key}
                  title={group.eyebrow}
                  desc={group.desc}
                  projects={group.projects}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (activeProjectCollection) {
    return (
      <div style={styles.page}>
        <SiteHeader sectionStyle={sectionStyle} isMobile={isMobile} />
        <main>
          <section style={{ ...sectionStyle, ...styles.detailHero(isMobile) }}>
            <a href="#" style={styles.backLink}>
              <ChevronLeft size={16} /> 홈으로
            </a>
            <div style={styles.sectionEyebrow}>{activeProjectCollection.eyebrow}</div>
            <h1 style={styles.detailTitle(isMobile)}>{activeProjectCollection.title}</h1>
            <p style={styles.detailLead}>{activeProjectCollection.desc}</p>
          </section>

          <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
            <ProjectGroup
              title="Project Archive"
              desc="각 사례를 클릭하면 수행 내용과 산출물 중심의 상세 페이지로 이동합니다."
              projects={activeProjectCollection.projects}
              isMobile={isMobile}
            />
          </section>
        </main>
      </div>
    );
  }

  if (isResumePage) {
    return (
      <div style={styles.page}>
        <SiteHeader sectionStyle={sectionStyle} isMobile={isMobile} />
        <main>
          <section style={{ ...sectionStyle, ...styles.detailHero(isMobile) }}>
            <div style={styles.resumeHeader(isTablet)}>
              <div>
                <div style={styles.heroName}>Resume</div>
                <h1 style={styles.detailTitle(isMobile)}>장은찬</h1>
                <p style={styles.detailLead}>Business-oriented, Data-capable PO/PM</p>
                <p style={styles.sectionDesc}>{profile.email} · {profile.phone}</p>
              </div>
              <img src={heroImage} alt="장은찬 프로필" style={styles.resumeImage} />
            </div>
          </section>

          <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
            <ResumeSection title="업무 경험">
              {careerProfiles.map((career) => (
                <div key={career.id} style={styles.resumeItem}>
                  <a href={`#/career/${career.id}`} style={styles.resumeItemTitle}>
                    {career.id === "msba" ? "고려대학교 MSBA" : career.title}
                  </a>
                  <div style={styles.resumeMeta}>{career.period} · {career.role}</div>
                  <ul style={styles.resumeList}>
                    {career.bullets.slice(0, 6).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ResumeSection>

            <ResumeSection title="전문 분야">
              <div style={styles.resumeSkillGrid}>
                <SkillColumn title="Hard Skills" items={hardSkills.map(([title]) => title)} />
                <SkillColumn title="Soft Skills" items={softSkills.map(([title]) => title)} />
                <SkillColumn title="Tools" items={tools} />
              </div>
            </ResumeSection>

            <ResumeSection title="학력">
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>고려대학교 일반대학원</div>
                <div style={styles.resumeMeta}>2025.03 ~ 2026.08 · 경영학과 Business Analytics 석사과정</div>
              </div>
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>연세대학교 미래캠퍼스</div>
                <div style={styles.resumeMeta}>2015.03 ~ 2021.08 · 경제학 학사</div>
              </div>
            </ResumeSection>

            <ResumeSection title="수상">
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>2025학년도 MSBA 캡스톤프로젝트 우수상</div>
                <div style={styles.resumeMeta}>2026.02 · 고려대학교 경영대학 CDTB</div>
              </div>
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>DB GAPS 자산배분대회 본선진출</div>
                <div style={styles.resumeMeta}>2021.09 · DB증권</div>
              </div>
            </ResumeSection>

            <ResumeSection title="자격">
              <div style={styles.tagWrap}>
                {["SQLD", "ADsP", "ISTQB CTFL", "전산회계 1급", "MOS Master"].map((item) => (
                  <span key={item} style={styles.tag}>{item}</span>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="교육">
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>Tableau 데이터 시각화 부트캠프</div>
                <div style={styles.resumeMeta}>2026.01 ~ 2026.02 · Salesforce</div>
              </div>
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>SW Camp PM Course</div>
                <div style={styles.resumeMeta}>2023.01 ~ 2023.03 · 팀스파르타</div>
              </div>
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>SW Testing Foundation</div>
                <div style={styles.resumeMeta}>2022.10 ~ 2022.10 · STA테스팅컨설팅</div>
              </div>
              <div style={styles.resumeItem}>
                <div style={styles.resumeItemTitle}>K-Digital Training · 핀테크 AI 알고리즘 개발자 과정</div>
                <div style={styles.resumeMeta}>2021.07 ~ 2022.01 · 비트컴퓨터</div>
              </div>
            </ResumeSection>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <SiteHeader sectionStyle={sectionStyle} isMobile={isMobile} />
      <main id="top">
        <section style={styles.simpleHomeFrame(isTablet)}>
          <div style={styles.motionScene} aria-hidden="true">
            <div className="motion-orb motion-orb-left" />
            <div className="motion-orb motion-orb-right" />
            <div className="motion-cluster">
              <div className="motion-cylinder motion-cylinder-a" />
              <div className="motion-cylinder motion-cylinder-b" />
              <div className="motion-cylinder motion-cylinder-c" />
              <div className="motion-cylinder motion-cylinder-d" />
              <div className="motion-core" />
            </div>
          </div>
          <div style={{ ...sectionStyle, ...styles.simpleHome(isTablet) }}>
            <img src={heroImage} alt="장은찬 프로필" style={styles.profilePortrait(isMobile)} />
            <div style={styles.homeCopy}>
              <div style={styles.heroName}>JANG EUNCHAN</div>
              <h1 style={styles.simpleName}>장은찬</h1>
              <div style={styles.simpleRole}>Business-oriented, Data-capable PO/PM</div>
              <p style={styles.simpleBelief}>
                숫자와 운영을 이해하고, 데이터와 AI를 활용해 고객 문제를 실행 가능한 제품 개선안으로 번역합니다.
              </p>
            </div>
          </div>
        </section>

        <section id="profile" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionEyebrow}>Profile</div>
          <h2 style={styles.sectionTitle}>Career</h2>
          <p style={styles.sectionDesc}>
            서비스 운영에서 시작해 경영기획, 데이터 분석, AI Agent 서비스 PoC까지 확장해왔습니다.
          </p>
          <div style={styles.profileCareerList}>
            {careerProfiles.map((career) => (
              <a key={career.id} href={`#/career/${career.id}`} style={styles.profileCareerItem}>
                <div>
                  <div style={styles.profileCareerHeaderText}>
                    <strong style={styles.profileCareerItemStrong}>{career.title}</strong>
                    <span style={styles.profileCareerItemRole}>{career.role}</span>
                  </div>
                  <p style={styles.profileCareerSummary}>{career.summary}</p>
                </div>
                <div style={styles.profileCareerMeta}>
                  {career.period}
                  <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="etc" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionEyebrow}>Etc Experience</div>
          <h2 style={styles.sectionTitle}>보조 경험과 개인 실행 경험</h2>
          <p style={styles.sectionDesc}>
            정규 커리어 타임라인에는 크게 넣지 않되, 데이터 정리·자동화·사업 실행 감각을 보여주는 경험입니다.
          </p>
          <div style={styles.etcGrid}>
            {etcExperiences.map((item) => (
              <a key={item.title} href={item.href} style={styles.profileCareerItem}>
                <div>
                  <div style={styles.profileCareerHeaderText}>
                    <strong style={styles.profileCareerItemStrong}>{item.title}</strong>
                    <span style={styles.profileCareerItemRole}>{item.role}</span>
                  </div>
                  <p style={styles.profileCareerSummary}>{item.desc}</p>
                </div>
                <div style={styles.profileCareerMeta}>
                  {item.period}
                  <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="education" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionEyebrow}>Education</div>
          <div style={styles.educationOnlyGrid(isMobile)}>
            <div style={styles.educationDetailCard}>
              <div style={styles.eduPeriod}>2025.03 - 2026.08</div>
              <div style={styles.eduTitle}>고려대학교 일반대학원</div>
              <div style={styles.eduSubtitle}>경영학과 Business Analytics 석사과정</div>
            </div>
            <div style={styles.educationDetailCard}>
              <div style={styles.eduPeriod}>2015.03 - 2021.08</div>
              <div style={styles.eduTitle}>연세대학교 미래캠퍼스</div>
              <div style={styles.eduSubtitle}>경제학 학사</div>
            </div>
          </div>
        </section>

        <section id="skills" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionEyebrow}>Skills</div>
          <h2 style={styles.sectionTitle}>PM/PO로 활용 가능한 역량</h2>
          <p style={styles.sectionDesc}>
            고객·운영 접점, 비즈니스 지표, 데이터 핸들링, AI 활용을 제품 문제 해결의 도구로 사용합니다.
          </p>
          <div style={styles.skillSectionGrid}>
            <div style={styles.skillPanel}>
              <h3>Hard Skills</h3>
              {hardSkills.map(([title, desc]) => (
                <div key={title} style={styles.skillDetailItem}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
            <div style={styles.skillPanel}>
              <h3>Soft Skills</h3>
              {softSkills.map(([title, desc]) => (
                <div key={title} style={styles.skillDetailItem}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
            <div style={styles.skillPanel}>
              <h3>Tools</h3>
              <div style={styles.toolGrid}>
                {toolCatalog.map((tool) => (
                  <div key={tool.name} style={styles.toolCard}>
                    <strong>{tool.name}</strong>
                    <span>{tool.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionEyebrow}>Project</div>
          <ProjectGroup
            title="최근 프로젝트"
            desc="가장 최근에 다룬 프로젝트 3가지를 먼저 보여줍니다."
            projects={recentProjects}
            isMobile={isMobile}
            variant="home"
          />
          <ProjectGroup
            title="핵심 프로젝트"
            desc="커리어 방향성과 가장 많이 연결되는 대표 사례 3가지입니다."
            projects={coreProjects}
            isMobile={isMobile}
            variant="home"
          />
          <div style={styles.projectMoreButtonRow}>
            <a href="#/projects/all" style={styles.projectMoreButton}>
              전체 프로젝트 보기
              <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section id="about" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionEyebrow}>About</div>
          <h2 style={styles.sectionTitle}>Strong Point</h2>
          <div style={styles.aboutGrid}>
            {aboutStrengths.map((item) => (
              <div key={item.title} style={styles.roleFitCard}>
                <div style={styles.roleFitTitle}>{item.title}</div>
                <div style={styles.roleFitDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.workBand(isMobile)}>
            <div style={styles.workHeader}>
              <h2>How I Work</h2>
              <p>'일'을 위해 필요한 태도를 갖추고 결과를 만드는 것에 집중하고 있습니다.</p>
            </div>
            <div style={styles.workList}>
            {howIWork.map((item, index) => (
              <div key={item.title} style={styles.workItem}>
                <span>{item.icon}</span>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
            </div>
            <div style={styles.workSceneGrid(isMobile)}>
              {workStyleImages.map((image, index) => (
                <div key={image.src} style={styles.workSceneCard}>
                  <img src={image.src} alt={image.alt} style={styles.workSceneImage} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ ...sectionStyle, paddingBottom: isMobile ? 96 : 120 }}>
          <div style={styles.contactCtaWrap}>
            <div style={styles.contactCtaButtons}>
              <a href="#/resume" style={styles.footerResumeButton(isMobile)}>Resume</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.secondaryButton(isMobile)}>
                <LinkedInLogo size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" style={styles.secondaryButton(isMobile)}>
                <GitHubLogo size={16} /> GitHub
              </a>
            </div>
            <div style={styles.copyright}>© 2026 EUNCHAN, All rights reserved</div>
          </div>
        </section>
      </main>
    </div>
  );

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={{ ...sectionStyle, ...styles.headerInner(isMobile) }}>
          <a href="#top" style={styles.logo}>
            JEC.PO
          </a>
          <nav style={styles.nav}>
            <a href="#positioning" style={styles.navLink}>방향성</a>
            <a href="#projects" style={styles.navLink}>프로젝트</a>
            <a href="#proof" style={styles.navLink}>기술근거</a>
            <a href="#experience" style={styles.navLink}>경력</a>
            <a href="#strengths" style={styles.navLink}>역량</a>
            <a href="#education" style={styles.navLink}>학력</a>
            <a href="#contact" style={styles.navLink}>연락처</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section style={{ ...sectionStyle, ...styles.heroSection(isMobile) }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={styles.heroGrid(isTablet)}
          >
            <div>
              <div style={styles.heroName}>{profile.name}</div>
              <h1 style={styles.heroRole(isMobile)}>
                고객 문제를 비즈니스 성과와 실행 가능한 제품 개선안으로 번역합니다.
              </h1>
              <p style={styles.heroDesc(isMobile)}>{profile.summary}</p>

              <div style={styles.heroButtonRow}>
                <a href="#projects" style={styles.primaryButton(isMobile)}>
                  대표 사례 보기 <ArrowRight size={16} />
                </a>
                <a
                  href="#/resume"
                  style={styles.secondaryButton(isMobile)}
                >
                  이력서 보기 <Download size={16} />
                </a>
                <a
                  href={profile.github}
                  style={styles.iconButton}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FolderOpen size={18} />
                </a>
              </div>

              <div style={styles.contactLine(isMobile)}>
                <a href={`mailto:${profile.email}`} style={styles.contactPill}>
                  <Mail size={15} /> {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/-/g, "")}`} style={styles.contactPill}>
                  <Phone size={15} /> {profile.phone}
                </a>
                <span style={styles.contactPill}>
                  <MapPin size={15} /> {profile.location}
                </span>
              </div>
            </div>

            <aside style={styles.heroPanel}>
              <div style={styles.panelLabel}>PRODUCT THESIS</div>
              <div style={styles.panelTitle}>숫자와 운영을 아는 PO/PM</div>
              <div style={styles.panelDesc}>
                VOC와 운영 흐름에서 출발해 KPI, 비용, 우선순위, 요구사항으로 연결합니다.
              </div>
              <div style={styles.signalList}>
                <div style={styles.signalItem}>
                  <Target size={18} />
                  <span>고객/현업 문제 정의</span>
                </div>
                <div style={styles.signalItem}>
                  <BarChart3 size={18} />
                  <span>성과 지표와 우선순위 판단</span>
                </div>
                <div style={styles.signalItem}>
                  <Workflow size={18} />
                  <span>요구사항·운영 흐름 구체화</span>
                </div>
                <div style={styles.signalItem}>
                  <Sparkles size={18} />
                  <span>데이터·AI 기반 검증 속도</span>
                </div>
              </div>
              <div style={styles.heroStatsGrid}>
                {stats.map((stat) => (
                  <div key={stat.label} style={styles.statCard}>
                    <div style={styles.statValue}>{stat.value}</div>
                    <div style={styles.statLabel}>{stat.label}</div>
                    <div style={styles.statSub}>{stat.sub}</div>
                  </div>
                ))}
              </div>
            </aside>
          </motion.div>
        </section>

        <section id="positioning" style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.sectionIntro(isTablet)}>
            <div>
              <div style={styles.sectionEyebrow}>POSITIONING</div>
              <h2 style={styles.sectionTitle}>PO/PM으로 전환 가능한 강점의 조합</h2>
            </div>
            <p style={styles.sectionDesc}>
              서비스 운영, 경영기획, 데이터 분석, AI PoC 경험을 하나의 방향으로 묶었습니다. 화면을 그리는 사람보다 먼저, 어떤 문제를 풀어야 하는지와 왜 지금 풀어야 하는지를 설명하는 사람에 가깝습니다.
            </p>
          </div>

          <div style={styles.roleFitGrid}>
            {roleFit.map((item, index) => (
              <div key={item.title} style={styles.roleFitCard}>
                <div style={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</div>
                <div style={styles.roleFitTitle}>{item.title}</div>
                <div style={styles.roleFitDesc}>{item.desc}</div>
                <div style={styles.tagWrap}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: isMobile ? 72 : 104 }}>
          <div style={styles.brandStrip(isTablet)}>
            <div style={styles.brandStripMain}>
              <div style={styles.sectionEyebrow}>CAREER NARRATIVE</div>
              <h2 style={styles.stripTitle}>커리어는 운영 접점에서 시작해 지표, 실행 구조, AI 활용으로 확장되었습니다.</h2>
            </div>
            <div style={styles.stripSteps}>
              <span>VOC·운영</span>
              <ArrowRight size={16} />
              <span>KPI·성과관리</span>
              <ArrowRight size={16} />
              <span>데이터·AI PoC</span>
            </div>
          </div>
        </section>

        <section id="projects" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionTop(isMobile)}>
            <div>
              <div style={styles.sectionEyebrow}>FEATURED PROJECTS</div>
              <h2 style={styles.sectionTitle}>
                커리어 방향성을 보여주는 주요 성과 사례입니다
              </h2>
              <p style={styles.sectionDesc}>
                이 섹션은 이력서에 길게 담기 어려운 성과 사례를 정리한 공간입니다. 서비스 운영, KPI·성과관리, 데이터 기반 문제 정의, AI Agent 서비스 PoC 기획까지 제가 어떤 방향으로 커리어를 확장해왔는지 보여줍니다.
              </p>
            </div>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="프로젝트 검색"
              style={styles.searchInput}
            />
          </div>

          <div style={styles.projectGrid(isMobile)}>
            {filteredProjects.map((project) => (
              <motion.a
                key={project.slug}
                href={`#/project/${project.slug}`}
                whileHover={isMobile ? undefined : { y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={styles.projectCard}
              >
                <div style={styles.projectCardImageWrap}>
                  <img
                    src={project.cover}
                    alt={project.title}
                    style={styles.projectCardImage}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                </div>
                <div style={styles.projectCardBody(isMobile)}>
                  <div style={styles.projectCategory}>{project.category}</div>
                  <div style={styles.projectTitle(isMobile)}>{project.title}</div>
                  <div style={styles.projectOneLiner(isMobile)}>{project.oneLiner}</div>
                  <div style={styles.tagWrap}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="proof" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>GITHUB & ARTIFACTS</div>
          <h2 style={styles.sectionTitle}>기술 스택과 데이터 활용 역량은 산출물로 보완합니다</h2>
          <p style={styles.sectionDesc}>
            실무 코드와 원본 데이터는 공개하지 않고, 학업·개인 프로젝트 중심으로 GitHub와 보고서를 연결했습니다. Python, SQL, 데이터 전처리, 모델링, 대시보드, AI Agent PoC 등 PM/PO로서 활용 가능한 기술 기반을 확인할 수 있도록 구성했습니다.
          </p>

          <div style={styles.artifactGrid}>
            {proofArtifacts.map((item) => (
              <div key={item.title} style={styles.artifactCard}>
                <div style={styles.artifactType}>{item.type}</div>
                <div style={styles.artifactTitle}>{item.title}</div>
                <div style={styles.artifactDesc}>{item.desc}</div>
                <div style={styles.tagWrap}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={styles.artifactActions}>
                  <a href={item.primaryHref} target="_blank" rel="noreferrer" style={styles.linkButton}>
                    <FolderOpen size={15} />
                    <span>{item.primaryLabel}</span>
                  </a>
                  <a href={item.secondaryHref} target="_blank" rel="noreferrer" style={styles.linkButton}>
                    <FileText size={15} />
                    <span>{item.secondaryLabel}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>EXPERIENCE</div>
          <h2 style={styles.sectionTitle}>운영 현장에서 경영진 의사결정 지원까지 확장한 과정</h2>
          <p style={styles.sectionDesc}>
            경력의 흐름은 비욘드아이앤씨의 서비스 운영 경험과 아이디헬스케어그룹의 경영기획·성과관리 경험을 중심으로 구성했습니다. 비욘드에서는 VOC, B2B 고객 대응, 주문중개·정산 운영을 통해 제품이 실제로 작동하는 현장을 배웠고, 아이디헬스케어에서는 전사 KPI, 웹 기반 성과관리 시스템, 관리회계, 마케팅 성과관리로 경영진이 판단할 수 있는 지표와 실행 체계를 다뤘습니다.
          </p>

          <div style={styles.timelineWrap}>
            {experiences.map((item, index) => (
              <div key={`${item.company}-${item.period}`} style={styles.timelineRow(isMobile)}>
                <div style={styles.timelineLeft(isMobile)}>
                  <div style={styles.timelinePeriodBadge}>{item.period}</div>
                  <div style={styles.timelineCompanyName(isMobile)}>{item.company}</div>
                  <div style={styles.timelineRoleText}>{item.role}</div>
                </div>

                <div style={styles.timelineCenter(isMobile)}>
                  <div style={styles.timelineLine} />
                  <div style={styles.timelineDot}>{index + 1}</div>
                </div>

                <div style={styles.timelineRight(isMobile)}>
                  <div style={styles.timelineContentCard}>
                    <div style={styles.timelineHeadline(isMobile)}>{item.headline}</div>
                    <div style={styles.timelineDescription}>{item.description}</div>
                    <ul style={styles.timelineList}>
                      {item.bullets.map((bullet) => (
                        <li key={bullet} style={styles.timelineListItem}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="strengths" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>CORE CAPABILITIES</div>
          <h2 style={styles.sectionTitle}>Business-oriented, Data-capable PO/PM 역량</h2>
          <p style={styles.sectionDesc}>
            제 역량은 고객·운영 접점, 비즈니스 지표, 데이터 핸들링, 실행 구조화의 교차점에 있습니다. UI/UX 디테일 설계보다는 문제를 고르고, 우선순위를 판단하고, 데이터와 AI를 활용해 실행 가능한 개선안으로 구체화하는 쪽에 강점이 있습니다.
          </p>

          <div style={styles.strengthGrid}>
            {strengths.map((group) => (
              <div key={group.title} style={styles.strengthCard}>
                <div style={styles.strengthTitle}>{group.title}</div>
                <div style={styles.strengthTags}>
                  {group.items.map((item) => (
                    <span key={item} style={styles.strengthTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>EDUCATION</div>
          <h2 style={styles.sectionTitle}>학업 배경</h2>
          <p style={styles.sectionDesc}>
            경제학에서 쌓은 정량적 사고를 바탕으로 통계·재무·핀테크를 학습했고, Business Analytics 석사과정에서는 데이터 기반 의사결정과 AI 활용을 실제 제품·사업 문제 해결 프로젝트로 연결하고 있습니다.
          </p>

          <div style={styles.educationOnlyGrid(isMobile)}>
            <div style={styles.educationDetailCard}>
              <div style={styles.eduPeriod}>2025.03 - 2026.08</div>
              <div style={styles.eduTitle}>고려대학교 일반대학원</div>
              <div style={styles.eduSubtitle}>경영학과 Business Analytics 석사과정 · 졸업예정</div>
              <ul style={styles.eduBulletList}>
                <li>관련 수업: AI in business Analytics, Business Analytics Programming, Empirical Analytics, Financial Analytics, Social Media Analytics</li>
                <li>데이터 기반 의사결정, AI 기반 비즈니스 문제 해결 구조 설계 중심 학습 및 프로젝트 수행</li>
              </ul>
            </div>

            <div style={styles.educationDetailCard}>
              <div style={styles.eduPeriod}>2015.03 - 2021.08</div>
              <div style={styles.eduTitle}>연세대학교 미래캠퍼스</div>
              <div style={styles.eduSubtitle}>경제학 학사</div>
              <ul style={styles.eduBulletList}>
                <li>관련 수업: Economics, Statistics, Investment, Fintech, Financial Analysis, Accounting, Time Series Analysis, Linear Algebra</li>
                <li>통계·재무·핀테크 기반의 정량 분석과 데이터 기반 문제 해결 관련 과목 중점 이수</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="credentials" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>CERTIFICATIONS & TRAINING COURSES</div>
          <h2 style={styles.sectionTitle}>자격증, 교육 이수 및 수상 내역</h2>
          <p style={styles.sectionDesc}>
            실무에서 필요한 분석 언어와 검증 기준을 보완하기 위해 SQL, 데이터 분석, 테스트, 시각화, AI 교육을 꾸준히 쌓았고, 프로젝트 성과는 수상과 산출물로 검증해왔습니다.
          </p>

          <div style={styles.credentialsGrid}>
            <div style={styles.credentialsCard}>
              <div style={styles.credentialBlock}>
                <div style={styles.credentialTitle}>자격증</div>
                <div style={styles.credentialTags}>
                  <span style={styles.certTag}>SQLD</span>
                  <span style={styles.certTag}>ADsP</span>
                  <span style={styles.certTag}>ISTQB CTFL</span>
                  <span style={styles.certTag}>전산회계 1급</span>
                  <span style={styles.certTag}>MOS Master</span>
                </div>
              </div>

              <div style={styles.credentialDivider} />

              <div style={styles.credentialBlock}>
                <div style={styles.credentialTitle}>교육 이수</div>
                <ul style={styles.credentialList}>
                  <li>2026.01 ~ 2026.02: Tableau 데이터 시각화 부트캠프 수료 (Salesforce)</li>
                  <li>2024.08 ~ 2024.11: 비즈니스 애널리틱스: 비즈니스 데이터 분석, 대시보드, 사업 적용 과정 수료 (러닝스푼즈)</li>
                  <li>2023.01 ~ 2023.03: SW Camp PM Course 과정 수료 (팀스파르타)</li>
                  <li>2022.10 ~ 2022.10: SW Testing Foundation 교육 수료 (STA테스팅컨설팅)</li>
                  <li>2021.07 ~ 2022.01: K-Digital Training · 핀테크 AI 알고리즘 개발자 과정 수료 (비트컴퓨터)</li>
                  <li>2020.08 ~ 2020.12: 공공빅데이터 인턴십 수료 (NIA)</li>
                </ul>
              </div>

              <div style={styles.credentialDivider} />

              <div style={styles.credentialBlock}>
                <div style={styles.credentialTitle}>성과 및 수상</div>
                <ul style={styles.credentialList}>
                  <li>2025학년도 고려대학교 MSBA 캡스톤 프로젝트 우수상 (LG CNS AI Agent)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="additional" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>ADDITIONAL EXPERIENCE</div>
          <h2 style={styles.sectionTitle}>PO/PM으로 전환 가능한 추가 경험</h2>
          <p style={styles.sectionDesc}>
            제품 기획은 좋은 아이디어만으로 끝나지 않고, 운영 현장, 품질 검증, 경영 보고, 이해관계자 커뮤니케이션까지 이어져야 한다고 생각합니다. 아래 경험들은 제품 문제를 실행 가능한 형태로 만드는 기반이 되었습니다.
          </p>

          <div style={styles.additionalListGrid(isMobile)}>
            {additionalExperience.map((item, i) => (
              <div key={i} style={styles.additionalListCard}>
                <div style={styles.additionalListTitle}>{item.title}</div>
                <div style={styles.additionalListDesc}>{item.desc}</div>
                <div style={styles.additionalListTags}>
                  {item.tags.map((t) => (
                    <span key={t} style={styles.additionalListTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ ...sectionStyle, paddingBottom: isMobile ? 96 : 120 }}>
          <div style={styles.contactCtaWrap}>
            <h2 style={styles.contactCtaTitle}>포트폴리오를 봐주셔서 감사합니다</h2>
            <p style={styles.contactCtaDesc}>
              업무 프로세스를 구조화하고, 데이터와 AI를 활용해 실천 가능한 개선 방안을 설계하는 PO/PM으로 성장하고 싶습니다.
            </p>

            <div style={styles.contactCtaButtons}>
              <a href={`mailto:${profile.email}`} style={styles.primaryButton(isMobile)}>
                <Mail size={16} /> 이메일 보내기
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryButton(isMobile)}
              >
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryButton(isMobile)}
              >
                <FolderOpen size={16} /> GitHub
              </a>

              <a
                href="#/resume"
                style={styles.secondaryButton(isMobile)}
              >
                <FolderOpen size={16} /> 이력서 보기
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    background: "#0f172a",
    color: "#f8fafc",
    minHeight: "100vh",
    fontFamily: "Inter, Pretendard, Apple SD Gothic Neo, sans-serif",
    position: "relative",
    overflowX: "hidden",
  },
  bgGlowOne: {
    position: "fixed",
    top: -160,
    left: -100,
    width: 420,
    height: 420,
    background: "radial-gradient(circle, rgba(124,58,237,0.23) 0%, rgba(124,58,237,0) 70%)",
    pointerEvents: "none",
  },
  bgGlowTwo: {
    position: "fixed",
    right: -120,
    top: 80,
    width: 420,
    height: 420,
    background: "radial-gradient(circle, rgba(34,197,94,0.16) 0%, rgba(34,197,94,0) 70%)",
    pointerEvents: "none",
  },
  header: {
    position: "fixed",
    top: 10,
    left: 0,
    right: 0,
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    pointerEvents: "none",
  },
  headerInner: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 0,
    width: isMobile ? "calc(100vw - 24px)" : "fit-content",
    maxWidth: "calc(100vw - 24px)",
    margin: 0,
    padding: isMobile ? "6px 8px" : "8px 16px",
    borderRadius: 999,
    background: "rgba(2,6,23,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 18px 50px rgba(2,6,23,0.34)",
    backdropFilter: "blur(18px)",
    pointerEvents: "auto",
  }),
  logo: {
    fontWeight: 900,
    fontSize: 15,
    letterSpacing: "0.08em",
    textDecoration: "none",
    color: "#f8fafc",
  },
  nav: (isMobile) => ({
    display: "flex",
    gap: isMobile ? 4 : 8,
    fontSize: isMobile ? 12 : 14,
    justifyContent: isMobile ? "flex-start" : "center",
    alignItems: "center",
    flexWrap: "nowrap",
    overflowX: isMobile ? "auto" : "visible",
    overflowY: "visible",
    whiteSpace: "nowrap",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    width: isMobile ? "100%" : "auto",
    maxWidth: "100%",
    WebkitOverflowScrolling: "touch",
  }),
  navLink: (isMobile) => ({
    color: "#cbd5e1",
    textDecoration: "none",
    padding: isMobile ? "8px 10px" : "9px 13px",
    borderRadius: 999,
    flexShrink: 0,
    lineHeight: 1,
  }),
  navDropdown: (isMobile) => ({
    position: "relative",
    flexShrink: 0,
    paddingBottom: isMobile ? 6 : 8,
    marginBottom: isMobile ? -6 : -8,
  }),
  navDropdownSummary: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    color: "#cbd5e1",
    padding: isMobile ? "8px 10px" : "9px 13px",
    borderRadius: 999,
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: 1,
  }),
  navDropdownMenu: (isMobile) => ({
    position: "absolute",
    top: "100%",
    left: isMobile ? 0 : 0,
    minWidth: isMobile ? 190 : 210,
    display: "grid",
    gap: 4,
    padding: 8,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    boxShadow: "0 16px 34px rgba(23,32,27,0.16)",
    zIndex: 30,
  }),
  navDropdownLink: {
    color: "#f8fafc",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 8,
    fontWeight: 800,
  },
  heroSection: (isMobile) => ({
    paddingTop: isMobile ? 48 : 76,
    paddingBottom: isMobile ? 56 : 88,
  }),
  heroGrid: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "minmax(0, 1.08fr) minmax(360px, 0.92fr)",
    gap: isTablet ? 28 : 42,
    alignItems: "start",
  }),
  heroName: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.12em",
    color: "#a78bfa",
    marginBottom: 18,
    textTransform: "uppercase",
  },
  heroRole: (isMobile) => ({
    fontSize: isMobile ? "2.35rem" : "clamp(3rem, 6vw, 5.5rem)",
    lineHeight: 0.98,
    maxWidth: 820,
    margin: 0,
    letterSpacing: 0,
    fontWeight: 900,
  }),
  heroDesc: (isMobile) => ({
    maxWidth: 760,
    color: "#cbd5e1",
    lineHeight: 1.78,
    fontSize: isMobile ? 15 : 16,
    marginTop: 24,
    marginBottom: 0,
  }),
  heroButtonRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 30,
  },
  primaryButton: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textDecoration: "none",
    background: "#f8fafc",
    color: "white",
    borderRadius: 8,
    padding: isMobile ? "13px 16px" : "13px 18px",
    fontWeight: 800,
    width: isMobile ? "100%" : "auto",
    boxSizing: "border-box",
  }),
  secondaryButton: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textDecoration: "none",
    background: "#111827",
    color: "#f8fafc",
    borderRadius: 8,
    padding: isMobile ? "13px 16px" : "13px 18px",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 800,
    width: isMobile ? "100%" : "auto",
    boxSizing: "border-box",
  }),
  iconButton: {
    width: 46,
    height: 46,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f8fafc",
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    textDecoration: "none",
  },
  contactLine: (isMobile) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 22,
  }),
  contactPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#cbd5e1",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#111827",
    borderRadius: 8,
    padding: "9px 11px",
    fontSize: 14,
    width: "fit-content",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  heroPanel: {
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0 18px 40px rgba(48, 43, 35, 0.08)",
  },
  panelLabel: {
    fontSize: 12,
    letterSpacing: "0.12em",
    color: "#a78bfa",
    fontWeight: 900,
    textTransform: "uppercase",
  },
  panelTitle: {
    marginTop: 10,
    fontSize: 26,
    lineHeight: 1.2,
    fontWeight: 900,
  },
  panelDesc: {
    marginTop: 10,
    color: "#cbd5e1",
    lineHeight: 1.7,
    fontSize: 14,
  },
  signalList: {
    display: "grid",
    gap: 8,
    marginTop: 18,
  },
  signalItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#0f172a",
    borderRadius: 8,
    padding: "11px 12px",
    fontSize: 14,
    fontWeight: 700,
    color: "#e2e8f0",
  },
  heroStatsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    marginTop: 18,
  },
  simpleHomeFrame: (isTablet) => ({
    position: "relative",
    overflow: "hidden",
    isolation: "isolate",
    minHeight: isTablet ? 680 : 760,
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.92) 68%, #0f172a 100%), radial-gradient(circle at 58% 42%, rgba(139,92,246,0.2), transparent 42%), radial-gradient(circle at 18% 72%, rgba(14,165,233,0.13), transparent 38%)",
  }),
  simpleHome: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "360px minmax(0, 1fr)",
    gap: isTablet ? 28 : 58,
    alignItems: "center",
    minHeight: isTablet ? 680 : 760,
    paddingTop: isTablet ? 96 : 120,
    paddingBottom: isTablet ? 72 : 112,
    position: "relative",
    zIndex: 1,
  }),
  motionScene: {
    position: "absolute",
    inset: "-180px -18vw -160px -18vw",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 1,
    WebkitMaskImage:
      "linear-gradient(90deg, transparent 0%, black 9%, black 91%, transparent 100%)",
    maskImage:
      "linear-gradient(90deg, transparent 0%, black 9%, black 91%, transparent 100%)",
  },
  profilePortrait: (isMobile) => ({
    width: isMobile ? 220 : 340,
    height: isMobile ? 220 : 340,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#111827",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 20px 70px rgba(2,6,23,0.45)",
  }),
  homeCopy: {
    position: "relative",
    zIndex: 1,
  },
  simpleName: {
    margin: 0,
    fontSize: "clamp(3.4rem, 7vw, 6.4rem)",
    lineHeight: 0.95,
    fontWeight: 900,
    letterSpacing: 0,
  },
  simpleRole: {
    marginTop: 12,
    color: "#a78bfa",
    fontWeight: 900,
    fontSize: "clamp(1.05rem, 1.7vw, 1.35rem)",
  },
  simpleBelief: {
    maxWidth: 760,
    marginTop: 18,
    color: "#cbd5e1",
    lineHeight: 1.75,
    fontSize: 16,
  },
  profileCareerList: {
    display: "grid",
    gap: 10,
    marginTop: 28,
  },
  profileCareerItem: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: 18,
    alignItems: "center",
    padding: 18,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    textDecoration: "none",
    color: "#f8fafc",
  },
  profileCareerHeaderText: {
    display: "grid",
    gap: 7,
    marginBottom: 12,
  },
  profileCareerItemStrong: {
    display: "block",
    color: "#f8fafc",
    fontSize: 16,
    lineHeight: 1.35,
    fontWeight: 900,
    whiteSpace: "normal",
  },
  profileCareerItemRole: {
    display: "block",
    color: "#a78bfa",
    fontSize: 13,
    lineHeight: 1.35,
    fontWeight: 800,
    whiteSpace: "normal",
  },
  profileCareerSummary: {
    margin: 0,
    color: "#e2e8f0",
    lineHeight: 1.7,
    fontSize: 14,
  },
  profileCareerMeta: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "#a78bfa",
    fontWeight: 900,
    fontSize: 13,
    whiteSpace: "nowrap",
  },
  etcGrid: {
    display: "grid",
    gap: 12,
    marginTop: 26,
  },
  learningGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12,
    marginTop: 24,
  },
  learningCard: {
    display: "grid",
    gap: 8,
    padding: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    background: "#111827",
  },
  skillSectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
    marginTop: 26,
  },
  skillPanel: {
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: 20,
  },
  skillDetailItem: {
    display: "grid",
    gap: 4,
    padding: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    background: "#0f172a",
    marginBottom: 8,
  },
  skillPillWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  toolGrid: {
    display: "grid",
    gap: 10,
  },
  toolCard: {
    display: "grid",
    gap: 4,
    padding: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    background: "#0f172a",
  },
  projectGroup: {
    marginTop: 28,
  },
  projectGroupHeader: {
    marginBottom: 16,
  },
  projectMoreButtonRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 18,
  },
  projectMoreButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    color: "#f8fafc",
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: "11px 13px",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
    marginTop: 26,
  },
  workBand: (isMobile) => ({
    background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(15,23,42,0.98))",
    color: "#f8fafc",
    borderRadius: 8,
    border: "1px solid rgba(167,139,250,0.24)",
    boxShadow: "0 24px 80px rgba(2,6,23,0.32)",
    padding: isMobile ? 24 : 56,
  }),
  workHeader: {
    maxWidth: 760,
  },
  workList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 22,
    marginTop: 44,
  },
  workItem: {
    display: "grid",
    gap: 14,
    minHeight: 210,
    padding: 28,
    background: "rgba(15,23,42,0.62)",
    border: "1px solid rgba(167,139,250,0.20)",
    borderRadius: 18,
  },
  workSceneGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
    gap: isMobile ? 14 : 18,
    marginTop: 34,
    alignItems: "stretch",
  }),
  workSceneCard: {
    aspectRatio: "1 / 0.92",
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#05070c",
    boxShadow: "0 18px 60px rgba(2,6,23,0.3)",
  },
  workSceneImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
  },
  resumeHeader: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "minmax(0, 1fr) 300px",
    gap: 36,
    alignItems: "center",
  }),
  resumeImage: {
    width: 280,
    height: 280,
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 24px 80px rgba(2,6,23,0.38)",
  },
  resumeSection: {
    display: "grid",
    gridTemplateColumns: "220px minmax(0, 1fr)",
    gap: 24,
    padding: "28px 0",
    borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  resumeSectionTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 900,
  },
  resumeSectionBody: {
    display: "grid",
    gap: 18,
  },
  resumeItem: {
    display: "grid",
    gap: 8,
  },
  resumeItemTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: 900,
    textDecoration: "none",
  },
  resumeMeta: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  resumeList: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.8,
  },
  resumeSkillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
  },
  skillColumn: {
    display: "grid",
    gap: 12,
  },
  skillColumnTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 900,
    color: "#a78bfa",
  },
  detailHero: (isMobile) => ({
    paddingTop: isMobile ? 34 : 54,
    paddingBottom: isMobile ? 28 : 46,
  }),
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    color: "#cbd5e1",
    textDecoration: "none",
    fontWeight: 800,
    marginBottom: 28,
  },
  detailHeroGrid: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "minmax(0, 1fr) minmax(280px, 360px)",
    gap: 28,
    alignItems: "end",
  }),
  detailTitle: (isMobile) => ({
    margin: 0,
    marginTop: 10,
    fontSize: isMobile ? "1.85rem" : "clamp(2.15rem, 3.8vw, 3.7rem)",
    lineHeight: 1.08,
    fontWeight: 900,
    color: "#f8fafc",
    letterSpacing: 0,
  }),
  detailLead: {
    maxWidth: 760,
    color: "#cbd5e1",
    lineHeight: 1.75,
    fontSize: 15,
    marginTop: 14,
  },
  detailMetaCard: {
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: 18,
  },
  detailMetaRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "#cbd5e1",
    fontSize: 14,
  },
  detailMediaGrid: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "minmax(0, 1.05fr) minmax(360px, 0.95fr)",
    gap: 24,
    alignItems: "start",
  }),
  detailStack: {
    display: "grid",
    gap: 12,
  },
  caseCoverWrap: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#f8fafc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  caseCoverImage: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "contain",
    objectPosition: "center",
    padding: "32px 40px",
    boxSizing: "border-box",
    display: "block",
  },
  caseSummaryGrid: {
    display: "grid",
    gap: 10,
  },
  caseSummaryGridWide: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "repeat(4, minmax(0, 1fr))",
    gap: 10,
    marginTop: 18,
  }),
  caseSummaryCard: {
    padding: 16,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#0f172a",
  },
  workflowDiagramWrap: {
    marginTop: 18,
    padding: 28,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "linear-gradient(180deg, rgba(14,16,22,0.98), rgba(17,24,39,0.96))",
    boxShadow: "0 24px 80px rgba(2,6,23,0.32)",
  },
  diagramTopline: {
    display: "grid",
    gap: 8,
    justifyItems: "center",
    textAlign: "center",
    marginBottom: 22,
    color: "#f8fafc",
  },
  diagramEyebrow: {
    color: "#9ca3af",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.16em",
  },
  diagramTitle: {
    color: "#f8fafc",
    fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
    lineHeight: 1.25,
    fontWeight: 900,
    letterSpacing: "0.02em",
  },
  diagramContext: {
    maxWidth: 880,
    margin: "0 auto 22px auto",
    padding: "14px 16px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  diagramLabel: {
    display: "block",
    color: "#a78bfa",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.12em",
    marginBottom: 8,
  },
  diagramText: {
    margin: 0,
    color: "#d1d5db",
    fontSize: 13,
    lineHeight: 1.7,
  },
  diagramStageGrid: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "repeat(4, minmax(0, 1fr))",
    gap: isTablet ? 14 : 18,
    alignItems: "stretch",
  }),
  diagramStageCard: {
    position: "relative",
    display: "grid",
    alignContent: "start",
    gap: 10,
    padding: 18,
    borderRadius: 8,
    background: "linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",
    border: "1px solid rgba(255,255,255,0.08)",
    minHeight: 210,
  },
  diagramStepLabel: {
    color: "#9ca3af",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.12em",
  },
  diagramStageTitle: {
    color: "#f8fafc",
    fontSize: 15,
    lineHeight: 1.35,
    fontWeight: 900,
  },
  diagramStageText: {
    margin: 0,
    color: "#d1d5db",
    fontSize: 12,
    lineHeight: 1.65,
    wordBreak: "keep-all",
    overflowWrap: "anywhere",
  },
  diagramArrow: (isTablet) => ({
    position: "absolute",
    right: isTablet ? "50%" : -18,
    top: isTablet ? "auto" : "50%",
    bottom: isTablet ? -18 : "auto",
    transform: isTablet ? "translateX(50%)" : "translateY(-50%)",
    width: 28,
    height: 28,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f8fafc",
    background: "#1f2937",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 999,
    zIndex: 1,
    fontStyle: "normal",
    fontWeight: 900,
  }),
  diagramBottom: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "minmax(0, 1fr) auto",
    gap: 18,
    alignItems: "center",
    marginTop: 18,
    padding: "16px 18px",
    borderRadius: 8,
    background: "rgba(167,139,250,0.12)",
    border: "1px solid rgba(167,139,250,0.24)",
  }),
  diagramSignalRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  caseNarrative: {
    display: "grid",
    gap: 18,
    maxWidth: 920,
  },
  caseChapter: {
    padding: "22px 0",
    borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  caseChapterLabel: {
    display: "inline-flex",
    color: "#a78bfa",
    background: "rgba(124,58,237,0.14)",
    border: "1px solid rgba(124,58,237,0.32)",
    borderRadius: 8,
    padding: "7px 10px",
    fontSize: 12,
    fontWeight: 900,
    marginBottom: 12,
  },
  careerProjectGroup: {
    marginBottom: 18,
  },
  careerProjectHistory: {
    marginTop: 28,
  },
  projectMiniList: {
    display: "grid",
    gap: 8,
  },
  projectMiniCard: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: 12,
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#111827",
    color: "#f8fafc",
    textDecoration: "none",
  },
  nextProjectBand: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "0.9fr 1.1fr",
    gap: 22,
    alignItems: "start",
    background: "#f8fafc",
    color: "#111827",
    borderRadius: 8,
    padding: 22,
  }),
  nextProjectLinks: {
    display: "grid",
    gap: 8,
  },
  nextProjectLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    color: "#111827",
    textDecoration: "none",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,253,248,0.18)",
    fontWeight: 800,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  statCard: {
    borderRadius: 8,
    padding: 14,
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  statValue: {
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: 0,
    color: "#f8fafc",
  },
  statLabel: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 800,
    color: "#e2e8f0",
  },
  statSub: {
    marginTop: 5,
    color: "#94a3b8",
    fontSize: 12,
    lineHeight: 1.5,
  },
  sectionTop: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(240px, 320px)",
    gap: 24,
    alignItems: "end",
    marginBottom: 28,
  }),
  sectionIntro: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "0.85fr 1.15fr",
    gap: isTablet ? 12 : 36,
    alignItems: "end",
    marginBottom: 22,
  }),
  sectionEyebrow: {
    fontSize: 12,
    letterSpacing: "0.14em",
    color: "#a78bfa",
    marginBottom: 10,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "clamp(1.55rem, 2.35vw, 2.35rem)",
    letterSpacing: 0,
    lineHeight: 1.12,
    fontWeight: 900,
    color: "#f8fafc",
  },
  sectionDesc: {
    color: "#cbd5e1",
    lineHeight: 1.75,
    maxWidth: 920,
    marginTop: 10,
  },
  searchInput: {
    height: 46,
    borderRadius: 8,
    background: "#111827",
    color: "#f8fafc",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "0 16px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  brandStrip: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "1fr auto",
    gap: 20,
    alignItems: "center",
    padding: 22,
    borderRadius: 8,
    background: "#f8fafc",
    color: "#111827",
  }),
  brandStripMain: {
    maxWidth: 720,
  },
  stripTitle: {
    margin: 0,
    color: "#111827",
    fontSize: "clamp(1.2rem, 1.8vw, 1.75rem)",
    lineHeight: 1.25,
    fontWeight: 900,
  },
  stripSteps: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    color: "#d8f3dc",
    fontWeight: 800,
    fontSize: 14,
  },
  roleFitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: 12,
    marginTop: 22,
  },
  roleFitCard: {
    borderRadius: 8,
    padding: 18,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cardIndex: {
    color: "#a44a3f",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: "0.08em",
  },
  roleFitTitle: {
    fontSize: 17,
    fontWeight: 900,
    color: "#f8fafc",
  },
  roleFitDesc: {
    color: "#cbd5e1",
    lineHeight: 1.68,
    fontSize: 14,
  },
  projectGrid: (isMobile, variant = "archive") => ({
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : variant === "home"
        ? "repeat(auto-fit, minmax(260px, 1fr))"
        : "repeat(auto-fill, minmax(300px, 360px))",
    gap: variant === "home" ? 12 : 14,
    alignItems: "stretch",
    justifyContent: variant === "home" ? "stretch" : "start",
  }),
  projectCard: {
    padding: 0,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "left",
    color: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    textDecoration: "none",
  },
  projectCardImageWrap: {
    width: "100%",
    height: 168,
    overflow: "hidden",
    background: "#0b1220",
    flexShrink: 0,
  },
  projectCardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  projectCardBody: (isMobile) => ({
    padding: isMobile ? 16 : 18,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }),
  projectCategory: {
    color: "#a78bfa",
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 900,
  },
  projectPeriodLink: {
    display: "inline-flex",
    width: "fit-content",
    color: "#94a3b8",
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "6px 8px",
    marginBottom: 10,
    fontSize: 12,
    fontWeight: 800,
    textDecoration: "none",
  },
  projectTitle: (isMobile) => ({
    fontSize: isMobile ? 17 : 18,
    lineHeight: 1.35,
    fontWeight: 900,
    marginBottom: 10,
  }),
  projectOneLiner: (isMobile) => ({
    color: "#cbd5e1",
    lineHeight: 1.65,
    fontSize: 14,
  }),
  tagWrap: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: "auto",
    paddingTop: 16,
  },
  tag: {
    fontSize: 12,
    color: "#e2e8f0",
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "7px 9px",
    fontWeight: 700,
  },
  timelineWrap: {
    marginTop: 28,
    display: "grid",
    gap: 20,
  },
  timelineRow: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "260px 56px 1fr",
    gap: isMobile ? 12 : 18,
  }),
  timelineLeft: (isMobile) => ({
    paddingTop: 8,
    order: isMobile ? 1 : 0,
  }),
  timelinePeriodBadge: {
    borderRadius: 8,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#a78bfa",
    padding: "8px 12px",
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 14,
    display: "inline-flex",
  },
  timelineCompanyName: (isMobile) => ({
    fontSize: isMobile ? 22 : 24,
    fontWeight: 700,
    marginBottom: 6,
    lineHeight: 1.3,
  }),
  timelineRoleText: {
    color: "#94a3b8",
    fontSize: 14,
  },
  timelineCenter: (isMobile) => ({
    position: "relative",
    display: isMobile ? "none" : "flex",
    justifyContent: "center",
  }),
  timelineLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 2,
    background: "rgba(255,255,255,0.12)",
  },
  timelineDot: {
    width: 34,
    height: 34,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8fafc",
    color: "#111827",
    fontWeight: 700,
  },
  timelineRight: (isMobile) => ({
    order: isMobile ? 2 : 0,
  }),
  timelineContentCard: {
    borderRadius: 8,
    padding: 24,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  timelineHeadline: (isMobile) => ({
    fontSize: isMobile ? 18 : 22,
    fontWeight: 700,
    marginBottom: 12,
    lineHeight: 1.4,
  }),
  timelineDescription: {
    color: "#cbd5e1",
    marginBottom: 14,
    lineHeight: 1.7,
  },
  timelineList: {
    paddingLeft: 18,
    margin: 0,
  },
  timelineListItem: {
    marginBottom: 6,
    lineHeight: 1.7,
    color: "#e2e8f0",
  },
  strengthGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12,
    marginTop: 26,
  },
  strengthCard: {
    borderRadius: 8,
    padding: 18,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  strengthTitle: {
    fontSize: 18,
    fontWeight: 900,
    marginBottom: 14,
    color: "#f8fafc",
  },
  strengthTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  strengthTag: {
    fontSize: 13,
    padding: "8px 10px",
    borderRadius: 8,
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#e2e8f0",
    fontWeight: 700,
  },
  educationOnlyGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 24,
    marginTop: 28,
  }),
  educationDetailCard: {
    borderRadius: 8,
    padding: 24,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  eduPeriod: {
    fontSize: 13,
    color: "#a78bfa",
    fontWeight: 900,
    marginBottom: 6,
  },
  eduTitle: {
    fontSize: 18,
    fontWeight: 900,
    marginBottom: 4,
    color: "#f8fafc",
  },
  eduSubtitle: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    fontSize: 14,
  },
  eduBulletList: {
    marginTop: 14,
    marginBottom: 0,
    paddingLeft: 18,
    color: "#e2e8f0",
    lineHeight: 1.8,
    fontSize: 14,
  },
  credentialsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 24,
    marginTop: 28,
  },
  credentialsCard: {
    borderRadius: 8,
    padding: 24,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  credentialBlock: {
    marginBottom: 6,
  },
  credentialTitle: {
    fontSize: 16,
    fontWeight: 900,
    color: "#a78bfa",
    marginBottom: 12,
  },
  credentialTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  credentialList: {
    margin: 0,
    paddingLeft: 18,
    color: "#e2e8f0",
    lineHeight: 1.9,
    fontSize: 14,
  },
  credentialDivider: {
    height: 1,
    background: "rgba(255,255,255,0.08)",
    margin: "18px 0",
  },
  certTag: {
    padding: "8px 10px",
    borderRadius: 8,
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: 13,
    color: "#e2e8f0",
    fontWeight: 700,
  },
  additionalListGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 16,
    marginTop: 24,
  }),
  additionalListCard: {
    borderRadius: 8,
    padding: 18,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  additionalListTitle: {
    fontSize: 17,
    fontWeight: 900,
    marginBottom: 8,
    color: "#f8fafc",
  },
  additionalListDesc: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 12,
  },
  additionalListTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  additionalListTag: {
    fontSize: 12,
    color: "#e2e8f0",
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "6px 10px",
    fontWeight: 700,
  },
  artifactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
    marginTop: 28,
  },
  artifactCard: {
    borderRadius: 8,
    padding: 18,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    flexDirection: "column",
    minHeight: 320,
  },
  artifactType: {
    color: "#a78bfa",
    fontSize: 13,
    fontWeight: 900,
    marginBottom: 10,
  },
  artifactTitle: {
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 1.35,
    marginBottom: 10,
    color: "#f8fafc",
  },
  artifactDesc: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    fontSize: 14,
  },
  artifactActions: {
    display: "grid",
    gap: 10,
    marginTop: "auto",
    paddingTop: 18,
  },
  contactCtaWrap: {
    textAlign: "center",
    padding: "56px 24px",
    border: "1px solid rgba(167,139,250,0.22)",
    borderRadius: 8,
    background: "linear-gradient(135deg, rgba(17,24,39,0.95), rgba(30,41,59,0.72))",
    boxShadow: "0 20px 70px rgba(2,6,23,0.28)",
  },
  contactCtaTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    margin: 0,
    marginBottom: 16,
  },
  contactCtaDesc: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 1.8,
    maxWidth: 680,
    margin: "0 auto 28px auto",
  },
  contactCtaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 14,
    flexWrap: "wrap",
  },
  footerResumeButton: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textDecoration: "none",
    background: "#a78bfa",
    color: "#0f172a",
    borderRadius: 8,
    padding: isMobile ? "13px 16px" : "13px 18px",
    fontWeight: 900,
    width: isMobile ? "100%" : "auto",
    boxSizing: "border-box",
  }),
  copyright: {
    marginTop: 28,
    color: "#94a3b8",
    fontSize: 13,
    letterSpacing: "0.04em",
  },
  modalOverlay: (isMobile) => ({
    position: "fixed",
    inset: 0,
    background: "rgba(23,32,27,0.72)",
    zIndex: 40,
    padding: isMobile ? 0 : 24,
    overflowY: "auto",
  }),
  modalCard: (isMobile) => ({
    maxWidth: 1180,
    margin: isMobile ? "0 auto" : "20px auto",
    minHeight: isMobile ? "100vh" : "auto",
    borderRadius: isMobile ? 0 : 8,
    background: "#111827",
    border: isMobile ? "none" : "1px solid rgba(255,255,255,0.12)",
    boxShadow: isMobile ? "none" : "0 20px 60px rgba(23,32,27,0.28)",
    position: "relative",
    padding: isMobile ? 16 : 24,
    boxSizing: "border-box",
  }),
  closeButton: (isMobile) => ({
    position: "absolute",
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0f172a",
    color: "#f8fafc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  }),
  modalHeader: (isMobile) => ({
    paddingRight: isMobile ? 48 : 56,
    marginBottom: 20,
    paddingTop: isMobile ? 36 : 0,
  }),
  modalTitle: (isMobile) => ({
    margin: 0,
    fontSize: isMobile ? "1.7rem" : "clamp(1.7rem, 3vw, 2.5rem)",
    lineHeight: 1.25,
  }),
  modalDesc: {
    color: "#cbd5e1",
    lineHeight: 1.8,
    marginTop: 12,
    marginBottom: 0,
  },
  modalGrid: (isTablet) => ({
    display: "grid",
    gridTemplateColumns: isTablet ? "1fr" : "1.1fr 0.9fr",
    gap: 24,
  }),
  viewerWrap: (isMobile) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#1e293b",
    height: isMobile ? 260 : 420,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? 12 : 20,
    boxSizing: "border-box",
  }),
  viewerImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
  viewerNavButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,253,248,0.9)",
    color: "#f8fafc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  thumbRow: {
    display: "flex",
    gap: 10,
    marginTop: 12,
    overflowX: "auto",
    paddingBottom: 4,
  },
  thumbButton: (isMobile) => ({
    minWidth: isMobile ? 72 : 92,
    width: isMobile ? 72 : 92,
    height: isMobile ? 52 : 64,
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#1e293b",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }),
  thumbImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
  infoBlock: {
    padding: 18,
    borderRadius: 8,
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
    marginBottom: 14,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: "0.08em",
    color: "#a78bfa",
    marginBottom: 10,
  },
  infoText: {
    color: "#e2e8f0",
    lineHeight: 1.8,
    fontSize: 14,
  },
  infoList: {
    margin: 0,
    paddingLeft: 18,
    color: "#e2e8f0",
    lineHeight: 1.8,
    fontSize: 14,
  },
  infoListItem: {
    marginBottom: 6,
  },
  downloadList: {
    display: "grid",
    gap: 10,
  },
  downloadButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    color: "#f8fafc",
    textDecoration: "none",
    borderRadius: 8,
    padding: "13px 14px",
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  linkList: {
    display: "grid",
    gap: 10,
  },
  linkButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    color: "#f8fafc",
    textDecoration: "none",
    borderRadius: 8,
    padding: "13px 14px",
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.12)",
  },
};



