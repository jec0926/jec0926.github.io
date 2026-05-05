from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Flowable, Image, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resume" / "Jang_Eunchan_Resume.pdf"
PHOTO = ROOT / "src" / "assets" / "hero.png"
FONT = "C:/Windows/Fonts/malgun.ttf"
FONT_BOLD = "C:/Windows/Fonts/malgunbd.ttf"

PAGE_WIDTH, _ = A4
LEFT_MARGIN = 15 * mm
RIGHT_MARGIN = 15 * mm
CONTENT_WIDTH = PAGE_WIDTH - LEFT_MARGIN - RIGHT_MARGIN
LABEL_WIDTH = 35 * mm
BODY_WIDTH = CONTENT_WIDTH - LABEL_WIDTH


pdfmetrics.registerFont(TTFont("Malgun", FONT))
pdfmetrics.registerFont(TTFont("Malgun-Bold", FONT_BOLD))


class Rule(Flowable):
    def __init__(self, width, color=colors.HexColor("#e5e7eb")):
        super().__init__()
        self.width = width
        self.height = 1
        self.color = color

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(0.45)
        self.canv.line(0, 0, self.width, 0)


styles = {
    "name": ParagraphStyle("name", fontName="Malgun-Bold", fontSize=25, leading=30, spaceAfter=2),
    "role": ParagraphStyle("role", fontName="Malgun-Bold", fontSize=10, leading=13, textColor=colors.HexColor("#111827")),
    "meta": ParagraphStyle("meta", fontName="Malgun", fontSize=8, leading=11, textColor=colors.HexColor("#4b5563")),
    "pitch": ParagraphStyle("pitch", fontName="Malgun", fontSize=8.6, leading=13, textColor=colors.HexColor("#111827")),
    "section": ParagraphStyle("section", fontName="Malgun-Bold", fontSize=10.5, leading=13, textColor=colors.HexColor("#111827")),
    "company": ParagraphStyle("company", fontName="Malgun-Bold", fontSize=9.3, leading=12),
    "period": ParagraphStyle("period", fontName="Malgun", fontSize=7.2, leading=9.5, textColor=colors.HexColor("#6b7280"), alignment=2),
    "sub": ParagraphStyle("sub", fontName="Malgun", fontSize=7.9, leading=10.5, textColor=colors.HexColor("#374151")),
    "body": ParagraphStyle("body", fontName="Malgun", fontSize=8.0, leading=11.3, leftIndent=6, firstLineIndent=-6),
    "small": ParagraphStyle("small", fontName="Malgun", fontSize=7.8, leading=11, textColor=colors.HexColor("#374151")),
}


experiences = [
    {
        "company": "고려대학교 MSBA",
        "period": "2025.03 - 2026.08",
        "role": "MSBA | 경영학 Business Analytics 석사과정",
        "bullets": [
            "Business Analytics 석사과정에서 데이터 분석, 머신러닝, 대시보드, AI Agent PoC 프로젝트 수행",
            "고객 세그먼트 재정의, 리스크 스코어링, 공공데이터 입지 평가 등 분석 결과를 전략·서비스 시나리오로 연결",
            "LG CNS 산학협력 프로젝트에서 PI 컨설팅 업무 생산성 개선을 위한 AI Agent 서비스 PoC 기획",
        ],
    },
    {
        "company": "아이디헬스케어그룹",
        "period": "2024.05 - 2025.02",
        "role": "Business Analyst",
        "bullets": [
            "전사 및 그룹사 KPI 운영, 주간·월간 실적 모니터링, 경영진 보고자료 작성 지원",
            "웹 기반 성과관리 시스템 설계 지원, KPI 계산 로직 구체화, 데이터 정합성 QA 수행",
            "미전환 수술건 KPI, 마케팅 ROAS, 사업부별 매출목표 등 사업 성과관리 지표 운영",
        ],
    },
    {
        "company": "비욘드아이앤씨",
        "period": "2022.04 - 2024.05",
        "role": "Product Operations & Business Strategy",
        "bullets": [
            "우친 VOC, 앱스토어 리뷰, B2B 고객 이슈, 주문중개·정산 등 서비스 운영 업무 수행",
            "실적 모니터링 기반으로 수요·수행건수·제휴 확장 Driver를 구조화하고 개선 전략 제안",
            "Financial Model, Governance, 홈페이지 리뉴얼, SI 프로젝트 QA 등 운영과 사업기획 연결 업무 수행",
        ],
    },
    {
        "company": "공공빅데이터 청년인턴십",
        "period": "2020.08 - 2020.12",
        "role": "Project Manager",
        "bullets": [
            "도로교통공단 파견 프로젝트에서 전국 지부 인턴 약 30명 규모의 정기 회의체 운영 및 프로젝트 관리",
            "개발 인력 부재 상황에서 외부 개발자를 물색해 프로젝트 리소스를 보충하고 시스템 PoC 개발 지원",
            "교통정보 빅데이터화, 제보접수 시스템, 전파지도 시각화 프로토타입 프로젝트 PM 수행",
        ],
    },
]

skills = [
    ("Hard Skills", "문제 정의, KPI 설계, 데이터 핸들링, 요구사항 구체화, AI/자동화 PoC 기획"),
    ("Soft Skills", "비즈니스 친화적 사고, 운영 감각, 구조화 커뮤니케이션, 이해관계자 조율"),
    ("Tools", "Python, SQL, Excel, RPA, Codex, GitHub, Figma, Tableau"),
]

education = [
    ("고려대학교 일반대학원", "2025.03 - 2026.08", "경영학과 Business Analytics 석사과정"),
    ("연세대학교 미래캠퍼스", "2015.03 - 2021.08", "경제학 학사"),
]

awards = [
    ("2026.02", "2025학년도 MSBA 캡스톤프로젝트 우수상", "고려대학교 경영대학 CDTB"),
    ("2021.09", "DB GAPS 자산배분대회 본선진출", "DB증권"),
]

certificates = [
    "SQLD",
    "ADsP",
    "ISTQB CTFL",
    "전산회계 1급",
    "MOS Master",
]

training = [
    ("2026.01 - 2026.02", "Tableau 데이터 시각화 부트캠프", "Salesforce"),
    ("2023.01 - 2023.03", "SW Camp PM Course", "패스트캠퍼스"),
    ("2022.10", "SW Testing Foundation", "STA테스팅컨설팅"),
    ("2021.07 - 2022.01", "K-Digital Training 핀테크 AI 알고리즘 개발자 과정", "비트컴퓨터"),
]


def para(text, style):
    return Paragraph(text, styles[style])


def divider(story, space_before=5 * mm, space_after=5 * mm):
    story.append(Spacer(1, space_before))
    story.append(Rule(CONTENT_WIDTH))
    story.append(Spacer(1, space_after))


def two_col_row(label, content, top_padding=0, bottom_padding=2 * mm):
    return Table(
        [[label, content]],
        colWidths=[LABEL_WIDTH, BODY_WIDTH],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), top_padding),
                ("BOTTOMPADDING", (0, 0), (-1, -1), bottom_padding),
            ]
        ),
    )


def experience_content(item):
    head = Table(
        [
            [para(item["company"], "company"), para(item["period"], "period")],
            [para(item["role"], "sub"), ""],
        ],
        colWidths=[BODY_WIDTH - 34 * mm, 34 * mm],
        style=TableStyle(
            [
                ("SPAN", (0, 1), (1, 1)),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    return [head, Spacer(1, 1.5 * mm), *[para(f"• {bullet}", "body") for bullet in item["bullets"]]]


def add_section_rows(story, title, blocks):
    for index, block in enumerate(blocks):
        label = para(title, "section") if index == 0 else ""
        story.append(two_col_row(label, block, bottom_padding=3.8 * mm))


def add_key_value_section(story, title, rows):
    blocks = []
    for left, middle, right in rows:
        blocks.append(
            [
                Table(
                    [[para(left, "small"), para(middle, "small"), para(right, "period")]],
                    colWidths=[30 * mm, BODY_WIDTH - 62 * mm, 32 * mm],
                    style=TableStyle(
                        [
                            ("VALIGN", (0, 0), (-1, -1), "TOP"),
                            ("LEFTPADDING", (0, 0), (-1, -1), 0),
                            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                            ("TOPPADDING", (0, 0), (-1, -1), 0),
                            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                        ]
                    ),
                )
            ]
        )
    add_section_rows(story, title, blocks)


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=LEFT_MARGIN,
        rightMargin=RIGHT_MARGIN,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="Jang Eunchan Resume",
        author="Jang Eunchan",
    )
    story = []

    photo = Image(str(PHOTO), width=24 * mm, height=32 * mm)
    header_text = [
        para("장은찬", "name"),
        para("Business-oriented, Data-capable PO/PM", "role"),
        para("dmscks940926@naver.com · 010-2595-1395 · Seoul, Korea", "meta"),
        Spacer(1, 3 * mm),
        para("숫자와 운영을 이해하고, 데이터와 AI를 활용해 고객 문제를 실행 가능한 제품 개선안으로 번역합니다.", "pitch"),
    ]
    story.append(
        Table(
            [[header_text, photo]],
            colWidths=[CONTENT_WIDTH - 28 * mm, 28 * mm],
            style=TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]
            ),
        )
    )

    divider(story, 7 * mm, 6 * mm)
    add_section_rows(story, "업무 경험", [experience_content(item) for item in experiences])

    divider(story, 2 * mm, 5 * mm)
    skill_blocks = [[para(f"<b>{label}</b><br/>{desc}", "small")] for label, desc in skills]
    add_section_rows(story, "전문 분야", skill_blocks)

    divider(story, 2 * mm, 5 * mm)
    education_blocks = [[para(f"<b>{school}</b> <font color='#6b7280'>{period}</font><br/>{major}", "small")] for school, period, major in education]
    add_section_rows(story, "학력", education_blocks)

    divider(story, 2 * mm, 5 * mm)
    add_key_value_section(story, "수상", awards)

    divider(story, 2 * mm, 5 * mm)
    cert_text = " · ".join(certificates)
    add_section_rows(story, "자격", [[para(cert_text, "small")]])

    divider(story, 2 * mm, 5 * mm)
    add_key_value_section(story, "교육", training)

    doc.build(story)


if __name__ == "__main__":
    build()
