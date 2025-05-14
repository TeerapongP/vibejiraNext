# Vibejira

Vibejira is a web application built with **Next.js** that integrates with **Jira** to help manage project issues and workflows seamlessly. It allows users to track defect tickets and interact with Jira's REST APIs.

## Features

- **Dashboard View**: Displays Jira defect tickets.
- **Filtering**: Filter tickets by status (Ongoing, Triage Pending, Waiting, Done, Rejected, Not RCCL Issue), assignee, and date (Last Week, Last Month, All Time, or Custom Date Range).
- **Summary Cards**: Show ticket counts for key statuses.
- **Collapsible Ticket Tables**: Group tickets by priority (P1, P2, Other).
- **Side Panel**: Clickable ticket rows open a side panel with ticket details and comments.
- **Update Ticket State**: Ability to update ticket states (labels) via buttons in the side panel.
- **Comment on Tickets**: Add comments to tickets via the side panel.
- **Link to Original Jira Ticket**: A direct link to open the original Jira ticket in a new tab.

## Getting Started

Follow these steps to get started with the project.

### 1. Run the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

2. Edit the Page

You can start editing the page by modifying app/page.tsx. The page will auto-update as you edit the file.

3. Optimize Fonts

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Learn More

To learn more about Next.js, take a look at the following resources:
	•	Next.js Documentation - Learn about Next.js features and API.
	•	Learn Next.js - An interactive tutorial on Next.js.

You can check out the Next.js GitHub repository - Your feedback and contributions are welcome!

Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform, created by the creators of Next.js.

For more deployment options, check out the Next.js Deployment Documentation.
---

### คำอธิบาย:

- **Features**: รายการคุณสมบัติที่สำคัญของแอปพลิเคชัน
- **Getting Started**: ขั้นตอนการติดตั้งและรันโปรเจกต์ในเครื่อง
- **Learn More**: แหล่งข้อมูลเพื่อศึกษาข้อมูลเกี่ยวกับ Next.js เพิ่มเติม
- **Deployment**: แนวทางการ deploy โปรเจกต์ไปยัง Vercel

คุณสามารถเพิ่มข้อมูลการตั้งค่า API หรือการใช้งาน Jira API ถ้าจำเป็นในส่วน **Getting Started** ได้อีกด้วยครับ 😄

ถ้าต้องการแก้ไขเพิ่มเติมหรือคำแนะนำอื่น ๆ บอกได้เลยครับ!
