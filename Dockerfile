# Use the official PHP image with Apache
FROM php:8.0-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    curl

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP extensions
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libxml2-dev 
RUN docker-php-ext-install pdo_mysql

# Enable Apache modules
RUN a2enmod rewrite

# Set the working directory to the Apache document root
WORKDIR /var/www/html

# Copy your application code to the container
COPY . .

# Optionally set the correct permissions on the application directory
# RUN chown -R www-data:www-data /var/www/html

# Expose port 80 of the container
EXPOSE 80
