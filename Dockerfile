# Use the official PHP image with Apache
FROM php:8.0-apache

# Update packages and install dependencies for PHP extensions
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libxml2-dev 

# Install the pdo_mysql extension
RUN docker-php-ext-install pdo_mysql

# Copy your PHP application code to the container
COPY ./client/ /var/www/html/
