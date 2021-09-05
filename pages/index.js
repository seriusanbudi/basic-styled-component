import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Tab from "../components/Tab";

const content = [
  `1. "With Awesomic, we’ve developed neat easy-to-modify design. Such good work helped us raise $500K+ from investors and get hundreds of new users. Besides, the team was happy to help with many things outside requirements and ready to fix issues immediately."`,
  `2. "With Awesomic, we always end up with great design. Their designer knows our style and our brand really well so it feels like they're part of our team. And the turnaround is so fast that sometimes we even get updates quicker than expected. Excellent value for money!"`,
  `3. "What I love about Awesomic is that we can collaborate with a really good designer. And the only thing that might make us cancel the subscription is hiring an in-house team. To be honest, I don’t think we’ll need that in the foreseeable future - Awesomic covers all our needs."`,
];
const StartupTabContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= content.length) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(content.length - 1);
      return;
    }

    setCurrentIndex(prevIndex);
  };

  return (
    <div>
      <div>{content[currentIndex]}</div>
      <div>
        <button onClick={() => handlePrev()}>Prev</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  );
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState("tab-1");

  return (
    <div>
      {/* <Card>ini konten 1</Card>
      <Card>ini konten 2</Card>
      <Card>ini konten yang terakhir</Card>

      <div style={{ display: "flex", gap: 10 }}>
        <Button color="red">Button 1</Button>
        <Button noBorder>Button 2</Button>
        <Button>Button 3</Button>
      </div> */}

      <div style={{ display: "flex" }}>
        <Tab
          active={
            currentTab === "tab-1" ||
            currentTab === "tab-2" ||
            currentTab === "tab-3"
          }
          onClick={() => setCurrentTab("tab-1")}
        >
          Tab 1
        </Tab>
        <Tab
          active={currentTab === "tab-2" || currentTab === "tab-3"}
          onClick={() => setCurrentTab("tab-2")}
        >
          Tab 2
        </Tab>
        <Tab
          active={currentTab === "tab-3"}
          onClick={() => setCurrentTab("tab-3")}
        >
          Tab 3
        </Tab>
      </div>
      {currentTab === "tab-1" && (
        <div>
          <StartupTabContent />

          <div>
            <Button onClick={() => setCurrentTab("tab-2")}>Next</Button>
          </div>
        </div>
      )}
      {currentTab === "tab-2" && (
        <div>
          <div>ini tulisan untuk tab 2</div>
          <div>
            <Button onClick={() => setCurrentTab("tab-1")}>Back</Button>
            <Button onClick={() => setCurrentTab("tab-3")}>Next</Button>
          </div>
        </div>
      )}
      {currentTab === "tab-3" && (
        <div>
          <div>ini tulisan untuk tab 2</div>
          <div>
            <Button onClick={() => setCurrentTab("tab-2")}>Back</Button>
            <Button onClick={() => console.log("submit form")}>Submit</Button>
          </div>
        </div>
      )}
    </div>
  );
}
