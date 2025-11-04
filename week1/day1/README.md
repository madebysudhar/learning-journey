# 🧠 Day 1 – Hello World Webhook (n8n + Postman)

## 🌍 Overview
This workflow demonstrates the basic *Request → Response* pattern used in all APIs and automations.

- **Tool used for automation:** n8n
- **Tool used for testing:** Postman
- **Goal:** Learn how systems communicate — one sends data (Postman) and the other listens & replies (n8n).

---

## ⚙️ Workflow Structure
**1️⃣ Webhook Node (Receiver)**
- Method: `POST`
- Respond setting: *Using Respond to Webhook Node*
- Purpose: Waits for data at a unique Test URL.

**2️⃣ Respond to Webhook Node (Responder)**
- Response Code: `200`
- Response Header: `Content-Type: application/json`
- Response Body:
  ```json
  { "message": "Hello, {{$json.name}} from n8n!" }
# 🧠 Day 1 – Hello World Webhook (n8n + Postman)

## 🌍 Overview
This workflow demonstrates the basic *Request → Response* pattern used in all APIs and automations.

- **Tool used for automation:** n8n
- **Tool used for testing:** Postman
- **Goal:** Learn how systems communicate — one sends data (Postman) and the other listens & replies (n8n).

---

## ⚙️ Workflow Structure
**1️⃣ Webhook Node (Receiver)**
- Method: `POST`
- Respond setting: *Using Respond to Webhook Node*
- Purpose: Waits for data at a unique Test URL.

**2️⃣ Respond to Webhook Node (Responder)**
- Response Code: `200`
- Response Header: `Content-Type: application/json`
- Response Body:
  ```json
  { "message": "Hello, {{$json.name}} from n8n!" }

