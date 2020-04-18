# THIS 'FROM bct-flyway-base' IS FOR THIS EXAMPLE ONLY! USE THIS INSTEAD:
#FROM tbctdevops-docker-local-poc.jfrog.io/bct-flyway-base:latest
FROM bct-flyway-base

# This adds the version controlled migrations scripts flyway uses the update the database to the latest version.
COPY ./db/migration-scripts /flyway/sql/PostgreSQL

# Permissions open for build pipeline
USER root
RUN chmod 777 -R /scripts 
USER flyway