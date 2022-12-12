

## Assimilation
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Assimilation")
```

## Connection
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Connection") OR contains(text, "#Practice")
```

## Service
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Service")
```

## Manifestation
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Manifestation")
```

## Receptivity
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Receptivity")
```

## Submission
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Submission")
```

## Grace
```dataview
TASK FROM "Immanent/DailyNotes" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk") AND contains(text, "#Grace")
```



## Unordered tasks/projects list
```dataview
TASK FROM "Immanent" 
SORT file.name ASC
WHERE !completed AND contains(text, "#LunarPunk")
```