# API Specification

## Overview

This document defines the conventions and architectural expectations for the API layer of Business OS. The API is intended to be typed, tenant-aware, permission-enforcing, and consistent across modules.

## API Design Principles

- tenant-aware endpoints
- explicit validation and error responses
- type-safe request and response contracts
- no direct database access from UI or AI layers
- consistent naming conventions
- audit-friendly operations

## API Conventions

### Resource Naming

- use plural resource names for collections
- use lowercase kebab-case for paths
- prefer noun-based resources over action-heavy names

### HTTP Methods

| Method | Purpose |
| --- | --- |
| GET | read data |
| POST | create resources or initiate workflows |
| PATCH | partial updates |
| PUT | full replacement where appropriate |
| DELETE | remove resources or mark them inactive |

### Response Conventions

All APIs should return:

- success status
- data payload where applicable
- metadata for pagination and filtering
- correlation ID for debugging
- clear error structure

### Error Shape

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "You do not have permission to perform this action.",
    "details": []
  }
}
```

## Route Structure

### Tenant-scoped Resources

- /api/tenants/:tenantId/customers
- /api/tenants/:tenantId/suppliers
- /api/tenants/:tenantId/products
- /api/tenants/:tenantId/inventory
- /api/tenants/:tenantId/sales
- /api/tenants/:tenantId/invoices
- /api/tenants/:tenantId/payments
- /api/tenants/:tenantId/expenses
- /api/tenants/:tenantId/reports
- /api/tenants/:tenantId/ai/assistant

## Core Endpoint Patterns

### Customers

| Operation | Endpoint |
| --- | --- |
| list customers | GET /api/tenants/:tenantId/customers |
| create customer | POST /api/tenants/:tenantId/customers |
| get customer | GET /api/tenants/:tenantId/customers/:id |
| update customer | PATCH /api/tenants/:tenantId/customers/:id |
| delete customer | DELETE /api/tenants/:tenantId/customers/:id |

### Products

| Operation | Endpoint |
| --- | --- |
| list products | GET /api/tenants/:tenantId/products |
| create product | POST /api/tenants/:tenantId/products |
| get product | GET /api/tenants/:tenantId/products/:id |
| adjust inventory | POST /api/tenants/:tenantId/inventory/adjustments |

### Invoices

| Operation | Endpoint |
| --- | --- |
| list invoices | GET /api/tenants/:tenantId/invoices |
| create invoice | POST /api/tenants/:tenantId/invoices |
| get invoice | GET /api/tenants/:tenantId/invoices/:id |
| record payment | POST /api/tenants/:tenantId/payments |

### AI Assistant

| Operation | Endpoint |
| --- | --- |
| send assistant request | POST /api/tenants/:tenantId/ai/assistant |
| get assistant history | GET /api/tenants/:tenantId/ai/assistant/history |

## Request and Response Standards

### Request Validation

- validate body, params, and query inputs
- reject malformed or conflicting payloads
- enforce tenant context before processing
- apply permission checks before executing the action

### Response Envelope

```json
{
  "data": {},
  "meta": {
    "tenantId": "tenant_123",
    "requestId": "req_456"
  }
}
```

## Pagination and Filtering

All list endpoints should support:

- page and pageSize
- sort direction
- search query
- filter object

## Security Expectations

- every endpoint must enforce authentication
- every endpoint must enforce authorization
- tenant data must always be scoped
- audit events should be emitted for mutating operations

## API Versioning

The platform should begin with versioned route patterns or a version header strategy. Versioning should remain explicit as the product grows.
