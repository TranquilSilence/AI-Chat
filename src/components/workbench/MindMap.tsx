import { Network, Zap, Plus, Move, ArrowRight, Trash2, History, Download, Upload } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  children?: string[];
}

interface Version {
  id: string;
  name: string;
  timestamp: Date;
}

const defaultMindMap: Node = {
  id: 'root',
  label: 'Core Concept',
  children: ['topic1', 'topic2', 'topic3'],
};

const initialNodeData: Record<string, Node> = {
  root: { id: 'root', label: 'Machine Learning', x: 400, y: 250, children: ['topic1', 'topic2', 'topic3'] },
  topic1: { id: 'topic1', label: 'Supervised Learning', x: 250, y: 150 },
  topic2: { id: 'topic2', label: 'Unsupervised Learning', x: 400, y: 100 },
  topic3: { id: 'topic3', label: 'Reinforcement Learning', x: 550, y: 150 },
};

export default function MindMap() {
  const [nodeData, setNodeData] = useState<Record<string, Node>>(initialNodeData);
  const [activeNode, setActiveNode] = useState('root');
  const [selectedTool, setSelectedTool] = useState<'select' | 'move' | 'connect' | 'delete'>('select');
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [versions, setVersions] = useState<Version[]>([
    { id: 'v1', name: 'Version 1', timestamp: new Date() }
  ]);
  const [activeVersion, setActiveVersion] = useState('v1');
  const svgRef = useRef<SVGSVGElement>(null);

  const handleNodeClick = (nodeId: string, event: React.MouseEvent<SVGCircleElement>) => {
    event.stopPropagation();

    if (selectedTool === 'select') {
      setActiveNode(nodeId);
    } else if (selectedTool === 'connect') {
      if (connectingFrom === null) {
        setConnectingFrom(nodeId);
      } else {
        if (connectingFrom !== nodeId) {
          setNodeData(prev => ({
            ...prev,
            [connectingFrom]: {
              ...prev[connectingFrom],
              children: [...(prev[connectingFrom].children || []), nodeId]
            }
          }));
        }
        setConnectingFrom(null);
      }
    } else if (selectedTool === 'delete') {
      if (nodeId !== 'root') {
        setNodeData(prev => {
          const newData = { ...prev };
          delete newData[nodeId];
          Object.keys(newData).forEach(key => {
            if (newData[key].children) {
              newData[key].children = newData[key].children?.filter(id => id !== nodeId);
            }
          });
          return newData;
        });
      }
    }
  };

  const handleNodeMouseDown = (nodeId: string, event: React.MouseEvent<SVGCircleElement>) => {
    if (selectedTool === 'move') {
      event.stopPropagation();
      const node = nodeData[nodeId];
      const svg = svgRef.current;
      if (svg) {
        const pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
        setDragOffset({ x: svgP.x - node.x, y: svgP.y - node.y });
        setDraggingNode(nodeId);
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (draggingNode && selectedTool === 'move') {
      const svg = svgRef.current;
      if (svg) {
        const pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
        setNodeData(prev => ({
          ...prev,
          [draggingNode]: {
            ...prev[draggingNode],
            x: svgP.x - dragOffset.x,
            y: svgP.y - dragOffset.y
          }
        }));
      }
    }
  };

  const handleMouseUp = () => {
    setDraggingNode(null);
  };

  const addNewNode = () => {
    const newId = `node${Object.keys(nodeData).length + 1}`;
    setNodeData(prev => ({
      ...prev,
      [newId]: {
        id: newId,
        label: 'New Node',
        x: 400,
        y: 400
      }
    }));
  };

  const saveVersion = () => {
    const newVersion: Version = {
      id: `v${versions.length + 1}`,
      name: `Version ${versions.length + 1}`,
      timestamp: new Date()
    };
    setVersions([...versions, newVersion]);
    setActiveVersion(newVersion.id);
  };

  const renderNode = (nodeId: string) => {
    const node = nodeData[nodeId];
    if (!node) return null;

    const radius = 50;
    const isActive = activeNode === nodeId;
    const isConnecting = connectingFrom === nodeId;

    return (
      <g key={nodeId}>
        <circle
          cx={node.x}
          cy={node.y}
          r={radius}
          fill={isConnecting ? '#f59e0b' : isActive ? '#06b6d4' : '#3b82f6'}
          opacity={isActive || isConnecting ? 1 : 0.8}
          className="cursor-pointer hover:opacity-100 transition-all"
          onClick={(e) => handleNodeClick(nodeId, e)}
          onMouseDown={(e) => handleNodeMouseDown(nodeId, e)}
          style={{
            filter: isActive ? 'drop-shadow(0 0 15px #06b6d4)' : isConnecting ? 'drop-shadow(0 0 15px #f59e0b)' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
          }}
        />
        <text
          x={node.x}
          y={node.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="13"
          fontWeight="600"
          pointerEvents="none"
        >
          {node.label.split(' ').map((word, i) => (
            <tspan key={i} x={node.x} dy={i === 0 ? 0 : 14}>
              {word}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  const renderConnections = () => {
    const lines: JSX.Element[] = [];
    Object.values(nodeData).forEach(node => {
      node.children?.forEach(childId => {
        const child = nodeData[childId];
        if (child) {
          lines.push(
            <line
              key={`${node.id}-${childId}`}
              x1={node.x}
              y1={node.y}
              x2={child.x}
              y2={child.y}
              stroke="#cbd5e1"
              strokeWidth="2"
              opacity="0.6"
            />
          );
        }
      });
    });
    return lines;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="card mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Network className="text-blue-600" size={20} />
            <h3 className="text-base font-semibold">Mind Map</h3>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={saveVersion} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Save Version">
              <History size={16} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Export">
              <Download size={16} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Import">
              <Upload size={16} className="text-gray-600" />
            </button>
            <button className="btn-secondary text-xs py-1.5 px-3">
              <Zap size={14} className="inline mr-1" />
              Generate
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedTool('select')}
              className={`p-2 rounded transition-all ${selectedTool === 'select' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              title="Select"
            >
              <Network size={16} className={selectedTool === 'select' ? 'text-blue-600' : 'text-gray-600'} />
            </button>
            <button
              onClick={() => setSelectedTool('move')}
              className={`p-2 rounded transition-all ${selectedTool === 'move' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              title="Move"
            >
              <Move size={16} className={selectedTool === 'move' ? 'text-blue-600' : 'text-gray-600'} />
            </button>
            <button
              onClick={() => { setSelectedTool('connect'); setConnectingFrom(null); }}
              className={`p-2 rounded transition-all ${selectedTool === 'connect' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              title="Connect Nodes"
            >
              <ArrowRight size={16} className={selectedTool === 'connect' ? 'text-blue-600' : 'text-gray-600'} />
            </button>
            <button
              onClick={() => setSelectedTool('delete')}
              className={`p-2 rounded transition-all ${selectedTool === 'delete' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              title="Delete"
            >
              <Trash2 size={16} className={selectedTool === 'delete' ? 'text-red-600' : 'text-gray-600'} />
            </button>
          </div>

          <button onClick={addNewNode} className="btn-primary text-xs py-2 px-3">
            <Plus size={14} className="inline mr-1" />
            Add Node
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-2">
          {versions.map(version => (
            <button
              key={version.id}
              onClick={() => setActiveVersion(version.id)}
              className={`px-3 py-1.5 text-xs rounded-lg whitespace-nowrap transition-all ${
                activeVersion === version.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {version.name}
            </button>
          ))}
        </div>
      </div>

      <div className="card flex-1 overflow-hidden">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {renderConnections()}
          {Object.keys(nodeData).map(nodeId => renderNode(nodeId))}
        </svg>
      </div>

      <div className="card mt-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Active Node:</div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="font-semibold text-blue-900">{nodeData[activeNode]?.label || 'None'}</div>
          <div className="text-xs text-blue-700 mt-1">
            {nodeData[activeNode]?.children ? `${nodeData[activeNode].children.length} connections` : 'No connections'}
          </div>
          {selectedTool === 'connect' && connectingFrom && (
            <div className="text-xs text-orange-600 mt-2 font-medium">
              Click another node to connect from {nodeData[connectingFrom]?.label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
