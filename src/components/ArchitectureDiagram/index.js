import React, { useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MarkerType,
  Handle,
  Position,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Bot, Package, Link as LinkIcon, Server, MonitorPlay } from 'lucide-react';
import { useColorMode } from '@docusaurus/theme-common';

const CustomNode = ({ data, isConnectable }) => {
  const Icon = data.icon;
  return (
    <div style={{
      background: data.bg || 'var(--ta-surface-1)',
      color: data.color || 'var(--ifm-font-color-base)',
      border: data.border ? `1px solid ${data.border}` : 'none',
      padding: '12px 24px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      minWidth: '200px',
      boxShadow: 'var(--ifm-global-shadow-md)',
      fontWeight: '600',
      fontFamily: 'var(--ifm-font-family-base)'
    }}>
      {data.hasTopHandle && (
        <Handle type="target" position={Position.Top} isConnectable={isConnectable} style={{ background: '#c9943e', border: 'none' }} />
      )}
      
      {Icon && <Icon size={24} />}
      <div>{data.label}</div>
      
      {data.subLabels && (
        <div style={{ display: 'flex', gap: '4px', marginTop: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.subLabels.map(s => (
            <span key={s} style={{ 
              fontSize: '0.7rem', 
              background: 'rgba(255, 255, 255, 0.2)', 
              padding: '2px 8px', 
              borderRadius: '100px',
              fontWeight: '500'
            }}>
              {s}
            </span>
          ))}
        </div>
      )}
      
      {data.hasBottomHandle && (
        <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} style={{ background: '#c9943e', border: 'none' }} />
      )}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export default function ArchitectureDiagram() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const initialNodes = [
    {
      id: 'agent',
      type: 'custom',
      position: { x: 250, y: 0 },
      data: { 
        label: 'Your Agent Code', 
        icon: Bot,
        bg: 'var(--ta-surface-3)',
        border: 'var(--ta-border)',
        hasBottomHandle: true
      },
    },
    {
      id: 'sdk',
      type: 'custom',
      position: { x: 100, y: 150 },
      data: { 
        label: 'TraceAgent SDK', 
        icon: Package,
        bg: isDark ? 'rgba(143, 163, 204, 0.1)' : 'rgba(43, 58, 92, 0.08)',
        color: isDark ? '#c9d3e8' : 'var(--ta-accent-navy)',
        border: isDark ? 'rgba(143, 163, 204, 0.2)' : 'rgba(43, 58, 92, 0.2)',
        hasTopHandle: true,
        hasBottomHandle: true
      },
    },
    {
      id: 'langchain',
      type: 'custom',
      position: { x: 400, y: 150 },
      data: { 
        label: 'LangChain Callback', 
        icon: LinkIcon,
        bg: isDark ? 'rgba(212, 165, 78, 0.08)' : 'rgba(201, 148, 62, 0.08)',
        color: isDark ? 'var(--ta-accent-amber)' : 'var(--ta-accent-amber-dark)',
        border: isDark ? 'rgba(212, 165, 78, 0.2)' : 'rgba(201, 148, 62, 0.2)',
        hasTopHandle: true,
        hasBottomHandle: true
      },
    },
    {
      id: 'server',
      type: 'custom',
      position: { x: 250, y: 300 },
      data: { 
        label: 'TraceAgent Server', 
        icon: Server,
        subLabels: ['FastAPI', 'SQLite / PostgreSQL'],
        bg: 'var(--ta-gradient-primary)',
        color: 'white',
        hasTopHandle: true,
        hasBottomHandle: true
      },
    },
    {
      id: 'ui',
      type: 'custom',
      position: { x: 250, y: 450 },
      data: { 
        label: 'TraceAgent UI', 
        icon: MonitorPlay,
        subLabels: ['Interactive Timeline', 'File Diffs & Artifacts'],
        bg: 'var(--ta-gradient-accent)',
        color: 'white',
        hasTopHandle: true
      },
    },
  ];

  const edgeOptions = {
    type: 'smoothstep',
    animated: true,
    style: { stroke: isDark ? '#d4a24c' : '#c9943e', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: isDark ? '#d4a24c' : '#c9943e',
    },
  };

  const initialEdges = [
    { id: 'e1', source: 'agent', target: 'sdk', ...edgeOptions },
    { id: 'e2', source: 'agent', target: 'langchain', ...edgeOptions },
    { 
      id: 'e3', source: 'sdk', target: 'server', 
      label: 'HTTP / REST',
      labelStyle: { fill: isDark ? '#c9d3e8' : '#2b3a5c', fontWeight: 600, fontSize: 11 },
      labelBgStyle: { fill: isDark ? '#131b2c' : '#f8fafc', fillOpacity: 0.8 },
      ...edgeOptions 
    },
    { 
      id: 'e4', source: 'langchain', target: 'server',
      ...edgeOptions
    },
    { 
      id: 'e5', source: 'server', target: 'ui', 
      label: 'HTTP / REST',
      labelStyle: { fill: isDark ? '#c9d3e8' : '#2b3a5c', fontWeight: 600, fontSize: 11 },
      labelBgStyle: { fill: isDark ? '#131b2c' : '#f8fafc', fillOpacity: 0.8 },
      ...edgeOptions 
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes and edges on color mode change
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [isDark]);

  return (
    <div style={{ width: '100%', height: '600px', margin: '2rem 0', border: '1px solid var(--ta-border)', borderRadius: '16px', background: 'var(--ta-surface-2)', overflow: 'hidden' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        attributionPosition="bottom-right"
      >
        <Background color={isDark ? '#4e6290' : '#8fa3cc'} gap={16} size={1} />
        <Controls style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--ta-surface-1)' }} />
      </ReactFlow>
    </div>
  );
}
