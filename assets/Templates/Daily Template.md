# {{date: dddd Do MMM (YYYY)}}

## Rituals

--- 

## Upcoming
```dataview
TASK FROM "Immanent/DailyNotes"
SORT file.name ASC
WHERE !completed AND contains(tags, "Event") AND contains(tags, "Call")
```

## Task Backlog
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND !contains(tags, "Event") AND !contains(tags, "Call")
```