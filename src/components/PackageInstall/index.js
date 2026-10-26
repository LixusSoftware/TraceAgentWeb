import React, {useState} from 'react';
import { Clipboard, Check } from 'lucide-react';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function CommandRow({label, command}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = command;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <code className={styles.command}>{command}</code>
      <button className={styles.copyBtn} onClick={handleCopy} title={translate({id: 'packageInstall.copy', message: 'Copy {label} command'}, {label})}>
        {copied ? <Check size={16} /> : <Clipboard size={16} />}
      </button>
    </div>
  );
}

export default function PackageInstall({packages = ['trace-agent-sdk']}) {
  const list = packages.join(' ');
  return (
    <div className={styles.container}>
      <CommandRow label="pip" command={`pip install ${list}`} />
      <CommandRow label="uv" command={`uv add ${list}`} />
    </div>
  );
}
