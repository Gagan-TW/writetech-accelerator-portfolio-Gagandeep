Welcome to the **Chimoney Sandbox API** docs.

The sandbox lets you experiment with wallet balance checks, payments, and
transaction look-ups using pre-funded test wallets.

| Environment | Base URL |
|-------------|----------|
| **Sandbox** | `https://api.chimoney.io/v1` |

* **No real money moves** in sandbox — spend your test credits freely.  
* You’ll generate a *personal API key* from **Developer → API** in the dashboard.

## 1  Create a sandbox account

1. Browse to **https://sandbox.chimoney.io**  
2. Click **Sign up** and fill in e-mail + password.  
3. Verify your e-mail (or phone) to reach the **dashboard**.

You now have two pre-funded wallets (USD & Mobile-Money), each with **$1 000**
of test credit.

## 2  Generate your API key

1. In the left nav choose **Developer → API**.  
2. Click **Add new app**, give it any name, press **Create**.  
3. Copy the **API Key** — keep it secret.

```
Authorization: Bearer YOUR_API_KEY_HERE
```

## First call – check wallet balance

```bash
curl -X GET \
  https://api.chimoney.io/v1/wallet/balance \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

**Sample response**

```json
{
  "balance": 1000.00,
  "currency": "USD"
}
```

## 4  Send a test payout (air-time)

```bash
curl -X POST \
  https://api.chimoney.io/v1/payments/send \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "amount": 10,
        "currency": "USD",
        "recipient": "254712345678"
      }'
```

**Sample response**

```json
{
  "transactionId": "tx_xxxxx",
  "status": "pending"
}
```

Use that `transactionId` with **GET /transactions/{id}** to watch it complete.


> **Tip:** stay on the *Sandbox* server when you test; production requires a
> live-mode API key.



