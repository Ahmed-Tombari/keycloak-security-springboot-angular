# Microservices Architecture Project with Angular, Spring Boot, and Keycloak

This project demonstrates the integration of microservices architecture with modern technologies such as Angular, Spring Boot, and Keycloak to create a secure, modular, and scalable application. It can be adapted for various real-world use cases, including e-commerce platforms.

---

## 🚀 Overview

The application consists of independent services, a secure authentication system, and a user-friendly frontend. It is designed to showcase a complete, enterprise-grade architecture.

### Key Technologies:
- **Frontend**: Angular
- **Backend**: Spring Boot Microservices
- **Authentication**: Keycloak (OAuth 2.0 and OpenID Connect)
- **Service Discovery**: Eureka Discovery Service
- **API Gateway**: Spring Cloud Gateway
- **Configuration Management**: Spring Cloud Config Service

---

## 🛠️ Architecture

---
![spring keycloak](https://github.com/user-attachments/assets/b66976fa-13c3-4b4b-84f4-8a8b77fbff0e)

---

### Components:

1. **Frontend**:
   - Developed with Angular to provide a fast and responsive user experience.

2. **API Gateway**:
   - Built with Spring Cloud Gateway for routing, load balancing, and secure backend communication.

3. **Authentication & Authorization**:
   - Centralized user management via Keycloak.
   - Secure communication using JWT tokens.

4. **Microservices**:
   - **Product Service**: Manages product-related operations.
   - **Order Service**: Handles order processing and tracking.

5. **Service Discovery**:
   - Eureka Discovery Service enables seamless communication between microservices.

6. **Centralized Configuration**:
   - Spring Cloud Config Service ensures consistent configuration across all services.

---

## 🔐 Features

- **Authentication and Authorization**:
  - Centralized user and role management with Keycloak.
  - OAuth 2.0 and OpenID Connect for secure login.
  - JWT-based service-to-service communication.

- **Security**:
  - All interactions between services are secured with JWT.

- **Scalability**:
  - Microservices can be independently deployed and scaled.

- **Flexibility**:
  - Modular architecture supports adding or modifying services without impacting the entire system.

---

## 🛒 Use Case

An example e-commerce platform:

- **Product Service**: Manage product catalog and inventory.
- **Order Service**: Process customer orders and manage tracking.

---

## 🚀 Quick Start

### Prerequisites:
- Install [Node.js](https://nodejs.org/)
- Install [Angular CLI](https://angular.io/cli)
- Install [Java 21 (Corretto)](https://aws.amazon.com/corretto/)

### Steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Ahmed-Tombari/keycloak-security-springboot-angular.git](https://github.com/Ahmed-Tombari/keycloak-security-springboot-angular.git)
   ```

2. Configure Keycloak:
   - Create a realm.
   - Add clients for frontend and backend.
   - Define roles and assign them to users.

3. Run Backend Services:
   - cd keycloak-security-spring-micro-service
   - run product-service
   - run order-service

5. Run Frontend:
   ```bash
   cd keycloak-security-angular
   npm install
   ng serve
   ```

6. Access the application:
   - Frontend: `http://localhost:4200`
   - Keycloak Admin Console: `http://localhost:8180`

---

## 🌟 Features and Benefits

1. **Secure Communication**: All services interact through JWT-secured APIs.
2. **Independent Deployment**: Services can be scaled or updated independently.
3. **Ease of Maintenance**: Centralized configuration simplifies managing multiple services.
4. **User-Friendly**: Angular provides an intuitive and responsive user experience.

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.
