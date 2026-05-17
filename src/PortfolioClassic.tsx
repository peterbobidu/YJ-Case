const baseUrl = import.meta.env.BASE_URL;
const assetPath = (path: string) => `${baseUrl}${path.replace(/^\/+/, "")}`;

type Metric = {
  label: string;
  value: string;
};

type ProjectWithResults = {
  id: string;
  title: string;
  coreValue: string;
  summary?: string;
  actionsTitle: string;
  actions: string[];
  results: Metric[];
  images: string[];
};

type ProjectWithSections = {
  id: string;
  title: string;
  sections: {
    label: string;
    coreValue: string;
    actions: string;
    result: string;
  }[];
  images: string[];
};

type Project = ProjectWithResults | ProjectWithSections;

const careerTimeline = [
  {
    period: "2017.10 - 2026.5",
    company: "法本信息",
    role: "高级经理",
    summary:
      "8.5年 负责公司品牌战略规划与落地管理，深度绑定业务，支撑公司上市前后品牌体系升级与规模化发展。",
  },
  {
    period: "2016.04 - 2017.09",
    company: "国人在线",
    role: "营销策划主管",
    summary: "负责企业客户全案营销策划与落地执行，夯实整合营销全链路能力。",
  },
  {
    period: "2015.07 - 2016.04",
    company: "车仆集团",
    role: "产品策划",
    summary: "负责产品营销与内容策划，建立以用户和业务为核心的底层思维。",
  },
];

const keyMetrics: Metric[] = [
  { label: "品牌流量年度增长", value: "58%" },
  { label: "累计获得品牌奖项", value: "200+项" },
  { label: "年度市场活动", value: "20–30场" },
  { label: "舆情监测处理", value: "200+次" },
  { label: "品牌资源库沉淀", value: "5大类18项超100份内容" },
  { label: "战略宣讲覆盖", value: "1400+员工" },
  { label: "重点传播项目曝光量", value: "1.1亿阅读量" },
];

const philosophies = [
  {
    title: "对外 · 确定的回声",
    description:
      "以统一的品牌叙事建立行业差异化认知，沉淀可复用的品牌资产，让品牌成为业务增长的强力引擎与差异化护城河。",
  },
  {
    title: "对内 · 统一的信仰",
    description:
      "以文字定调，以视觉布场，将企业战略内化于心、外化于行，激活组织全员的品牌共识，实现“一人行、众人行”。",
  },
];

const capabilityMatrix = [
  {
    title: "战略层核心能力",
    enTitle: "Strategy Layer",
    items: [
      "品牌战略定位与差异化规划",
      "品牌体系0-1搭建",
      "品牌资产管理",
      "行业洞察与竞品对标",
      "品牌公关与舆情管理",
      "企业战略内化宣贯",
    ],
  },
  {
    title: "执行层核心能力",
    enTitle: "Execution Layer",
    items: [
      "销售端业务赋能体系搭建",
      "垂直赛道内容全案",
      "大型展会全链路操盘",
      "公关舆情全周期管控",
      "品牌IP/VI全案打造",
      "中英文出海物料输出",
    ],
  },
  {
    title: "支撑层核心能力",
    enTitle: "Support Layer",
    items: [
      "跨部门项目统筹管理",
      "品牌团队培养赋能",
      "行业资源开拓维护",
      "新媒体与搜索优化",
      "内部培训体系搭建",
      "数据化复盘优化",
    ],
  },
];

const projects: Project[] = [
  {
    id: "01",
    title: "核心项目1：品牌体系0-1搭建与企业战略落地",
    coreValue: "从“服务驱动”向“价值溢价”转型",
    summary:
      "将公司品牌从零散执行升级为系统化资产运营模式，推动品牌战略转型，建立长期资产价值，有力支撑公司上市后规模化、规范化发展需求。",
    actionsTitle: "关键动作：体系化建设与战略深度融合",
    actions: [
      "搭建全流程品牌管理体系，完成品牌资产库、VI规范、内容标准及全场景手册建设，实现标准化管理。",
      "主导“年度战略计划”全流程规划与宣贯，完成12场宣讲，实现1400+员工全覆盖，统一战略认知。",
      "统筹官网改版、企业展厅升级等重点项目，建立标准化SOP，提升品牌对外一致性与专业度。",
    ],
    results: [
      { value: "+90%", label: "品牌形象统一度" },
      { value: "+80%", label: "内部物料调用效率" },
      { value: "成熟可复用", label: "标准化品牌管理体系" },
    ],
    images: [
      assetPath("portfolio/project-1-a.png"),
      assetPath("portfolio/project-1-b.png"),
    ],
  },
  {
    id: "02",
    title: "核心项目2：To B业务赋能与内容营销体系搭建",
    coreValue: "重塑品牌认知",
    summary:
      "打破品牌部「只花钱、不创收」的固有认知，搭建全链路销售赋能体系，将复杂的技术语言转化为客户易懂的营销“弹药”，直接支撑一线销售的拓客与客户维护。",
    actionsTitle: "关键动作：体系化落地",
    actions: [
      "重点聚焦智能汽车、金融科技两大核心赛道，主导输出行业定制化拓客物料。",
      "搭建并宣贯落地“营销工程化”“提质增效竞赛”项目，将标杆营销管理经验沉淀为全员可复用的标准化作战工具。",
      "建立自媒体与官方平台矩阵，输出多语言国际版品牌物料，有力支撑公司全球化业务布局。",
    ],
    results: [
      { value: "50+", label: "年均支撑高价值客户对接" },
      { value: "1.1亿+", label: "平安大客户联合项目微博话题曝光" },
      { value: "109个", label: "提质增效案例沉淀" },
    ],
    images: [
      assetPath("portfolio/project-2-a.png"),
      assetPath("portfolio/project-2-b.png"),
    ],
  },
  {
    id: "03",
    title: "核心项目3：整合营销与行业资源开拓",
    sections: [
      {
        label: "01 / 年度行业展会全链路操盘",
        coreValue: "将展会从单纯的「品牌展示」升级为公司核心的B端获客渠道。",
        actions:
          "年度统筹25+场行业展会与高峰论坛，实现全流程闭环管理，建立可复用的SOP。",
        result:
          "年均获取高价值销售线索200+，线索跟进转化率达8%，为销售获客提供深度链接场景。",
      },
      {
        label: "02 / 行业资源与品牌背书体系搭建",
        coreValue: "零成本搭建多维品牌背书矩阵，有效降低大客户销售拓客的信任门槛。",
        actions:
          "主动维系并拓展30+行业协会的深度合作关系；统筹申报200+项行业权威奖项、榜单与资质认证。",
        result:
          "成功助力公司蝉联“中国软件百强企业”，并入选“十大数字服务领军企业”等多项国家级、行业级顶级榜单。",
      },
    ],
    images: [
      assetPath("portfolio/project-3-a.jpeg"),
      assetPath("portfolio/project-3-b.jpeg"),
    ],
  },
  {
    id: "04",
    title: "核心项目4：品牌IP与视觉体系全案打造",
    coreValue:
      "打造差异化品牌视觉符号，实现品牌形象从「同质化」到「人格化」的升级，强化内部文化凝聚力与外部品牌记忆点，让品牌形象更具温度与辨识度。",
    actionsTitle: "关键动作",
    actions: [
      "全流程打造：完成需求调研、供应商PK及全员调研，定稿并推出品牌IP形象「小本本」。",
      "规范化管理：发布《IP形象手册V1.0》规范使用场景，同步上线静态/动效表情包及周边衍生品。",
      "全渠道宣发：统筹企微、公众号及自媒体矩阵，完成IP形象的全方位联动传播与推广。",
    ],
    results: [
      { value: "26000+", label: "IP表情包累计覆盖人群" },
      { value: ">80%", label: "全场景IP形象复用率" },
      { value: "行业标杆级", label: "打造差异化人格化IP" },
    ],
    images: [
      assetPath("portfolio/project-4-a.png"),
      assetPath("portfolio/project-4-b.png"),
    ],
  },
  {
    id: "05",
    title: "核心项目5：公关舆情与品牌口碑体系0-1搭建",
    sections: [
      {
        label: "01 / 公关舆情管控体系 0-1 搭建",
        coreValue: "实现舆情从「被动处置」到「主动管理」的转型，筑牢品牌安全防线。",
        actions:
          "建立“7*24h监测-分级预警-快速处置-口碑引导-复盘优化”全流程闭环机制。",
        result:
          "连续6年实现“零重大品牌舆情事故”，品牌搜索正面占比从65%大幅提升至95%。",
      },
      {
        label: "02 / 品牌口碑与全平台内容运营",
        coreValue:
          "统筹规划全平台内容矩阵，通过持续的高质量内容输出，优化品牌网络口碑，提升用户信任度。",
        actions:
          "统一管理七大官方自营平台，建立标准化的内容生产与分发流程，累计输出高质量正向传播内容50+篇/年。",
        result:
          "有效对冲外部噪音，实现品牌全网声量年均增长30%+，持续扩大品牌影响力。",
      },
    ],
    images: [assetPath("portfolio/project-5-a.jpeg")],
  },
];

const empowerment = [
  {
    title: "团队管理",
    content:
      "统筹部门日常管理与人才培养，搭建标准化SOP，团队多次获“年度金牌团队”。",
  },
  {
    title: "培训赋能",
    content:
      "作为公司四星讲师，开发《品牌洞察》等课程，完成10+次专项培训，覆盖1500+人次。",
  },
  {
    title: "文化建设",
    content:
      "主导“品牌大使&文化大使”项目，搭建内部品牌培训体系，提升全员品牌意识。",
  },
];

const honors = [
  {
    category: "国家级专业认证",
    items: ["工信部 首席品牌官"],
  },
  {
    category: "企业级核心荣誉",
    items: ["年度金牌个人", "3次“年度金牌团队”核心成员"],
  },
  {
    category: "专业能力认证",
    items: ["公司四星优秀讲师", "核心价值观优秀践行者"],
  },
  {
    category: "行业级成果",
    items: ["多次获评年度优秀项目", "累计为公司获取200+项权威奖项"],
  },
];

const closingValues = [
  {
    title: "全链路闭环能力",
    content:
      "9年深耕上市公司IT科技赛道，具备品牌从0-1搭建到全生命周期管理的全链路能力，零试错成本，入职即可快速落地。",
  },
  {
    title: "业务赋能能力",
    content:
      "深度绑定业务的赋能型品牌操盘经验，可直接为销售拓客、业绩增长、客户维护创造核心价值。",
  },
  {
    title: "风险管控能力",
    content:
      "成熟的上市公司品牌合规与公关体系搭建经验，可很好适配企业规模化发展、IPO、全球化布局的品牌需求。",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs tracking-[0.28em] text-[var(--color-accent)] uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-['Georgia'] text-3xl md:text-4xl">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function App() {
  const anchorOffset = "104px";
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(225,176,92,0.18)_0%,_rgba(225,176,92,0)_68%)]" />
        <div className="absolute right-[-8%] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(125,166,139,0.16)_0%,_rgba(125,166,139,0)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),transparent_24%,transparent_78%,rgba(214,200,179,0.16))]" />
      </div>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-16 pt-6 md:px-10 lg:px-16">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--color-line)] bg-[rgba(248,244,236,0.82)] py-5 backdrop-blur">
          <a className="font-['Georgia'] text-lg tracking-[0.24em] text-[var(--color-accent)]" href="#top">
            喻 静
          </a>
          <nav className="hidden gap-6 text-sm text-[var(--color-muted)] md:flex">
            <a href="#resume" className="transition hover:text-[var(--color-ink)]">
              履历
            </a>
            <a href="#capability" className="transition hover:text-[var(--color-ink)]">
              能力
            </a>
            <a href="#projects-card" className="transition hover:text-[var(--color-ink)]">
              项目
            </a>
            <a href="#empowerment" className="transition hover:text-[var(--color-ink)]">
              赋能
            </a>
            <a href="#contact" className="transition hover:text-[var(--color-ink)]">
              联系
            </a>
          </nav>
        </header>

        <section id="top" className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="max-w-fit rounded-full border border-[var(--color-line)] bg-white/80 px-4 py-2 text-xs tracking-[0.28em] text-[var(--color-accent)] uppercase">
              品牌岗 · 求职作品集
            </p>
            <div className="space-y-6">
              <h1 className="font-['Georgia'] text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                喻 静
              </h1>
              <p className="max-w-3xl text-xl leading-9 text-[var(--color-muted)] md:text-2xl">
                9年 IT 科技上市企业品牌全链路操盘手
              </p>
              <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
                0-1 品牌体系搭建 | 业务赋能型品牌管理 | 战略落地全闭环
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
              <span className="rounded-full border border-[var(--color-line)] bg-white/80 px-4 py-2">
                📱 182 1560 3079
              </span>
              <span className="rounded-full border border-[var(--color-line)] bg-white/80 px-4 py-2">
                📧 969021428@qq.com
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-[var(--color-line)] bg-white/70 p-5">
            <img
              src={assetPath("portfolio/profile.png")}
              alt="喻静"
              className="aspect-[4/4.6] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        <section
          id="resume"
          className="space-y-8 rounded-[2.5rem] border border-[var(--color-line)] bg-white/70 p-6 md:p-10"
          style={{ scrollMarginTop: anchorOffset }}
        >
          <SectionTitle
            eyebrow="Resume"
            title="个人职业履历"
            description="职业成长路径与关键业绩总览"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {careerTimeline.map((item) => (
              <article
                key={`${item.period}-${item.company}`}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/85 p-6"
              >
                <p className="text-sm text-[var(--color-soft)]">{item.period}</p>
                <h3 className="mt-3 text-2xl font-medium">
                  {item.company} | {item.role}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {keyMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-wash)] p-5"
              >
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  {metric.label}
                </p>
                <p className="mt-4 text-3xl font-semibold text-[var(--color-accent)]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="capability"
          className="space-y-8 rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-wash)] p-6 md:p-10"
          style={{ scrollMarginTop: anchorOffset }}
        >
          <SectionTitle
            eyebrow="Capability"
            title="品牌核心理念 | 核心能力矩阵"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {philosophies.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/80 p-6"
              >
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilityMatrix.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/84 p-6"
              >
                <p className="text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase">
                  {group.enTitle}
                </p>
                <h3 className="mt-3 text-2xl font-medium">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-[var(--color-line)] pb-3 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <SectionTitle
            eyebrow="Projects"
            title="核心项目"
            description="以下内容按原作品集 5 个核心项目完整展开，保留原有项目命名、关键动作与量化结果。"
          />

          {projects.map((project, index) => (
            <article
              key={project.id}
              id={index === 0 ? "projects-card" : undefined}
              className="grid gap-6 rounded-[2.5rem] border border-[var(--color-line)] bg-white/76 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]"
              style={index === 0 ? { scrollMarginTop: anchorOffset } : undefined}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs tracking-[0.22em] text-white uppercase">
                    {project.id}
                  </span>
                  <h3 className="text-2xl font-medium md:text-3xl">{project.title}</h3>
                </div>

                {"coreValue" in project ? (
                  <div className="space-y-3">
                    <p className="text-sm tracking-[0.18em] text-[var(--color-accent)] uppercase">
                      核心价值
                    </p>
                    <p className="text-lg leading-8 text-[var(--color-ink)]">
                      {project.coreValue}
                    </p>
                    {"summary" in project ? (
                      <p className="text-sm leading-8 text-[var(--color-muted)]">
                        {project.summary}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                {"actions" in project ? (
                  <div className="space-y-4">
                    <p className="text-sm tracking-[0.18em] text-[var(--color-accent)] uppercase">
                      {project.actionsTitle}
                    </p>
                    <ul className="space-y-3 text-sm leading-8 text-[var(--color-muted)]">
                      {project.actions.map((action) => (
                        <li key={action} className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-4">
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {project.sections.map((section) => (
                      <div
                        key={section.label}
                        className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-5"
                      >
                        <p className="text-sm tracking-[0.16em] text-[var(--color-accent)] uppercase">
                          {section.label}
                        </p>
                        <p className="mt-4 text-base leading-8 text-[var(--color-ink)]">
                          {section.coreValue}
                        </p>
                        <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                          关键动作：{section.actions}
                        </p>
                        <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                          量化成果：{section.result}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {"results" in project ? (
                  <div className="grid gap-3 md:grid-cols-3">
                    {project.results.map((result) => (
                      <div
                        key={`${result.value}-${result.label}`}
                        className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-wash)] p-5"
                      >
                        <p className="text-2xl font-semibold text-[var(--color-accent)]">
                          {result.value}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className={`grid gap-4 ${project.images.length > 1 ? "md:grid-cols-2 lg:grid-cols-1" : ""}`}>
                {project.images.map((image, index) => (
                  <img
                    key={`${project.id}-${image}`}
                    src={image}
                    alt={`${project.title}-${index + 1}`}
                    className="h-full min-h-[220px] w-full rounded-[1.75rem] border border-[var(--color-line)] bg-white object-cover"
                  />
                ))}
              </div>
            </article>
          ))}
        </section>

        <section
          id="empowerment"
          className="grid gap-8 rounded-[2.5rem] border border-[var(--color-line)] bg-white/72 p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr]"
          style={{ scrollMarginTop: anchorOffset }}
        >
          <div className="space-y-8">
            <SectionTitle
              eyebrow="Empowerment"
              title="组织赋能 | 权威荣誉资质"
            />

            <div className="space-y-4">
              {empowerment.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-5"
                >
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {honors.map((group) => (
                <div
                  key={group.category}
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-wash)] p-5"
                >
                  <p className="text-sm tracking-[0.16em] text-[var(--color-accent)] uppercase">
                    {group.category}
                  </p>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                    {group.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-5">
            <img
              src={assetPath("portfolio/training.jpeg")}
              alt="培训赋能"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        <section
          id="contact"
          className="space-y-8 rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(225,176,92,0.14),rgba(255,255,255,0.86))] p-6 md:p-10"
          style={{ scrollMarginTop: anchorOffset }}
        >
          <SectionTitle
            eyebrow="Summary"
            title="核心价值总结 | 期待共创"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {closingValues.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/84 p-6"
              >
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                  {item.content}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/84 p-6">
            <p className="text-base leading-8 text-[var(--color-ink)]">
              期待能为贵公司的品牌升级、业务增长、战略落地创造价值，期待有机会与您深入沟通。
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
              <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2">
                电话/微信：18215603079
              </span>
              <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2">
                邮箱：969021428@qq.com
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
