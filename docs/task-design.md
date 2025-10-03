# Service Design Specification - Object Design for task

**wuttodo-taskmanagement-service** documentation

## Document Overview

This document outlines the object design for the `task` model in our application. It includes details about the model's attributes, relationships, and any specific validation or business logic that applies.

## task Data Object

### Object Overview

**Description:** A single todo task with a required title. Represents a minimal to-do item for a personal list.

This object represents a core data structure within the service and acts as the blueprint for database interaction, API generation, and business logic enforcement.
It is defined using the `ObjectSettings` pattern, which governs its behavior, access control, caching strategy, and integration points with other systems such as Stripe and Redis.

### Core Configuration

- **Soft Delete:** Enabled — Determines whether records are marked inactive (`isActive = false`) instead of being physically deleted.
- **Public Access:** accessPrivate — If enabled, anonymous users may access this object’s data depending on API-level rules.

### Properties Schema

| Property | Type   | Required | Description                                                                    |
| -------- | ------ | -------- | ------------------------------------------------------------------------------ |
| `title`  | String | Yes      | The main description or name of the todo item. Required and must be non-empty. |

- Required properties are mandatory for creating objects and must be provided in the request body if no default value is set.

### Auto Update Properties

`title`

An update crud API created with the option `Auto Params` enabled will automatically update these properties with the provided values in the request body.
If you want to update any property in your own business logic not by user input, you can set the `Allow Auto Update` option to false.
These properties will be added to the update API's body parameters and can be updated by the user if any value is provided in the request body.

### Elastic Search Indexing

`title`

Properties that are indexed in Elastic Search will be searchable via the Elastic Search API.
While all properties are stored in the elastic search index of the data object, only those marked for Elastic Search indexing will be available for search queries.

### Filter Properties

`title`

Filter properties are used to define parameters that can be used in query filters, allowing for dynamic data retrieval based on user input or predefined criteria.
These properties are automatically mapped as API parameters in the listing API's that have "Auto Params" enabled.

- **title**: String has a filter named `title`
