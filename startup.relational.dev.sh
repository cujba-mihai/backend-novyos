#!/usr/bin/env bash
set -e

if [ -n "$DATABASE_URL" ]; then
  DB_HOST=$(echo $DATABASE_URL | sed -e 's,.*//\(.*\):\(.*\)@.*,\1,')
  DB_PORT=5432
else
  echo "DATABASE_URL not set."
  exit 1
fi

/opt/wait-for-it.sh $DB_HOST:$DB_PORT

# Run migrations and seeds
npm run migration:run
npm run seed:run:relational
npm run start:prod
