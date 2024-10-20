#!/usr/bin/env bash
set -e

# Extract host, port, and database from the DATABASE_URL
if [ -n "$DATABASE_URL" ]; then
  # Parse the DATABASE_URL
  DB_HOST=$(echo $DATABASE_URL | sed -e 's,.*//[^@]*@\(.*\):\([0-9]*\)/.*,\1,')
  DB_PORT=$(echo $DATABASE_URL | sed -e 's,.*//[^@]*@\(.*\):\([0-9]*\)/.*,\2,')
else
  echo "DATABASE_URL not set."
  exit 1
fi

# Wait for the database to be ready
/opt/wait-for-it.sh $DB_HOST:$DB_PORT

# Run migrations and seeds
npm run migration:run
npm run seed:run:relational
npm run start:prod
