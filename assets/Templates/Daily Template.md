# {{date: dddd Do MMM (YYYY)}}

## Rituals

--- 

## Upcoming Calls
```dataview
TASK 
FROM "Immanent/DailyNotes"
SORT file.name ASC
WHERE !completed AND contains(tags, "Call")
```

## Upcoming Events
```dataview
TASK 
FROM "Immanent/DailyNotes"
SORT file.name ASC
WHERE !completed AND contains(tags, "Event") AND !contains(tags, "Call")
```

## Task Backlog
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND !contains(text, "#Call") AND !contains(text, "#Event")
```