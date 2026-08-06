# Coding Standards

## Purpose

These standards define the engineering expectations for Business OS. They are intended to keep the codebase readable, secure, testable, and maintainable as the platform grows.

## Core Principles

- write clear, intention-revealing code
- prefer small, focused modules over large abstractions
- keep business rules inside domain services
- use strong typing throughout
- enforce server-side authorization and validation
- make side effects explicit and observable
- document important decisions and non-obvious behavior

## Naming Conventions

### Files

- use kebab-case for file names
- use domain-oriented naming
- place module-specific files near the feature they represent

Examples:

- customer.service.ts
- invoice.repository.ts
- ai-tool-registry.ts

### Types and Functions

- use PascalCase for types and classes
- use camelCase for functions and variables
- use UPPER_SNAKE_CASE for constants where appropriate

### API and Database Names

- use snake_case for database columns and tables
- use kebab-case for URLs and route segments
- use camelCase for JSON properties in API payloads

## TypeScript Standards

- TypeScript is required for application logic
- avoid implicit any
- use explicit return types for public functions
- model domain objects with strong interfaces and discriminated unions where needed
- prefer readonly for immutable structures

## Architecture Standards

### Layering

- UI should not directly access the database
- AI should not directly mutate state
- services should hold business rules
- repositories should encapsulate data access
- controllers or route handlers should remain thin

### Dependency Direction

Dependencies should flow inward:

```text
presentation -> api -> services -> repositories -> database
```

## Error Handling

- use structured error types for domain failures
- do not expose internal implementation details in client responses
- surface actionable error messages
- log unexpected failures with enough context for support and debugging

## Testing Expectations

- write tests for business-critical workflows
- prefer unit tests for domain logic and integration tests for service boundaries
- test tenant isolation and permission enforcement explicitly
- ensure AI tool execution is covered with validation and failure cases

## Documentation Expectations

- document non-obvious workflows and business rules
- keep READMEs and docs current when architecture changes
- record significant project decisions in [docs/DECISIONS.md](docs/DECISIONS.md)

## Review Expectations

Code reviews should look for:

- correctness
- security implications
- tenant boundaries
- permission enforcement
- test coverage
- readability and maintainability
