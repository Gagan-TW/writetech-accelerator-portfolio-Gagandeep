import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-documentation/reference/chimoney/chimoney-demo-api",
    },
    {
      type: "category",
      label: "Wallet",
      items: [
        {
          type: "doc",
          id: "api-documentation/reference/chimoney/get-wallet-balance",
          label: "Check wallet balance",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "api-documentation/reference/chimoney/send-payment",
          label: "Send money",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "api-documentation/reference/chimoney/get-transaction-status",
          label: "Get transaction status",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
