import { memo, useEffect } from 'react';
import {
  Position,
  Handle,
  useReactFlow,
  type NodeProps,
  type Node,
} from '@xyflow/react';

function TaskNode({ id, data }: NodeProps<Node<{ duration: number }, "task">>) {
  const { updateNodeData } = useReactFlow();

  useEffect(() => {
    console.log(`TaskNode ${id} created`);
  }, [id]);

  const handleChange = (event) => {
    let value = event.target.value;
    if (value === '') {
      value = 0;
    } else {
      value = parseFloat(value);
    }
    if (!isNaN(value)) {
      updateNodeData(id, { duration: value });
    }
  };

  const handleBlur = (event) => {
    let value = event.target.value;
    if (value === '') {
      value = 0;
    } else {
      value = parseFloat(value);
    }
    if (!isNaN(value)) {
      updateNodeData(id, { duration: value });
    }
  };

  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <div>node {id}</div>
      <input
        type="text"
        // value={data.duration}
        // onChange={handleChange}
        onBlur={handleBlur}
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(TaskNode);
