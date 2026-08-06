# Contributing

## Purpose

This document defines how contributors should work on Business OS so that the project remains secure, consistent, and maintainable.

## Contribution Principles

- respect the architecture and module boundaries
- preserve multi-tenant safety
- keep AI interactions controlled and validated
- document changes that affect workflows or architecture
- prefer incremental improvements over speculative rewrites

## Workflow

1. create a branch from the main development branch
2. implement a focused change or documentation update
3. review the change against the architecture and standards
4. add or update tests where applicable
5. open a pull request with a clear summary and rationale

## Before You Start

- read the project vision and architecture documents
- understand the relevant module boundaries
- identify whether the work affects tenant isolation, permissions, or AI workflows

## Pull Request Expectations

A pull request should include:

- a short summary of the change
- the reason for the change
- impact on users, services, or data model
- testing notes
- any migration or deployment considerations

## Review Checklist

Reviewers should confirm:

- the change follows domain boundaries
- permission checks are correctly applied
- tenant-scoped data access is preserved
- AI behavior remains safe and tool-governed
- documentation has been updated where appropriate

## Communication Guidelines

- keep discussions focused on architecture, risk, and implementation quality
- raise security concerns early
- document assumptions and unresolved questions
