# Use the official PHP 8.1 image with Apache
FROM php:8.1-apache

# Set environment variable to allow Composer plugins to run
ENV COMPOSER_ALLOW_SUPERUSER=1

# Install system dependencies & PHP extensions
RUN apt-get update && apt-get install -y \
        git \
        zip \
        unzip \
        curl \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libxml2-dev && \
    docker-php-ext-install pdo_mysql && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- \
        --install-dir=/usr/local/bin --filename=composer

# Enable Apache mod_rewrite and update Apache configuration
RUN a2enmod rewrite && \
    sed -i 's!/var/www/html!/var/www/html!g' /etc/apache2/sites-available/000-default.conf && \
    sed -i 's!AllowOverride None!AllowOverride All!g' /etc/apache2/apache2.conf

# Copy application files, set working directory, and install Composer dependencies
COPY . /var/www/project
WORKDIR /var/www/project
RUN composer install

# Symlink, copy files to web root, and set permissions
RUN ln -s /var/www/project/server /var/www/html/server && \
    cp index.php /var/www/html/index.php && \
    cp -r client/* /var/www/html/ && \
    chown -R www-data:www-data /var/www/project && \
    chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
