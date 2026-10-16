<div align="center">

# 🌐 POLYGLOT PROXY

<!-- Animated Typing Banner -->
<a href="https://github.com/vinaysingh-05/polyglot-edge-agent">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=A78BFA&center=true&vCenter=true&width=700&lines=One+Intelligent+Gate.+Infinite+AI+Possibilities.;Intelligent+Model+Routing+%26+Zero-Trust+Guardrails;FastAPI+Proxy+Gateway+%2B+Chrome+Extension+MV3;Local+Decision+Engine+at+the+Edge" alt="Polyglot Proxy Typing Banner" />
</a>

<p align="center">
  <b>High-performance AI routing middleware that evaluates prompts, enforces safety guardrails, and dynamically connects applications to suitable AI models.</b>
</p>

<!-- Animated & Dynamic Badges -->
<p align="center">
  <a href="#-live-deployments"><img src="https://img.shields.io/badge/Status-Live%20Production-success?style=for-the-badge&logo=render&logoColor=white&color=10B981" alt="Status" /></a>
  <a href="#-chrome-extension-package"><img src="https://img.shields.io/badge/Chrome%20Extension-v1.0%20Accepted-blue?style=for-the-badge&logo=googlechrome&logoColor=white&color=6366F1" alt="Chrome Extension" /></a>
  <a href="https://polyglot-edge-agent.onrender.com/docs"><img src="https://img.shields.io/badge/FastAPI-OpenAPI%20Spec-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React%2019-Vite%208-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" /></a>
</p>

---

### ⚡ Quick Navigation

[🌟 Overview](#-overview) • [✨ Core Features](#-core-features) • [🏛️ System Architecture](#-system-architecture) • [🧩 Chrome Extension Package](#-chrome-extension-package) • [💻 Developer Quickstart](#-developer-quickstart) • [🚀 Live Deployments](#-live-deployments) • [📬 Support](#-support--contact)

---

</div>

<br />

## 🌟 Overview

**Polyglot Proxy** is engineered for modern AI infrastructure. It acts as an intelligent proxy boundary between user interfaces, enterprise software, browser extensions, and diverse AI model providers.

<p align="center">
  <img src="./assets/landing%20page.png" alt="Polyglot Proxy Futuristic AI Website Interface" width="95%" style="border-radius: 12px; box-shadow: 0 10px 40px rgba(139, 92, 246, 0.25);" />
</p>

```
  [ Applications / Chrome Extension ]
                  │
                  ▼
   ┌─────────────────────────────┐
   │    POLYGLOT PROXY GATEWAY   │ ◄─── FastAPI Boundary
   └──────────────┬──────────────┘
                  ▼
   ┌─────────────────────────────┐
   │    LOCAL DECISION ENGINE    │ ◄─── Context Evaluation
   └──────────────┬──────────────┘
                  ▼
   ┌─────────────────────────────┐
   │    SAFETY GUARDRAILS        │ ◄─── Zero-Leakage Prompt Policies
   └──────────────┬──────────────┘
                  ▼
   ┌─────────────────────────────┐
   │    INTELLIGENT ROUTING      │ ◄─── Latency / Cost / Model Matching
   └──────────────┬──────────────┘
                  ▼
   [ OpenAI • Anthropic • Gemini • Local LLMs ]
```

---

## ✨ Core Features

<p align="center">
  <img src="./assets/promt%20flow.png" alt="Intelligent Prompt Flow and Capabilities" width="95%" style="border-radius: 12px; box-shadow: 0 10px 40px rgba(124, 58, 237, 0.2);" />
</p>

| Capability | Description | Advantage |
| :--- | :--- | :--- |
| **Intelligent Routing** | Evaluates each prompt and routes it toward an optimal configured AI model | Reduces cost and latency while improving response fidelity |
| **Zero-Trust Safety** | Applies prompt policy checks at the gateway before requests reach external providers | Prevents confidential prompt data leakage |
| **FastAPI Proxy Gateway** | Clean, asynchronous edge API boundary built with high-throughput FastAPI | Full OpenAPI / Swagger interactive documentation |
| **Chrome Extension** | Direct browser prompt interception with local safety evaluation before dispatch | Protects user prompts across any web application |
| **Python SDK** | Ergonomic client library for Python services and agent workflows | Instant integration into existing AI pipelines |
| **Developer Dashboard** | Unified control panel for observability, request counts, and model switching | Real-time ecosystem visibility |

---

## 🏛️ System Architecture

The signal moves through six distinct pipeline stages to guarantee speed, safety, and model suitability:

<p align="center">
  <img src="./assets/workflow.png" alt="Polyglot Architecture Workflow" width="95%" style="border-radius: 12px; box-shadow: 0 10px 40px rgba(99, 102, 241, 0.2);" />
</p>

```mermaid
flowchart LR
    A["01 · User Prompt"] --> B["02 · Proxy Gateway"]
    B --> C["03 · Decision Engine"]
    C --> D["04 · Safety Guardrails"]
    D --> E["05 · Model Routing"]
    E --> F["06 · AI Response"]

    classDef stage fill:#120d24,stroke:#8b5cf6,stroke-width:2px,color:#f5f3ff;
    class A,B,C,D,E,F stage;
```

<details>
<summary><b>🔍 Expand Detailed Breakdown of Each Stage</b></summary>

<br />

1. **Stage 01: User Prompt**
   - The user writes a prompt inside a web application, browser text field, or API request.
2. **Stage 02: Proxy Gateway**
   - FastAPI provides a consistent boundary, normalizing headers and validating authentication.
3. **Stage 03: Decision Engine**
   - Local heuristics and context evaluators inspect token count, intent, and complexity.
4. **Stage 04: Safety Guardrails**
   - Prompt policies (PII filtering, prompt-injection defense) run before any external API is touched.
5. **Stage 05: Model Routing**
   - Selects the target provider (e.g. GPT-4o, Claude 3.5 Sonnet, Gemini Flash, or local model) based on efficiency parameters.
6. **Stage 06: AI Response**
   - Streaming or batched responses flow securely back to the origin client.

</details>

---

## 🧩 Chrome Extension Package

Bring Polyglot Proxy directly into your browser workflow. The extension intercepts prompt fields, validates compliance against your edge agent, and protects against data leaks.

<p align="center">
  <img src="./assets/package%20extension.png" alt="Chrome Extension Package and Python SDK" width="95%" style="border-radius: 12px; box-shadow: 0 10px 40px rgba(16, 185, 129, 0.2);" />
</p>

### 📦 Package Details

- **Archive File:** [`polyglot-proxy-gate-v1.0.zip`](./public/polyglot-proxy-gate-v1.0.zip) *(Also available in `chorme extension/`)*
- **Specification:** Manifest V3 (Google Chrome, Microsoft Edge, Brave, Opera)
- **Permissions:** `activeTab`, `scripting`, `storage`
- **Host Boundaries:** `http://127.0.0.1:8000/*`, `http://localhost:8000/*`, `https://polyglot-edge-agent.onrender.com/*`

<details open>
<summary><b>🚀 Interactive 3-Step Installation Guide (Click to collapse/expand)</b></summary>

<br />

1. **Download the Package:**
   - Download the verified release archive: **[`polyglot-proxy-gate-v1.0.zip`](./public/polyglot-proxy-gate-v1.0.zip)**.
   - Extract the `.zip` archive into a folder on your computer.

2. **Open Extensions Manager:**
   - In Google Chrome or Brave, navigate to:
     ```text
     chrome://extensions
     ```
   - In Microsoft Edge, navigate to:
     ```text
     edge://extensions
     ```
   - Toggle **Developer mode** in the top right corner to **ON**.

3. **Load Unpacked Extension:**
   - Click the **Load unpacked** button in the top left.
   - Select the folder containing `manifest.json`.
   - **Done!** Pin **Polyglot Proxy Gate** to your browser toolbar to monitor requests and connection status in real-time.

</details>

---

## 💻 Developer Quickstart

Access live schemas, SDK patterns, and deployment commands from the integrated console:

<p align="center">
  <img src="./assets/dev%20quickstart.png" alt="Developer Quickstart Terminal" width="95%" style="border-radius: 12px; box-shadow: 0 10px 40px rgba(139, 92, 246, 0.25);" />
</p>

### Interactive Code Snippets

<details open>
<summary><b>📡 1. cURL / REST API</b></summary>

```bash
# Explore the live interactive Swagger API docs
curl -X 'GET' \
  'https://polyglot-edge-agent.onrender.com/openapi.json' \
  -H 'accept: application/json'

# Send prompt to proxy gateway
curl -X 'POST' \
  'https://polyglot-edge-agent.onrender.com/v1/proxy/chat' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "Evaluate system health and route to primary model",
    "guardrails": true
  }'
```

</details>

<details>
<summary><b>🐍 2. Python Client</b></summary>

```python
# Reusable client pattern for Python services
import requests

GATEWAY_URL = "https://polyglot-edge-agent.onrender.com"

def route_prompt(prompt: str) -> dict:
    response = requests.post(
        f"{GATEWAY_URL}/v1/proxy/chat",
        json={"prompt": prompt, "stream": False},
        timeout=30
    )
    response.raise_for_status()
    return response.json()

result = route_prompt("Hello Polyglot!")
print(result)
```

</details>

<details>
<summary><b>🐳 3. Docker / Local Source Setup</b></summary>

```bash
# Clone the repository
git clone https://github.com/vinaysingh-05/polyglot-edge-agent.git
cd polyglot-edge-agent

# Install website frontend dependencies & start dev server
pnpm install
pnpm dev

# Inspect live Swagger documentation
open http://localhost:8443
```

</details>

---

## 🚀 Live Deployments

| Resource | Environment | URL |
| :--- | :--- | :--- |
| **Interactive API Docs** | Render Production | [polyglot-edge-agent.onrender.com/docs](https://polyglot-edge-agent.onrender.com/docs) |
| **Developer Dashboard** | Vercel Global Edge | [polyglot-edge-agent.vercel.app](https://polyglot-edge-agent.vercel.app/) |
| **Source Code Repository** | GitHub | [github.com/vinaysingh-05/polyglot-edge-agent](https://github.com/vinaysingh-05/polyglot-edge-agent) |
| **Chrome Extension Package** | Local / Web Release | [polyglot-proxy-gate-v1.0.zip](./public/polyglot-proxy-gate-v1.0.zip) |

---

## 🛠️ Tech Stack

- **Frontend Website:** React 19, Vite 8, TypeScript 5.7, Tailwind CSS v4
- **Styling Architecture:** Glassmorphism, tailored HSL color tokens, ambient radial gradients
- **Gateway Backend:** FastAPI, Python 3.11+, Asynchronous Edge Proxy
- **Browser Extension:** Manifest V3, Web Storage API, DOM Mutation Observers

---

## 📬 Support & Contact

Built with passion by **Vinay Kumar**.

- **LinkedIn:** [vinay-kumar0805](https://www.linkedin.com/in/vinay-kumar0805/)
- **GitHub:** [vinaysingh-05](https://github.com/vinaysingh-05)
- **Direct Inquiries:** [vk8964210@gmail.com](mailto:vk8964210@gmail.com)

<br />

<div align="center">
  <sub>© 2026 Polyglot Proxy. Designed & Engineered for Intelligent AI Routing.</sub>
</div>
