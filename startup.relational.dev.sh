#!/usr/bin/env bash
set -e

# Extract host and port from DATABASE_URL (provided by Heroku)
if [ -n "$DATABASE_URL" ]; then
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

# Start the production app
npm run start:prod
