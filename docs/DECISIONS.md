# Architectural Decisions

## Overview

This document records the initial architectural decisions for Business OS. These decisions are meant to guide implementation and reduce drift over time.

## Decision Log

| ID | Decision | Rationale |
| --- | --- | --- |
| ADR-001 | Use a Turborepo monorepo | Enables independent application and package development while sharing tooling |
| ADR-002 | Use Next.js for web and API layers | Provides a unified application framework for UI and server routes |
| ADR-003 | Use PostgreSQL as the system of record | Supports relational integrity, transactional behavior, and predictable reporting |
| ADR-004 | Use Drizzle ORM for typed data access | Keeps the data layer explicit and type-safe |
| ADR-005 | Use permission-based authorization | Supports flexible RBAC without tightly coupling business logic to role names |
| ADR-006 | Use AI tool/function calling rather than direct database access | Preserves control, security, and auditability |
| ADR-007 | Use tenant-scoped data access everywhere | Ensures data isolation and compliance readiness |
| ADR-008 | Use audit events for significant actions | Supports operations visibility, debugging, and trust |
| ADR-009 | Use BullMQ for asynchronous workflows | Keeps background processes scalable and decoupled |
| ADR-010 | Use Docker and cloud infrastructure for deployment | Supports consistent packaging and future scalability |

## Decision Notes

These decisions should be revisited if product requirements, scaling constraints, or infrastructure considerations change materially.
                                    