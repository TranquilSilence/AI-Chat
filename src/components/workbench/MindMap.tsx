import { Network, Zap } from 'lucide-react';
import { useState } from 'react';

interface Node {
  id: string;
  label: string;
  children?: string[];
}

const defaultMindMap: Node = {
  id: 'root',
  label: 'Core Concept',
  children: ['topic1', 'topic2', 'topic3'],
};

const nodeData: Record<string, Node> = {
  root: { id: 'root', label: 'Machine Learning', children: ['topic1', 'topic2', 'topic3'] },
  topic1: { id: 'topic1', label: 'Supervised Learning' },
  topic2: { id: 'topic2', label: 'Unsupervised Learning' },
  topic3: { id: 'topic3', label: 'Reinforcement Learning' },
};

export default function MindMap() {
  const [activeNode, setActiveNode] = useState('root');

  const renderNode = (nodeId: string, x: number, y: number, level: number) => {
    const node = nodeData[nodeId];
    const radius = 50;
    const isActive = activeNode === nodeId;

    return (
      <g key={nodeId}>
        {node.children?.map((childId, index) => {
          const childCount = node.children?.length || 1;
          const angle = (index / childCount) * Math.PI - Math.PI / 2;
          const distance = 150 + level * 30;
          const childX = x + Math.cos(angle) * distance;
          const childY = y + Math.sin(angle) * distance;

          return (
            <g key={childId}>
              <line
                x1={x}
                y1={y}
                x2={childX}
                y2={childY}
                stroke="#cbd5e1"
                strokeWidth="2"
                opacity="0.6"
              />
              {renderNode(childId, childX, childY, level + 1)}
            </g>
          );
        })}

        <circle
          cx={x}
          cy={y}
          r={radius}
          fill={isActive ? '#06b6d4' : '#3b82f6'}
          opacity={isActive ? 1 : 0.8}
          className="cursor-pointer hover:opacity-100 transition-all"
          onClick={() => setActiveNode(nodeId)}
          style={{
            filter: isActive ? 'drop-shadow(0 0 15px #06b6d4)' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
          }}
        />
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="13"
          fontWeight="600"
          pointerEvents="none"
        >
          {node.label.split(' ').map((word, i) => (
            <tspan key={i} x={x} dy={i === 0 ? 0 : 14}>
              {word}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Network className="text-blue-600" size={24} />
          <h3 className="text-lg font-semibold">Mind Map</h3>
        </div>
        <button className="btn-secondary text-sm">
          <Zap size={16} className="inline mr-1" />
          Generate Map
        </button>
      </div>

      <div className="card">
        <svg width="100%" height="500" className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg">
          {renderNode('root', 300, 250, 0)}
        </svg>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-sm font-medium text-gray-700 mb-3">Node Details:</div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="font-semibold text-blue-900">{nodeData[activeNode]?.label}</div>
            <div className="text-sm text-blue-700 mt-1">
              {nodeData[activeNode]?.children ? `${nodeData[activeNode].children.length} subtopics` : 'Leaf node'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
