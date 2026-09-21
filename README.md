# Nature's Medicine API

### A containerized NestJS REST API with a PostGreSQL database linked by Docker Compose

> **Portfolio Project · JavaScript/TypeScript · NodeJS · Jest · NestJS · PostGreSQL · Docker Compose · CI/CD**

---

**Herbs, Herbs, and More Herbs!**

A NestJS proof-of-concept API exploring how traditional herbal medicine knowledge can be organized into a **structured, searchable, and extensible database**. The project focuses on traditional medicine systems from around the world, including **Traditional Chinese Medicine (TCM), Ayurvedic medicine, and Unani Tibb**.

<p align="center">
  <img width="572" height="400" alt="API GET request test using Bruno" src="https://github.com/user-attachments/assets/2839e04f-1cb1-468f-aaab-7f33192b7c33" />
</p>

> **Disclaimer:** This project is for educational and informational purposes only. It is intended to supplement—not replace—professional medical advice, evidence-based treatment, or consultation with a qualified healthcare provider.

## Overview

Modern healthcare can sometimes leave patients with limited options due to cost, accessibility, or treatment constraints. This project explores shows how software could make traditional herbal knowledge easier to organize and access while maintaining a clear separation between **information and medical decision-making**. It solves the issue of lack of accessibility and structure that has made these fields and knowledge seem out of reach for beginners and the general populace. If expanded on and combined with front-end applications, it could also provided medical practitioners and healthcare students with a centralized resource for medicinal consumables to help learn and guide patients properly and confidently.  

Built with **NestJS, TypeORM, PostgreSQL, and Docker Compose**, the API uses structured entities, interfaces, and relational tables to create a foundation for a larger herbal medicine knowledge platform.

The project also explores how thoughtful **UX design, community collaboration, and structured data** could make complex traditional knowledge more approachable for developers, researchers, healthcare professionals, and patients.

### Key Design Idea

> **Create a developer-friendly API that makes complex traditional medicine knowledge structured, searchable, and extensible.**

The current implementation serves as a foundation that could eventually support additional data sources, contributors, integrations, and user-facing applications.

## The Stack

| Technology         | Purpose                                |
| ------------------ | -------------------------------------- |
| **TypeScript**     | Application language and strict typing |
| **Node.js**        | Server runtime                         |
| **NestJS**         | Backend framework                      |
| **TypeORM**        | Object-relational mapping              |
| **PostgreSQL**     | Relational database                    |
| **Docker Compose** | Database and development environment   |
| **npm**            | Package management                     |

## What I Learned

* **API development** — designing a structured backend for a domain-specific application
* **Strict typing** — using TypeScript interfaces and types to improve reliability
* **Organized architecture** — separating application responsibilities into maintainable components
* **Relational database design** — modeling herbal information through database entities and relationships
* **ORM development** — using TypeORM repositories instead of manually writing SQL queries
* **Docker development** — containerizing PostgreSQL and managing persistent database storage
* **Developer experience** — writing code and documentation with maintainability and readability in mind
* **Code documentation** — using comments strategically to clarify complex logic without over-documenting simple code

## Project Setup

Ensure that you have npm up-to-date and Docker installed, logged in, and running

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

```bash
npm run test
```

### 3. Start the Application (Docker Compose)

```bash
docker compose up
```

## Next Steps

### Farming & Gardening Integrations

Explore integrations with gardening and plant-care applications to connect herbal knowledge with **plant cultivation, growing conditions, and harvesting information**.

### LLM & Herbalist Collaboration

Explore collaboration with herbalists and language models to provide educational information about **herb preparation, brewing methods, processing, and traditional uses**, while maintaining appropriate safety boundaries.

### Community Knowledge

Develop a contribution system that allows qualified practitioners, researchers, and community members to expand and improve the database while maintaining **data provenance and quality controls**.

---

**Project Goal:** Explore how modern backend architecture can make traditional knowledge **more accessible, structured, and usable** while respecting the distinction between cultural knowledge, educational information, and evidence-based medical practice.
