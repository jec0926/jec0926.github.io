import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  FolderOpen,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const profile = {
  name: "Business Analyst & Data Strategist",
  title: "Jason EunChan Jang",
  subtitle:
    "운영 데이터, KPI, 자동화, AI Agent 기획을 연결해 조직이 실행할 수 있는 판단 구조를 만드는 기획자",
  summary:
    "운영 데이터와 KPI를 기반으로 조직의 판단 기준을 설계하고, 자동화와 분석을 통해 실제 실행으로 이어지도록 구조화를 해왔습니다. AI Agent 및 데이터 전략 프로젝트를 통해, 데이터 활용을 넘어 의사결정 방식 자체를 개선하는 방향으로 확장하고 있습니다.",
  email: "dmscks940926@naver.com",
  phone: "010-2595-1395",
  location: "Seoul, Korea",
  linkedin: "https://www.linkedin.com/in/eunchanjang",
};

const stats = [
  { label: "Strategy Impact", value: "+ 20%", sub: "제안 채택 후 성과 개선" },
  { label: "Process Efficiency", value: "6 배 개선", sub: "자동화 기반 운영 개선" },
  { label: "Business Model", value: "300% +", sub: "초기 구조 개선 기반 성과" },
  { label: "AI / Analytics", value: "4 +", sub: "데이터 분석 및 AI 프로젝트" },
];

const projects = [
  {
    slug: "serveone-tamsam",
    section: "real-business",
    category: "실무 사례 · Business Transformation",
    title: "헬스케어 MRO 시장 구조화 및 TAM/SAM 기반 영업 전략 설계",
    oneLiner:
      "분산된 병원 데이터를 통합·구조화하여 시장 규모와 타겟 병원을 정의하고, 데이터 기반 영업 전략 수립이 가능한 TAM/SAM 분석 체계를 설계했습니다.",
    tags: ["Strategy", "Market Sizing", "Data Structuring", "Healthcare"],
    cover: "/projects/serveone-tamsam/cover.png",
    details: ["/projects/serveone-tamsam/detail-1.png"],
    summary: {
      problem:
        "병원 정보가 분산되어 있어 시장 규모 산정과 우선 타겟 병원 선정이 어려운 비정형 데이터 환경이었습니다.",
      approach: [
        "Captive 병원 협력 네트워크를 기반으로 대상 병원 리스트를 정의했습니다.",
        "병원 회계공시 데이터 수집 및 Python 기반 정제를 수행했습니다.",
        "지오코딩을 결합해 병원 단위 통합 마스터 데이터를 구축했습니다.",
      ],
      impact:
        "TAM/SAM 산출과 영업 타겟 선정이 가능한 구조화된 데이터 기반을 마련했고, 병원 특성 기반 세분화를 통해 영업 전략 수립이 가능하도록 했습니다.",
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
    slug: "idhealthcare-potential-sales-kpi",
    section: "real-business",
    category: "실무 사례 · KPI / Performance",
    title: "잠재 매출 관리 KPI 설계 및 조직 실행 체계 구축",
    oneLiner:
      "미전환 수술건을 관리하는 KPI를 설계하고, 이를 경영진 관리 지표와 조직 운영 프로세스로 연결해 잠재 매출 관리 체계를 구축했습니다.",
    tags: ["KPI", "BizOps", "Performance", "Healthcare"],
    cover: "/projects/idhealthcare-potential-sales-kpi/cover.png",
    details: [
      "/projects/idhealthcare-potential-sales-kpi/detail-1.png",
      "/projects/idhealthcare-potential-sales-kpi/detail-2.png",
    ],
    summary: {
      problem:
        "상담 후 확정 및 가예약금 납부 이후 수술로 이어지지 않는 고객에 대한 관리 기준과 대응 체계가 부재한 상태였습니다.",
      approach: [
        "BI 데이터를 기반으로 미전환 수술건을 식별하는 KPI를 정의했습니다.",
        "병원장 보고를 통해 해당 지표를 경영진 관심 지표로 확장했습니다.",
        "재컨택, 취소 확정, 재예약 등 대응 프로세스를 수립했습니다.",
        "월간 정기 회의 필수 보고 항목으로 편입해 지속 모니터링 체계를 운영했습니다.",
      ],
      impact:
        "잠재 매출을 구조적으로 관리할 수 있는 KPI와 조직 실행 체계를 구축했고, 경영진 중심 관리 지표로 운영되며 매출 회수 및 상담 프로세스 개선 기반을 마련했습니다.",
    },
    downloads: [],
    links: [{ label: "관련 링크", href: "https://www.idhospital.com/" }],
  },
  {
    slug: "beyond-strategy-growth",
    section: "real-business",
    category: "실무 사례 · Strategy / Growth",
    title: "Driver 기반 매출 구조 분석 및 전략 제안을 통한 매출 개선",
    oneLiner:
      "핵심 Driver 기반 Financial Model로 매출 부진 원인을 구조적으로 분석하고, 전략적 제휴 확대 아이디어를 제안해 실제 성과 개선으로 이어지는 기반을 만들었습니다.",
    tags: ["Strategy", "Financial Model", "Growth", "Platform"],
    cover: "/projects/beyond-strategy-growth/cover.png",
    details: [
      "/projects/beyond-strategy-growth/detail-1.png",
      "/projects/beyond-strategy-growth/detail-2.png",
      "/projects/beyond-strategy-growth/detail-3.png",
    ],
    summary: {
      problem:
        "B2B 제휴 물량 수행 저조와 일정 지연으로 매출 부진이 지속됐지만, 이를 설명하고 대응할 수 있는 정량적 기준과 실행 구조가 부족했습니다.",
      approach: [
        "수행건수, 점포 수, 제휴사 확장 등 핵심 Driver를 정의했습니다.",
        "Driver 기반 Financial Model을 설계해 성과 모니터링 구조를 만들었습니다.",
        "모델 기반으로 매출 부진 원인을 분석했습니다.",
        "기존 계획 외 성장 확보를 위해 전략적 제휴 확대 아이디어와 매출 회복 시나리오를 제안했습니다.",
      ],
      impact:
        "데이터 기반으로 매출 부진 원인을 진단하고 전략적 제휴 확대 아이디어를 제안했으며, 이후 관련 협업이 실제 추진되어 서비스 확장으로 이어졌습니다. 후속 실행 결과 매출이 약 20% 이상 개선된 것으로 확인했습니다.",
    },
    downloads: [],
    links: [
      {
        label: "관련 링크",
        href: "https://www.beyondinc.co.kr/html/service/walk-delivery-service.html",
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
      { label: "관련 링크", href: "https://smartstore.naver.com/groo_of_music" },
    ],
  },
  {
    slug: "beyond-settlement-automation",
    section: "real-business",
    category: "실무 사례 · Automation / Operations",
    title: "정산 자동화 시스템 구축을 통한 업무 처리 시간 6배 단축",
    oneLiner:
      "정산 프로세스를 Python 기반으로 자동화하여 반복 업무를 제거하고, 4시간 소요 작업을 40분으로 단축했습니다.",
    tags: ["Automation", "Python", "Efficiency", "Operations"],
    cover: "/projects/beyond-settlement-automation/cover.png",
    details: ["/projects/beyond-settlement-automation/detail-1.png"],
    summary: {
      problem:
        "정산 프로세스가 수작업 중심으로 운영되어 시간 소요가 크고, 반복 업무 부담이 높은 구조였습니다.",
      approach: [
        "기존 정산 프로세스를 분석해 병목 구간을 도출했습니다.",
        "Python 기반 자동화 시스템을 설계하고 구현했습니다.",
        "자동화 로직을 다른 업무 영역에도 확장 가능하도록 구성했습니다.",
      ],
      impact:
        "정산 업무 처리 시간을 4시간에서 40분으로 단축해 처리 속도를 6배 개선했고, 반복 업무 효율을 크게 높였습니다.",
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
    category: "산학협력 프로젝트 · AI Enablement",
    title: "PI 컨설팅 의사결정 지원 AI Agent 설계",
    oneLiner:
      "프로세스 탐색과 비교가 어려운 문제를 해결하기 위해 AI Agent를 설계했고, Best Practice 비교 및 개선 방향 도출이 가능한 구조로 확장했습니다.",
    tags: ["AI", "RAG", "Decision Support", "Consulting"],
    cover: "/projects/lgcns/cover.png",
    details: [
      "/projects/lgcns/detail-1.png",
      "/projects/lgcns/detail-2.png",
      "/projects/lgcns/detail-3.png",
    ],
    summary: {
      problem:
        "기존 프로세스 관리 방식은 키워드 검색 중심이어서 전체 흐름 파악, 관련 사례 비교, 개선 방향 도출에 한계가 있었습니다.",
      approach: [
        "컨설턴트 인터뷰를 통해 실제 검색·비교·개선 과정의 불편을 정의했습니다.",
        "프로세스 문서를 AI가 탐색하고 맥락 기반으로 답변할 수 있는 Agent 구조를 설계했습니다.",
        "Best Practice 비교와 개선 방향 제안 시나리오를 구체화했습니다.",
        "정량 평가와 사용자 피드백을 통해 업무 적용 가능성을 검증했습니다.",
      ],
      impact:
        "AI를 단순 질의응답이 아니라 컨설팅 업무의 탐색·비교·개선 의사결정 보조 도구로 설계했고, 실제 업무 생산성 향상 가능성을 검증하는 PoC 기반을 마련했습니다.",
    },
    downloads: [
      {
        label: "LG CNS 캡스톤 발표자료 PDF",
        href: "/projects/lgcns/LG_CNS_캡스톤_발표자료.pdf",
      },
    ],
    links: [],
  },
  {
    slug: "card-segmentation-strategy",
    section: "ai-analytics",
    category: "학업 프로젝트 · Analytics / Strategy",
    title: "고객 세그먼트 재정의 및 데이터 기반 전략 설계",
    oneLiner:
      "불균형 데이터 환경에서 고객군을 재정의하고 행동 기반으로 해석해, 세그먼트별 실행 가능한 마케팅 전략으로 연결했습니다.",
    tags: ["Analytics", "Segmentation", "Strategy", "ML"],
    cover: "/projects/card-segment/cover.png",
    details: [
      "/projects/card-segment/detail-1.png",
      "/projects/card-segment/detail-2.png",
      "/projects/card-segment/detail-3.png",
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
        href: "/projects/card-segment/신용카드_고객세그먼트_분류_프로젝트.pdf",
      },
    ],
    links: [],
  },
  {
    slug: "jeonse-risk-dashboard",
    section: "ai-analytics",
    category: "학업 프로젝트 · Public Data / Risk Analytics",
    title: "전세사기 조기 리스크 탐지 모델 및 대시보드 설계",
    oneLiner:
      "공공데이터를 결합해 지역 단위 전세사기 위험을 조기 탐지하고, B2G·B2C 활용이 가능한 리스크 평가 대시보드 구조를 설계했습니다.",
    tags: ["Risk Model", "Public Data", "Dashboard", "B2G", "Early Warning"],
    cover: "/projects/jeonse-risk-dashboard/cover.png",
    details: [
      "/projects/jeonse-risk-dashboard/detail-1.png",
      "/projects/jeonse-risk-dashboard/detail-2.png",
      "/projects/jeonse-risk-dashboard/detail-3.png",
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
        href: "/projects/jeonse-risk-dashboard/전SAFE_발표자료.pdf",
      },
    ],
    links: [],
  },
];

const experiences = [
  {
    period: "2026.02 - 2026.03",
    company: "서브원",
    role: "헬스케어 MRO 신사업 M&A 프로젝트 | RA",
    headline: "시장 구조화 및 사업성 분석 체계 설계",
    description:
      "헬스케어 MRO 신사업 M&A 프로젝트에 참여하여, 시장·제품·물류 데이터를 구조화하고 사업성 판단을 위한 의사결정 프레임을 설계했습니다.",
    bullets: [
      "병원 단위 TAM/SAM 데이터 구축",
      "Top-line 산출 근거 데이터 구조 설계",
      "치료재료 제품군 분류 마스터 데이터 구조 설계",
      "물류 거리·통행료 자동화 기반 비용 산출 구조 설계",
    ],
  },
  {
    period: "2024.05 - 2025.02",
    company: "아이디헬스케어그룹",
    role: "경영기획팀 | 사원",
    headline: "KPI 기반 성과관리 및 운영 구조 설계",
    description:
      "병원 운영 데이터 기반 KPI 설계와 성과관리 체계를 구축하고, 마케팅 예산 통제 및 잠재 매출 관리 구조를 조직 운영 프로세스로 연결했습니다.",
    bullets: [
      "잠재 매출 관리 KPI 설계 및 운영 체계 구축",
      "ROAS 기반 마케팅 예산 통제 구조 설계",
      "전사 KPI 운영 및 성과관리 지원",
    ],
  },
  {
    period: "2022.04 - 2024.05",
    company: "비욘드아이앤씨",
    role: "전략사업본부 | 사원",
    headline: "운영 데이터 기반 전략 분석 및 자동화 구축",
    description:
      "운영 데이터 분석과 Financial Model을 기반으로 사업 성과를 구조적으로 분석하고, 전략 제안 및 자동화를 통해 실행 기반을 구축했습니다.",
    bullets: [
      "Driver 기반 Financial Model 설계 및 성과 분석",
      "운영 병목 구간 분석 및 전략 개선안 도출",
      "정산 자동화 시스템 구축 (업무 처리 시간 6배 단축)",
    ],
  },
];

const strengths = [
  {
    title: "의사결정 구조 설계",
    items: ["문제 정의", "KPI 설계", "성과관리 체계", "사업성 판단 구조", "운영 기준 정리"],
  },
  {
    title: "데이터 분석 및 모델링",
    items: ["Python", "SQL", "Excel", "통계 분석", "머신러닝"],
  },
  {
    title: "자동화 및 구조화",
    items: ["RPA", "데이터 파이프라인", "반복 업무 자동화", "데이터 정제", "기준 데이터 설계"],
  },
  {
    title: "AI 및 비즈니스 적용",
    items: ["AI Agent 기획", "RAG", "업무 적용 시나리오 설계", "수익성 분석", "전략 시나리오 설계"],
  },
];

const additionalExperience = [
  {
    title: "Project Management",
    desc: "홈페이지 리뉴얼 및 공공빅데이터 인턴십 프로젝트에서 PM 역할 수행",
    tags: ["PM", "Coordination", "Execution"],
  },
  {
    title: "Service Operations",
    desc: "운영 데이터 분석과 병목 구간 개선을 통한 서비스 효율화 경험",
    tags: ["Operations", "KPI", "Process"],
  },
  {
    title: "Quality Assurance",
    desc: "e-commerce 플랫폼 테스트 시나리오 설계 및 품질 검증 경험",
    tags: ["QA", "Testing", "Platform"],
  },
  {
    title: "Governance & Reporting",
    desc: "비상장사 이사회·주총 대응 및 경영 보고 체계 지원 경험",
    tags: ["IR", "Reporting", "Governance"],
  },
];

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

export default function EunchanPortfolioRefined() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [keyword, setKeyword] = useState("");
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
    if (!q) return projects;
    return projects.filter((project) =>
      [project.title, project.category, project.oneLiner, ...(project.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [keyword]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const moveImage = (direction) => {
    if (!selectedProject?.details?.length) return;
    const total = selectedProject.details.length;
    setActiveImageIndex((prev) => (prev + direction + total) % total);
  };

  return (
    <div style={styles.page}>
      <div style={styles.bgGlowOne} />
      <div style={styles.bgGlowTwo} />

      <header style={styles.header}>
        <div style={{ ...sectionStyle, ...styles.headerInner(isMobile) }}>
          <a href="#top" style={styles.logo}>
            EUNCHAN JANG
          </a>
          <nav style={styles.nav}>
            <a href="#projects" style={styles.navLink}>프로젝트</a>
            <a href="#experience" style={styles.navLink}>경력</a>
            <a href="#strengths" style={styles.navLink}>강점</a>
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
          >
            <div style={styles.heroName}>Business Analyst & Data Strategy</div>
            <h1 style={styles.heroRole(isMobile)}>
              데이터와 AI를 활용해 의사결정을 설계하는 Business Analyst
            </h1>
            <p style={styles.heroDesc(isMobile)}>{profile.summary}</p>

            <div style={styles.heroButtonRow}>
              <a href="#projects" style={styles.primaryButton(isMobile)}>
                프로젝트 보기 <ArrowRight size={16} />
              </a>
              <a
                href="/projects/common/장은찬_이력서_(국문).pdf"
                style={styles.secondaryButton(isMobile)}
                target="_blank"
                rel="noreferrer"
              >
                이력서 다운로드 <Download size={16} />
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
          </motion.div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: isMobile ? 64 : 82 }}>
          <div style={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} style={styles.statCard}>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
                <div style={styles.statSub}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionTop(isMobile)}>
            <div>
              <div style={styles.sectionEyebrow}>FEATURED PROJECTS</div>
              <h2 style={styles.sectionTitle}>
                Data-Driven 기반 BT(Business Transformation) 프로젝트 및 문제 해결 사례
              </h2>
              <p style={styles.sectionDesc}>
                실무와 프로젝트에서 데이터, 전략, AI를 활용해 비즈니스 문제를 정의하고 실행 구조까지 설계한 주요 사례입니다.
              </p>
            </div>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="프로젝트 검색"
              style={styles.searchInput}
            />
          </div>

          <div style={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <motion.button
                key={project.slug}
                onClick={() => openProject(project)}
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
              </motion.button>
            ))}
          </div>
        </section>

        <section id="experience" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>EXPERIENCE</div>
          <h2 style={styles.sectionTitle}>실무 경험 및 역할 확장 과정</h2>
          <p style={styles.sectionDesc}>
            운영과 데이터 분석을 기반으로 커리어를 시작해, KPI와 성과관리 체계를 설계하고 이후 사업성 분석과 전략 의사결정 영역까지 단계적으로 역할을 확장해왔습니다.
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
          <h2 style={styles.sectionTitle}>비즈니스 문제를 해결하기 위해 활용한 핵심 역량</h2>
          <p style={styles.sectionDesc}>
            데이터를 분석하는 데 그치지 않고, 전략 수립·성과관리·운영 개선까지 연결하는 구조를 설계해왔습니다.
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
            경제학을 기반으로 통계·재무·핀테크 관련 학습을 확장해왔고, 이후 Business Analytics 석사과정을 통해 데이터 기반 의사결정과 AI 활용 역량으로 연결해왔습니다.
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
            데이터 기반 역량을 확장하기 위해 자격 취득과 교육, 프로젝트를 통해 지속적으로 전문성을 보완해왔습니다.
          </p>

          <div style={styles.credentialsGrid}>
            <div style={styles.credentialsCard}>
              <div style={styles.credentialBlock}>
                <div style={styles.credentialTitle}>자격증</div>
                <div style={styles.credentialTags}>
                  <span style={styles.certTag}>SQLD</span>
                  <span style={styles.certTag}>ADsP</span>
                  <span style={styles.certTag}>ISTQB CTFL</span>
                </div>
              </div>

              <div style={styles.credentialDivider} />

              <div style={styles.credentialBlock}>
                <div style={styles.credentialTitle}>교육 이수</div>
                <ul style={styles.credentialList}>
                  <li>Tableau 데이터 시각화 부트캠프 수료 (Salesforce)</li>
                  <li>K-Digital Training · 핀테크 AI 알고리즘 개발자 과정 수료 (비트컴퓨터)</li>
                  <li>공공빅데이터 인턴십 수료 (NIA)</li>
                </ul>
              </div>

              <div style={styles.credentialDivider} />

              <div style={styles.credentialBlock}>
                <div style={styles.credentialTitle}>성과 및 수상</div>
                <ul style={styles.credentialList}>
                  <li>2025학년도 고려대학교 MSBA 캡스톤 프로젝트 우수상 (LG CNS AI Agent)</li>
                  <li>2020년도 DB GAPS 자산배분대회 본선 진출</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="additional" style={{ ...sectionStyle, paddingBottom: isMobile ? 80 : 110 }}>
          <div style={styles.sectionEyebrow}>ADDITIONAL EXPERIENCE</div>
          <h2 style={styles.sectionTitle}>추가 업무경험</h2>
          <p style={styles.sectionDesc}>
            전략 실행을 뒷받침하는 운영, 품질, 프로젝트 관리 경험도 함께 보유하고 있습니다.
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
              데이터·전략·AI를 연결하는 역할과 관련해 편하게 연락 주시면 감사하겠습니다.
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
                href="/projects/common/장은찬_이력서_(국문).pdf"
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryButton(isMobile)}
              >
                <FolderOpen size={16} /> 이력서 보기
              </a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay(isMobile)}
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              style={styles.modalCard(isMobile)}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeProject} style={styles.closeButton(isMobile)}>
                <X size={18} />
              </button>

              <div style={styles.modalHeader(isMobile)}>
                <div style={styles.projectCategory}>{selectedProject.category}</div>
                <h3 style={styles.modalTitle(isMobile)}>{selectedProject.title}</h3>
                <p style={styles.modalDesc}>{selectedProject.oneLiner}</p>
              </div>

              <div style={styles.modalGrid(isTablet)}>
                <div>
                  <div style={styles.viewerWrap(isMobile)}>
                    <img
                      src={selectedProject.details?.[activeImageIndex] || selectedProject.cover}
                      alt={`${selectedProject.title}-${activeImageIndex + 1}`}
                      style={styles.viewerImage}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />

                    {!!selectedProject.details?.length && selectedProject.details.length > 1 && (
                      <>
                        <button
                          style={{ ...styles.viewerNavButton, left: 10 }}
                          onClick={() => moveImage(-1)}
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          style={{ ...styles.viewerNavButton, right: 10 }}
                          onClick={() => moveImage(1)}
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>

                  {!!selectedProject.details?.length && (
                    <div style={styles.thumbRow}>
                      {selectedProject.details.map((image, index) => (
                        <button
                          key={image}
                          onClick={() => setActiveImageIndex(index)}
                          style={{
                            ...styles.thumbButton(isMobile),
                            borderColor:
                              activeImageIndex === index
                                ? "#7c3aed"
                                : "rgba(255,255,255,0.12)",
                          }}
                        >
                          <img
                            src={image}
                            alt={`thumb-${index + 1}`}
                            style={styles.thumbImage}
                            onError={(e) => {
                              e.currentTarget.src = fallbackImage;
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <div style={styles.infoBlock}>
                    <div style={styles.infoLabel}>문제 정의</div>
                    <div style={styles.infoText}>{selectedProject.summary.problem}</div>
                  </div>

                  <div style={styles.infoBlock}>
                    <div style={styles.infoLabel}>접근 방법</div>
                    <ul style={styles.infoList}>
                      {selectedProject.summary.approach.map((item) => (
                        <li key={item} style={styles.infoListItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={styles.infoBlock}>
                    <div style={styles.infoLabel}>성과 및 의미</div>
                    <div style={styles.infoText}>{selectedProject.summary.impact}</div>
                  </div>

                  {selectedProject.section === "real-business" ? (
                    <div style={styles.infoBlock}>
                      <div style={styles.infoLabel}>관련 링크</div>
                      {selectedProject.links?.length > 0 ? (
                        <div style={styles.linkList}>
                          {selectedProject.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              style={styles.linkButton}
                            >
                              <span>{link.label}</span>
                              <ArrowRight size={15} />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div style={styles.infoText}>
                          외부에 공개 가능한 참고 링크가 없는 실무 사례입니다.
                        </div>
                      )}
                    </div>
                  ) : (
                    selectedProject.downloads?.length > 0 && (
                      <div style={styles.infoBlock}>
                        <div style={styles.infoLabel}>첨부 자료</div>
                        <div style={styles.downloadList}>
                          {selectedProject.downloads.map((file) => (
                            <a
                              key={file.href}
                              href={file.href}
                              target="_blank"
                              rel="noreferrer"
                              style={styles.downloadButton}
                            >
                              <FileText size={16} />
                              <span>{file.label}</span>
                              <Download size={15} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  page: {
    background: "#070b16",
    color: "#f8fafc",
    minHeight: "100vh",
    fontFamily: "Inter, Pretendard, Apple SD Gothic Neo, sans-serif",
    position: "relative",
    overflow: "hidden",
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
    position: "sticky",
    top: 0,
    zIndex: 20,
    backdropFilter: "blur(18px)",
    background: "rgba(7,11,22,0.72)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  headerInner: (isMobile) => ({
    display: "flex",
    alignItems: isMobile ? "flex-start" : "center",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    gap: isMobile ? 12 : 0,
    paddingTop: 18,
    paddingBottom: 18,
  }),
  logo: {
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.22em",
    textDecoration: "none",
    color: "#fff",
  },
  nav: {
    display: "flex",
    gap: 16,
    fontSize: 14,
    flexWrap: "nowrap",
    overflowX: "auto",
    whiteSpace: "nowrap",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    width: "100%",
  },
  navLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    paddingRight: 4,
    flexShrink: 0,
  },
  heroSection: (isMobile) => ({
    paddingTop: isMobile ? 56 : 88,
    paddingBottom: isMobile ? 48 : 72,
  }),
  heroName: {
    display: "inline-block",
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#c4b5fd",
    marginBottom: 18,
  },
  heroRole: (isMobile) => ({
    fontSize: isMobile ? "2rem" : "clamp(2rem, 4vw, 3rem)",
    lineHeight: 1.12,
    maxWidth: 980,
    margin: 0,
    letterSpacing: "-0.04em",
  }),
  heroDesc: (isMobile) => ({
    maxWidth: 850,
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontSize: isMobile ? 15 : 17,
    marginTop: 20,
    marginBottom: 0,
  }),
  heroButtonRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 28,
  },
  primaryButton: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textDecoration: "none",
    background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
    color: "white",
    borderRadius: 18,
    padding: isMobile ? "13px 16px" : "14px 18px",
    fontWeight: 600,
    width: isMobile ? "100%" : "auto",
    boxSizing: "border-box",
  }),
  secondaryButton: (isMobile) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textDecoration: "none",
    background: "rgba(255,255,255,0.05)",
    color: "#e2e8f0",
    borderRadius: 18,
    padding: isMobile ? "13px 16px" : "14px 18px",
    border: "1px solid rgba(255,255,255,0.1)",
    fontWeight: 600,
    width: isMobile ? "100%" : "auto",
    boxSizing: "border-box",
  }),
  contactLine: (isMobile) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 26,
  }),
  contactPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#cbd5e1",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 14,
    width: "fit-content",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  statCard: {
    borderRadius: 24,
    padding: 24,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  statValue: {
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  statLabel: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: 600,
  },
  statSub: {
    marginTop: 6,
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 1.6,
  },
  sectionTop: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr minmax(220px, 280px)",
    gap: 18,
    alignItems: "end",
    marginBottom: 26,
  }),
  sectionEyebrow: {
    fontSize: 12,
    letterSpacing: "0.24em",
    color: "#a78bfa",
    marginBottom: 10,
    fontWeight: 700,
  },
  sectionTitle: {
    margin: 0,
    fontSize: "clamp(1.75rem, 3vw, 2.7rem)",
    letterSpacing: "-0.03em",
    lineHeight: 1.2,
  },
  sectionDesc: {
    color: "#94a3b8",
    lineHeight: 1.8,
    maxWidth: 920,
    marginTop: 12,
  },
  searchInput: {
    height: 48,
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "0 16px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    alignItems: "stretch",
  },
  projectCard: {
    padding: 0,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: 28,
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "left",
    color: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  projectCardImageWrap: {
    width: "100%",
    height: 180,
    overflow: "hidden",
    background: "#0f172a",
    flexShrink: 0,
  },
  projectCardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  projectCardBody: (isMobile) => ({
    padding: isMobile ? 16 : 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }),
  projectCategory: {
    color: "#c4b5fd",
    fontSize: 13,
    marginBottom: 10,
    fontWeight: 600,
  },
  projectTitle: (isMobile) => ({
    fontSize: isMobile ? 18 : 22,
    lineHeight: 1.35,
    fontWeight: 700,
    marginBottom: 10,
  }),
  projectOneLiner: (isMobile) => ({
    color: "#cbd5e1",
    lineHeight: 1.65,
    fontSize: isMobile ? 14 : 15,
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
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 999,
    padding: "8px 11px",
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
    borderRadius: 999,
    background: "rgba(124,58,237,0.10)",
    border: "1px solid rgba(124,58,237,0.24)",
    color: "#ddd6fe",
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
    background: "rgba(124,58,237,0.4)",
  },
  timelineDot: {
    width: 34,
    height: 34,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#7c3aed",
    color: "white",
    fontWeight: 700,
  },
  timelineRight: (isMobile) => ({
    order: isMobile ? 2 : 0,
  }),
  timelineContentCard: {
    borderRadius: 26,
    padding: 24,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
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
  },
  strengthGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
    marginTop: 26,
  },
  strengthCard: {
    borderRadius: 24,
    padding: 22,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  strengthTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 14,
  },
  strengthTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  strengthTag: {
    fontSize: 13,
    padding: "9px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#e2e8f0",
  },
  educationOnlyGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 24,
    marginTop: 28,
  }),
  educationDetailCard: {
    borderRadius: 24,
    padding: 24,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  eduPeriod: {
    fontSize: 13,
    color: "#a78bfa",
    fontWeight: 700,
    marginBottom: 6,
  },
  eduTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 4,
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
    color: "#cbd5e1",
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
    borderRadius: 24,
    padding: 24,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  credentialBlock: {
    marginBottom: 6,
  },
  credentialTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#c4b5fd",
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
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: 13,
  },
  additionalListGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 16,
    marginTop: 24,
  }),
  additionalListCard: {
    borderRadius: 20,
    padding: 18,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  additionalListTitle: {
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 8,
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
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 999,
    padding: "6px 10px",
  },
  contactCtaWrap: {
    textAlign: "center",
    padding: "72px 0 0 0",
    borderTop: "1px solid rgba(255,255,255,0.06)",
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
  modalOverlay: (isMobile) => ({
    position: "fixed",
    inset: 0,
    background: "rgba(2,6,23,0.84)",
    zIndex: 40,
    padding: isMobile ? 0 : 24,
    overflowY: "auto",
  }),
  modalCard: (isMobile) => ({
    maxWidth: 1180,
    margin: isMobile ? "0 auto" : "20px auto",
    minHeight: isMobile ? "100vh" : "auto",
    borderRadius: isMobile ? 0 : 30,
    background: "#0b1220",
    border: isMobile ? "none" : "1px solid rgba(255,255,255,0.08)",
    boxShadow: isMobile ? "none" : "0 20px 60px rgba(0,0,0,0.45)",
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
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
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
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#111827",
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
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(15,23,42,0.78)",
    color: "white",
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
    borderRadius: isMobile ? 12 : 14,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#111827",
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
    borderRadius: 20,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    marginBottom: 14,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: 700,
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
    color: "white",
    textDecoration: "none",
    borderRadius: 14,
    padding: "13px 14px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
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
    color: "white",
    textDecoration: "none",
    borderRadius: 14,
    padding: "13px 14px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
};
