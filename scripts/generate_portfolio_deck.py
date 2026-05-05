import json
import subprocess
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "App.jsx"
OUT = ROOT / "public" / "portfolio" / "Jang_Eunchan_Portfolio_Deck.pdf"
PHOTO = ROOT / "src" / "assets" / "hero.png"

FONT = "C:/Windows/Fonts/malgun.ttf"
FONT_BOLD = "C:/Windows/Fonts/malgunbd.ttf"

W, H = 1920, 1080
M = 120

BG = colors.HexColor("#050505")
INK = colors.HexColor("#f8fafc")
MUTED = colors.HexColor("#aeb6ae")
DIM = colors.HexColor("#6f776d")
SAGE = colors.HexColor("#cfd8c8")
PANEL = colors.HexColor("#121312")
PANEL_2 = colors.HexColor("#0b0c0b")
LINE = colors.HexColor("#30352f")


pdfmetrics.registerFont(TTFont("Malgun", FONT))
pdfmetrics.registerFont(TTFont("Malgun-Bold", FONT_BOLD))


CASE_SLUGS = [
    "lgcns-ai-agent",
    "jeonse-risk-dashboard",
    "idhealthcare-bi-kpi",
    "beyond-strategy-growth",
    "beyond-settlement-automation",
]


CASE_META = {
    "lgcns-ai-agent": {
        "kicker": "AI / DATA PRODUCT · 산학협력 프로젝트",
        "headline": "AI Agent PoC로 PI 컨설턴트의 탐색 시간을 구조화했습니다",
        "question": "프로세스 문서 탐색 업무를 어떻게 의사결정 지원 서비스로 바꿀 것인가?",
        "diagram": "Service Architecture",
        "nodes": [("LAYER 1", "BPMN XML\n파싱"), ("LAYER 2", "GraphDB\n변환"), ("LAYER 3", "RAG 질의\n엔진"), ("LAYER 4", "개선 방향\n도출")],
        "note": "GraphDB와 RAG를 결합하여 프로세스 맥락을 이해하고 유사 사례를 탐색하는 4단계 아키텍처",
        "output": "컨설턴트가 프로세스 맥락과 유사 사례를 자연어로 탐색하고 인사이트를 도출하는 PoC 구조",
    },
    "jeonse-risk-dashboard": {
        "kicker": "AI / DATA PRODUCT · DAB 공모전",
        "headline": "전세사기 조기 리스크를 신호별로 분리해 탐지합니다",
        "question": "지역 단위 전세사기 위험을 조기에 탐지할 수 있는가?",
        "diagram": "Risk Scorecard",
        "nodes": [("거래 위험", "전세가율 이상\n소형주택 집중"), ("등기 위험", "근저당권 과다\n임차권등기 급증"), ("보증 위험", "HUG 보증사고\n이력"), ("경보 점수", "Z-score 기반\n통합 위험 지수")],
        "note": "거래·등기·보증 단계의 신호를 분리해 위험을 더 빨리 관찰하는 구조",
        "output": "구조적 위험 점수와 발생경보 점수를 분리한 조기경보 모델",
    },
    "idhealthcare-bi-kpi": {
        "kicker": "BUSINESS PERFORMANCE · 실무 사례",
        "headline": "KPI 성과관리를 단일 거버넌스로 구축했습니다",
        "question": "분산된 성과 데이터를 같은 기준으로 관리할 수 있는가?",
        "diagram": "KPI Governance",
        "nodes": [("CTRL 1", "지표 정의"), ("CTRL 2", "계산 로직"), ("CTRL 3", "조회 권한"), ("CTRL 4", "데이터 QA")],
        "note": "지표 정의부터 권한과 정합성 QA까지 연결한 성과관리 시스템 설계 기준",
        "output": "웹 기반 KPI 성과관리 시스템 설계 기준 문서",
    },
    "beyond-strategy-growth": {
        "kicker": "BUSINESS PERFORMANCE · 성과 사례",
        "headline": "매출 저조 원인을 Driver Tree로 분해해 개선 전략을 제안했습니다",
        "question": "매출 저조 원인을 어떤 Driver 단위로 설명할 것인가?",
        "diagram": "Driver Tree Analysis",
        "nodes": [("수요 발생", "부진"), ("수행 가능", "물량 제한"), ("제휴 확장", "지연"), ("운영 커버리지", "부족")],
        "note": "결과 지표인 매출을 4가지 선행 Driver로 분해하여 근본 원인을 파악",
        "output": "매출 저하 원인 구조화와 개선 전략 제안 및 Driver별 우선순위 액션 플랜",
    },
    "beyond-settlement-automation": {
        "kicker": "OPERATING SYSTEM · 프로세스 효율화",
        "headline": "정산 4시간 작업을 Python 전처리로 40분으로 단축했습니다",
        "question": "반복 정산 업무를 전처리 구조로 줄일 수 있는가?",
        "diagram": "Before / After",
        "nodes": [("BEFORE", "수작업 중심 정산\n반복 전처리 병목\n오류 리스크 높음"), ("AFTER", "업무 흐름 재정의\nPython 전처리 자동화\n검증 가능한 결과물"), ("RESULT", "약 4시간 → 약 40분\n83% 절감")],
        "note": "업무 흐름을 먼저 정의한 뒤 반복 전처리 병목을 자동화 대상으로 전환",
        "output": "4시간 작업을 약 40분 수준으로 단축한 업무 보조 구조",
    },
}


def load_projects():
    extractor = r"""
const fs = require('fs');
const source = fs.readFileSync(process.argv[1], 'utf8');
const marker = 'const projects =';
const markerIndex = source.indexOf(marker);
const start = source.indexOf('[', markerIndex);
let depth = 0, quote = null, escaped = false, end = -1;
for (let i = start; i < source.length; i += 1) {
  const ch = source[i];
  if (quote) {
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === quote) quote = null;
    continue;
  }
  if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
  if (ch === '[') depth += 1;
  if (ch === ']') {
    depth -= 1;
    if (depth === 0) { end = i + 1; break; }
  }
}
const projects = Function(`return (${source.slice(start, end)});`)();
console.log(JSON.stringify(projects));
"""
    result = subprocess.run(
        ["node", "-e", extractor, str(APP)],
        cwd=str(ROOT),
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    return {project["slug"]: project for project in json.loads(result.stdout) if project.get("slug")}


def text_width(text, font="Malgun", size=20):
    return pdfmetrics.stringWidth(str(text or ""), font, size)


def wrap_text(text, max_width, font="Malgun", size=20, max_lines=None):
    lines = []
    for paragraph in str(text or "").split("\n"):
        words = paragraph.split(" ")
        line = ""
        for word in words:
            candidate = word if not line else f"{line} {word}"
            if text_width(candidate, font, size) <= max_width:
                line = candidate
                continue
            if line:
                lines.append(line)
            if max_lines and len(lines) >= max_lines:
                return lines[:max_lines]
            line = word
        if line:
            lines.append(line)
        if max_lines and len(lines) >= max_lines:
            return lines[:max_lines]
    return lines


def draw_text(c, text, x, y, size=22, font="Malgun", color=INK, max_width=None, leading=None, max_lines=None):
    c.setFillColor(color)
    c.setFont(font, size)
    lines = wrap_text(text, max_width, font, size, max_lines) if max_width else str(text or "").split("\n")
    gap = leading or size * 1.42
    for index, line in enumerate(lines):
        c.drawString(x, y - index * gap, line)
    return y - len(lines) * gap


def rect(c, x, y, w, h, fill=PANEL, stroke=LINE, radius=18):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(1)
    c.roundRect(x, y, w, h, radius, stroke=1, fill=1)


def line(c, x1, y1, x2, y2, color=LINE, width=1):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def image_fit(c, path, x, y, w, h):
    path = Path(path)
    if not path.exists():
        return
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = min(w / iw, h / ih)
    nw, nh = iw * scale, ih * scale
    c.drawImage(img, x + (w - nw) / 2, y + (h - nh) / 2, nw, nh, preserveAspectRatio=True, mask="auto")


def bg(c):
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.saveState()
    c.setFillAlpha(0.08)
    c.setFillColor(SAGE)
    c.circle(W - 170, H - 130, 370, fill=1, stroke=0)
    c.setFillAlpha(0.035)
    c.circle(120, 80, 430, fill=1, stroke=0)
    c.restoreState()


def base(c, section, page):
    bg(c)
    draw_text(c, section.upper(), M, H - 56, size=14, font="Malgun-Bold", color=MUTED)
    line(c, M, H - 80, W - M, H - 80, colors.HexColor("#171a16"))
    draw_text(c, f"{page:02d}", W - M - 26, 52, size=14, font="Malgun-Bold", color=DIM)


def short(text, max_chars=170):
    text = str(text or "").replace("\n", " ").strip()
    return text if len(text) <= max_chars else text[: max_chars - 1].rstrip() + "…"


def bullets(items, max_items=3):
    return "\n".join(f"· {item}" for item in items[:max_items])


def cover(c, page):
    base(c, "Portfolio Deck", page)
    draw_text(c, "JANG EUNCHAN / 장은찬", M, 850, size=22, font="Malgun-Bold", color=SAGE)
    draw_text(c, "Business-oriented, Data-capable PO/PM", M, 795, size=24, font="Malgun-Bold", color=MUTED)
    draw_text(c, "프로젝트를 화면이 아니라\n문제 해결 구조로 설명합니다", M, 665, size=68, font="Malgun-Bold", color=INK, max_width=1120, leading=78)
    draw_text(c, "숫자와 운영을 이해하고, 데이터와 AI를 활용해 고객 문제를 실행 가능한 제품 개선안으로 번역합니다.", M, 375, size=27, color=MUTED, max_width=1010, leading=38)
    rect(c, W - 500, 260, 310, 410, fill=colors.HexColor("#171817"), stroke=LINE, radius=26)
    image_fit(c, PHOTO, W - 480, 285, 270, 360)
    stats = [("3+ 년", "실무 경력"), ("5+", "핵심 프로젝트"), ("4h → 40m", "자동화 성과")]
    x = 900
    for value, label in stats:
        draw_text(c, value, x, 196, size=34, font="Malgun-Bold", color=INK)
        draw_text(c, label, x, 140, size=18, font="Malgun-Bold", color=MUTED)
        x += 260
    draw_text(c, "dmscks940926@naver.com", M, 95, size=18, color=MUTED)
    draw_text(c, "010-2595-1395", M + 360, 95, size=18, color=MUTED)
    c.showPage()


def about(c, page):
    base(c, "About", page)
    draw_text(c, "운영 현장에서 AI까지, 비즈니스 문제를 구조화합니다", M, 790, size=44, font="Malgun-Bold", color=INK)
    draw_text(c, "Career Path", M, 680, size=28, font="Malgun-Bold", color=SAGE)
    career = [
        ("2024.05 - 2025.02", "아이디헬스케어그룹", "Business Analyst", "전사 KPI 설계 및 웹 기반 성과관리 시스템 구축 지원"),
        ("2022.04 - 2024.05", "비욘드아이앤씨", "Product Operations & Business Strategy", "VOC, B2B 고객 이슈, 주문중개·정산 업무 수행"),
        ("2020.10 - 2020.12", "도로교통공단", "Project Manager", "공공빅데이터 인턴십 프로젝트 관리"),
    ]
    y = 610
    for period, company, role, desc in career:
        rect(c, M, y - 108, 880, 126, fill=PANEL, stroke=LINE, radius=14)
        draw_text(c, period, M + 28, y - 22, size=17, font="Malgun-Bold", color=SAGE)
        draw_text(c, company, M + 28, y - 56, size=25, font="Malgun-Bold", color=INK)
        draw_text(c, f"{role} · {desc}", M + 28, y - 92, size=17, color=MUTED, max_width=790, max_lines=1)
        y -= 152
    draw_text(c, "Education", 1120, 680, size=28, font="Malgun-Bold", color=SAGE)
    rect(c, 1120, 505, 560, 150, fill=PANEL, stroke=LINE, radius=16)
    draw_text(c, "2025.03 - 2026.08", 1150, 602, size=18, font="Malgun-Bold", color=SAGE)
    draw_text(c, "고려대학교 일반대학원", 1150, 560, size=25, font="Malgun-Bold", color=INK)
    draw_text(c, "Business Analytics 석사과정", 1150, 522, size=18, color=MUTED)
    rect(c, 1120, 320, 560, 150, fill=PANEL, stroke=LINE, radius=16)
    draw_text(c, "2015.03 - 2021.08", 1150, 417, size=18, font="Malgun-Bold", color=SAGE)
    draw_text(c, "연세대학교 미래캠퍼스", 1150, 375, size=25, font="Malgun-Bold", color=INK)
    draw_text(c, "경제학 학사", 1150, 337, size=18, color=MUTED)
    rect(c, 1120, 115, 560, 150, fill=PANEL_2, stroke=LINE, radius=16)
    draw_text(c, "Core Identity", 1150, 213, size=20, font="Malgun-Bold", color=SAGE)
    draw_text(c, "운영 현장의 문제를 데이터와 AI로 구조화해 협업자가 실행할 수 있는 산출물로 만드는 PO/PM", 1150, 174, size=19, color=INK, max_width=500, leading=29)
    c.showPage()


def working_model(c, page):
    base(c, "Working Model", page)
    draw_text(c, "프로젝트를 구조화하는 방식", M, 790, size=44, font="Malgun-Bold", color=INK)
    stages = [
        ("1", "문제 포착", "VOC, KPI, 비용, 업무 병목에서 이상 징후를 찾습니다."),
        ("2", "판단 기준", "무엇을 기준으로 해결 우선순위를 볼지 정의합니다."),
        ("3", "구조화", "데이터, 프로세스, 이해관계자 흐름을 도식화합니다."),
        ("4", "실행안", "현업과 경영진이 움직일 수 있는 산출물로 바꿉니다."),
    ]
    x = M
    for no, title, desc in stages:
        rect(c, x, 365, 360, 260, fill=PANEL, stroke=LINE, radius=22)
        draw_text(c, no, x + 34, 552, size=56, font="Malgun-Bold", color=SAGE)
        draw_text(c, title, x + 34, 474, size=30, font="Malgun-Bold", color=INK)
        draw_text(c, desc, x + 34, 420, size=20, color=MUTED, max_width=285, leading=30)
        x += 405
    draw_text(c, "TOOLS", M, 205, size=19, font="Malgun-Bold", color=SAGE)
    draw_text(c, "Python · SQL · Excel · Tableau · Figma · GitHub · Codex · RPA", M, 155, size=28, font="Malgun-Bold", color=INK)
    draw_text(c, "포트폴리오 장표는 실제 산출물 이미지 대신 Issue → Logic → Output 구조를 보여줍니다.", M, 100, size=21, color=MUTED)
    c.showPage()


def portfolio_map(c, page):
    base(c, "Portfolio Map", page)
    draw_text(c, "문제 해결 이력", M, 790, size=44, font="Malgun-Bold", color=INK)
    groups = [
        ("AI / Data Product", ["AI Agent 서비스 PoC", "전세사기 조기 리스크 탐지 모델", "법정동 단위 입지 평가 스코어링", "고객 세그먼트 재정의"]),
        ("Business Performance", ["KPI 성과관리 시스템 설계", "운영 모니터링 및 수행 효율 개선", "Driver 기반 실적 저조 원인 분석", "Financial Model 설계"]),
        ("Operating System", ["정산 업무 프로세스 효율화", "Governance 체계 수립", "QA 설계 및 수행", "전사 정기 실적회의 운영"]),
        ("Data / Business Build", ["TAM/SAM 데이터 구축", "물류 RPA 개발", "Top-line 데이터 구축", "콘텐츠 자동화"]),
    ]
    positions = [(M, 505), (1010, 505), (M, 170), (1010, 170)]
    for (title, items), (x, y) in zip(groups, positions):
        rect(c, x, y, 780, 250, fill=PANEL, stroke=LINE, radius=20)
        draw_text(c, title, x + 34, y + 190, size=28, font="Malgun-Bold", color=SAGE)
        draw_text(c, "\n".join(items), x + 34, y + 136, size=21, color=INK, max_width=690, leading=37)
    c.showPage()


def case_slide(c, project, meta, page):
    base(c, meta["kicker"], page)
    draw_text(c, meta["headline"], M, 790, size=40, font="Malgun-Bold", color=INK, max_width=1550, leading=49, max_lines=2)
    draw_text(c, f"{project['period']}  |  Q. {meta['question']}", M, 668, size=20, font="Malgun-Bold", color=SAGE, max_width=1500, max_lines=1)
    summary = project.get("summary", {})
    issue = summary.get("problem", project.get("oneLiner", ""))
    approach = summary.get("approach", [])
    if not isinstance(approach, list):
        approach = [approach]
    rect(c, M, 270, 720, 350, fill=PANEL, stroke=LINE, radius=20)
    draw_text(c, "Issue", M + 34, 565, size=25, font="Malgun-Bold", color=SAGE)
    draw_text(c, short(issue, 205), M + 34, 520, size=20, color=INK, max_width=640, leading=30, max_lines=4)
    draw_text(c, "What I Structured", M + 34, 390, size=25, font="Malgun-Bold", color=SAGE)
    draw_text(c, bullets(approach, 3), M + 34, 345, size=18, color=MUTED, max_width=640, leading=28, max_lines=6)
    rect(c, M + 35, 112, 650, 110, fill=PANEL_2, stroke=LINE, radius=18)
    draw_text(c, "OUTPUT", M + 70, 178, size=17, font="Malgun-Bold", color=SAGE)
    draw_text(c, meta["output"], M + 190, 178, size=20, color=INK, max_width=450, leading=28, max_lines=2)

    dx, dy, dw, dh = 900, 210, 840, 430
    rect(c, dx, dy, dw, dh, fill=PANEL_2, stroke=LINE, radius=24)
    draw_text(c, meta["diagram"], dx + 42, dy + dh - 60, size=29, font="Malgun-Bold", color=INK)
    if meta["diagram"] == "Driver Tree Analysis":
        rect(c, dx + 90, dy + 195, 230, 86, fill=PANEL, stroke=LINE, radius=16)
        draw_text(c, "매출 저조", dx + 140, dy + 245, size=24, font="Malgun-Bold", color=INK)
        coords = [(dx + 440, dy + 300), (dx + 610, dy + 230), (dx + 440, dy + 150), (dx + 610, dy + 78)]
        for (cx, cy), (a, b) in zip(coords, meta["nodes"]):
            rect(c, cx, cy, 210, 72, fill=PANEL, stroke=LINE, radius=15)
            draw_text(c, f"{a}\n{b}", cx + 24, cy + 45, size=17, font="Malgun-Bold", color=SAGE, leading=23)
            line(c, dx + 320, dy + 238, cx, cy + 36, SAGE, 1.5)
    elif meta["diagram"] == "Before / After":
        for idx, (title, body) in enumerate(meta["nodes"]):
            x = dx + 60 + idx * 255
            rect(c, x, dy + 150, 220, 160, fill=PANEL, stroke=LINE, radius=16)
            draw_text(c, title, x + 24, dy + 250, size=20, font="Malgun-Bold", color=SAGE)
            draw_text(c, body, x + 24, dy + 212, size=16, color=INK, max_width=170, leading=23)
    else:
        x = dx + 60
        for idx, (layer, body) in enumerate(meta["nodes"]):
            rect(c, x, dy + 170, 170, 130, fill=PANEL, stroke=LINE, radius=16)
            draw_text(c, layer, x + 22, dy + 254, size=14, font="Malgun-Bold", color=SAGE)
            draw_text(c, body, x + 22, dy + 215, size=19, font="Malgun-Bold", color=INK, max_width=126, leading=25)
            if idx < len(meta["nodes"]) - 1:
                line(c, x + 178, dy + 235, x + 222, dy + 235, SAGE, 1.5)
            x += 210
    draw_text(c, meta["note"], dx + 42, dy + 52, size=18, color=MUTED, max_width=750, max_lines=2)
    c.showPage()


def skills(c, page):
    base(c, "Skills & Tools", page)
    draw_text(c, "제품·데이터·AI를 비즈니스와 연결하는 역량 체계", M, 790, size=44, font="Malgun-Bold", color=INK)
    groups = [
        ("Product & Business", [("문제 정의", "VOC·운영·비즈니스 관점에서 해결해야 할 문제를 구조화"), ("KPI 설계", "성과관리 지표와 계산 기준을 의사결정 가능한 형태로 구체화"), ("비즈니스 모델 이해", "매출 Driver, 비용 구조, 운영 효율 관점으로 우선순위 판단")]),
        ("Data & AI Leverage", [("데이터 정제·분석", "Python, SQL, Excel 기반 데이터 정제·통합·검증"), ("대시보드·리포팅", "성과 모니터링과 경영진 보고에 필요한 지표 구조 설계"), ("AI Agent / RAG PoC", "RAG, Agent, ML 모델을 업무 생산성 개선 시나리오에 연결")]),
        ("Execution", [("QA / 테스트 시나리오", "데이터 정합성, 화면 흐름, 예외 케이스 기준 점검"), ("이해관계자 커뮤니케이션", "경영진·현업·개발자가 이해 가능한 언어로 문제와 근거 정리"), ("문서화", "결정 기준, 운영 프로세스, 협업 요청사항을 재사용 가능한 형태로 기록")]),
    ]
    x = M
    for title, items in groups:
        rect(c, x, 265, 510, 420, fill=PANEL, stroke=LINE, radius=20)
        draw_text(c, title, x + 32, 620, size=28, font="Malgun-Bold", color=SAGE)
        y = 545
        for name, desc in items:
            draw_text(c, name, x + 32, y, size=22, font="Malgun-Bold", color=INK)
            draw_text(c, desc, x + 32, y - 36, size=17, color=MUTED, max_width=430, leading=24, max_lines=2)
            y -= 116
        x += 560
    draw_text(c, "TOOLS", M, 170, size=17, font="Malgun-Bold", color=SAGE)
    draw_text(c, "Python · SQL · Excel · PowerPoint · Tableau · Figma · GitHub · Codex · RPA", M + 135, 170, size=24, font="Malgun-Bold", color=INK)
    c.showPage()


def strong_points(c, page):
    base(c, "Strong Points", page)
    draw_text(c, "운영 현장에서 AI까지, 6가지 핵심 강점", M, 790, size=44, font="Malgun-Bold", color=INK)
    items = [
        ("운영 현장에서\n문제를 발견합니다", "VOC, 수행률, 정산, 고객사 이슈처럼 실제 서비스가 움직이는 지점에서 문제의 징후를 빠르게 포착합니다."),
        ("숫자를 실행 판단으로\n바꿉니다", "KPI와 비용 구조, 매출 Driver를 함께 보며 어떤 문제가 먼저 해결되어야 하는지 판단 기준을 만듭니다."),
        ("데이터를 직접 다루고\n검증합니다", "필요한 데이터를 직접 정제·통합·검증해 회의, 보고, 제품 개선에 활용 가능한 근거로 전환합니다."),
        ("프로세스를\n구조화합니다", "정산, QA, IR, 회의체처럼 기준이 없거나 흩어진 업무를 재사용 가능한 운영 흐름과 문서로 정리합니다."),
        ("AI를 업무 생산성\n관점으로 봅니다", "AI를 단순 도구가 아니라 반복 탐색과 의사결정을 줄이는 서비스 PoC와 업무 개선 구조로 연결합니다."),
        ("협업자가 움직일 수 있게\n정리합니다", "경영진, 현업, 개발자가 같은 맥락에서 판단할 수 있도록 기준과 이슈, 후속 실행을 명확히 전달합니다."),
    ]
    for idx, (title, desc) in enumerate(items):
        col = idx % 3
        row = idx // 3
        x = M + col * 560
        y = 470 - row * 270
        rect(c, x, y, 500, 215, fill=PANEL, stroke=LINE, radius=20)
        draw_text(c, title, x + 32, y + 150, size=26, font="Malgun-Bold", color=INK, leading=32)
        draw_text(c, desc, x + 32, y + 78, size=18, color=MUTED, max_width=430, leading=27, max_lines=3)
    c.showPage()


def closing(c, page):
    base(c, "Closing", page)
    draw_text(c, '"저는 화면보다 문제 구조를 먼저 그립니다.\n운영 현장에서 발견한 문제를 데이터로 검증하고,\n협업자가 실행할 수 있는 기준으로 정리합니다."', 300, 800, size=44, font="Malgun-Bold", color=INK, max_width=1300, leading=60)
    rect(c, 300, 355, 620, 240, fill=PANEL, stroke=LINE, radius=20)
    draw_text(c, "WHAT I BRING", 335, 520, size=21, font="Malgun-Bold", color=SAGE)
    bring = ["서비스 운영 현장 경험", "전사 KPI·성과관리 설계 경험", "AI Agent PoC 기획 경험", "데이터 분석·자동화 역량"]
    draw_text(c, "\n".join(f"· {item}" for item in bring), 335, 470, size=22, color=INK, leading=38)
    rect(c, 1030, 355, 540, 240, fill=PANEL, stroke=LINE, radius=20)
    draw_text(c, "CONTACT", 1065, 520, size=21, font="Malgun-Bold", color=SAGE)
    draw_text(c, "dmscks940926@naver.com\n010-2595-1395\nhttps://jec0926.github.io\nhttps://github.com/jec0926", 1065, 470, size=22, color=INK, leading=38)
    draw_text(c, "감사합니다.", 300, 160, size=48, font="Malgun-Bold", color=SAGE)
    c.showPage()


def build():
    projects = load_projects()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=(W, H))
    c.setTitle("Jang Eunchan Portfolio Deck")
    c.setAuthor("Jang Eunchan")
    cover(c, 1)
    about(c, 2)
    working_model(c, 3)
    portfolio_map(c, 4)
    page = 5
    for slug in CASE_SLUGS:
        case_slide(c, projects[slug], CASE_META[slug], page)
        page += 1
    skills(c, 10)
    strong_points(c, 11)
    closing(c, 12)
    c.save()


if __name__ == "__main__":
    build()
