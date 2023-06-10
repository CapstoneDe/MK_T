import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const ERDiagram = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  const diagramCode = `
    erDiagram
            MEMBER {
                string MemberID
                string Password
                string Name
                int Age
                string Occupation
                string Grade
                int Point
            }
            PRODUCT {
                string ProductID
                string ProductName
                int StockQuantity
                int UnitPrice
            }
            MEMBER ||--o{ PRODUCT : "Purchase"          
  `;

  return <div className="mermaid">{diagramCode}</div>;
};

export default ERDiagram;
