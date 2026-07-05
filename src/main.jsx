import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Layers3,
  Mail,
  MoveUpRight,
  PenTool,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Designer Name',
  title: 'AI 训练师 / 生成式 AI 工作流设计师',
  intro:
    '我把提示词、样本组织、视觉判断与评估标准整理成可复用的 AI 训练流程，让团队能够更稳定地生成、筛选和交付高质量内容。',
  email: 'hello@example.com',
  location: 'Shanghai / Remote',
  availability: 'Open for selected projects',
  social: ['Behance', 'Instagram', 'LinkedIn'],
};

const stats = [
  { value: '6+', label: '年设计经验' },
  { value: '40+', label: '品牌与视觉项目' },
  { value: '12', label: 'AI 创意实验' },
  { value: '3', label: '核心设计方向' },
];

const projects = [
  {
    title: 'Sea of Flying Fish / 飞鱼之海',
    type: 'AI Visual Training / Narrative Poster',
    year: '2025',
    summary: '围绕夜海、飞鱼、星光漩涡和临海城镇，建立一套叙事海报的生成变量与视觉评估规则。',
    phrase: '把抽象故事词，拆成可控制的构图、光线、密度与情绪变量。',
    services: ['Prompt System', 'Composition Evaluation', 'Style Control'],
    training: [
      { label: '训练目标', text: '生成具有垂直叙事、发光鱼群和海天漩涡的电影海报。' },
      { label: '输入组织', text: '拆分夜海、月亮、城镇、人物、鱼群路径和中心光源。' },
      { label: '训练方法', text: '按前景、中景、天空与运动轨迹分层测试提示词变量。' },
      { label: '评估标准', text: '检查视觉焦点、鱼群连贯性、空间层级和标题可读区域。' },
      { label: '最终结果', text: '形成高完成度主海报和可复用的叙事构图提示词结构。' },
    ],
    images: ['/work-images/flying-fish-poster.png'],
    tone: 'navy',
    format: 'poster',
  },
  {
    title: 'Echo / Silence Is Louder',
    type: 'AI Campaign Training / Visual Consistency',
    year: '2024',
    summary: '以听、看、说三种动作建立人物海报系统，控制灰阶、服装、人物比例、留白与信息层级。',
    phrase: '让不同人物保持统一的动作语义、视觉节奏与品牌识别。',
    services: ['Sample Curation', 'Pose Consistency', 'Campaign System'],
    images: ['/work-images/echo-album-poster.png'],
    tone: 'silver',
    format: 'poster',
  },
  {
    title: 'Osmanthus Workflow / 桂花空间视觉',
    type: 'Spatial Workflow / Brand Experience',
    year: '2026',
    summary: '将桂花、绿叶结构、波浪展墙和沉浸动线整理成空间视觉方向与落地效果图。',
    phrase: '把自然意象、空间限制与品牌叙事收束成可进入的视觉体验。',
    services: ['Spatial Design', 'Visual Direction', '3D Delivery'],
    images: [
      '/work-images/osmanthus-exterior-01.jpg',
      '/work-images/osmanthus-interior-01.jpg',
      '/work-images/osmanthus-exterior-02.jpg',
      '/work-images/spatial-render-01.jpg',
    ],
    tone: 'slate',
  },
];

const posterCases = projects
  .filter((project) => project.format === 'poster')
  .map((project, index) => ({
    image: project.images[0],
    title: project.title,
    type: project.type,
    year: project.year,
    summary: project.summary,
    label: index === 0 ? '叙事海报训练' : '系列海报训练',
  }));

const renderCases = [
  {
    image: '/work-images/osmanthus-exterior-01.jpg',
    title: '桂花空间外部主视觉',
    type: 'Exterior Render',
    label: '整体空间效果',
  },
  {
    image: '/work-images/osmanthus-interior-01.jpg',
    title: '桂花空间室内动线',
    type: 'Interior Render',
    label: '沉浸体验路线',
  },
  {
    image: '/work-images/osmanthus-exterior-02.jpg',
    title: '桂花空间俯视结构',
    type: 'Top View Render',
    label: '结构与节点关系',
  },
  {
    image: '/work-images/spatial-render-01.jpg',
    title: '展厅氛围效果图',
    type: 'Atmosphere Render',
    label: '空间情绪与收尾',
  },
];

const strengths = [
  {
    icon: PenTool,
    title: '提示词与任务设计',
    text: '把模糊需求拆解成清晰的任务、约束条件、提示词结构和可复用模板。',
  },
  {
    icon: BrainCircuit,
    title: '样本与数据组织',
    text: '整理正向样本、失败样本、风格参考与边界案例，帮助 AI 输出更稳定。',
  },
  {
    icon: Layers3,
    title: '结果评估与迭代',
    text: '建立可解释的评分标准，判断一致性、准确性、可用性与视觉质量。',
  },
  {
    icon: BriefcaseBusiness,
    title: '训练交付与复盘',
    text: '把训练过程整理成教程、规范、工作流和团队可以继续使用的操作方法。',
  },
];

const approach = [
  {
    step: '01',
    title: 'Define',
    text: '确认训练目标、使用场景、输入条件和可接受结果，先定义什么叫做得好。',
  },
  {
    step: '02',
    title: 'Train',
    text: '组织样本、提示词和变量，分轮生成并记录有效方法与失败原因。',
  },
  {
    step: '03',
    title: 'Evaluate',
    text: '用一致的评估标准筛选、比较和复盘结果，让判断可解释、可重复。',
  },
  {
    step: '04',
    title: 'Delivery',
    text: '把有效过程整理成模板、规范、教程与可复用工作流，交付给真实项目。',
  },
];

const experiencePillars = [
  {
    title: 'Input',
    text: '把目标、场景、限制条件与参考样本整理成清晰输入。',
  },
  {
    title: 'Prompt',
    text: '设计提示词结构与变量组合，记录每轮输出的有效方法。',
  },
  {
    title: 'Evaluate',
    text: '使用统一标准比较准确性、一致性、质量与可用性。',
  },
  {
    title: 'Deliver',
    text: '将有效过程整理成模板、规范和团队可复用工作流。',
  },
];

const immersiveReelFrames = [
  {
    src: '/work-images/osmanthus-exterior-01.jpg',
    label: 'Exterior',
    title: 'Open Scene',
  },
  {
    src: '/work-images/osmanthus-interior-01.jpg',
    label: 'Interior',
    title: 'Brand Route',
  },
  {
    src: '/work-images/osmanthus-exterior-02.jpg',
    label: 'Top View',
    title: 'Spatial System',
  },
  {
    src: '/work-images/spatial-render-01.jpg',
    label: 'Panorama',
    title: 'Final World',
  },
];

const FLOW_BASE_PATH =
  'M -150 502 C 112 252 282 212 458 316 C 606 404 696 548 858 478 C 1018 410 1102 302 1438 368';
const FLOW_GHOST_PATH =
  'M -126 178 C 82 28 262 44 424 176 C 572 300 706 326 870 252 C 1012 188 1166 154 1438 236';

function buildFlowPaths(x = 0.5, y = 0.5) {
  const pullX = (x - 0.5) * 190;
  const pullY = (y - 0.5) * 150;

  return {
    main:
      `M -150 ${502 + pullY * 0.08} ` +
      `C ${112 + pullX * 0.16} ${252 + pullY * 0.5}, ` +
      `${282 + pullX * 0.32} ${212 + pullY * 0.22}, ` +
      `${458 + pullX * 0.46} ${316 + pullY * 0.62} ` +
      `C ${606 + pullX * 0.26} ${404 + pullY * 0.54}, ` +
      `${696 + pullX * 0.62} ${548 + pullY * 0.42}, ` +
      `${858 + pullX * 0.36} ${478 + pullY * 0.72} ` +
      `C ${1018 + pullX * 0.42} ${410 + pullY * 0.5}, ` +
      `${1102 + pullX * 0.16} ${302 + pullY * 0.34}, ` +
      `1438 ${368 + pullY * 0.12}`,
    ghost:
      `M -126 ${178 + pullY * 0.1} ` +
      `C ${82 + pullX * 0.16} ${28 + pullY * 0.24}, ` +
      `${262 + pullX * 0.28} ${44 + pullY * 0.12}, ` +
      `${424 + pullX * 0.38} ${176 + pullY * 0.42} ` +
      `C ${572 + pullX * 0.26} ${300 + pullY * 0.44}, ` +
      `${706 + pullX * 0.46} ${326 + pullY * 0.28}, ` +
      `${870 + pullX * 0.3} ${252 + pullY * 0.34} ` +
      `C ${1012 + pullX * 0.32} ${188 + pullY * 0.2}, ` +
      `${1166 + pullX * 0.16} ${154 + pullY * 0.18}, ` +
      `1438 ${236 + pullY * 0.08}`,
  };
}

const defaultFlowPaths = buildFlowPaths();

const chapters = [
  { id: 'top', number: '01', label: '故事入口' },
  { id: 'concept', number: '02', label: '概念引导' },
  { id: 'immersive', number: '03', label: '互动方法' },
  { id: 'projects', number: '04', label: '训练案例' },
  { id: 'experience', number: '05', label: '个人经历' },
  { id: 'approach', number: '06', label: '工作方式' },
  { id: 'strengths', number: '07', label: '个人优势' },
  { id: 'contact', number: '08', label: '联系入口' },
];

function App() {
  return (
    <>
      <DynamicCrossField />
      <LineField />
      <StoryTotem placement="ambient" />
      <RanbiwaMotifs />
      <ScrollNarrative />
      <main className="site-shell">
        <Hero />
        <ConceptIntro />
        <ImmersiveStatement />
        <Projects />
        <StoryBridge />
        <Experience />
        <Approach />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}

function ScrollNarrative() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);

  useEffect(() => {
    const updateStoryProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty('--story-progress', progress.toFixed(4));
      document.documentElement.style.setProperty('--story-progress-height', `${(progress * 100).toFixed(2)}%`);
      document.documentElement.style.setProperty('--story-progress-opacity', (0.16 + progress * 0.16).toFixed(3));
      document.documentElement.style.setProperty('--story-progress-rotate', `${(progress * 10).toFixed(2)}deg`);
      document.documentElement.style.setProperty('--story-progress-scale', (1 + progress * 0.06).toFixed(3));
      const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      document.documentElement.style.setProperty('--hero-depth', heroProgress.toFixed(4));
      document.documentElement.style.setProperty('--hero-lift', `${(heroProgress * -80).toFixed(2)}px`);
      document.documentElement.style.setProperty('--portal-lift', `${(heroProgress * -38).toFixed(2)}px`);
      document.documentElement.style.setProperty('--hero-content-y', `${(heroProgress * -28).toFixed(2)}px`);
      document.documentElement.style.setProperty('--hero-frame-y', `${(heroProgress * -54).toFixed(2)}px`);
      document.documentElement.style.setProperty('--hero-blur', `${(heroProgress * 2.4).toFixed(2)}px`);

      const immersiveSection = document.getElementById('immersive');
      if (immersiveSection) {
        const rect = immersiveSection.getBoundingClientRect();
        const immersiveProgress = Math.min(
          Math.max((window.innerHeight * 0.86 - rect.top) / (rect.height + window.innerHeight * 0.24), 0),
          1,
        );
        document.documentElement.style.setProperty('--immersive-progress', immersiveProgress.toFixed(4));
        document.documentElement.style.setProperty('--immersive-shift', `${(immersiveProgress * 42).toFixed(2)}px`);
        document.documentElement.style.setProperty('--immersive-line-shift', `${(-immersiveProgress * 260).toFixed(2)}px`);
      }

      const current = chapters.reduce((active, chapter) => {
        const section = document.getElementById(chapter.id);
        if (!section) return active;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.42 ? chapter : active;
      }, chapters[0]);

      setActiveChapter(current);
    };

    updateStoryProgress();
    window.addEventListener('scroll', updateStoryProgress, { passive: true });
    window.addEventListener('resize', updateStoryProgress);
    return () => {
      window.removeEventListener('scroll', updateStoryProgress);
      window.removeEventListener('resize', updateStoryProgress);
    };
  }, []);

  return (
    <aside className="story-rail" aria-label="页面章节进度">
      <div className="story-rail-line">
        <span />
      </div>
      <div className="story-rail-current">
        <strong>{activeChapter.number}</strong>
        <span>{activeChapter.label}</span>
      </div>
      <nav className="story-chapters" aria-label="章节导航">
        {chapters.map((chapter) => (
          <a
            className={chapter.id === activeChapter.id ? 'is-active' : ''}
            href={`#${chapter.id}`}
            key={chapter.id}
          >
            <span>{chapter.number}</span>
            {chapter.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function LineField() {
  return (
    <div className="line-field" aria-hidden="true">
      <svg viewBox="0 0 1440 1200" preserveAspectRatio="none">
        <path className="ambient-line line-a" d="M-40 250 C 190 160, 340 340, 560 260 S 920 80, 1480 210" />
        <path className="ambient-line line-b" d="M-20 760 C 250 610, 470 900, 690 730 S 1020 560, 1470 720" />
        <path className="ambient-line line-c" d="M1320 -80 C 1110 190, 1210 410, 980 590 S 740 890, 900 1280" />
        <path className="ambient-line line-d" d="M80 1080 C 260 990, 380 1048, 520 982 S 760 840, 970 930 S 1220 1050, 1390 980" />
      </svg>
    </div>
  );
}

function StoryTotem({ placement = 'card' }) {
  const droplets = [
    { x: -126, y: -62, scale: 0.48, rotate: -22 },
    { x: -58, y: -126, scale: 0.36, rotate: 16 },
    { x: 22, y: -92, scale: 0.56, rotate: -4 },
    { x: 96, y: -28, scale: 0.42, rotate: 28 },
    { x: -98, y: 58, scale: 0.38, rotate: 34 },
    { x: -14, y: 34, scale: 0.68, rotate: -18 },
    { x: 76, y: 78, scale: 0.5, rotate: 12 },
  ];

  return (
    <div className={`story-totem story-totem-${placement}`} aria-hidden="true">
      <svg viewBox="-220 -220 440 440">
        <defs>
          <path
            id={`waterEmber-${placement}`}
            d="M0 -42 C 24 -25, 36 3, 20 28 C 7 48, -20 44, -30 22 C -43 -5, -23 -27, 0 -42 Z"
          />
        </defs>
        <path className="totem-wash" d="M-154 -18 C -96 -98, 18 -132, 104 -62 C 184 4, 118 128, 4 128 C -98 128, -184 72, -154 -18 Z" />
        <path className="totem-road" d="M-188 18 C -106 -38, -42 38, 22 -12 S 130 -76, 192 -6" />
        <path className="totem-road soft" d="M-144 112 C -72 72, -28 130, 36 84 S 114 24, 168 76" />
        <circle className="totem-moon" cx="42" cy="-20" r="42" />
        {droplets.map((item, index) => (
          <use
            className="totem-drop"
            href={`#waterEmber-${placement}`}
            key={`${item.x}-${item.y}-${index}`}
            transform={`translate(${item.x} ${item.y}) rotate(${item.rotate}) scale(${item.scale})`}
          />
        ))}
        <g className="totem-sparks">
          <circle cx="-156" cy="-78" r="4" />
          <circle cx="146" cy="-84" r="3" />
          <circle cx="132" cy="118" r="4" />
          <circle cx="-42" cy="150" r="3" />
        </g>
      </svg>
    </div>
  );
}

function RanbiwaMotifs() {
  return (
    <div className="ranbiwa-motifs" aria-hidden="true">
      <span className="fire-doll fire-doll-a">
        <span className="fire-head" />
        <span className="fire-body" />
      </span>
      <span className="fire-doll fire-doll-b">
        <span className="fire-head" />
        <span className="fire-body" />
      </span>
      <span className="folk-ribbon folk-ribbon-a" />
      <span className="folk-ribbon folk-ribbon-b" />
      <span className="ember-ring ember-ring-a" />
      <span className="ember-ring ember-ring-b" />
    </div>
  );
}

function DynamicCrossField() {
  const [points, setPoints] = useState([]);
  const crossRefs = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef(0);

  useEffect(() => {
    const buildGrid = () => {
      const spacing = 56;
      const cols = Math.ceil(window.innerWidth / spacing) + 4;
      const rows = Math.ceil(window.innerHeight / spacing) + 4;
      const nextPoints = [];

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const drift = ((row * 17 + col * 29) % 19) - 9;
          const loosen = ((row * 31 + col * 13) % 23) - 11;
          const kind = (row + col) % 5 === 0 ? 'drum' : (row * 2 + col) % 7 === 0 ? 'rune' : 'spark';

          nextPoints.push({
            id: `${row}-${col}`,
            x: col * spacing - spacing + drift,
            y: row * spacing - spacing + loosen,
            kind,
          });
        }
      }

      setPoints(nextPoints);
    };

    buildGrid();
    window.addEventListener('resize', buildGrid);
    return () => window.removeEventListener('resize', buildGrid);
  }, []);

  useEffect(() => {
    const resetCrosses = () => {
      crossRefs.current.forEach((cross) => {
        if (!cross) return;
        cross.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
        cross.style.opacity = '0.5';
      });
    };

    const updateCrosses = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const radius = 118;
      const strength = 22;

      crossRefs.current.forEach((cross) => {
        if (!cross) return;

        const x = Number(cross.dataset.x);
        const y = Number(cross.dataset.y);
        const deltaX = x - mouseX;
        const deltaY = y - mouseY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance < radius) {
          const force = (1 - distance / radius) ** 2;
          const angle = Math.atan2(deltaY, deltaX);
          const moveX = Math.cos(angle) * force * strength;
          const moveY = Math.sin(angle) * force * strength;
          cross.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${moveX * 1.2}deg)`;
          cross.style.opacity = String(0.58 + force * 0.42);
        } else {
          cross.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
          cross.style.opacity = '0.5';
        }
      });

      frameRef.current = 0;
    };

    const handleMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(updateCrosses);
      }
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerleave', resetCrosses);
    window.addEventListener('blur', resetCrosses);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', resetCrosses);
      window.removeEventListener('blur', resetCrosses);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [points]);

  return (
    <div className="cross-field" aria-hidden="true">
      {points.map((point, index) => (
        <span
          className="cross-dot"
          data-kind={point.kind}
          data-x={point.x}
          data-y={point.y}
          key={point.id}
          ref={(node) => {
            crossRefs.current[index] = node;
          }}
          style={{ left: point.x, top: point.y }}
        />
      ))}
    </div>
  );
}

function ExtractedSpiral({ compact = false }) {
  const rings = compact
    ? [
        { count: 14, radius: 34, scale: 0.5, spin: 10 },
        { count: 22, radius: 66, scale: 0.64, spin: 2 },
        { count: 30, radius: 100, scale: 0.76, spin: -5 },
        { count: 38, radius: 136, scale: 0.9, spin: 8 },
      ]
    : [
        { count: 16, radius: 42, scale: 0.44, spin: 8 },
        { count: 24, radius: 78, scale: 0.56, spin: -3 },
        { count: 34, radius: 120, scale: 0.7, spin: 6 },
        { count: 44, radius: 166, scale: 0.86, spin: -8 },
        { count: 56, radius: 218, scale: 1, spin: 4 },
      ];

  return (
    <svg className="extracted-spiral" viewBox="-270 -270 540 540" role="img" aria-label="提取自旋涡图的抽象视觉元素">
      <defs>
        <path
          id="flameBird"
          d="M0 -16 C 10 -15 18 -9 20 0 C 12 -4 6 -3 0 3 C -6 -3 -12 -4 -20 0 C -18 -9 -10 -15 0 -16 Z M0 4 C 7 12 4 21 0 28 C -4 21 -7 12 0 4 Z"
        />
        <radialGradient id="spiralGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8f2" />
          <stop offset="48%" stopColor="#f5b08f" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d3451e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle className="spiral-glow" r="255" fill="url(#spiralGlow)" />
      <circle className="spiral-core" r="24" />

      {rings.map((ring, ringIndex) => (
        <g key={`${ring.radius}-${ring.count}`}>
          {Array.from({ length: ring.count }).map((_, index) => {
            const angle = (360 / ring.count) * index + ring.spin + ringIndex * 3;
            const spiralOffset = index * 0.9 + ringIndex * 8;
            return (
              <use
                className="spiral-symbol"
                href="#flameBird"
                key={`${ring.radius}-${index}`}
                transform={`rotate(${angle}) translate(${ring.radius + spiralOffset * 0.12} 0) rotate(${92 + spiralOffset}) scale(${ring.scale})`}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

function HeroMotionClip() {
  return (
    <div className="motion-clip" aria-hidden="true">
      <div className="motion-clip-track">
        {immersiveReelFrames.map((frame, index) => (
          <img
            className="motion-clip-frame"
            src={frame.src}
            alt=""
            key={frame.src}
            style={{ '--clip-index': index }}
          />
        ))}
      </div>
      <svg className="motion-clip-lines" viewBox="0 0 720 420">
        <path d="M-20 296 C 118 186, 248 254, 380 180 S 612 126, 748 238" />
        <path d="M42 86 C 198 18, 312 96, 430 70 S 610 36, 736 112" />
        <path d="M116 376 C 230 310, 352 372, 478 312 S 632 254, 736 286" />
      </svg>
      <div className="motion-clip-flash" />
      <div className="motion-clip-caption">
        <span>Original Motion Reel</span>
        <strong>00:08</strong>
      </div>
      <div className="motion-clip-dots">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function Hero() {
  const handleHeroPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty('--hero-pointer-x', `${(x * 24).toFixed(2)}px`);
    event.currentTarget.style.setProperty('--hero-pointer-y', `${(y * 18).toFixed(2)}px`);
    event.currentTarget.style.setProperty('--hero-pointer-rotate', `${(x * 2.4).toFixed(2)}deg`);
  };

  const handleHeroPointerLeave = (event) => {
    event.currentTarget.style.setProperty('--hero-pointer-x', '0px');
    event.currentTarget.style.setProperty('--hero-pointer-y', '0px');
    event.currentTarget.style.setProperty('--hero-pointer-rotate', '0deg');
  };

  return (
    <section
      className="hero section-full"
      id="top"
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      <div className="video-backdrop" aria-hidden="true">
        <div className="motion-fallback" />
        <FolkMotionScene />
        <NarrativePortal />
        <div className="crow-spiral-stage static-crow">
          <ExtractedSpiral />
          <div className="crow-ink-wash" />
          <div className="crow-vignette" />
          <div className="crow-rings">
            <span />
            <span />
            <span />
          </div>
          <div className="crow-sparks">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={`crow-spark-${index}`} />
            ))}
          </div>
          <div className="crow-grain" />
          <div className="crow-label-stack crow-content-stack" aria-hidden="true">
            <article className="crow-label-card primary">
              <em>AI TRAINING FILE 01</em>
              <strong>训练 AI，也训练方法</strong>
              <small>Prompt / Sample / Rubric</small>
            </article>
            <article className="crow-label-card">
              <em>Prompt Matrix</em>
              <strong>把灵感拆成可复用指令</strong>
              <small>关键词、限制、风格边界</small>
            </article>
            <article className="crow-label-card">
              <em>Sample Board</em>
              <strong>样本不是素材，是判断依据</strong>
              <small>收集、筛选、对比、归档</small>
            </article>
            <article className="crow-label-card">
              <em>Evaluation Rubric</em>
              <strong>让好结果稳定发生</strong>
              <small>审美标准、失败样本、交付规则</small>
            </article>
          </div>
          <div className="crow-archive-note">
            <span>Archive 01 / Folk Signal</span>
            <strong>把偶然的好结果，训练成稳定的方法。</strong>
          </div>
        </div>
      </div>

      <nav className="nav" aria-label="主导航">
        <a href="#top" className="brand">
          <span className="brand-dot" />
          <span>{profile.name}</span>
        </a>
        <div className="nav-links">
          <a href="#projects">案例</a>
          <a href="#approach">方法</a>
          <a href="#experience">经历</a>
          <a href="#contact">联系</a>
        </div>
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          <Mail size={15} />
          联系我
        </a>
      </nav>

      <div className="container hero-content">
        <div className="hero-kicker">
          <p className="eyebrow">AI Trainer Portfolio 2026</p>
          <span>提示词 / 样本 / 评估 / 工作流</span>
        </div>
        <h1>
          <span>训练 AI，也训练方法。</span>
          <span>让好结果稳定发生。</span>
        </h1>
        <div className="hero-tale-note">
          <span>生成式 AI 训练与工作流作品集</span>
          <span>GenAI Training Portfolio</span>
        </div>
        <div className="hero-bottom">
          <p>
            {profile.title}
            <br />
            将设计判断、提示词与评估标准整理成可复用的训练流程。
          </p>
          <div className="hero-actions">
            <a className="cta" href="#projects">
              查看训练案例
              <ArrowRight size={18} />
            </a>
            <a className="hero-reel" href="#approach" aria-label="查看 AI 训练方法">
              <span className="hero-reel-play">Flow</span>
              <span>
                <strong>AI Workflow</strong>
                <small>define / train / evaluate / deliver</small>
              </span>
            </a>
          </div>
        </div>
        <div className="hero-tags" aria-label="训练能力关键词">
          <span>提示词设计</span>
          <span>样本组织</span>
          <span>结果评估</span>
          <span>流程复盘</span>
        </div>
        <div className="hero-proof-strip" aria-label="AI 训练能力">
          <span>
            <strong>01</strong>
            Prompt System
          </span>
          <span>
            <strong>02</strong>
            Evaluation Criteria
          </span>
          <span>
            <strong>03</strong>
            Workflow Delivery
          </span>
        </div>
      </div>

      <div className="hero-seal" aria-hidden="true">
        <span>荒</span>
        <span>谣</span>
      </div>

      <div className="hero-index" aria-hidden="true">
        <span>01</span>
        <span>Scroll</span>
      </div>

      <a className="hero-scroll-cue" href="#projects" aria-label="滚动查看训练案例">
        <span>View training cases</span>
        <i />
      </a>

      <div className="hero-world-note" aria-hidden="true">
        <span>Story System</span>
        <strong>把输入、判断和生成结果连成一条可复用的路。</strong>
      </div>

      <div className="hero-experience-loop" aria-hidden="true">
        <span>Prompt Structure</span>
        <span>Sample Board</span>
        <span>Evaluation Rubric</span>
        <span>Iteration Log</span>
        <span>Visual Judgment</span>
      </div>

      <div className="hero-mantra" aria-hidden="true">
        <span>Define before generate</span>
        <span>Train what good means</span>
        <span>Make results repeatable</span>
      </div>

      <div className="hero-bottom-marquee" aria-hidden="true">
        <span>AI Training</span>
        <span>Visual System</span>
        <span>Story Method</span>
        <span>Prompt Design</span>
        <span>Evaluation</span>
        <span>Delivery</span>
      </div>
    </section>
  );
}

function NarrativePortal() {
  const beads = [
    { x: 236, y: 112, r: 5 },
    { x: 406, y: 168, r: 4 },
    { x: 502, y: 326, r: 6 },
    { x: 344, y: 488, r: 4 },
    { x: 134, y: 406, r: 5 },
    { x: 106, y: 222, r: 3 },
  ];

  return (
    <div className="narrative-portal" aria-hidden="true">
      <svg viewBox="0 0 640 640">
        <path className="portal-paper" d="M92 148 C 166 48, 392 48, 510 154 C 604 238, 560 482, 402 548 C 260 608, 64 520, 54 330 C 48 250, 48 208, 92 148 Z" />
        <path className="portal-line portal-line-a" d="M104 338 C 194 218, 274 426, 356 300 S 488 156, 570 284" />
        <path className="portal-line portal-line-b" d="M92 430 C 180 354, 248 488, 342 404 S 468 288, 544 386" />
        <g className="portal-drops">
          <path d="M316 158 C 366 194, 386 260, 346 312 C 308 362, 236 338, 230 274 C 226 224, 264 182, 316 158 Z" />
          <path d="M422 310 C 454 334, 468 382, 438 414 C 410 444, 362 428, 358 386 C 354 350, 386 322, 422 310 Z" />
          <path d="M236 388 C 270 408, 280 456, 250 490 C 220 522, 172 500, 176 456 C 178 424, 202 398, 236 388 Z" />
        </g>
        <g className="portal-beads">
          {beads.map((bead) => (
            <circle cx={bead.x} cy={bead.y} r={bead.r} key={`${bead.x}-${bead.y}`} />
          ))}
        </g>
        <text className="portal-word portal-word-a" x="126" y="156">VISUAL</text>
        <text className="portal-word portal-word-b" x="390" y="524">STORY</text>
      </svg>
    </div>
  );
}

function FolkMotionScene() {
  const sparks = [
    { x: 150, y: 620, r: 4 },
    { x: 236, y: 520, r: 3 },
    { x: 412, y: 680, r: 5 },
    { x: 920, y: 560, r: 4 },
    { x: 1080, y: 438, r: 3 },
    { x: 1260, y: 640, r: 5 },
  ];

  return (
    <svg className="folk-motion" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <path
          id="motionDrop"
          d="M0 -34 C 20 -18, 28 4, 14 24 C 3 40, -18 34, -25 15 C -34 -8, -18 -22, 0 -34 Z"
        />
      </defs>
      <g className="motion-wash-layer">
        <path d="M-40 626 C 172 500, 310 648, 506 552 S 834 426, 1058 552 S 1268 718, 1486 582 L1486 950 L-40 950 Z" />
        <path d="M-24 746 C 184 630, 356 750, 548 696 S 864 610, 1104 706 S 1288 812, 1472 740 L1472 950 L-24 950 Z" />
      </g>
      <g className="motion-thread-layer">
        <path d="M64 266 C 232 150, 390 322, 574 226 S 908 86, 1376 246" />
        <path d="M-20 438 C 214 320, 408 510, 642 412 S 1080 308, 1480 470" />
        <path d="M122 760 C 294 684, 430 784, 610 710 S 902 584, 1310 736" />
      </g>
      <g className="motion-totem-layer">
        <use href="#motionDrop" transform="translate(858 278) rotate(-22) scale(1.8)" />
        <use href="#motionDrop" transform="translate(1018 338) rotate(18) scale(1.1)" />
        <use href="#motionDrop" transform="translate(756 434) rotate(35) scale(0.92)" />
        <use href="#motionDrop" transform="translate(1168 510) rotate(-8) scale(1.35)" />
      </g>
      <g className="motion-moon-layer">
        <circle cx="1014" cy="224" r="70" />
        <path d="M942 224 C 982 184, 1040 182, 1088 220" />
      </g>
      <g className="motion-sparks-layer">
        {sparks.map((spark) => (
          <circle cx={spark.x} cy={spark.y} r={spark.r} key={`${spark.x}-${spark.y}`} />
        ))}
      </g>
    </svg>
  );
}

function ConceptIntro() {
  return (
    <section className="section concept-section" id="concept">
      <div className="container concept-panel">
        <span className="chapter-marker">02</span>
        <div className="paper-note concept-note">Clear Inputs / Better Results</div>
        <p className="eyebrow">Training Statement</p>
        <div className="concept-statement">
          <h2>先定义什么叫好结果，再开始训练 AI。</h2>
          <p>
            我把需求拆解成输入、样本、提示词和评估标准，再通过多轮生成、比较与复盘，
            将偶然出现的好结果整理成可以重复使用的训练方法。
          </p>
        </div>
        <div className="concept-proof">
          <span>Define</span>
          <span>Train</span>
          <span>Evaluate</span>
          <span>Deliver</span>
        </div>
        <div className="concept-keywords" aria-label="服务关键词">
          <span>Prompt Design</span>
          <span>Sample Curation</span>
          <span>Evaluation Rubric</span>
          <span>Workflow Delivery</span>
        </div>
      </div>
    </section>
  );
}

function ImmersiveStatement() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPointerInside, setIsPointerInside] = useState(false);
  const reelRef = useRef(null);
  const flowPathRefs = useRef({});
  const flowTargetRef = useRef({ x: 0.5, y: 0.5 });
  const flowCurrentRef = useRef({ x: 0.5, y: 0.5 });
  const flowAnimationRef = useRef(0);
  const flowActiveRef = useRef(false);

  useEffect(() => {
    if (isPointerInside) return undefined;

    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % immersiveReelFrames.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [isPointerInside]);

  const writeFlowPosition = (x, y) => {
    const paths = buildFlowPaths(x, y);
    const refs = flowPathRefs.current;

    refs.ghost?.setAttribute('d', paths.ghost);
    refs.shadow?.setAttribute('d', paths.main);
    refs.base?.setAttribute('d', paths.main);
    refs.current?.setAttribute('d', paths.main);
    refs.light?.setAttribute('d', paths.main);

    const reel = reelRef.current;
    if (!reel) return;

    reel.style.setProperty('--line-x', `${(x * 100).toFixed(2)}%`);
    reel.style.setProperty('--line-y', `${(y * 100).toFixed(2)}%`);
    reel.style.setProperty('--line-svg-x', `${((x - 0.5) * 34).toFixed(2)}px`);
    reel.style.setProperty('--line-svg-y', `${((y - 0.5) * 28).toFixed(2)}px`);
    reel.style.setProperty('--line-glow-scale', String(0.88 + Math.abs(x - 0.5) * 0.34 + Math.abs(y - 0.5) * 0.24));
  };

  const animateFlowPosition = () => {
    const current = flowCurrentRef.current;
    const target = flowTargetRef.current;
    const ease = flowActiveRef.current ? 0.13 : 0.075;

    current.x += (target.x - current.x) * ease;
    current.y += (target.y - current.y) * ease;
    writeFlowPosition(current.x, current.y);

    const isSettled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
    if (flowActiveRef.current || !isSettled) {
      flowAnimationRef.current = window.requestAnimationFrame(animateFlowPosition);
    } else {
      flowAnimationRef.current = 0;
    }
  };

  const ensureFlowAnimation = () => {
    if (!flowAnimationRef.current) {
      flowAnimationRef.current = window.requestAnimationFrame(animateFlowPosition);
    }
  };

  useEffect(() => () => {
    if (flowAnimationRef.current) {
      window.cancelAnimationFrame(flowAnimationRef.current);
    }
  }, []);

  const handleReelEnter = () => {
    flowActiveRef.current = true;
    setIsPointerInside(true);
    ensureFlowAnimation();
  };

  const handleReelMove = (event) => {
    const reel = reelRef.current;
    if (!reel) return;

    const rect = reel.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
    const nextFrame = Math.min(Math.floor(x * immersiveReelFrames.length), immersiveReelFrames.length - 1);

    reel.style.setProperty('--spot-x', `${(x * 100).toFixed(2)}%`);
    reel.style.setProperty('--spot-y', `${(y * 100).toFixed(2)}%`);
    reel.style.setProperty('--tilt-x', `${((x - 0.5) * 7).toFixed(2)}deg`);
    reel.style.setProperty('--tilt-y', `${((0.5 - y) * 5).toFixed(2)}deg`);
    reel.style.setProperty('--push-x', `${((x - 0.5) * 18).toFixed(2)}px`);
    reel.style.setProperty('--push-y', `${((y - 0.5) * 14).toFixed(2)}px`);
    flowTargetRef.current = { x, y };
    ensureFlowAnimation();
    setActiveFrame((current) => (current === nextFrame ? current : nextFrame));
  };

  const handleReelLeave = () => {
    const reel = reelRef.current;
    flowActiveRef.current = false;
    flowTargetRef.current = { x: 0.5, y: 0.5 };
    ensureFlowAnimation();
    setIsPointerInside(false);
    if (!reel) return;

    reel.style.setProperty('--spot-x', '50%');
    reel.style.setProperty('--spot-y', '50%');
    reel.style.setProperty('--tilt-x', '0deg');
    reel.style.setProperty('--tilt-y', '0deg');
    reel.style.setProperty('--push-x', '0px');
    reel.style.setProperty('--push-y', '0px');
  };

  const renderedFlowPaths = buildFlowPaths(flowCurrentRef.current.x, flowCurrentRef.current.y);

  return (
    <section className="section immersive-section" id="immersive">
      <div className="container immersive-panel">
        <span className="chapter-marker">03</span>
        <div className="immersive-copy">
          <p className="eyebrow">Interactive AI Workflow</p>
          <h2>让每一次生成，都能被追踪、判断与继续改进。</h2>
          <p>
            鼠标与画面的互动模拟训练过程：输入发生变化，结果随之改变；
            真正重要的不是单次生成，而是理解变量、记录反馈并建立稳定方法。
          </p>
        </div>
        <div className="immersive-orbit" aria-hidden="true">
          <span>Input</span>
          <span>Generate</span>
          <span>Score</span>
          <span>Refine</span>
        </div>
        <div
          className={`flow-reel ${isPointerInside ? 'is-interacting' : ''}`}
          aria-label="Interactive reel"
          ref={reelRef}
          style={{
            '--active-frame': activeFrame,
            '--reel-offset': `${activeFrame * -25}%`,
            '--reel-step-progress': `${((activeFrame + 1) / immersiveReelFrames.length) * 100}%`,
            '--reel-step-scale': `${(activeFrame + 1) / immersiveReelFrames.length}`,
          }}
          onPointerEnter={handleReelEnter}
          onPointerMove={handleReelMove}
          onPointerLeave={handleReelLeave}
        >
          <svg className="flow-ribbon" viewBox="0 0 1320 620" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="flowWarmBase" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(179, 146, 83, 0.18)" />
                <stop offset="42%" stopColor="rgba(207, 69, 31, 0.66)" />
                <stop offset="100%" stopColor="rgba(179, 146, 83, 0.34)" />
              </linearGradient>
              <linearGradient id="flowWarmPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 250, 240, 0)" />
                <stop offset="46%" stopColor="rgba(255, 250, 240, 0.74)" />
                <stop offset="58%" stopColor="rgba(225, 125, 27, 0.98)" />
                <stop offset="100%" stopColor="rgba(255, 250, 240, 0)" />
              </linearGradient>
            </defs>
            <path
              className="flow-ribbon-ghost"
              ref={(node) => {
                flowPathRefs.current.ghost = node;
              }}
              pathLength="1"
              d={renderedFlowPaths.ghost}
            />
            <path
              className="flow-ribbon-shadow"
              ref={(node) => {
                flowPathRefs.current.shadow = node;
              }}
              d={renderedFlowPaths.main}
            />
            <path
              className="flow-ribbon-base"
              ref={(node) => {
                flowPathRefs.current.base = node;
              }}
              pathLength="1"
              d={renderedFlowPaths.main}
            />
            <path
              className="flow-ribbon-current"
              ref={(node) => {
                flowPathRefs.current.current = node;
              }}
              pathLength="1"
              d={renderedFlowPaths.main}
            />
            <path
              className="flow-ribbon-light"
              ref={(node) => {
                flowPathRefs.current.light = node;
              }}
              pathLength="1"
              d={renderedFlowPaths.main}
            />
            <g className="flow-sparks">
              <circle className="flow-spark flow-spark-1" r="7">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path={FLOW_BASE_PATH}
                />
              </circle>
              <circle className="flow-spark flow-spark-2" r="4.5">
                <animateMotion
                  dur="10.5s"
                  begin="-3s"
                  repeatCount="indefinite"
                  path={FLOW_BASE_PATH}
                />
              </circle>
            </g>
          </svg>
          <span className="flow-mouse-orb" aria-hidden="true" />
          <div className="reel-card">
            <div className="reel-track">
              {immersiveReelFrames.map((frame) => (
                <img src={frame.src} alt="" key={frame.src} />
              ))}
            </div>
            <div className="reel-blueprint" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="reel-caption">
              <span>Motion / Spatial / Brand</span>
              <strong>{immersiveReelFrames[activeFrame].title}</strong>
            </div>
          </div>
          <div className="reel-scrub" aria-label="Reel chapters">
            <span className="reel-progress">
              <span />
            </span>
            {immersiveReelFrames.map((frame, index) => (
              <button
                className={index === activeFrame ? 'is-active' : ''}
                type="button"
                key={frame.label}
                onClick={() => setActiveFrame(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {frame.label}
              </button>
            ))}
          </div>
          <a className="reel-method-pill" href="#approach">
            <span />
            我的方法
          </a>
        </div>
        <div className="immersive-pillars">
          {experiencePillars.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container split">
        <div>
          <span className="chapter-marker inline">05</span>
          <p className="eyebrow">Experience</p>
          <h2>我的设计背景，让 AI 训练不只正确，也更有判断力。</h2>
        </div>

        <div className="profile-card">
          <div className="paper-note profile-note">个人经历 / 训练判断</div>
          <div className="portrait" aria-label="人物头像占位">
            <span className="portrait-mark" />
            <span />
          </div>
          <div className="profile-copy">
            <h3>{profile.name}</h3>
            <p>{profile.intro}</p>
            <div className="contact-grid">
              <span>{profile.email}</span>
              <span>{profile.location}</span>
              <span>{profile.availability}</span>
              <span>{profile.social.join(' / ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container stats-row">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <small>记录</small>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const featuredTraining = projects[0];
  const handleProjectPointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);

    card.style.setProperty('--card-x', `${(x * 100).toFixed(2)}%`);
    card.style.setProperty('--card-y', `${(y * 100).toFixed(2)}%`);
    card.style.setProperty('--card-tilt-x', `${((0.5 - y) * 3.6).toFixed(2)}deg`);
    card.style.setProperty('--card-tilt-y', `${((x - 0.5) * 4.8).toFixed(2)}deg`);
  };

  const handleProjectPointerLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty('--card-x', '50%');
    card.style.setProperty('--card-y', '50%');
    card.style.setProperty('--card-tilt-x', '0deg');
    card.style.setProperty('--card-tilt-y', '0deg');
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container section-heading">
        <div>
          <span className="chapter-marker inline">04</span>
          <p className="eyebrow">AI Training Cases</p>
          <h2>不只展示结果，更展示 AI 是如何被训练和判断的。</h2>
        </div>
        <p className="section-side-copy">
          每个案例都说明训练目标、输入组织、提示词方法、评估标准与最终交付。
        </p>
      </div>

      <div className="container work-index-list" aria-label="精选项目索引">
        {projects.map((project, index) => (
          <a href={`#project-${index + 1}`} key={project.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{project.title}</strong>
            <em>{project.services.join(' • ')}</em>
            <i>{project.year}</i>
          </a>
        ))}
      </div>

      <div className="container case-showcase" aria-label="训练案例图片展示">
        <section className="case-block poster-showcase" aria-labelledby="poster-showcase-title">
          <div className="case-block-heading">
            <span>Poster Training</span>
            <h3 id="poster-showcase-title">海报案例单独呈现，保留完整画面和标题层级。</h3>
            <p>竖版海报不裁切，重点展示 AI 训练后的构图、情绪、人物/物象关系与最终视觉完成度。</p>
          </div>
          <div className="poster-case-grid">
            {posterCases.map((item, index) => (
              <article className="poster-case" key={item.title}>
                <figure>
                  <img src={item.image} alt={`${item.title} 海报`} />
                </figure>
                <div className="case-caption">
                  <span>{String(index + 1).padStart(2, '0')} / {item.label}</span>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                  <em>{item.type} · {item.year}</em>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-block render-showcase" aria-labelledby="render-showcase-title">
          <div className="case-block-heading">
            <span>Spatial Renders</span>
            <h3 id="render-showcase-title">效果图独立排版，按空间叙事顺序展示。</h3>
            <p>从外部主视觉、室内动线、俯视结构到最终氛围图，形成完整的空间视觉训练案例。</p>
          </div>
          <div className="render-case-layout">
            {renderCases.map((item, index) => (
              <figure className={`render-case render-case-${index + 1}`} key={item.image}>
                <img src={item.image} alt={item.title} />
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')} / {item.type}</span>
                  <strong>{item.title}</strong>
                  <em>{item.label}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <ProjectEvidenceLedger />

      <div className="container training-case-overview">
        <article className="training-case-intro">
          <span>Case 01 / AI Visual Training</span>
          <h3>把审美判断，变成可以重复执行的训练规则。</h3>
          <p>
            以《飞鱼之海》叙事海报为任务，先定义视觉焦点与构图限制，再组织样本、
            设计提示词、评估多轮结果，最后沉淀为可复用的视觉训练工作流。
          </p>
          <dl className="training-case-meta">
            <div>
              <dt>My Role</dt>
              <dd>任务拆解 / 提示词设计 / 视觉评估</dd>
            </div>
            <div>
              <dt>Artifacts</dt>
              <dd>提示词模板 / 样本板 / 评分规则 / 迭代记录</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>叙事主海报与可复用生成流程</dd>
            </div>
          </dl>
        </article>

        <div className="training-flow" aria-label="飞鱼之海视觉训练流程">
          {featuredTraining.training.map((item, index) => (
            <article key={item.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h4>{item.label}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="training-artifacts" aria-label="训练交付物">
          <span>Prompt Template</span>
          <span>Sample Board</span>
          <span>Evaluation Rubric</span>
          <span>Iteration Log</span>
        </div>
      </div>

      <div className="container project-list">
        {projects.map((project, index) => (
          <article
            id={`project-${index + 1}`}
            className={`project-card ${project.tone} ${project.format || ''} ${project.training ? 'has-training' : ''}`}
            key={project.title}
            onPointerMove={handleProjectPointerMove}
            onPointerLeave={handleProjectPointerLeave}
          >
            <div className="paper-note project-note">{project.year} / {project.type}</div>
            <div className="project-chapter-mark">Chapter {String(index + 1).padStart(2, '0')}</div>
            <div className="project-image">
              {project.images?.[0] && (
                <img className="project-photo main-photo" src={project.images[0]} alt={`${project.title} 项目图`} />
              )}
              <ProjectGlyph tone={project.tone} index={index} />
              <div className="project-media-mark" />
              {project.images?.length > 1 && (
                <div className="project-thumbs" aria-hidden="true">
                  {project.images.slice(0, 4).map((image) => (
                    <img src={image} alt="" key={image} />
                  ))}
                </div>
              )}
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="project-info">
              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <span>{project.year}</span>
            </div>
            <strong className="project-phrase">{project.phrase}</strong>
            <div className="project-proof-strip" aria-label={`${project.title} case proof`}>
              <span>
                <strong>{project.images.length}</strong>
                visuals
              </span>
              <span>
                <strong>{project.training ? project.training.length : project.services.length}</strong>
                evidence points
              </span>
              <span>
                <strong>{project.year}</strong>
                delivery year
              </span>
            </div>
            {project.training && (
              <div className="training-evidence" aria-label={`${project.title} 训练过程`}>
                {project.training.map((item, trainingIndex) => (
                  <article key={item.label}>
                    <span>{String(trainingIndex + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
            <div className="project-service-tags">
              {project.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
            <p className="project-summary">{project.summary}</p>
            <a href="#contact" className="project-link" aria-label={`${project.title} 项目详情`}>
              View Training Case
              <MoveUpRight size={18} />
            </a>
          </article>
        ))}
      </div>

    </section>
  );
}

function ProjectEvidenceLedger() {
  return (
    <div className="container project-evidence-ledger" aria-label="Case evidence route">
      <div className="project-evidence-intro">
        <span>Evidence Route</span>
        <h3>From visual result to repeatable method.</h3>
        <p>
          Every case keeps the final image visible, then reveals the prompt logic, sample structure,
          evaluation rule, and delivery artifact behind it.
        </p>
      </div>
      <div className="project-evidence-track">
        {projects.map((project, index) => (
          <a className="project-evidence-item" href={`#project-${index + 1}`} key={project.title}>
            <span className="project-evidence-index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{project.title}</strong>
            <p>{project.phrase}</p>
            <dl>
              <div>
                <dt>role</dt>
                <dd>{project.services[0]}</dd>
              </div>
              <div>
                <dt>proof</dt>
                <dd>{project.training ? `${project.training.length} training steps` : `${project.images.length} visual scenes`}</dd>
              </div>
            </dl>
          </a>
        ))}
      </div>
    </div>
  );
}

function StoryBridge() {
  return (
    <section className="story-bridge" aria-label="章节过渡">
      <div className="container story-bridge-inner">
        <span>Training Narrative</span>
        <h2>从结果展示，继续走进训练方法。</h2>
        <p>沿着输入、生成、评估与复盘，查看一套方法如何被整理成可复用流程。</p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container section-heading">
        <div>
          <span className="chapter-marker inline">06</span>
          <p className="eyebrow">Training Approach</p>
          <h2>从训练目标，到一套团队可以继续使用的方法。</h2>
        </div>
        <p className="section-side-copy">
          不只展示成功结果，也记录变量、失败样本、判断依据与交付方式。
        </p>
      </div>

      <div className="container approach-grid">
        {approach.map((item) => (
          <article className="approach-card" key={item.title}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectGlyph({ tone, index }) {
  const marks = [
    { x: 72, y: 74, r: 5 },
    { x: 326, y: 88, r: 3 },
    { x: 118, y: 286, r: 4 },
    { x: 318, y: 322, r: 5 },
  ];

  return (
    <svg className={`project-glyph project-glyph-${tone}`} viewBox="0 0 420 360" aria-hidden="true">
      <path className="glyph-wash" d="M48 84 C 126 22, 272 24, 344 92 C 414 158, 344 286, 214 304 C 92 320, 2 228, 48 84 Z" />
      <path className="glyph-thread" d="M30 216 C 88 142, 156 250, 220 178 S 336 108, 396 198" />
      <path className="glyph-thread soft" d="M68 282 C 132 244, 174 302, 248 260 S 326 216, 384 252" />
      {index === 1 && <circle className="glyph-moon" cx="274" cy="132" r="54" />}
      {index === 2 && <path className="glyph-mountain" d="M64 264 L132 164 L178 222 L224 140 L326 264 Z" />}
      {marks.map((mark) => (
        <circle className="glyph-dot" cx={mark.x} cy={mark.y} r={mark.r} key={`${mark.x}-${mark.y}`} />
      ))}
    </svg>
  );
}

function Strengths() {
  return (
    <section className="section" id="strengths">
      <div className="container section-heading">
        <div>
          <span className="chapter-marker inline">07</span>
          <p className="eyebrow">Why Me</p>
          <h2>我把设计判断，变成 AI 可以学习、团队可以复用的标准。</h2>
        </div>
      </div>

      <div className="container strength-grid">
        {strengths.map(({ icon: Icon, title, text }) => (
          <article className="strength-card" key={title}>
            <span className="strength-index">0{strengths.findIndex((item) => item.title === title) + 1}</span>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-full" id="contact">
      <div className="container contact-content">
        <div className="paper-note contact-note">训练档案 / 联系入口</div>
        <span className="chapter-marker inline">08</span>
        <p className="eyebrow">Contact</p>
        <h2>如果你需要把 AI 从偶然好用，训练成稳定可用，我们可以从一个任务开始。</h2>
        <div className="contact-actions">
          <a className="cta large" href={`mailto:${profile.email}`}>
            开始聊聊 / Let&apos;s Talk
            <ArrowRight size={20} />
          </a>
          <div className="social-links" aria-label="社交媒体">
            {profile.social.map((item) => (
              <a key={item} href="#top">{item}</a>
            ))}
          </div>
          <a className="ghost-link" href="#top">回到顶部</a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
