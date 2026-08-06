# Permission Matrix

## Overview

Business OS uses permission-based authorization rather than role-name checks. Roles are organizational groupings, but enforcement is always determined by the permissions available to the actor and the tenant context.

## Core Roles

| Role | Summary |
| --- | --- |
| Owner | full control over the tenant workspace |
| Admin | broad administrative access with some restrictions |
| Manager | operational oversight and management access |
| Sales | sales and customer-facing operations |
| Inventory | stock and product operations |
| Accountant | invoices, payments, expenses, and reporting |
| Viewer | read-only access to shared business data |

## Permission Model

The authorization layer should evaluate permissions at request time using the active tenant and the user’s effective permission set.

### Common Permissions

| Permission | Description |
| --- | --- |
| customer.read | view customer records |
| customer.create | create customer records |
| customer.update | update customer details |
| customer.delete | remove customer records |
| supplier.read | view supplier records |
| supplier.create | create supplier records |
| inventory.read | view inventory state |
| inventory.adjust | adjust stock levels |
| product.read | view products |
| product.create | create products |
| invoice.create | create invoices |
| invoice.read | view invoices |
| payment.create | record payments |
| expense.create | create expense entries |
| report.read | view reports and dashboards |
| settings.update | update tenant settings |

## Role-to-Permission Mapping

| Role | Typical Permissions |
| --- | --- |
| Owner | all permissions |
| Admin | most operational and administrative permissions |
| Manager | operational read/write for core workflows |
| Sales | customer.read, customer.create, product.read, invoice.create, report.read |
| Inventory | inventory.read, inventory.adjust, product.read, product.create |
| Accountant | invoice.read, invoice.create, payment.create, expense.create, report.read |
| Viewer | report.read, customer.read, invoice.read, product.read |

## Enforcement Rules

- never check role names directly in business logic
- resolve the effective permission set for the user and tenant
- make authorization decisions at the service boundary
- deny by default if the permission is missing
- log authorization failures for security review

## Permission Evaluation Pattern

```text
request -> tenant resolution -> user context -> effective permissions -> allow/deny
```

## Access Matrix by Domain

| Domain | Read | Write | Admin |
| --- | --- | --- | --- |
| Customers | customer.read | customer.create, customer.update | customer.delete |
| Suppliers | supplier.read | supplier.create | supplier.update/delete |
| Inventory | inventory.read | inventory.adjust | inventory.admin |
| Invoices | invoice.read | invoice.create | invoice.manage |
| Payments | invoice.read | payment.create | payment.manage |
| Expenses | expense.read | expense.create | expense.manage |
| Reports | report.read | report.read | report.admin |
| Settings | settings.read | settings.update | settings.admin |

## Security Notes

Permission checks should happen both at the API boundary and within the service layer. UI-level hiding is not enough; enforcement must be server-side.
