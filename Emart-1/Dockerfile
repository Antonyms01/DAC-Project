# Stage 1: Build the application using Maven
FROM maven:3.8.7-openjdk-17-slim AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .

# Download the dependencies into the Maven cache (optional but recommended)
RUN mvn dependency:go-offline -B

# Copy the source code and build the application
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot application
FROM openjdk:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar /app/emart1.jar

# Expose the port the Spring Boot app will run on
EXPOSE 8080

# Define the command to run the app
ENTRYPOINT ["java", "-jar", "emart1.jar"]