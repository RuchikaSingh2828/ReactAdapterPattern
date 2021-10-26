import ReactFlow, { isNode } from "react-flow-renderer";

const DiagramAdapter = ({ nodes, onActivateNode, onDeactivateAll }) => {
  const onSelectionChange = (elements) => {
    if (elements) {
      const selectedNodes = elements.filter((els) => isNode(els));
      if (selectedNodes.length > 0) {
        onActivateNode(selectedNodes[0].id);
      }
    }
  };

  const onPanelClick = () => onDeactivateAll();

  return (
    <div style={{ height: 650 }}>
      <ReactFlow
        elements={nodes}
        onSelectionChange={onSelectionChange}
        onPanleClick={onPanelClick}
      />
    </div>
  );
};

export default DiagramAdapter;
