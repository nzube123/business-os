# MVP Checklist

## Objective

This checklist defines the minimum viable scope for the first implementation of Business OS. The goal is to deliver a reliable, secure, and usable business operating foundation without overextending scope.

## MVP Scope

### Core Tenant Setup

- [ ] tenant onboarding exists
- [ ] tenant settings can be configured
- [ ] tenant-specific branding is supported

### Identity and Access

- [ ] authentication works for users
- [ ] roles and permissions are defined
- [ ] permission checks are enforced server-side

### Business Modules

- [ ] customers can be created and managed
- [ ] suppliers can be created and managed
- [ ] products and categories are supported
- [ ] inventory movements are tracked
- [ ] sales workflows are functional
- [ ] invoices are generated and visible
- [ ] payments can be recorded
- [ ] expenses can be recorded
- [ ] reporting surfaces provide business visibility

### AI Assistant

- [ ] AI assistant can answer natural language questions about business data
- [ ] AI actions are executed through tool schemas and validation
- [ ] AI never bypasses the business service layer

### Operations and Quality

- [ ] audit events are recorded for key actions
- [ ] error handling is consistent
- [ ] basic tests exist for critical workflows
- [ ] documentation is updated with implementation changes

## Exit Criteria

The MVP can be considered ready when the core workflows above function end to end for a single tenant and the system demonstrates strong tenant isolation and permission enforcement.
