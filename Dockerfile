FROM php:8.1-apache

# Enable mod_rewrite for Apache
RUN a2enmod rewrite

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    && rm -rf /var/lib/apt/lists/*


# Install system packages including mysql client
RUN apt-get update && apt-get install -y default-mysql-client && rm -rf /var/lib/apt/lists/*

# Install the PHP zip extension
RUN docker-php-ext-install zip pdo pdo_mysql

# Add apache conf for AllowOverride All
COPY my-apache.conf /etc/apache2/conf-available/my-apache.conf
RUN a2enconf my-apache

ENV COMPOSER_ALLOW_SUPERUSER=1

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

# Copy the Composer JSON files first to leverage Docker cache
COPY ./composer.* /var/www/html/

# Install project dependencies with Composer
RUN composer install --no-dev --optimize-autoloader

# Copy the rest of the application
COPY . /var/www/html

# Optimize Composer autoloader
RUN composer dump-autoload --optimize
