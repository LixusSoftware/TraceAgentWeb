import React, {useEffect, useRef, useState} from 'react';

const COLOR_STATES = [
  {
    body: '#c9943e',
    glow: 'rgba(201, 148, 62, 0.24)',
    shadow: 'rgba(201, 148, 62, 0.30)',
  },
  {
    body: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.24)',
    shadow: 'rgba(239, 68, 68, 0.28)',
  },
  {
    body: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.24)',
    shadow: 'rgba(34, 197, 94, 0.28)',
  },
  {
    body: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.24)',
    shadow: 'rgba(56, 189, 248, 0.28)',
  },
  {
    body: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.24)',
    shadow: 'rgba(168, 85, 247, 0.28)',
  },
];

const DEATH_CLICK_LIMIT = 8;

function getGhostTheme(clickCount, isDead) {
  if (isDead) {
    return {
      '--ghost-body': '#9aa4b2',
      '--ghost-eye': '#eef2f7',
      '--ghost-pupil': '#5b6472',
      '--ghost-shadow': 'rgba(16, 24, 40, 0.45)',
      '--ghost-glow': 'rgba(154, 164, 178, 0.18)',
    };
  }

  const theme = COLOR_STATES[clickCount % COLOR_STATES.length];

  return {
    '--ghost-body': theme.body,
    '--ghost-eye': '#ffffff',
    '--ghost-pupil': '#0f172a',
    '--ghost-shadow': theme.shadow,
    '--ghost-glow': theme.glow,
  };
}

export default function GhostEasterEgg() {
  const [clickCount, setClickCount] = useState(0);
  const [isHurting, setIsHurting] = useState(false);
  const hurtTimerRef = useRef(null);
  const reviveTimerRef = useRef(null);
  const isDead = clickCount >= DEATH_CLICK_LIMIT;
  const style = getGhostTheme(clickCount, isDead);

  useEffect(() => {
    return () => {
      if (hurtTimerRef.current) {
        clearTimeout(hurtTimerRef.current);
      }
      if (reviveTimerRef.current) {
        clearTimeout(reviveTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isDead) {
      reviveTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 5000);
    }

    return () => {
      if (reviveTimerRef.current) {
        clearTimeout(reviveTimerRef.current);
      }
    };
  }, [isDead]);

  const handleClick = () => {
    if (isDead) {
      return;
    }

    if (hurtTimerRef.current) {
      clearTimeout(hurtTimerRef.current);
    }

    setIsHurting(true);
    setClickCount(currentCount => {
      if (currentCount >= DEATH_CLICK_LIMIT) {
        return currentCount;
      }

      return currentCount + 1;
    });

    hurtTimerRef.current = setTimeout(() => {
      setIsHurting(false);
    }, 280);
  };

  return (
    <button
      type="button"
      className={`ghost-easter-egg${isDead ? ' ghost-easter-egg--dead' : ''}${isHurting ? ' ghost-easter-egg--hurt' : ''}`}
      onClick={handleClick}
      aria-label={isDead ? 'El fantasma ha muerto' : 'Haz clic en el fantasma para cambiar su color'}
      title={isDead ? 'El fantasma ya ha muerto' : 'Haz clic en el fantasma'}
      aria-pressed={isHurting}
      style={style}
    >
      <div id="ghost" aria-hidden="true">
        <div id="red">
          <div id="pupil"></div>
          <div id="pupil1"></div>
          <div id="eye"></div>
          <div id="eye1"></div>
          <div id="top0"></div>
          <div id="top1"></div>
          <div id="top2"></div>
          <div id="top3"></div>
          <div id="top4"></div>
          <div id="st0"></div>
          <div id="st1"></div>
          <div id="st2"></div>
          <div id="st3"></div>
          <div id="st4"></div>
          <div id="st5"></div>
          <div id="an1"></div>
          <div id="an2"></div>
          <div id="an3"></div>
          <div id="an4"></div>
          <div id="an5"></div>
          <div id="an6"></div>
          <div id="an7"></div>
          <div id="an8"></div>
          <div id="an9"></div>
          <div id="an10"></div>
          <div id="an11"></div>
          <div id="an12"></div>
          <div id="an13"></div>
          <div id="an14"></div>
          <div id="an15"></div>
          <div id="an16"></div>
          <div id="an17"></div>
          <div id="an18"></div>
        </div>
        <div id="shadow"></div>
      </div>
    </button>
  );
}