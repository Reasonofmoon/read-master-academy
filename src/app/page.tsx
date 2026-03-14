'use client';

import { useState } from 'react';
import {
  BookOpen, GraduationCap, Globe, Brain, Sparkles, MapPin,
  Phone, Calendar, ChevronRight, ArrowRight, Users, Target,
  Lightbulb, Shield, Clock, Star, CheckCircle2, Send,
} from 'lucide-react';

// ════════════════════════════════════════════
// Navigation
// ════════════════════════════════════════════
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--rm-ivory)]/90 backdrop-blur-md border-b border-[var(--rm-green-100)]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--rm-green-800)] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[var(--rm-gold-300)]" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-[var(--rm-green-900)]">Read Master</span>
              <span className="hidden sm:block text-[10px] tracking-[0.15em] uppercase text-[var(--rm-text-muted)] -mt-0.5">Literacy Academy</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {['교육 철학', '핵심 역량', '프로그램', '디지털 리터러시', '개원 안내'].map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="text-sm font-medium text-[var(--rm-text-secondary)] hover:text-[var(--rm-green-700)] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#reservation"
              className="px-5 py-2.5 bg-[var(--rm-green-800)] text-white text-sm font-medium rounded-lg hover:bg-[var(--rm-green-700)] transition-all shadow-sm"
            >
              상담 예약
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--rm-green-800)]"
            aria-label="메뉴"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[var(--rm-green-100)]/40 px-6 py-4 space-y-3">
          {['교육 철학', '핵심 역량', '프로그램', '디지털 리터러시', '개원 안내'].map((item, i) => (
            <a
              key={i}
              href={`#section-${i}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--rm-text-secondary)]"
            >
              {item}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setIsOpen(false)}
            className="block text-center py-2.5 bg-[var(--rm-green-800)] text-white text-sm font-medium rounded-lg"
          >
            상담 예약
          </a>
        </div>
      )}
    </nav>
  );
}

// ════════════════════════════════════════════
// Hero Section
// ════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--rm-green-950)] via-[var(--rm-green-900)] to-[var(--rm-green-800)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,77,0.4) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--rm-gold-500)]/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--rm-green-950)]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--rm-gold-500)]/10 border border-[var(--rm-gold-500)]/20 mb-8">
            <Calendar className="w-3.5 h-3.5 text-[var(--rm-gold-400)]" />
            <span className="text-xs font-medium tracking-wide text-[var(--rm-gold-300)]">
              2026년 7월 20일 · 부천 옥길동 GRAND OPENING
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            읽고, 이해하고,<br />
            <span className="gold-shimmer">미래를 만드는 힘</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-lg lg:text-xl leading-relaxed text-[var(--rm-green-200)]/80 max-w-2xl mb-4">
            성적 너머의 본질, 사고력 너머의 기초.<br className="hidden sm:block" />
            Read Master는 읽기의 깊이에서 학습의 구조를 세웁니다.
          </p>
          <p className="animate-fade-in-up animate-delay-300 text-base leading-relaxed text-[var(--rm-green-300)]/60 max-w-xl mb-10">
            영어·국어 리터러시, 수능·내신 전략, AI 시대 디지털 문해력까지 —
            하나의 학습 철학 아래 연결되는 체계적 교육.
          </p>

          <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[var(--rm-gold-500)] text-[var(--rm-green-950)] font-semibold rounded-xl hover:bg-[var(--rm-gold-400)] transition-all shadow-lg shadow-[var(--rm-gold-500)]/20"
            >
              학부모 설명회 예약
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/15 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              상담 신청하기
            </a>
            <a
              href="#section-2"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-[var(--rm-green-200)]/70 font-medium hover:text-white transition-colors"
            >
              프로그램 살펴보기
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2">
          <div className="space-y-6 text-right">
            {[
              { label: '영어 리터러시', icon: Globe },
              { label: '국어 리터러시', icon: BookOpen },
              { label: '수능·내신', icon: Target },
              { label: '디지털 리터러시', icon: Brain },
            ].map(({ label, icon: Icon }, i) => (
              <div
                key={i}
                className="animate-fade-in-up flex items-center gap-3 justify-end opacity-0"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <span className="text-sm font-medium text-[var(--rm-green-300)]/50">{label}</span>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--rm-gold-400)]/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--rm-ivory)] to-transparent" />
    </section>
  );
}

// ════════════════════════════════════════════
// Philosophy Section
// ════════════════════════════════════════════
function PhilosophySection() {
  return (
    <section id="section-0" className="py-24 lg:py-32 bg-[var(--rm-ivory)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-600)] mb-4">
            Educational Philosophy
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--rm-green-900)] mb-6 tracking-tight">
            문해력은 모든 학습의<br />가장 깊은 기초입니다
          </h2>
          <div className="premium-divider mx-auto w-24 mb-8" />
          <p className="text-lg leading-relaxed text-[var(--rm-text-secondary)]">
            Read Master는 단순히 시험을 준비하는 곳이 아닙니다.
            정보를 깊이 처리하고, 비판적으로 사고하며,
            AI 시대에 명확하게 소통하는 능력을 키우는 곳입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: Lightbulb,
              title: '읽기가 사고를 만듭니다',
              desc: '텍스트를 정확히 읽고 해석하는 힘은 모든 교과 학습의 근본이며, 시험 점수를 넘어 평생의 지적 자산이 됩니다.',
            },
            {
              icon: Target,
              title: '학습의 구조를 세웁니다',
              desc: '영어와 국어의 문해력을 중심으로 수능·내신·디지털 리터러시까지 하나의 교육 체계 아래 연결합니다.',
            },
            {
              icon: Sparkles,
              title: '미래를 위한 역량입니다',
              desc: 'AI가 정보를 생성하는 시대, 그 정보를 판별하고 의미를 만들어내는 것은 인간만의 문해력입니다.',
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--rm-green-50)] border border-[var(--rm-green-100)] mb-6 group-hover:bg-[var(--rm-green-100)] transition-colors">
                <Icon className="w-6 h-6 text-[var(--rm-green-600)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--rm-green-900)] mb-3">{title}</h3>
              <p className="text-[var(--rm-text-secondary)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Core Strengths Section
// ════════════════════════════════════════════
function CoreStrengthsSection() {
  const pillars = [
    {
      icon: Globe,
      accent: 'var(--rm-green-600)',
      accentBg: 'var(--rm-green-50)',
      accentBorder: 'var(--rm-green-100)',
      label: 'English Literacy',
      title: '영어 리터러시',
      subtitle: '원서 읽기, 맥락적 어휘, 깊이 있는 해석',
      desc: '단순 독해를 넘어 영어 원서를 통해 텍스트의 맥락을 이해하고, 어휘를 문맥 속에서 습득하며, 저자의 의도와 논리 구조를 분석하는 능력을 키웁니다.',
      details: ['영어 원서 기반 정독 훈련', '맥락적 어휘 확장 시스템', '비문학·문학 텍스트 분석', '영어 표현력과 논리적 글쓰기'],
    },
    {
      icon: BookOpen,
      accent: 'var(--rm-gold-600)',
      accentBg: 'var(--rm-gold-50)',
      accentBorder: 'var(--rm-gold-100)',
      label: 'Korean Literacy',
      title: '국어 리터러시',
      subtitle: '논리, 텍스트 구조, 추론, 표현력',
      desc: '국어의 본질은 언어 능력이 아니라 사고 능력입니다. 텍스트의 구조를 파악하고, 논리적 추론을 수행하며, 자신의 생각을 정확하게 표현하는 힘을 기릅니다.',
      details: ['논리적 독해와 구조 분석', '추론·비판적 사고 훈련', '서술형·논술형 표현력', '비문학 독해 전략 체계화'],
    },
    {
      icon: GraduationCap,
      accent: 'var(--rm-green-700)',
      accentBg: 'var(--rm-green-50)',
      accentBorder: 'var(--rm-green-100)',
      label: 'Exam Readiness',
      title: '수능·내신 대비',
      subtitle: '분석적 독해, 실전 전략, 학업 수행력',
      desc: '시험은 결국 텍스트를 정확히 읽고 빠르게 판단하는 능력의 총합입니다. 문해력 기반의 체계적 전략으로 수능과 내신 모두에서 성과를 만듭니다.',
      details: ['지문 분석 기반 풀이 전략', '수능 영어·국어 유형별 훈련', '내신 대비 맞춤 커리큘럼', '실전 모의고사와 성적 관리'],
    },
    {
      icon: Brain,
      accent: 'var(--rm-gold-700)',
      accentBg: 'var(--rm-gold-50)',
      accentBorder: 'var(--rm-gold-100)',
      label: 'Digital Literacy',
      title: '디지털 리터러시',
      subtitle: '정보 판별, 해석, 판단, 의미 있는 읽기',
      desc: 'AI 시대에 가장 필요한 능력은 쏟아지는 정보 속에서 의미를 판별하고, 비교하고, 판단하며, 자신의 관점으로 재구성하는 디지털 문해력입니다.',
      details: ['정보 출처 비교·검증 훈련', '디지털 텍스트 비판적 읽기', 'AI 생성 콘텐츠 판별력', '책임 있는 정보 표현과 소통'],
    },
  ];

  return (
    <section id="section-1" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-600)] mb-4">
            Core Strengths
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--rm-green-900)] tracking-tight mb-6">
            네 가지 핵심 역량,<br />하나의 교육 철학
          </h2>
          <div className="premium-divider mx-auto w-24 mb-8" />
          <p className="text-lg text-[var(--rm-text-secondary)] leading-relaxed">
            Read Master의 모든 프로그램은 문해력이라는 하나의 뿌리에서 출발합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="card-hover group relative p-8 lg:p-10 rounded-2xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)]/60 hover:border-[var(--rm-green-200)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: p.accentBg, borderColor: p.accentBorder, borderWidth: 1 }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.accent }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: p.accent }}>
                      {p.label}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--rm-green-900)] -mt-0.5">{p.title}</h3>
                  </div>
                </div>

                <p className="text-sm font-medium text-[var(--rm-gold-700)] mb-3">{p.subtitle}</p>
                <p className="text-[var(--rm-text-secondary)] leading-relaxed mb-6">{p.desc}</p>

                <ul className="space-y-2.5">
                  {p.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--rm-text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: p.accent }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Programs Section
// ════════════════════════════════════════════
function ProgramsSection() {
  const programs = [
    {
      level: 'Elementary',
      grade: '초등부',
      ages: '초등 3 – 6학년',
      color: 'var(--rm-green-600)',
      colorLight: 'var(--rm-green-50)',
      colorBorder: 'var(--rm-green-200)',
      focus: '자신감 있는 읽기 습관과 사고력의 기초',
      desc: '영어와 국어의 읽기 기초를 탄탄히 세우고, 어휘력·독해력·표현력의 근본을 만듭니다.',
      features: [
        '영어 원서 읽기 습관 형성',
        '파닉스부터 리딩까지 체계적 과정',
        '국어 독서·논술 기초 훈련',
        '어휘 확장과 독해 자신감 형성',
        '독서 토론과 생각 표현 훈련',
      ],
    },
    {
      level: 'Middle School',
      grade: '중등부',
      ages: '중학 1 – 3학년',
      color: 'var(--rm-gold-600)',
      colorLight: 'var(--rm-gold-50)',
      colorBorder: 'var(--rm-gold-200)',
      focus: '원서 정독, 심층 독해, 분석적 사고로의 전환',
      desc: '단순 이해에서 분석으로, 읽기에서 토론으로. 중학 과정에서 고등 학습의 기반을 완성합니다.',
      features: [
        '영어 원서 정독 및 분석 독해',
        '비문학·문학 텍스트 구조 분석',
        '국어 논리적 독해와 서술형 대비',
        '내신 영어·국어 전략적 준비',
        '토론·프레젠테이션 능력 개발',
      ],
    },
    {
      level: 'High School',
      grade: '고등부',
      ages: '고등 1 – 3학년',
      color: 'var(--rm-green-800)',
      colorLight: 'var(--rm-green-50)',
      colorBorder: 'var(--rm-green-200)',
      focus: '수능·내신 실전력과 고차원 독해 전략',
      desc: '수능 영어·국어의 핵심은 고도의 문해력입니다. 지문 분석 기반 전략으로 실전 성과를 만듭니다.',
      features: [
        '수능 영어 고난도 독해 전략',
        '수능 국어 비문학·문학 집중 분석',
        '내신 대비 맞춤 커리큘럼',
        '실전 모의고사 훈련 및 성적 관리',
        '1:1 학습 진단과 취약점 보완',
      ],
    },
  ];

  return (
    <section id="section-2" className="py-24 lg:py-32 bg-[var(--rm-ivory)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-600)] mb-4">
            Programs
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--rm-green-900)] tracking-tight mb-6">
            학년별 맞춤 프로그램
          </h2>
          <div className="premium-divider mx-auto w-24 mb-8" />
          <p className="text-lg text-[var(--rm-text-secondary)] leading-relaxed">
            각 학년의 발달 단계와 학습 목표에 맞춘 체계적 커리큘럼
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              className="card-hover relative flex flex-col rounded-2xl bg-white border overflow-hidden"
              style={{ borderColor: p.colorBorder }}
            >
              <div className="p-8 pb-6" style={{ backgroundColor: p.colorLight }}>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: p.color }}>
                  {p.level}
                </span>
                <h3 className="text-2xl font-bold text-[var(--rm-green-900)] mt-1">{p.grade}</h3>
                <p className="text-sm text-[var(--rm-text-muted)] mt-1">{p.ages}</p>
              </div>

              <div className="flex-1 p-8 pt-6 space-y-5">
                <div
                  className="text-sm font-semibold px-3 py-1.5 rounded-lg inline-block"
                  style={{ backgroundColor: p.colorLight, color: p.color }}
                >
                  {p.focus}
                </div>
                <p className="text-[var(--rm-text-secondary)] leading-relaxed text-sm">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--rm-text-secondary)]">
                      <Star className="w-3.5 h-3.5 mt-1 shrink-0" style={{ color: p.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 pb-8">
                <a
                  href="#reservation"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all border"
                  style={{ color: p.color, borderColor: p.colorBorder, backgroundColor: p.colorLight }}
                >
                  상담 신청
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Digital Literacy Section
// ════════════════════════════════════════════
function DigitalLiteracySection() {
  return (
    <section id="section-3" className="py-24 lg:py-32 bg-[var(--rm-green-900)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,77,0.5) 1px, transparent 0)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-400)] mb-4">
              Future Readiness
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              AI 시대,<br />
              <span className="text-[var(--rm-gold-300)]">읽는 방법</span>이 달라집니다
            </h2>
            <div className="w-16 h-0.5 bg-[var(--rm-gold-500)]/40 mb-8" />
            <p className="text-lg leading-relaxed text-[var(--rm-green-200)]/80 mb-6">
              AI가 글을 쓰는 시대에, 그 글을 읽고 판단하는 것은 사람의 몫입니다.
              Read Master의 디지털 리터러시 교육은 학생들이 정보를 비판적으로 읽고,
              출처를 비교하고, 의미를 판별하며, 자신의 관점으로 재구성하는 힘을 키웁니다.
            </p>
            <p className="text-base leading-relaxed text-[var(--rm-green-300)]/60">
              이것은 선택이 아닌 필수 역량입니다. 암기를 넘어,
              진짜 이해하고 표현하는 학생만이 미래를 주도할 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Shield, title: '정보 판별력', desc: '신뢰할 수 있는 정보와 그렇지 않은 정보를 구별하는 훈련' },
              { icon: Users, title: '출처 비교·검증', desc: '다양한 소스를 교차 확인하고 편향을 인식하는 능력' },
              { icon: Lightbulb, title: '의미 해석과 판단', desc: '정보의 표면을 넘어 숨겨진 의미와 의도를 읽어내는 힘' },
              { icon: Send, title: '책임 있는 표현', desc: '디지털 환경에서 정확하고 윤리적으로 소통하는 능력' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--rm-gold-500)]/10 border border-[var(--rm-gold-500)]/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[var(--rm-gold-400)]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-[var(--rm-green-200)]/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Trust Building Section
// ════════════════════════════════════════════
function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-600)] mb-4">
            Why Read Master
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--rm-green-900)] tracking-tight mb-6">
            신뢰할 수 있는 교육,<br />확인할 수 있는 체계
          </h2>
          <div className="premium-divider mx-auto w-24 mb-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: '체계적 커리큘럼', desc: '학년별·수준별로 설계된 단계적 학습 체계' },
            { icon: Users, title: '소수 정예 수업', desc: '학생 개개인에게 집중할 수 있는 소규모 클래스' },
            { icon: Target, title: '정기 학습 진단', desc: '정기적 평가와 피드백으로 성장을 확인합니다' },
            { icon: Clock, title: '학부모 소통', desc: '정기 상담과 학습 리포트로 투명하게 소통합니다' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="card-hover text-center p-8 rounded-2xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)]/60">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--rm-green-50)] border border-[var(--rm-green-100)] mb-5">
                <Icon className="w-5 h-5 text-[var(--rm-green-600)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--rm-green-900)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--rm-text-secondary)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Grand Opening & Reservation Section
// ════════════════════════════════════════════
function ReservationSection() {
  const [formData, setFormData] = useState({
    parentName: '', phone: '', studentGrade: '', interest: '', type: '학부모 설명회',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="section-4" className="py-24 lg:py-32 bg-[var(--rm-ivory)]">
      <div id="reservation" className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-600)] mb-4">
              Grand Opening
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--rm-green-900)] tracking-tight mb-6">
              2026년 7월 20일,<br />
              <span className="text-[var(--rm-gold-600)]">부천 옥길동</span>에서<br />
              만납니다
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--rm-gold-500)] to-transparent mb-8" />
            <p className="text-lg text-[var(--rm-text-secondary)] leading-relaxed mb-8">
              Read Master의 교육 철학과 커리큘럼을 직접 경험해보세요.
              개원 전 학부모 설명회와 1:1 상담을 통해
              자녀에게 가장 적합한 학습 경로를 함께 설계합니다.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Calendar, text: '개원일: 2026년 7월 20일 (월)' },
                { icon: MapPin, text: '위치: 경기도 부천시 옥길동' },
                { icon: Phone, text: '문의: 상담 예약 후 개별 안내' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-[var(--rm-text-secondary)]">
                  <div className="w-8 h-8 rounded-lg bg-[var(--rm-green-50)] border border-[var(--rm-green-100)] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[var(--rm-green-600)]" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[var(--rm-green-50)] border border-[var(--rm-green-100)]">
              <h4 className="font-bold text-[var(--rm-green-800)] mb-2">학부모 설명회 안내</h4>
              <p className="text-sm text-[var(--rm-text-secondary)] leading-relaxed">
                Read Master의 교육 철학, 커리큘럼 구조, 학습 관리 체계를 상세히 소개드립니다.
                설명회 후 개별 상담을 통해 학생 맞춤 학습 설계가 가능합니다.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--rm-ivory-deep)] shadow-xl shadow-[var(--rm-green-900)]/[0.04] p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--rm-green-50)] mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[var(--rm-green-600)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--rm-green-900)] mb-3">예약이 완료되었습니다</h3>
                <p className="text-[var(--rm-text-secondary)] leading-relaxed">
                  입력하신 연락처로 상세 안내를 드리겠습니다.<br />
                  Read Master와 함께 해주셔서 감사합니다.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[var(--rm-green-900)] mb-1">상담 및 설명회 예약</h3>
                <p className="text-sm text-[var(--rm-text-muted)] mb-8">아래 정보를 입력해 주시면 개별 안내드리겠습니다.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--rm-text-secondary)] mb-1.5">
                      학부모 성함 <span className="text-[var(--rm-gold-600)]">*</span>
                    </label>
                    <input
                      type="text" required value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)] text-sm focus:outline-none focus:border-[var(--rm-green-400)] focus:ring-2 focus:ring-[var(--rm-green-400)]/20 transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--rm-text-secondary)] mb-1.5">
                      연락처 <span className="text-[var(--rm-gold-600)]">*</span>
                    </label>
                    <input
                      type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)] text-sm focus:outline-none focus:border-[var(--rm-green-400)] focus:ring-2 focus:ring-[var(--rm-green-400)]/20 transition-all"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--rm-text-secondary)] mb-1.5">
                      학생 학년 <span className="text-[var(--rm-gold-600)]">*</span>
                    </label>
                    <select
                      required value={formData.studentGrade}
                      onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)] text-sm focus:outline-none focus:border-[var(--rm-green-400)] focus:ring-2 focus:ring-[var(--rm-green-400)]/20 transition-all appearance-none"
                    >
                      <option value="">학년을 선택해 주세요</option>
                      <optgroup label="초등학교">
                        <option>초등 3학년</option><option>초등 4학년</option>
                        <option>초등 5학년</option><option>초등 6학년</option>
                      </optgroup>
                      <optgroup label="중학교">
                        <option>중학 1학년</option><option>중학 2학년</option><option>중학 3학년</option>
                      </optgroup>
                      <optgroup label="고등학교">
                        <option>고등 1학년</option><option>고등 2학년</option><option>고등 3학년</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--rm-text-secondary)] mb-1.5">관심 분야</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)] text-sm focus:outline-none focus:border-[var(--rm-green-400)] focus:ring-2 focus:ring-[var(--rm-green-400)]/20 transition-all appearance-none"
                    >
                      <option value="">선택해 주세요</option>
                      <option>영어 리터러시 (원서 읽기)</option>
                      <option>국어 리터러시 (독해·논술)</option>
                      <option>수능·내신 대비</option>
                      <option>디지털 리터러시</option>
                      <option>종합 상담</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--rm-text-secondary)] mb-1.5">
                      예약 유형 <span className="text-[var(--rm-gold-600)]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['학부모 설명회', '1:1 상담'].map((t) => (
                        <button key={t} type="button"
                          onClick={() => setFormData({ ...formData, type: t })}
                          className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                            formData.type === t
                              ? 'bg-[var(--rm-green-800)] text-white border-[var(--rm-green-800)]'
                              : 'bg-[var(--rm-ivory)] text-[var(--rm-text-secondary)] border-[var(--rm-ivory-deep)] hover:border-[var(--rm-green-300)]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-xl bg-[var(--rm-green-800)] text-white font-semibold hover:bg-[var(--rm-green-700)] transition-all shadow-lg shadow-[var(--rm-green-900)]/10 flex items-center justify-center gap-2"
                  >
                    예약 신청하기
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-center text-[var(--rm-text-light)]">
                    입력하신 정보는 상담 안내 목적으로만 사용됩니다.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Location Section
// ════════════════════════════════════════════
function LocationSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--rm-gold-600)] mb-4">Location</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--rm-green-900)] tracking-tight mb-6">
              부천 옥길동에서<br />만나실 수 있습니다
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--rm-gold-500)] to-transparent mb-8" />
            <p className="text-[var(--rm-text-secondary)] leading-relaxed mb-8">
              Read Master는 부천시 옥길동에 위치합니다.
              상세 주소와 교통 안내는 개원 전 별도로 안내드릴 예정입니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--rm-green-600)]" />
                <span className="text-[var(--rm-text-secondary)] font-medium">경기도 부천시 옥길동</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[var(--rm-green-600)]" />
                <span className="text-[var(--rm-text-secondary)] font-medium">2026년 7월 20일 개원</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--rm-green-600)]" />
                <span className="text-[var(--rm-text-secondary)] font-medium">상담 예약 후 개별 안내</span>
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-[var(--rm-ivory)] border border-[var(--rm-ivory-deep)] overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-[var(--rm-green-300)] mx-auto mb-4" />
              <p className="text-lg font-bold text-[var(--rm-green-900)] mb-2">부천시 옥길동</p>
              <p className="text-sm text-[var(--rm-text-muted)]">상세 위치는 개원 시 공개됩니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
// Footer
// ════════════════════════════════════════════
function Footer() {
  return (
    <footer className="bg-[var(--rm-green-950)] text-[var(--rm-green-300)]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--rm-green-800)] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-[var(--rm-gold-300)]" />
              </div>
              <span className="text-lg font-bold text-white">Read Master</span>
            </div>
            <p className="text-sm leading-relaxed">
              읽고, 이해하고, 미래를 만드는 힘.<br />
              문해력 중심 프리미엄 교육 아카데미.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--rm-green-200)] mb-4">안내</h4>
            <div className="space-y-2.5 text-sm">
              <p>경기도 부천시 옥길동</p>
              <p>2026년 7월 20일 개원</p>
              <p>상담 예약: 홈페이지 접수</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--rm-green-200)] mb-4">프로그램</h4>
            <div className="space-y-2.5 text-sm">
              <p>영어 리터러시 (원서 읽기)</p>
              <p>국어 리터러시 (독해·논술)</p>
              <p>수능·내신 대비</p>
              <p>디지털 리터러시</p>
            </div>
          </div>
        </div>
        <div className="premium-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--rm-green-400)]/40">&copy; 2026 Read Master Academy. All rights reserved.</p>
          <p className="text-xs text-[var(--rm-green-400)]/30 italic">&ldquo;읽는 힘이 모든 학습의 시작입니다&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}

// ════════════════════════════════════════════
// Main Page
// ════════════════════════════════════════════
export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <CoreStrengthsSection />
      <ProgramsSection />
      <DigitalLiteracySection />
      <TrustSection />
      <ReservationSection />
      <LocationSection />
      <Footer />
    </>
  );
}
