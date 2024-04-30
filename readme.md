# Todo List API

## Overview
This Todo List API is built using AWS Lambda and DynamoDB. The application allows users to create, read, update, and delete todo items. This serverless approach ensures scalability and cost-effectiveness, leveraging AWS managed services.

## Features
- **Create Todo**: Add new todo items with a title and a due date.
- **Read Todos**: Retrieve a list of all todos or a specific todo by ID.
- **Update Todo**: Modify existing todos by updating their title, completion status, or due date.
- **Delete Todo**: Remove todos from the list.

## Architecture
The application uses AWS Lambda functions triggered via API Gateway. Data is stored in a DynamoDB table. Each function is responsible for handling a specific part of the CRUD operations for todo items.

## Prerequisites
- AWS CLI configured with Administrator access
- Node.js (v18.x or later)
- SAM Framework
