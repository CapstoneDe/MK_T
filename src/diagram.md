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
