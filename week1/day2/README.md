# Week 1 – Day 2

## 🕒 Task 1: Time Greeter
**Goal:**  
Create an automation that greets based on the current time (Good Morning, Good Afternoon, Good Evening).

**Overview:**  
- Built using **n8n** with the following nodes:
  - **Schedule Trigger** → to run periodically.
  - **Date & Time** → extract the current hour.
  - **If nodes** → branch logic to decide which greeting to send.
  - **Slack node** → sends the greeting message.

**Learning Outcome:**  
Understood how scheduling works in n8n and how conditional logic controls message flow based on time.

**File:**  
- `day2_time-greeter.json`


---

## 💬 Task 2: Standup Reminder
**Goal:**  
Send a Slack reminder message only on weekdays (Monday to Friday) and skip weekends.

**Overview:**  
- Used **Schedule Trigger** to set the daily trigger (e.g., 9 AM).  
- Extracted current day using **Date & Time (Luxon - `cccc`)**.  
- Applied conditional logic in **If node** with this expression:
  ```js
  ["Monday","Tuesday","Wednesday","Thursday","Friday"].includes($json.day.trim())

