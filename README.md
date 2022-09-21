# Pomodoro Service

## Website

    - app
        - pomodoro-timer
            - pomodoro-attributes
        - pomodoro-list
            - pomodoro-attributes
        - pomodoro-statistics
            - pomodoros-per-day
            - pomodoros-per-field

## Helm Chart

### Life Hooks

#### Hook Weighting
* Database create jobs are weighted at 4.
* Database migrate jobs are weighted at 5.

## Database

### pomodoro

Field|Type|Constraints
---|---|---
id|SERIAL|PRIMARY KEY
title|TEXT|NOT NULL
created|TIMESTAMPTZ|DEFAULT CURRENT_TIMESTAMP
objective_id|INT|
project_id|INT|
tasktype_id|INT|

### objective

Field|Type|Constraints
---|---|---
id|SERIAL|PRIMARY KEY,
title|TEXT|NOT NULL

### project

Field|Type|Constraints
---|---|---
id|SERIAL|PRIMARY KEY,
title|TEXT|NOT NULL

### tasktype

Field|Type|Constraints
---|---|---
id|SERIAL|PRIMARY KEY,
title|TEXT|NOT NULL

