import React, {useState} from 'react';
import { Clipboard, Check } from 'lucide-react';
import styles from './styles.module.css';

export default function PackageInstall({packages = ['trace-agent-sdk']}) {
  const [copied, setCopied] = useState(false);
  const command = `pip install ${packages.join(' ')}`;

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
    <div className={styles.container}>
      <code className={styles.command}>{command}</code>
      <button className={styles.copyBtn} onClick={handleCopy} title="Copy to clipboard">
        {copied ? <Check size={16} /> : <Clipboard size={16} />}
      </button>
    </div>
  );
}
