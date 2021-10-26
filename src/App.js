import "./styles.css";

export default function App() {
  const nodes = [
    {
      id: "node_0",
      position: { x: 150, y: 25 },
      data: { label: "Start" }
    },
    {
      id: "node_1",
      position: { x: 150, y: 225 },
      data: { label: "End" }
    },
    {
      id: "node_0-node_1",
      type: "step",
      source: "node_0",
      target: "node_1"
    }
  ];

  const onActivateNode = (node) => {
    console.log("Activated", node);
  };
  const onDeactivateAll = (node) => {
    console.log("DeActivated all");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
